'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Plus,
  Trash2,
  AlertCircle,
  Check,
  Loader2,
  PackageOpen,
  List,
  FileText,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Calendar,
  Truck,
  DollarSign,
  X,
  Eye,
} from 'lucide-react';
import type { Supplier, InventoryItem, Purchase, PurchaseItem } from '@/lib';
import useSupplierHook from '@/hooks/supplier-hook';
import useInventoryHook from '@/hooks/inventory-hook';
import usePurchaseHook from '@/hooks/purchase-hook';
import usePurchaseItemHook from '@/hooks/purchase-item-hook';
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

interface PurchaseItemWithDetails extends Omit<PurchaseItem, 'purchases' | 'inventory'> {
  inventory_name: string;
  inventory_description?: string;
}

// View type for the purchases page
type ViewType = 'create' | 'list';

export default function PurchasesPage() {
  // Hooks
  const { getAll: getAllSuppliers } = useSupplierHook();
  const {
    getAll: getAllInventory,
    getOne: getInventoryItem,
    update: updateInventory,
  } = useInventoryHook();
  const { getAll: getAllPurchases, create: createPurchase } = usePurchaseHook();
  const { create: createPurchaseItem, getAll: getAllPurchaseItems } = usePurchaseItemHook();

  // State
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [selectedSupplierId, setSelectedSupplierId] = useState<number | null>(null);
  const [selectedInventoryId, setSelectedInventoryId] = useState<number | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [unitPrice, setUnitPrice] = useState<number>(0);
  const [purchaseItems, setPurchaseItems] = useState<PurchaseItemWithDetails[]>([]);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  // New state for the enhanced features
  const [view, setView] = useState<ViewType>('list'); // Default to list view
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize] = useState(6);
  const [selectedPurchase, setSelectedPurchase] = useState<Purchase | null>(null);
  const [purchaseDetailsOpen, setPurchaseDetailsOpen] = useState(false);
  const [purchaseDetailsItems, setPurchaseDetailsItems] = useState<PurchaseItem[]>([]);
  const [sortField, setSortField] = useState<string>('purchase_date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [searchTerm, setSearchTerm] = useState('');

  // Ref for scroll handling
  const lastScrollY = useRef(0);

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [suppliersData, inventoryData] = await Promise.all([
          getAllSuppliers(),
          getAllInventory(),
        ]);
        setSuppliers(suppliersData);
        setInventory(inventoryData);

        // Also fetch purchases data
        await fetchPurchases();
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

  // Fetch purchases with pagination
  const fetchPurchases = async (page = currentPage) => {
    try {
      // In a real implementation, we would pass pagination params to the API
      // For this example, we'll fetch all and paginate client-side
      const allPurchases = await getAllPurchases();

      // Sort purchases
      const sortedPurchases = [...allPurchases].sort((a, b) => {
        const aValue = a[sortField as keyof Purchase];
        const bValue = b[sortField as keyof Purchase];

        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return sortDirection === 'asc' // @ts-ignore
            ? aValue.localeCompare(bValue) // @ts-ignore
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
      const filteredPurchases = searchTerm
        ? sortedPurchases.filter((purchase) => {
            const supplier = suppliers.find((s) => s.id === purchase.supplier_id);
            return (
              supplier?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
              purchase.id.toString().includes(searchTerm)
            );
          })
        : sortedPurchases;

      // Calculate total pages
      const calculatedTotalPages = Math.ceil(filteredPurchases.length / pageSize);
      setTotalPages(calculatedTotalPages || 1);

      // Adjust current page if needed
      const adjustedPage = Math.min(page, calculatedTotalPages || 1);
      if (adjustedPage !== page) {
        setCurrentPage(adjustedPage);
      }

      // Paginate
      const start = (adjustedPage - 1) * pageSize;
      const paginatedPurchases = filteredPurchases.slice(start, start + pageSize);

      setPurchases(paginatedPurchases);
    } catch (error) {
      console.error('Error fetching purchases:', error);
      toast({
        title: 'Error',
        description: 'Failed to load purchases data.',
        variant: 'destructive',
      });
    }
  };

  // Effect to refetch purchases when pagination, sorting, or search changes
  useEffect(() => {
    if (!loading) {
      fetchPurchases(currentPage);
    }
  }, [currentPage, sortField, sortDirection, searchTerm]);

  // Calculate total
  const totalAmount = purchaseItems.reduce((sum, item) => sum + item.total_price, 0);

  // Get selected inventory item
  const selectedInventoryItem = inventory.find((item) => item.id === selectedInventoryId);

  // Handle unit price change
  useEffect(() => {
    if (selectedInventoryItem && selectedInventoryItem.cost_price) {
      setUnitPrice(selectedInventoryItem.cost_price);
    } else {
      setUnitPrice(0);
    }
  }, [selectedInventoryId, selectedInventoryItem]);

  // Add item to purchase
  const addItemToPurchase = () => {
    if (!selectedInventoryId || !selectedInventoryItem) {
      toast({
        title: 'Error',
        description: 'Please select an inventory item',
        variant: 'destructive',
      });
      return;
    }

    if (unitPrice <= 0) {
      toast({
        title: 'Error',
        description: 'Unit price must be greater than zero',
        variant: 'destructive',
      });
      return;
    }

    if (quantity <= 0) {
      toast({
        title: 'Error',
        description: 'Quantity must be greater than zero',
        variant: 'destructive',
      });
      return;
    }

    // Check if item already exists in purchase
    const existingItemIndex = purchaseItems.findIndex(
      (item) => item.inventory_id === selectedInventoryId
    );

    if (existingItemIndex >= 0) {
      // Update existing item
      const updatedItems = [...purchaseItems];
      const existingItem = updatedItems[existingItemIndex];
      const newQuantity = existingItem.quantity + quantity;

      updatedItems[existingItemIndex] = {
        ...existingItem,
        quantity: newQuantity,
        unit_price: unitPrice, // Update unit price in case it changed
        total_price: newQuantity * unitPrice,
      };

      setPurchaseItems(updatedItems);
    } else {
      // Add new item
      const newItem: PurchaseItemWithDetails = {
        id: 0, // Will be assigned by the server
        purchase_id: 0, // Will be assigned after purchase creation
        inventory_id: selectedInventoryId,
        inventory_name: selectedInventoryItem.name || 'Unknown Item',
        inventory_description: selectedInventoryItem.description,
        quantity: quantity,
        unit_price: unitPrice,
        total_price: quantity * unitPrice,
      };

      setPurchaseItems([...purchaseItems, newItem]);
    }

    // Reset selection
    setSelectedInventoryId(null);
    setQuantity(1);
    setUnitPrice(0);
  };

  // Remove item from purchase
  const removeItemFromPurchase = (index: number) => {
    const updatedItems = [...purchaseItems];
    updatedItems.splice(index, 1);
    setPurchaseItems(updatedItems);
  };

  // Submit purchase
  const handleSubmitPurchase = async () => {
    if (!selectedSupplierId) {
      toast({
        title: 'Error',
        description: 'Please select a supplier',
        variant: 'destructive',
      });
      return;
    }

    if (purchaseItems.length === 0) {
      toast({
        title: 'Error',
        description: 'Please add at least one item to the purchase',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Create purchase
      const purchaseData: Partial<Purchase> = {
        supplier_id: selectedSupplierId,
        purchase_date: new Date(),
        total_amount: totalAmount,
      };

      const createdPurchase = await createPurchase(purchaseData);

      if (!createdPurchase || !createdPurchase.id) {
        throw new Error('Failed to create purchase');
      }

      // Create purchase items and update inventory
      const purchaseItemPromises = purchaseItems.map(async (item) => {
        const purchaseItemData: Partial<PurchaseItem> = {
          purchase_id: createdPurchase.id,
          inventory_id: item.inventory_id,
          quantity: item.quantity,
          unit_price: item.unit_price,
          total_price: item.total_price,
        };

        // Create purchase item
        const createdItem = await createPurchaseItem(purchaseItemData);

        // Update inventory quantity
        const inventoryItem = await getInventoryItem(item.inventory_id);
        if (inventoryItem) {
          const updatedQuantity = (inventoryItem.quantity_in_stock || 0) + item.quantity;
          await updateInventory(item.inventory_id, {
            ...inventoryItem,
            quantity_in_stock: updatedQuantity,
            // Update cost price if it changed
            cost_price: item.unit_price,
          });
        }

        return createdItem;
      });

      await Promise.all(purchaseItemPromises);

      // Success
      toast({
        title: 'Purchase Created',
        description: `Purchase #${createdPurchase.id} has been created successfully`,
        variant: 'default',
      });

      // Reset form
      setSelectedSupplierId(null);
      setPurchaseItems([]);

      // Refresh inventory data
      const updatedInventory = await getAllInventory();
      setInventory(updatedInventory);

      // Refresh purchases data and switch to list view
      await fetchPurchases(1);
      setView('list');
    } catch (error) {
      console.error('Error creating purchase:', error);
      toast({
        title: 'Error',
        description: 'Failed to create purchase. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // View purchase details
  const viewPurchaseDetails = async (purchase: Purchase) => {
    setSelectedPurchase(purchase);

    try {
      // In a real implementation, we would fetch purchase items for this specific purchase
      // For this example, we'll simulate it
      const allPurchaseItems = await getAllPurchaseItems();
      const purchaseItemsForThisPurchase = allPurchaseItems.filter(
        (item) => item.purchase_id === purchase.id
      );

      setPurchaseDetailsItems(purchaseItemsForThisPurchase);
      setPurchaseDetailsOpen(true);
    } catch (error) {
      console.error('Error fetching purchase details:', error);
      toast({
        title: 'Error',
        description: 'Failed to load purchase details.',
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
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
                  <Label>Inventory Products</Label>
                  {inventory.map((item) => (
                    <SelectItem key={item.id} value={item.id.toString()}>
                      {item.name} (Current stock: {item.quantity_in_stock || 0})
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              id="quantity"
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number.parseInt(e.target.value) || 1)}
              className="w-full"
            />
          </div>

          <div>
            <Label htmlFor="unitPrice">Unit Price ($)</Label>
            <Input
              id="unitPrice"
              type="number"
              min="0.01"
              step="0.01"
              value={unitPrice}
              onChange={(e) => setUnitPrice(Number.parseFloat(e.target.value) || 0)}
              className="w-full"
            />
          </div>

          <div className="flex items-end">
            <Button onClick={addItemToPurchase} className="w-full" disabled={!selectedInventoryId}>
              <Plus className="mr-2 h-4 w-4" /> Add to Purchase
            </Button>
          </div>
        </div>

        {selectedInventoryItem && (
          <div className="text-sm">
            <p>
              <span className="font-medium">Current Cost Price:</span> $
              {selectedInventoryItem.cost_price || 'Not set'}
            </p>
            <p>
              <span className="font-medium">Current Stock:</span>{' '}
              {selectedInventoryItem.quantity_in_stock || 0} units
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

  // Render purchase items table
  const renderPurchaseItemsTable = () => {
    if (purchaseItems.length === 0) {
      return (
        <div className="text-center py-8 border rounded-md bg-muted/20">
          <PackageOpen className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
          <p className="text-muted-foreground">No items added to this purchase yet</p>
          <p className="text-sm text-muted-foreground">
            Select products from inventory to add them to the purchase
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
          {purchaseItems.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <div>
                  <p className="font-medium">{item.inventory_name}</p>
                  {item.inventory_description && (
                    <p className="text-sm text-muted-foreground">{item.inventory_description}</p>
                  )}
                </div>
              </TableCell>
              <TableCell className="text-right">${item.unit_price}</TableCell>
              <TableCell className="text-right">{item.quantity}</TableCell>
              <TableCell className="text-right font-medium">
                ${item.total_price}
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="icon" onClick={() => removeItemFromPurchase(index)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };

  // Render purchases list view
  const renderPurchasesList = () => {
    return (
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="relative w-full sm:w-64">
            <Input
              placeholder="Search purchases..."
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
              onClick={() => handleSortChange('purchase_date')}
            >
              <Calendar className="mr-2 h-4 w-4" />
              Date
              {sortField === 'purchase_date' && (
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

        {purchases.length === 0 ? (
          <div className="text-center py-16 border rounded-md bg-muted/20">
            <FileText className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">No Purchases Found</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              {searchTerm
                ? 'No purchases match your search criteria. Try a different search term.'
                : 'There are no purchase records yet. Create your first purchase to get started.'}
            </p>
            {searchTerm && (
              <Button variant="outline" className="mt-4" onClick={() => setSearchTerm('')}>
                Clear Search
              </Button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {purchases.map((purchase) => {
              const supplier = suppliers.find((s) => s.id === purchase.supplier_id);
              return (
                <Card key={purchase.id} className="overflow-hidden group">
                  <CardHeader className="p-4 pb-0 flex flex-row items-start justify-between space-y-0">
                    <div>
                      <CardTitle className="text-base font-medium flex items-center">
                        Purchase #{purchase.id}
                        {new Date(
                          purchase.purchase_date || purchase.created_at || Date.now()
                        ).getTime() >
                          Date.now() - 86400000 && <Badge className="ml-2">New</Badge>}
                      </CardTitle>
                      <CardDescription>
                        {purchase.purchase_date instanceof Date
                          ? format(purchase.purchase_date, 'MMM d, yyyy • h:mm a')
                          : purchase.purchase_date
                            ? format(new Date(purchase.purchase_date), 'MMM d, yyyy • h:mm a')
                            : purchase.created_at instanceof Date
                              ? format(purchase.created_at, 'MMM d, yyyy • h:mm a')
                              : purchase.created_at
                                ? format(new Date(purchase.created_at), 'MMM d, yyyy • h:mm a')
                                : 'No date'}
                      </CardDescription>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => viewPurchaseDetails(purchase)}>
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </CardHeader>
                  <CardContent className="p-4 pt-2">
                    <div className="flex items-center mt-2 text-sm">
                      <Truck className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span>{supplier?.name || 'Unknown Supplier'}</span>
                    </div>

                    <div className="mt-4 flex justify-between items-center">
                      <div>
                        <div className="text-sm text-muted-foreground">Items</div>
                        <div className="font-medium">{purchase.purchase_items?.length || '—'}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Total</div>
                        <div className="font-medium text-lg">
                          ${purchase.total_amount}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <div className="px-4 py-3 bg-muted/30 border-t flex justify-end">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8"
                      onClick={() => viewPurchaseDetails(purchase)}
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

  // Render create purchase form
  const renderCreatePurchaseForm = () => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Purchase Form */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Supplier Information</CardTitle>
              <CardDescription>Select a supplier for this purchase</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="supplier">Supplier</Label>
                  <Select
                    value={selectedSupplierId?.toString() || ''}
                    onValueChange={(value) => setSelectedSupplierId(Number(value))}
                  >
                    <SelectTrigger id="supplier">
                      <SelectValue placeholder="Select supplier" />
                    </SelectTrigger>
                    <SelectContent>
                      {suppliers.map((supplier) => (
                        <SelectItem key={supplier.id} value={supplier.id.toString()}>
                          {supplier.name}{' '}
                          {supplier.contact_info ? `(${supplier.contact_info})` : ''}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {selectedSupplierId && (
                  <div className="p-3 bg-muted/30 rounded-md">
                    <p className="font-medium">
                      {suppliers.find((s) => s.id === selectedSupplierId)?.name || 'Supplier'}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {suppliers.find((s) => s.id === selectedSupplierId)?.contact_info ||
                        'No contact info provided'}
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Purchase Items</CardTitle>
              <CardDescription>Add products to this purchase order</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {renderInventorySelection()}
              <Separator />
              {renderPurchaseItemsTable()}
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="w-full flex justify-between text-lg font-medium">
                <span>Total Amount:</span>
                <span>${totalAmount}</span>
              </div>

              {purchaseItems.length > 0 && (
                <Alert variant="default" className="bg-primary/5 border-primary/20">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Inventory Update</AlertTitle>
                  <AlertDescription>
                    Submitting this purchase will automatically update inventory quantities.
                  </AlertDescription>
                </Alert>
              )}

              <Button
                className="w-full"
                size="lg"
                onClick={handleSubmitPurchase}
                disabled={isSubmitting || purchaseItems.length === 0 || !selectedSupplierId}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
                  </>
                ) : (
                  <>
                    <Check className="mr-2 h-4 w-4" /> Complete Purchase
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Summary and Recent Purchases */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Purchase Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Supplier:</span>
                  <span>
                    {selectedSupplierId
                      ? suppliers.find((s) => s.id === selectedSupplierId)?.name ||
                        'Selected Supplier'
                      : 'Not selected'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Items:</span>
                  <span>{purchaseItems.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Quantity:</span>
                  <span>{purchaseItems.reduce((sum, item) => sum + item.quantity, 0)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-medium">
                  <span>Total:</span>
                  <span>${totalAmount}</span>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="text-sm font-medium mb-2">Inventory Impact</h4>
                {purchaseItems.length > 0 ? (
                  <div className="space-y-2">
                    {purchaseItems.map((item, index) => {
                      const inventoryItem = inventory.find((i) => i.id === item.inventory_id);
                      const currentStock = inventoryItem?.quantity_in_stock || 0;
                      const newStock = currentStock + item.quantity;

                      return (
                        <div key={index} className="flex justify-between items-center text-sm">
                          <span className="truncate max-w-[180px]">{item.inventory_name}</span>
                          <Badge
                            variant="outline"
                            className="bg-green-50 text-green-700 border-green-200"
                          >
                            +{item.quantity} → {newStock} units
                          </Badge>
                        </div>
                      );
                    })}
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

  // Purchase details dialog
  const renderPurchaseDetailsDialog = () => {
    if (!selectedPurchase) return null;

    const supplier = suppliers.find((s) => s.id === selectedPurchase.supplier_id);

    return (
      <Dialog open={purchaseDetailsOpen} onOpenChange={setPurchaseDetailsOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Purchase #{selectedPurchase.id} Details</DialogTitle>
            <DialogDescription>
              {selectedPurchase.purchase_date instanceof Date
                ? format(selectedPurchase.purchase_date, "MMMM d, yyyy 'at' h:mm a")
                : selectedPurchase.purchase_date
                  ? format(new Date(selectedPurchase.purchase_date), "MMMM d, yyyy 'at' h:mm a")
                  : selectedPurchase.created_at instanceof Date
                    ? format(selectedPurchase.created_at, "MMMM d, yyyy 'at' h:mm a")
                    : selectedPurchase.created_at
                      ? format(new Date(selectedPurchase.created_at), "MMMM d, yyyy 'at' h:mm a")
                      : 'No date'}
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
            <div className="space-y-1">
              <h4 className="text-sm font-medium">Supplier</h4>
              <p>{supplier?.name || 'Unknown Supplier'}</p>
              <p className="text-sm text-muted-foreground">
                {supplier?.contact_info || 'No contact info'}
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="text-sm font-medium">Purchase Information</h4>
              <p>Total: ${selectedPurchase.total_amount}</p>
              <p className="text-sm text-muted-foreground">Items: {purchaseDetailsItems.length}</p>
              <p className="text-sm text-muted-foreground">
                Quantity: {purchaseDetailsItems.reduce((sum, item) => sum + item.quantity, 0)}
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="text-sm font-medium">Status</h4>
              <div>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  Received
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Transaction ID: {selectedPurchase.id.toString().padStart(6, '0')}
              </p>
            </div>
          </div>

          <Separator />

          <div className="py-4">
            <h4 className="font-medium mb-3">Purchase Items</h4>
            {purchaseDetailsItems.length > 0 ? (
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
                  {purchaseDetailsItems.map((item) => {
                    const inventoryItem = inventory.find((i) => i.id === item.inventory_id);
                    return (
                      <TableRow key={item.id}>
                        <TableCell>
                          {inventoryItem?.name || `Product #${item.inventory_id}`}
                        </TableCell>
                        <TableCell className="text-right">${item.unit_price}</TableCell>
                        <TableCell className="text-right">{item.quantity}</TableCell>
                        <TableCell className="text-right">${item.total_price}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            ) : (
              <p className="text-sm text-muted-foreground">No items found for this purchase.</p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  // Main render
  return (
    <div className="flex flex-col py-4 px-12 min-h-screen bg-background text-foreground">
      <main className="flex-1 container py-6">
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                {view === 'list' ? 'Purchases' : 'Create Purchase'}
              </h1>
              <p className="text-muted-foreground">
                {view === 'list'
                  ? 'View and manage your purchase records'
                  : 'Create a new purchase and add products to inventory'}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                onClick={() => setView(view === 'list' ? 'create' : 'list')}
              >
                {view === 'list' ? (
                  <>
                    <Plus className="mr-2 h-4 w-4" /> Create Purchase
                  </>
                ) : (
                  <>
                    <List className="mr-2 h-4 w-4" /> View Purchases
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
            renderPurchasesList()
          ) : (
            renderCreatePurchaseForm()
          )}
        </div>
      </main>

      {renderPurchaseDetailsDialog()}
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
