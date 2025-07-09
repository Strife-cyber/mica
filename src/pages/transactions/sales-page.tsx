'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Plus,
  Trash2,
  AlertCircle,
  Check,
  Loader2,
  ShoppingCart,
  List,
  FileText,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Calendar,
  User,
  DollarSign,
  X,
  Eye,
} from 'lucide-react';
import type { Customer, InventoryItem, Sale, SaleItem } from '@/lib';
import useCustomerHook from '@/hooks/customer-hook';
import useInventoryHook from '@/hooks/inventory-hook';
import useSaleHook from '@/hooks/sale-hook';
import useSaleItemHook from '@/hooks/sale-item-hook';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/components/ui/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface SaleItemWithDetails extends Omit<SaleItem, 'sales' | 'inventory'> {
  inventory_name: string;
  inventory_description?: string;
  in_stock: number;
}

// View type for the sales page
type ViewType = 'create' | 'list';

export default function SalesPage() {
  // Hooks
  const { getAll: getAllCustomers } = useCustomerHook();
  const { getAll: getAllInventory } = useInventoryHook();
  const { getAll: getAllSales, create: createSale } = useSaleHook();
  const { create: createSaleItem, getAll: getAllSaleItems } = useSaleItemHook();

  // State
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null);
  const [selectedInventoryId, setSelectedInventoryId] = useState<number | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [saleItems, setSaleItems] = useState<SaleItemWithDetails[]>([]);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  // New state for the enhanced features
  const [view, setView] = useState<ViewType>('list'); // Default to list view
  const [sales, setSales] = useState<Sale[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize] = useState(6);
  const [selectedSale, setSelectedSale] = useState<Sale | null>(null);
  const [saleDetailsOpen, setSaleDetailsOpen] = useState(false);
  const [saleDetailsItems, setSaleDetailsItems] = useState<SaleItem[]>([]);
  const [sortField, setSortField] = useState<string>('sale_date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [searchTerm, setSearchTerm] = useState('');

  // Ref for scroll handling
  const lastScrollY = useRef(0);

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [customersData, inventoryData] = await Promise.all([
          getAllCustomers(),
          getAllInventory(),
        ]);
        setCustomers(customersData);
        setInventory(inventoryData);

        // Also fetch sales data
        await fetchSales();
      } catch (error) {
        console.error('Error fetching data:', error);
        toast({
          title: 'Error',
          description: 'Failed to load data. Please try again.',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Add scroll event listener for FAB visibility
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fetch sales with pagination
  const fetchSales = async (page = currentPage) => {
    try {
      // In a real implementation, we would pass pagination params to the API
      // For this example, we'll fetch all and paginate client-side
      const allSales = await getAllSales();

      // Sort sales
      const sortedSales = [...allSales].sort((a, b) => {
        const aValue = a[sortField as keyof Sale];
        const bValue = b[sortField as keyof Sale];

        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return sortDirection === 'asc' //@ts-ignore
            ? aValue.localeCompare(bValue) //@ts-ignore
            : bValue.localeCompare(aValue);
        }

        if (aValue instanceof Date && bValue instanceof Date) {
          return sortDirection === 'asc'
            ? aValue.getTime() - bValue.getTime()
            : bValue.getTime() - aValue.getTime();
        }

        // For numbers and other types
        return sortDirection === 'asc'
          ? (aValue as number) - (bValue as number)
          : (bValue as number) - (aValue as number);
      });

      // Filter by search term if provided
      const filteredSales = searchTerm
        ? sortedSales.filter((sale) => {
            const customer = customers.find((c) => c.id === sale.customer_id);
            return (
              customer?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
              sale.id.toString().includes(searchTerm)
            );
          })
        : sortedSales;

      // Calculate total pages
      const calculatedTotalPages = Math.ceil(filteredSales.length / pageSize);
      setTotalPages(calculatedTotalPages || 1);

      // Adjust current page if needed
      const adjustedPage = Math.min(page, calculatedTotalPages || 1);
      if (adjustedPage !== page) {
        setCurrentPage(adjustedPage);
      }

      // Paginate
      const start = (adjustedPage - 1) * pageSize;
      const paginatedSales = filteredSales.slice(start, start + pageSize);

      setSales(paginatedSales);
    } catch (error) {
      console.error('Error fetching sales:', error);
      toast({
        title: 'Error',
        description: 'Failed to load sales data.',
        variant: 'destructive',
      });
    }
  };

  // Effect to refetch sales when pagination, sorting, or search changes
  useEffect(() => {
    if (!loading) {
      fetchSales(currentPage);
    }
  }, [currentPage, sortField, sortDirection, searchTerm]);

  // Calculate total
  const totalAmount = saleItems.reduce((sum, item) => sum + item.total_price, 0);

  // Get selected inventory item
  const selectedInventoryItem = inventory.find((item) => item.id === selectedInventoryId);

  // Add item to sale
  const addItemToSale = () => {
    if (!selectedInventoryId || !selectedInventoryItem) {
      toast({
        title: 'Error',
        description: 'Please select an inventory item',
        variant: 'destructive',
      });
      return;
    }

    if (
      !selectedInventoryItem.quantity_in_stock ||
      selectedInventoryItem.quantity_in_stock < quantity
    ) {
      toast({
        title: 'Insufficient Stock',
        description: `Only ${selectedInventoryItem.quantity_in_stock || 0} units available`,
        variant: 'destructive',
      });
      return;
    }

    // Check if item already exists in sale
    const existingItemIndex = saleItems.findIndex(
      (item) => item.inventory_id === selectedInventoryId
    );

    if (existingItemIndex >= 0) {
      // Update existing item
      const updatedItems = [...saleItems];
      const existingItem = updatedItems[existingItemIndex];
      const newQuantity = existingItem.quantity + quantity;

      // Check if new quantity exceeds stock
      if (newQuantity > (selectedInventoryItem.quantity_in_stock || 0)) {
        toast({
          title: 'Insufficient Stock',
          description: `Cannot add ${quantity} more units. Only ${
            selectedInventoryItem.quantity_in_stock! - existingItem.quantity
          } units available`,
          variant: 'destructive',
        });
        return;
      }

      updatedItems[existingItemIndex] = {
        ...existingItem,
        quantity: newQuantity,
        total_price: newQuantity * (selectedInventoryItem.selling_price || 0),
      };

      setSaleItems(updatedItems);
    } else {
      // Add new item
      const newItem: SaleItemWithDetails = {
        id: 0, // Will be assigned by the server
        sale_id: 0, // Will be assigned after sale creation
        inventory_id: selectedInventoryId,
        inventory_name: selectedInventoryItem.name || 'Unknown Item',
        inventory_description: selectedInventoryItem.description,
        quantity: quantity,
        unit_price: selectedInventoryItem.selling_price || 0,
        total_price: quantity * (selectedInventoryItem.selling_price || 0),
        in_stock: selectedInventoryItem.quantity_in_stock || 0,
      };

      setSaleItems([...saleItems, newItem]);
    }

    // Reset selection
    setSelectedInventoryId(null);
    setQuantity(1);
  };

  // Remove item from sale
  const removeItemFromSale = (index: number) => {
    const updatedItems = [...saleItems];
    updatedItems.splice(index, 1);
    setSaleItems(updatedItems);
  };

  // Submit sale
  const handleSubmitSale = async () => {
    if (!selectedCustomerId) {
      toast({
        title: 'Error',
        description: 'Please select a customer',
        variant: 'destructive',
      });
      return;
    }

    if (saleItems.length === 0) {
      toast({
        title: 'Error',
        description: 'Please add at least one item to the sale',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Create sale
      const saleData: Partial<Sale> = {
        customer_id: selectedCustomerId,
        sale_date: new Date(),
        total_amount: totalAmount,
      };

      const createdSale = await createSale(saleData);

      if (!createdSale || !createdSale.id) {
        throw new Error('Failed to create sale');
      }

      // Create sale items
      const saleItemPromises = saleItems.map((item) => {
        const saleItemData: Partial<SaleItem> = {
          sale_id: createdSale.id,
          inventory_id: item.inventory_id,
          quantity: item.quantity,
          unit_price: item.unit_price,
          total_price: item.total_price,
        };
        return createSaleItem(saleItemData);
      });

      await Promise.all(saleItemPromises);

      // Success
      toast({
        title: 'Sale Created',
        description: `Sale - ${createdSale.id} has been created successfully`,
        variant: 'default',
      });

      // Reset form
      setSelectedCustomerId(null);
      setSaleItems([]);

      // Refresh inventory data
      const updatedInventory = await getAllInventory();
      setInventory(updatedInventory);

      // Refresh sales data and switch to list view
      await fetchSales(1);
      setView('list');
    } catch (error) {
      console.error('Error creating sale:', error);
      toast({
        title: 'Error',
        description: 'Failed to create sale. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // View sale details
  const viewSaleDetails = async (sale: Sale) => {
    setSelectedSale(sale);

    try {
      // In a real implementation, we would fetch sale items for this specific sale
      // For this example, we'll simulate it
      const allSaleItems = await getAllSaleItems();
      const saleItemsForThisSale = allSaleItems.filter((item) => item.sale_id === sale.id);

      setSaleDetailsItems(saleItemsForThisSale);
      setSaleDetailsOpen(true);
    } catch (error) {
      console.error('Error fetching sale details:', error);
      toast({
        title: 'Error',
        description: 'Failed to load sale details.',
        variant: 'destructive',
      });
    }
  };

  // Handle sort change
  const handleSortChange = (field: string) => {
    if (sortField === field) {
      // Toggle direction if same field
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      // New field, default to descending
      setSortField(field);
      setSortDirection('desc');
    }
  };

  // Render inventory item selection
  const renderInventorySelection = () => {
    const availableInventory = inventory.filter((item) => (item.quantity_in_stock || 0) > 0);

    return (
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="inventory">Product</Label>
            <Select
              value={selectedInventoryId?.toString() || ''}
              onValueChange={(value) => setSelectedInventoryId(Number(value))}
            >
              <SelectTrigger id="inventory" className="w-full">
                <SelectValue placeholder="Select product" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <Label>Available Products</Label>
                  {availableInventory.map((item) => (
                    <SelectItem key={item.id} value={item.id.toString()}>
                      {item.name} ({item.selling_price} francs) - {item.quantity_in_stock} in stock
                    </SelectItem>
                  ))}
                </SelectGroup>
                {availableInventory.length === 0 && (
                  <div className="p-2 text-center text-muted-foreground">No products in stock</div>
                )}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="quantity">Quantity</Label>
            <div className="flex items-center">
              <Input
                id="quantity"
                type="number"
                min="1"
                max={selectedInventoryItem?.quantity_in_stock || 1}
                value={quantity}
                onChange={(e) => setQuantity(Number.parseInt(e.target.value) || 1)}
                className="w-full"
              />
              {selectedInventoryItem && (
                <span className="ml-2 text-sm text-muted-foreground whitespace-nowrap">
                  / {selectedInventoryItem.quantity_in_stock} available
                </span>
              )}
            </div>
          </div>

          <div className="flex items-end">
            <Button onClick={addItemToSale} className="w-full" disabled={!selectedInventoryId}>
              <Plus className="mr-2 h-4 w-4" /> Add to Sale
            </Button>
          </div>
        </div>

        {selectedInventoryItem && (
          <div className="text-sm">
            <p>
              <span className="font-medium">Price:</span> {selectedInventoryItem.selling_price} francs
            </p>
            {selectedInventoryItem.description && (
              <p>
                <span className="font-medium">Description:</span>{' '}
                {selectedInventoryItem.description}
              </p>
            )}
          </div>
        )}
      </div>
    );
  };

  // Render sale items table
  const renderSaleItemsTable = () => {
    if (saleItems.length === 0) {
      return (
        <div className="text-center py-8 border rounded-md bg-muted/20">
          <ShoppingCart className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
          <p className="text-muted-foreground">No items added to this sale yet</p>
          <p className="text-sm text-muted-foreground">
            Select products from inventory to add them to the sale
          </p>
        </div>
      );
    }

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead className="text-right">Unit Price</TableHead>
            <TableHead className="text-right">Quantity</TableHead>
            <TableHead className="text-right">Total</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {saleItems.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <div>
                  <p className="font-medium">{item.inventory_name}</p>
                  {item.inventory_description && (
                    <p className="text-sm text-muted-foreground">{item.inventory_description}</p>
                  )}
                </div>
              </TableCell>
              <TableCell className="text-right">{item.unit_price} francs</TableCell>
              <TableCell className="text-right">
                {item.quantity}
                {item.quantity > item.in_stock / 2 && (
                  <Badge variant="outline" className="ml-2">
                    {item.in_stock - item.quantity} left
                  </Badge>
                )}
              </TableCell>
              <TableCell className="text-right font-medium">{item.total_price} francs</TableCell>
              <TableCell>
                <Button variant="ghost" size="icon" onClick={() => removeItemFromSale(index)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };

  // Render sales list view
  const renderSalesList = () => {
    return (
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="relative w-full sm:w-64">
            <Input
              placeholder="Search sales..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            {searchTerm && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-9 w-9"
                onClick={() => setSearchTerm('')}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="h-9"
              onClick={() => handleSortChange('sale_date')}
            >
              <Calendar className="mr-2 h-4 w-4" />
              Date
              {sortField === 'sale_date' && (
                <ChevronUp
                  className={cn(
                    'ml-2 h-4 w-4 transition-transform',
                    sortDirection === 'desc' && 'rotate-180'
                  )}
                />
              )}
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="h-9"
              onClick={() => handleSortChange('total_amount')}
            >
              <DollarSign className="mr-2 h-4 w-4" />
              Amount
              {sortField === 'total_amount' && (
                <ChevronUp
                  className={cn(
                    'ml-2 h-4 w-4 transition-transform',
                    sortDirection === 'desc' && 'rotate-180'
                  )}
                />
              )}
            </Button>
          </div>
        </div>

        {sales.length === 0 ? (
          <div className="text-center py-16 border rounded-md bg-muted/20">
            <FileText className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">No Sales Found</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              {searchTerm
                ? 'No sales match your search criteria. Try a different search term.'
                : 'There are no sales records yet. Create your first sale to get started.'}
            </p>
            {searchTerm && (
              <Button variant="outline" className="mt-4" onClick={() => setSearchTerm('')}>
                Clear Search
              </Button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sales.map((sale) => {
              const customer = customers.find((c) => c.id === sale.customer_id);
              return (
                <Card key={sale.id} className="overflow-hidden group">
                  <CardHeader className="p-4 pb-0 flex flex-row items-start justify-between space-y-0">
                    <div>
                      <CardTitle className="text-base font-medium flex items-center">
                        Sale - {sale.id}
                        {new Date(sale.sale_date).getTime() > Date.now() - 86400000 && (
                          <Badge className="ml-2">New</Badge>
                        )}
                      </CardTitle>
                      <CardDescription>
                        {sale.sale_date instanceof Date
                          ? format(sale.sale_date, 'MMM d, yyyy • h:mm a')
                          : format(new Date(sale.sale_date), 'MMM d, yyyy • h:mm a')}
                      </CardDescription>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => viewSaleDetails(sale)}>
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </CardHeader>
                  <CardContent className="p-4 pt-2">
                    <div className="flex items-center mt-2 text-sm">
                      <User className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span>{customer?.name || 'Unknown Customer'}</span>
                    </div>

                    <div className="mt-4 flex justify-between items-center">
                      <div>
                        <div className="text-sm text-muted-foreground">Items</div>
                        <div className="font-medium">{sale.sales_items?.length || '—'}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Total</div>
                        <div className="font-medium text-lg">{sale.total_amount} francs</div>
                      </div>
                    </div>
                  </CardContent>
                  <div className="px-4 py-3 bg-muted/30 border-t flex justify-end">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8"
                      onClick={() => viewSaleDetails(sale)}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous Page</span>
              </Button>

              <div className="flex items-center space-x-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  // Calculate page numbers to show (always show 5 if possible)
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }

                  return (
                    <Button
                      key={i}
                      variant={currentPage === pageNum ? 'default' : 'outline'}
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => setCurrentPage(pageNum)}
                    >
                      {pageNum}
                    </Button>
                  );
                })}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next Page</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Render create sale form
  const renderCreateSaleForm = () => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sale Form */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Customer Information</CardTitle>
              <CardDescription>Select a customer for this sale</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="customer">Customer</Label>
                  <Select
                    value={selectedCustomerId?.toString() || ''}
                    onValueChange={(value) => setSelectedCustomerId(Number(value))}
                  >
                    <SelectTrigger id="customer">
                      <SelectValue placeholder="Select customer" />
                    </SelectTrigger>
                    <SelectContent>
                      {customers.map((customer) => (
                        <SelectItem key={customer.id} value={customer.id.toString()}>
                          {customer.name} {customer.email ? `(${customer.email})` : ''}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {selectedCustomerId && (
                  <div className="p-3 bg-muted/30 rounded-md">
                    <p className="font-medium">
                      {customers.find((c) => c.id === selectedCustomerId)?.name || 'Customer'}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {customers.find((c) => c.id === selectedCustomerId)?.email ||
                        'No email provided'}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {customers.find((c) => c.id === selectedCustomerId)?.phone ||
                        'No phone provided'}
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sale Items</CardTitle>
              <CardDescription>Add products from inventory to this sale</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {renderInventorySelection()}
              <Separator />
              {renderSaleItemsTable()}
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="w-full flex justify-between text-lg font-medium">
                <span>Total Amount:</span>
                <span>{totalAmount} francs</span>
              </div>

              {saleItems.length > 0 && (
                <Alert variant="default" className="bg-primary/5 border-primary/20">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Inventory Update</AlertTitle>
                  <AlertDescription>
                    Submitting this sale will automatically update inventory quantities.
                  </AlertDescription>
                </Alert>
              )}

              <Button
                className="w-full"
                size="lg"
                onClick={handleSubmitSale}
                disabled={isSubmitting || saleItems.length === 0 || !selectedCustomerId}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
                  </>
                ) : (
                  <>
                    <Check className="mr-2 h-4 w-4" /> Complete Sale
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Summary and Recent Sales */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Sale Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Customer:</span>
                  <span>
                    {selectedCustomerId
                      ? customers.find((c) => c.id === selectedCustomerId)?.name ||
                        'Selected Customer'
                      : 'Not selected'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Items:</span>
                  <span>{saleItems.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Quantity:</span>
                  <span>{saleItems.reduce((sum, item) => sum + item.quantity, 0)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-medium">
                  <span>Total:</span>
                  <span>{totalAmount} francs</span>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="text-sm font-medium mb-2">Inventory Status</h4>
                {saleItems.length > 0 ? (
                  <div className="space-y-2">
                    {saleItems.map((item, index) => (
                      <div key={index} className="flex justify-between items-center text-sm">
                        <span className="truncate max-w-[180px]">{item.inventory_name}</span>
                        <Badge
                          variant={item.quantity > item.in_stock / 2 ? 'secondary' : 'outline'}
                        >
                          {item.in_stock - item.quantity} remaining
                        </Badge>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">No items added yet</p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Low Stock Items</CardTitle>
              <CardDescription>Items that need to be restocked soon</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {inventory
                  .filter((item) => (item.quantity_in_stock || 0) < 10)
                  .slice(0, 5)
                  .map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <span className="truncate max-w-[180px]">{item.name}</span>
                      <Badge
                        variant={(item.quantity_in_stock || 0) < 5 ? 'destructive' : 'secondary'}
                      >
                        {item.quantity_in_stock || 0} left
                      </Badge>
                    </div>
                  ))}
                {inventory.filter((item) => (item.quantity_in_stock || 0) < 10).length === 0 && (
                  <p className="text-sm text-muted-foreground">No low stock items</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  };

  // Sale details dialog
  const renderSaleDetailsDialog = () => {
    if (!selectedSale) return null;

    const customer = customers.find((c) => c.id === selectedSale.customer_id);

    return (
      <Dialog open={saleDetailsOpen} onOpenChange={setSaleDetailsOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Sale #{selectedSale.id} Details</DialogTitle>
            <DialogDescription>
              {selectedSale.sale_date instanceof Date
                ? format(selectedSale.sale_date, "MMMM d, yyyy 'at' h:mm a")
                : format(new Date(selectedSale.sale_date), "MMMM d, yyyy 'at' h:mm a")}
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
            <div className="space-y-1">
              <h4 className="text-sm font-medium">Customer</h4>
              <p>{customer?.name || 'Unknown Customer'}</p>
              <p className="text-sm text-muted-foreground">{customer?.email || 'No email'}</p>
              <p className="text-sm text-muted-foreground">{customer?.phone || 'No phone'}</p>
            </div>

            <div className="space-y-1">
              <h4 className="text-sm font-medium">Sale Information</h4>
              <p>Total: {selectedSale.total_amount} francs</p>
              <p className="text-sm text-muted-foreground">Items: {saleDetailsItems.length}</p>
              <p className="text-sm text-muted-foreground">
                Quantity: {saleDetailsItems.reduce((sum, item) => sum + item.quantity, 0)}
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="text-sm font-medium">Status</h4>
              <div>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  Completed
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Transaction ID: {selectedSale.id.toString().padStart(6, '0')}
              </p>
            </div>
          </div>

          <Separator />

          <div className="py-4">
            <h4 className="font-medium mb-3">Sale Items</h4>
            {saleDetailsItems.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead className="text-right">Unit Price</TableHead>
                    <TableHead className="text-right">Quantity</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {saleDetailsItems.map((item) => {
                    const inventoryItem = inventory.find((i) => i.id === item.inventory_id);
                    return (
                      <TableRow key={item.id}>
                        <TableCell>
                          {inventoryItem?.name || `Product #${item.inventory_id}`}
                        </TableCell>
                        <TableCell className="text-right">{item.unit_price} francs</TableCell>
                        <TableCell className="text-right">{item.quantity}</TableCell>
                        <TableCell className="text-right">{item.total_price} francs</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            ) : (
              <p className="text-sm text-muted-foreground">No items found for this sale.</p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  // Main render
  return (
    <div className="flex flex-col py-4 px-12 min-h-screen bg-background text-foreground">
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                {view === 'list' ? 'Sales' : 'Create Sale'}
              </h1>
              <p className="text-muted-foreground">
                {view === 'list'
                  ? 'View and manage your sales records'
                  : 'Create a new sale and add products from inventory'}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                onClick={() => setView(view === 'list' ? 'create' : 'list')}
              >
                {view === 'list' ? (
                  <>
                    <Plus className="mr-2 h-4 w-4" /> Create Sale
                  </>
                ) : (
                  <>
                    <List className="mr-2 h-4 w-4" /> View Sales
                  </>
                )}
              </Button>
            </div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center h-64">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <span className="ml-2">Loading...</span>
            </div>
          ) : view === 'list' ? (
            renderSalesList()
          ) : (
            renderCreateSaleForm()
          )}
        </div>
      </main>

      {renderSaleDetailsDialog()}
    </div>
  );
}

// Search icon component
function Search(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

// ChevronUp icon component
function ChevronUp(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}
