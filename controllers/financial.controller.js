import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getFinancials = async (req, res) => {
  try {
    const { startDate, endDate, groupBy = 'monthly' } = req.query; // Default to monthly
    const userId = req.user.id; // From JWT middleware
    const isAdmin = req.user.role === 'admin';

    // Validate query parameters
    if (!startDate || !endDate) {
      return res.status(400).json({ error: 'startDate and endDate are required' });
    }

    const start = new Date(startDate);
    const end = new Date(endDate);
    // @ts-ignore
    if (isNaN(start) || isNaN(end)) {
      return res.status(400).json({ error: 'Invalid date format' });
    }

    // Base where clause for user scoping
    const whereUser = isAdmin ? {} : { userId };

    // Calculate total revenue from sale_items
    const saleItems = await prisma.saleItem.findMany({
      where: {
        ...whereUser,
        created_at: { gte: start, lte: end },
      },
      select: { total_price: true, quantity: true, inventory_id: true, created_at: true },
    });

    const totalRevenue = saleItems.reduce((sum, item) => sum + (item.total_price || 0), 0);
    const totalItemsSold = saleItems.reduce((sum, item) => sum + (item.quantity || 0), 0);

    // Calculate total costs from purchase_items
    const purchaseItems = await prisma.purchaseItem.findMany({
      where: {
        ...whereUser,
        created_at: { gte: start, lte: end },
      },
      select: { total_price: true, created_at: true },
    });

    const totalCosts = purchaseItems.reduce((sum, item) => sum + (item.total_price || 0), 0);

    // Calculate gross profit
    const grossProfit = totalRevenue - totalCosts;
    const profitMargin = totalRevenue > 0 ? (grossProfit / totalRevenue) * 100 : 0;

    // Calculate inventory value
    const inventory = await prisma.inventory.findMany({
      where: whereUser,
      select: { quantity_in_stock: true, cost_price: true },
    });

    const inventoryValue = inventory.reduce(
      (sum, item) => sum + (item.quantity_in_stock || 0) * (item.cost_price || 0),
      0
    );

    // Transaction volume
    const transactions = await prisma.inventoryTransaction.findMany({
      where: {
        ...whereUser,
        created_at: { gte: start, lte: end },
      },
      select: { transaction_type: true, created_at: true },
    });

    const transactionVolume = {
      purchases: transactions.filter((t) => t.transaction_type === 'PURCHASE').length,
      sales: transactions.filter((t) => t.transaction_type === 'SALE').length,
    };

    // Top-selling items
    const topSellingItems = await prisma.saleItem.groupBy({
      by: ['inventory_id'],
      where: {
        ...whereUser,
        created_at: { gte: start, lte: end },
      },
      _sum: { quantity: true },
      orderBy: { _sum: { quantity: 'desc' } },
      take: 5,
    });

    const topItems = await Promise.all(
      topSellingItems.map(async (item) => {
        const inventory = await prisma.inventory.findUnique({
          where: { id: item.inventory_id },
          select: { name: true },
        });
        return {
          inventory_id: item.inventory_id,
          name: inventory?.name || 'Unknown',
          quantity_sold: item._sum.quantity,
        };
      })
    );

    // Trends (always computed, default to monthly if groupBy not valid)
    const validGroupBy = ['daily', 'monthly', 'yearly'].includes(groupBy) ? groupBy : 'monthly';
    const dateTrunc = validGroupBy === 'daily' ? 'day' : validGroupBy === 'monthly' ? 'month' : 'year';

    // Revenue trends
    const revenueTrends = await prisma.saleItem.groupBy({
      by: [{ created_at: dateTrunc }],
      where: {
        ...whereUser,
        created_at: { gte: start, lte: end },
      },
      _sum: { total_price: true },
      orderBy: { created_at: 'asc' },
    });

    // Cost trends
    const costTrends = await prisma.purchaseItem.groupBy({
      by: [{ created_at: dateTrunc }],
      where: {
        ...whereUser,
        created_at: { gte: start, lte: end },
      },
      _sum: { total_price: true },
      orderBy: { created_at: 'asc' },
    });

    // Transaction trends
    const transactionTrends = await prisma.inventoryTransaction.groupBy({
      by: [{ created_at: dateTrunc }],
      where: {
        ...whereUser,
        created_at: { gte: start, lte: end },
      },
      _count: { transaction_type: true },
      orderBy: { created_at: 'asc' },
    });

    // Inventory value trends (approximated by current inventory value, could be enhanced with historical data)
    const inventoryTrends = await prisma.inventoryTransaction.groupBy({
      by: [{ created_at: dateTrunc }],
      where: {
        ...whereUser,
        created_at: { gte: start, lte: end },
      },
      _sum: { quantity_change: true },
      orderBy: { created_at: 'asc' },
    });

    // Combine trends for graph data
    const trends = revenueTrends.map((revenue, i) => ({
      period: revenue.created_at.toISOString().split('T')[0],
      revenue: revenue._sum.total_price || 0,
      costs: costTrends[i]?._sum.total_price || 0,
      profit: (revenue._sum.total_price || 0) - (costTrends[i]?._sum.total_price || 0),
      transactions: transactionTrends[i]?._count.transaction_type || 0,
      inventory_change: inventoryTrends[i]?._sum.quantity_change || 0,
    }));

    // Graph-specific datasets
    const graphData = {
      revenueVsCosts: {
        labels: trends.map((t) => t.period),
        datasets: [
          {
            label: 'Revenue',
            data: trends.map((t) => t.revenue),
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
          },
          {
            label: 'Costs',
            data: trends.map((t) => t.costs),
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
          },
          {
            label: 'Profit',
            data: trends.map((t) => t.profit),
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
          },
        ],
      },
      topSellingItems: {
        labels: topItems.map((item) => item.name),
        datasets: [
          {
            label: 'Quantity Sold',
            data: topItems.map((item) => item.quantity_sold),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      transactionTypes: {
        labels: ['Purchases', 'Sales'],
        datasets: [
          {
            label: 'Transaction Types',
            data: [transactionVolume.purchases, transactionVolume.sales],
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
            borderWidth: 1,
          },
        ],
      },
      inventoryTrends: {
        labels: trends.map((t) => t.period),
        datasets: [
          {
            label: 'Inventory Change',
            data: trends.map((t) => t.inventory_change),
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
          },
        ],
      },
    };

    // Response
    const financialData = {
      total_revenue: totalRevenue,
      total_costs: totalCosts,
      gross_profit: grossProfit,
      profit_margin: Number(profitMargin.toFixed(2)),
      inventory_value: inventoryValue,
      total_items_sold: totalItemsSold,
      transaction_volume: transactionVolume,
      top_selling_items: topItems,
      trends: trends,
      graph_data: graphData,
    };

    res.status(200).json({ message: 'Financial data retrieved successfully', data: financialData });
  } catch (error) {
    console.error('Error fetching financials:', error);
    res.status(500).json({ error: 'Failed to fetch financial data' });
  }
};