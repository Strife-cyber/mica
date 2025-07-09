import { useState, useEffect } from "react"
import { format, subMonths } from "date-fns"
import {
  Calendar,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Package,
  BarChart3,
  RefreshCw,
  Filter,
  Download,
  Loader2,
  ArrowUpRight,
  ArrowDownRight,
  ShoppingCart,
  Truck,
  Percent,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { toast } from "@/components/ui/use-toast"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js"
import { Line, Bar, Doughnut } from "react-chartjs-2"
import { Label } from "@/components/ui/label"
import useFinanceHook from "@/hooks/finance-hook"
import useAuthHook from "@/hooks/auth-hook"

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
)

// Define the financial data type
interface FinancialData {
  total_revenue: number
  total_costs: number
  gross_profit: number
  profit_margin: number
  inventory_value: number
  total_items_sold: number
  transaction_volume: {
    purchases: number
    sales: number
  }
  top_selling_items: Array<{
    inventory_id: number
    name: string
    quantity_sold: number
  }>
  trends: Array<{
    period: string
    revenue: number
    costs: number
    profit: number
    transactions: number
    inventory_change: number
  }>
  graph_data: {
    revenueVsCosts: {
      labels: string[]
      datasets: Array<{
        label: string
        data: number[]
        borderColor: string
        backgroundColor: string
      }>
    }
    topSellingItems: {
      labels: string[]
      datasets: Array<{
        label: string
        data: number[]
        backgroundColor: string[]
        borderColor: string[]
        borderWidth: number
      }>
    }
    transactionTypes: {
      labels: string[]
      datasets: Array<{
        label: string
        data: number[]
        backgroundColor: string[]
        borderColor: string[]
        borderWidth: number
      }>
    }
    inventoryTrends: {
      labels: string[]
      datasets: Array<{
        label: string
        data: number[]
        borderColor: string
        backgroundColor: string
      }>
    }
  }
}

// Date range options
type DateRange = "7d" | "30d" | "90d" | "6m" | "1y" | "custom"

export default function FinancialDashboard() {
  // State
  const [financialData, setFinancialData] = useState<FinancialData | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [dateRange, setDateRange] = useState<DateRange>("30d")
  const [groupBy, setGroupBy] = useState<"daily" | "monthly" | "yearly">("monthly")
  const [startDate, setStartDate] = useState<Date>(subMonths(new Date(), 1))
  const [endDate, setEndDate] = useState<Date>(new Date())
  const [activeTab, setActiveTab] = useState<string>("overview")
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false)

  // const { profile } = useAuthHook();
  const { getFinanceData } = useFinanceHook();

  // Chart options
  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        mode: "index" as const,
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
      },
    },
    interaction: {
      mode: "nearest" as const,
      axis: "x" as const,
      intersect: false,
    },
  }

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right" as const,
      },
    },
    cutout: "70%",
  }

  // Fetch financial data
  const fetchFinancialData = async () => {
    setLoading(true)
    try {
      // In a real app, you would fetch from your API
      // For this example, we'll use the sample data provided
      const result = await getFinanceData(startDate, endDate);

      if (result.data) {
        setFinancialData(result.data)
      }
    } catch (error) {
      console.error("Error fetching financial data:", error)
      toast({
        title: "Error",
        description: "Failed to fetch financial data. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
      setIsRefreshing(false)
    }
  }

  // Update date range based on selection
  const handleDateRangeChange = (range: DateRange) => {
    setDateRange(range)
    const today = new Date()

    switch (range) {
      case "7d":
        setStartDate(new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000))
        setEndDate(today)
        break
      case "30d":
        setStartDate(new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000))
        setEndDate(today)
        break
      case "90d":
        setStartDate(new Date(today.getTime() - 90 * 24 * 60 * 60 * 1000))
        setEndDate(today)
        break
      case "6m":
        setStartDate(new Date(today.getTime() - 180 * 24 * 60 * 60 * 1000))
        setEndDate(today)
        break
      case "1y":
        setStartDate(new Date(today.getTime() - 365 * 24 * 60 * 60 * 1000))
        setEndDate(today)
        break
      case "custom":
        // Keep current dates for custom range
        break
    }
  }

  // Handle refresh
  const handleRefresh = () => {
    setIsRefreshing(true)
    fetchFinancialData()
  }

  // Fetch data on mount and when date range or grouping changes
  useEffect(() => {
    fetchFinancialData()
  }, [startDate, endDate, groupBy])

  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(value)
  }

  // Calculate percentage change (for demo purposes)
  const getPercentageChange = (_value: number) => {
    // In a real app, you would compare with previous period
    const change = Math.random() * 20 - 10 // Random value between -10% and +10%
    return {
      value: Math.abs(change).toFixed(1),
      positive: change >= 0,
    }
  }

  // Render loading skeleton
  const renderSkeleton = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i} className="overflow-hidden">
            <CardHeader className="pb-2">
              <Skeleton className="h-4 w-1/2" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-8 w-3/4 mb-2" />
              <Skeleton className="h-4 w-1/3" />
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="overflow-hidden">
          <CardHeader>
            <Skeleton className="h-5 w-1/3" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-[300px] w-full" />
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader>
            <Skeleton className="h-5 w-1/3" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-[300px] w-full" />
          </CardContent>
        </Card>
      </div>
    </div>
  )

  // Render dashboard content
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Financial Dashboard</h1>
              <p className="text-muted-foreground">
                Analytics and insights for{" "}
                {dateRange === "custom"
                  ? `${format(startDate, "MMM d, yyyy")} - ${format(endDate, "MMM d, yyyy")}`
                  : dateRange === "7d"
                    ? "the last 7 days"
                    : dateRange === "30d"
                      ? "the last 30 days"
                      : dateRange === "90d"
                        ? "the last 90 days"
                        : dateRange === "6m"
                          ? "the last 6 months"
                          : "the last year"}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Select value={dateRange} onValueChange={(value) => handleDateRangeChange(value as DateRange)}>
                <SelectTrigger className="w-[180px]">
                  <Calendar className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Select date range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <Label>Date Range</Label>
                    <SelectItem value="7d">Last 7 days</SelectItem>
                    <SelectItem value="30d">Last 30 days</SelectItem>
                    <SelectItem value="90d">Last 90 days</SelectItem>
                    <SelectItem value="6m">Last 6 months</SelectItem>
                    <SelectItem value="1y">Last year</SelectItem>
                    <SelectItem value="custom">Custom range</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Select value={groupBy} onValueChange={(value) => setGroupBy(value as "daily" | "monthly" | "yearly")}>
                <SelectTrigger className="w-[150px]">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Group by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <Label>Group By</Label>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="yearly">Yearly</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Button variant="outline" size="icon" onClick={handleRefresh} disabled={isRefreshing}>
                {isRefreshing ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
              </Button>

              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid grid-cols-3 md:grid-cols-5 lg:w-[600px]">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="revenue">Revenue</TabsTrigger>
              <TabsTrigger value="inventory">Inventory</TabsTrigger>
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
              <TabsTrigger value="products">Products</TabsTrigger>
            </TabsList>

            {loading ? (
              renderSkeleton()
            ) : (
              <>
                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-6">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Revenue Card */}
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{formatCurrency(financialData?.total_revenue || 0)}</div>
                        <div className="flex items-center pt-1 text-xs">
                          {getPercentageChange(financialData?.total_revenue || 0).positive ? (
                            <ArrowUpRight className="mr-1 h-3 w-3 text-emerald-500" />
                          ) : (
                            <ArrowDownRight className="mr-1 h-3 w-3 text-rose-500" />
                          )}
                          <span
                            className={
                              getPercentageChange(financialData?.total_revenue || 0).positive
                                ? "text-emerald-500"
                                : "text-rose-500"
                            }
                          >
                            {getPercentageChange(financialData?.total_revenue || 0).value}%
                          </span>
                          <span className="text-muted-foreground ml-1">vs. previous period</span>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Profit Card */}
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Gross Profit</CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{formatCurrency(financialData?.gross_profit || 0)}</div>
                        <div className="flex items-center pt-1 text-xs">
                          <Badge variant="outline" className="font-normal">
                            {financialData?.profit_margin || 0}% margin
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Inventory Value Card */}
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Inventory Value</CardTitle>
                        <Package className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{formatCurrency(financialData?.inventory_value || 0)}</div>
                        <div className="flex items-center pt-1 text-xs text-muted-foreground">
                          Based on current cost prices
                        </div>
                      </CardContent>
                    </Card>

                    {/* Items Sold Card */}
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Items Sold</CardTitle>
                        <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{financialData?.total_items_sold || 0}</div>
                        <div className="flex items-center pt-1 text-xs">
                          {getPercentageChange(financialData?.total_items_sold || 0).positive ? (
                            <ArrowUpRight className="mr-1 h-3 w-3 text-emerald-500" />
                          ) : (
                            <ArrowDownRight className="mr-1 h-3 w-3 text-rose-500" />
                          )}
                          <span
                            className={
                              getPercentageChange(financialData?.total_items_sold || 0).positive
                                ? "text-emerald-500"
                                : "text-rose-500"
                            }
                          >
                            {getPercentageChange(financialData?.total_items_sold || 0).value}%
                          </span>
                          <span className="text-muted-foreground ml-1">vs. previous period</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Charts */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Revenue vs Costs Chart */}
                    <Card className="overflow-hidden">
                      <CardHeader>
                        <CardTitle>Revenue vs Costs</CardTitle>
                        <CardDescription>Comparison of revenue, costs, and profit over time</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[350px]">
                          {financialData?.graph_data?.revenueVsCosts && (
                            <Line data={financialData.graph_data.revenueVsCosts} options={lineChartOptions} />
                          )}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Top Selling Items Chart */}
                    <Card className="overflow-hidden">
                      <CardHeader>
                        <CardTitle>Top Selling Items</CardTitle>
                        <CardDescription>Products with the highest sales volume</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[350px]">
                          {financialData?.graph_data?.topSellingItems && (
                            <Bar data={financialData.graph_data.topSellingItems} options={barChartOptions} />
                          )}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Transaction Types Chart */}
                    <Card className="overflow-hidden">
                      <CardHeader>
                        <CardTitle>Transaction Distribution</CardTitle>
                        <CardDescription>Breakdown of transaction types</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[350px] flex items-center justify-center">
                          {financialData?.graph_data?.transactionTypes && (
                            <Doughnut data={financialData.graph_data.transactionTypes} options={doughnutOptions} />
                          )}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Inventory Trends Chart */}
                    <Card className="overflow-hidden">
                      <CardHeader>
                        <CardTitle>Inventory Trends</CardTitle>
                        <CardDescription>Changes in inventory levels over time</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[350px]">
                          {financialData?.graph_data?.inventoryTrends && (
                            <Line
                              data={financialData.graph_data.inventoryTrends}
                              options={{
                                ...lineChartOptions
                              }}
                            />
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Summary Table */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Financial Summary</CardTitle>
                      <CardDescription>Key metrics and performance indicators</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-medium text-muted-foreground mb-1">Revenue</h4>
                            <p className="text-xl font-semibold">{formatCurrency(financialData?.total_revenue || 0)}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-muted-foreground mb-1">Costs</h4>
                            <p className="text-xl font-semibold">{formatCurrency(financialData?.total_costs || 0)}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-muted-foreground mb-1">Gross Profit</h4>
                            <p className="text-xl font-semibold">{formatCurrency(financialData?.gross_profit || 0)}</p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-medium text-muted-foreground mb-1">Profit Margin</h4>
                            <p className="text-xl font-semibold">{financialData?.profit_margin || 0}%</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-muted-foreground mb-1">Items Sold</h4>
                            <p className="text-xl font-semibold">{financialData?.total_items_sold || 0}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-muted-foreground mb-1">Inventory Value</h4>
                            <p className="text-xl font-semibold">
                              {formatCurrency(financialData?.inventory_value || 0)}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-medium text-muted-foreground mb-1">Total Transactions</h4>
                            <p className="text-xl font-semibold">
                              {(financialData?.transaction_volume?.purchases || 0) +
                                (financialData?.transaction_volume?.sales || 0)}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-muted-foreground mb-1">Purchase Transactions</h4>
                            <p className="text-xl font-semibold">{financialData?.transaction_volume?.purchases || 0}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-muted-foreground mb-1">Sale Transactions</h4>
                            <p className="text-xl font-semibold">{financialData?.transaction_volume?.sales || 0}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Revenue Tab */}
                <TabsContent value="revenue" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Revenue Card */}
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{formatCurrency(financialData?.total_revenue || 0)}</div>
                        <div className="flex items-center pt-1 text-xs">
                          {getPercentageChange(financialData?.total_revenue || 0).positive ? (
                            <ArrowUpRight className="mr-1 h-3 w-3 text-emerald-500" />
                          ) : (
                            <ArrowDownRight className="mr-1 h-3 w-3 text-rose-500" />
                          )}
                          <span
                            className={
                              getPercentageChange(financialData?.total_revenue || 0).positive
                                ? "text-emerald-500"
                                : "text-rose-500"
                            }
                          >
                            {getPercentageChange(financialData?.total_revenue || 0).value}%
                          </span>
                          <span className="text-muted-foreground ml-1">vs. previous period</span>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Costs Card */}
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Total Costs</CardTitle>
                        <TrendingDown className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{formatCurrency(financialData?.total_costs || 0)}</div>
                        <div className="flex items-center pt-1 text-xs">
                          {!getPercentageChange(financialData?.total_costs || 0).positive ? (
                            <ArrowUpRight className="mr-1 h-3 w-3 text-emerald-500" />
                          ) : (
                            <ArrowDownRight className="mr-1 h-3 w-3 text-rose-500" />
                          )}
                          <span
                            className={
                              !getPercentageChange(financialData?.total_costs || 0).positive
                                ? "text-emerald-500"
                                : "text-rose-500"
                            }
                          >
                            {getPercentageChange(financialData?.total_costs || 0).value}%
                          </span>
                          <span className="text-muted-foreground ml-1">vs. previous period</span>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Profit Card */}
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Gross Profit</CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{formatCurrency(financialData?.gross_profit || 0)}</div>
                        <div className="flex items-center pt-1 text-xs">
                          {getPercentageChange(financialData?.gross_profit || 0).positive ? (
                            <ArrowUpRight className="mr-1 h-3 w-3 text-emerald-500" />
                          ) : (
                            <ArrowDownRight className="mr-1 h-3 w-3 text-rose-500" />
                          )}
                          <span
                            className={
                              getPercentageChange(financialData?.gross_profit || 0).positive
                                ? "text-emerald-500"
                                : "text-rose-500"
                            }
                          >
                            {getPercentageChange(financialData?.gross_profit || 0).value}%
                          </span>
                          <span className="text-muted-foreground ml-1">vs. previous period</span>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Profit Margin Card */}
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Profit Margin</CardTitle>
                        <Percent className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{financialData?.profit_margin || 0}%</div>
                        <div className="flex items-center pt-1 text-xs">
                          {getPercentageChange(financialData?.profit_margin || 0).positive ? (
                            <ArrowUpRight className="mr-1 h-3 w-3 text-emerald-500" />
                          ) : (
                            <ArrowDownRight className="mr-1 h-3 w-3 text-rose-500" />
                          )}
                          <span
                            className={
                              getPercentageChange(financialData?.profit_margin || 0).positive
                                ? "text-emerald-500"
                                : "text-rose-500"
                            }
                          >
                            {getPercentageChange(financialData?.profit_margin || 0).value}%
                          </span>
                          <span className="text-muted-foreground ml-1">vs. previous period</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Revenue Chart */}
                  <Card className="overflow-hidden">
                    <CardHeader>
                      <CardTitle>Revenue, Costs & Profit Trends</CardTitle>
                      <CardDescription>Detailed breakdown of financial performance over time</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[400px]">
                        {financialData?.graph_data?.revenueVsCosts && (
                          <Line
                            data={financialData.graph_data.revenueVsCosts}
                            options={{
                              ...lineChartOptions,
                              plugins: {
                                ...lineChartOptions.plugins,
                                legend: {
                                  position: "top",
                                  labels: {
                                    usePointStyle: true,
                                    boxWidth: 6,
                                  },
                                },
                              },
                            }}
                          />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Inventory Tab */}
                <TabsContent value="inventory" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Inventory Value Card */}
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Inventory Value</CardTitle>
                        <Package className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{formatCurrency(financialData?.inventory_value || 0)}</div>
                        <div className="flex items-center pt-1 text-xs text-muted-foreground">
                          Based on current cost prices
                        </div>
                      </CardContent>
                    </Card>

                    {/* Items Sold Card */}
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Items Sold</CardTitle>
                        <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{financialData?.total_items_sold || 0}</div>
                        <div className="flex items-center pt-1 text-xs">
                          {getPercentageChange(financialData?.total_items_sold || 0).positive ? (
                            <ArrowUpRight className="mr-1 h-3 w-3 text-emerald-500" />
                          ) : (
                            <ArrowDownRight className="mr-1 h-3 w-3 text-rose-500" />
                          )}
                          <span
                            className={
                              getPercentageChange(financialData?.total_items_sold || 0).positive
                                ? "text-emerald-500"
                                : "text-rose-500"
                            }
                          >
                            {getPercentageChange(financialData?.total_items_sold || 0).value}%
                          </span>
                          <span className="text-muted-foreground ml-1">vs. previous period</span>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Inventory Turnover Card */}
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Inventory Turnover</CardTitle>
                        <RefreshCw className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">
                          {(financialData?.total_items_sold || 0) > 0
                            ? ((financialData?.total_costs || 0) / (financialData?.inventory_value || 1)).toFixed(2)
                            : "0.00"}
                        </div>
                        <div className="flex items-center pt-1 text-xs text-muted-foreground">
                          Times inventory sold in period
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Inventory Trends Chart */}
                  <Card className="overflow-hidden">
                    <CardHeader>
                      <CardTitle>Inventory Changes Over Time</CardTitle>
                      <CardDescription>Tracking inventory levels and stock movements</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[400px]">
                        {financialData?.graph_data?.inventoryTrends && (
                          <Line
                            data={financialData.graph_data.inventoryTrends}
                            options={{
                              ...lineChartOptions
                            }}
                          />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Transactions Tab */}
                <TabsContent value="transactions" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Total Transactions Card */}
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Total Transactions</CardTitle>
                        <BarChart3 className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">
                          {(financialData?.transaction_volume?.purchases || 0) +
                            (financialData?.transaction_volume?.sales || 0)}
                        </div>
                        <div className="flex items-center pt-1 text-xs text-muted-foreground">
                          Combined purchases and sales
                        </div>
                      </CardContent>
                    </Card>

                    {/* Purchase Transactions Card */}
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Purchase Transactions</CardTitle>
                        <Truck className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{financialData?.transaction_volume?.purchases || 0}</div>
                        <div className="flex items-center pt-1 text-xs">
                          {getPercentageChange(financialData?.transaction_volume?.purchases || 0).positive ? (
                            <ArrowUpRight className="mr-1 h-3 w-3 text-emerald-500" />
                          ) : (
                            <ArrowDownRight className="mr-1 h-3 w-3 text-rose-500" />
                          )}
                          <span
                            className={
                              getPercentageChange(financialData?.transaction_volume?.purchases || 0).positive
                                ? "text-emerald-500"
                                : "text-rose-500"
                            }
                          >
                            {getPercentageChange(financialData?.transaction_volume?.purchases || 0).value}%
                          </span>
                          <span className="text-muted-foreground ml-1">vs. previous period</span>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Sale Transactions Card */}
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Sale Transactions</CardTitle>
                        <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{financialData?.transaction_volume?.sales || 0}</div>
                        <div className="flex items-center pt-1 text-xs">
                          {getPercentageChange(financialData?.transaction_volume?.sales || 0).positive ? (
                            <ArrowUpRight className="mr-1 h-3 w-3 text-emerald-500" />
                          ) : (
                            <ArrowDownRight className="mr-1 h-3 w-3 text-rose-500" />
                          )}
                          <span
                            className={
                              getPercentageChange(financialData?.transaction_volume?.sales || 0).positive
                                ? "text-emerald-500"
                                : "text-rose-500"
                            }
                          >
                            {getPercentageChange(financialData?.transaction_volume?.sales || 0).value}%
                          </span>
                          <span className="text-muted-foreground ml-1">vs. previous period</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Transaction Distribution Chart */}
                  <Card className="overflow-hidden">
                    <CardHeader>
                      <CardTitle>Transaction Distribution</CardTitle>
                      <CardDescription>Breakdown of transaction types</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[400px] flex items-center justify-center">
                        {financialData?.graph_data?.transactionTypes && (
                          <Doughnut data={financialData.graph_data.transactionTypes} options={doughnutOptions} />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Products Tab */}
                <TabsContent value="products" className="space-y-6">
                  {/* Top Selling Items Chart */}
                  <Card className="overflow-hidden">
                    <CardHeader>
                      <CardTitle>Top Selling Products</CardTitle>
                      <CardDescription>Products with the highest sales volume</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[400px]">
                        {financialData?.graph_data?.topSellingItems && (
                          <Bar data={financialData.graph_data.topSellingItems} options={barChartOptions} />
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Top Products Table */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Top Selling Products</CardTitle>
                      <CardDescription>Detailed breakdown of best-performing products</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="rounded-md border">
                        <table className="w-full caption-bottom text-sm">
                          <thead className="[&_tr]:border-b">
                            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                                Rank
                              </th>
                              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                                Product
                              </th>
                              <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">
                                Quantity Sold
                              </th>
                              <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">
                                % of Total
                              </th>
                            </tr>
                          </thead>
                          <tbody className="[&_tr:last-child]:border-0">
                            {financialData?.top_selling_items?.map((item, index) => (
                              <tr
                                key={item.inventory_id}
                                className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                              >
                                <td className="p-4 align-middle">{index + 1}</td>
                                <td className="p-4 align-middle font-medium">{item.name}</td>
                                <td className="p-4 align-middle text-right">{item.quantity_sold}</td>
                                <td className="p-4 align-middle text-right">
                                  {financialData.total_items_sold > 0
                                    ? ((item.quantity_sold / financialData.total_items_sold) * 100).toFixed(1)
                                    : "0.0"}
                                  %
                                </td>
                              </tr>
                            ))}
                            {(!financialData?.top_selling_items || financialData.top_selling_items.length === 0) && (
                              <tr>
                                <td colSpan={4} className="p-4 text-center text-muted-foreground">
                                  No data available
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </>
            )}
          </Tabs>
        </div>
      </main>
    </div>
  )
}
