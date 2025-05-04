import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { Modal } from '@/components/ui/modal';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import useSupplierHook from '@/hooks/supplier-hook';
import type { InventoryItem, Supplier } from '@/lib';
import useInventoryHook from '@/hooks/inventory-hook';
import { DataTable } from '@/components/ui/data-table';
import { ConfirmDialog } from '@/components/ui/confirm-dialog';

export default function InventoryPage() {
  const {
    getAll: getAllInventory,
    create,
    update,
    remove,
    loading,
    error,
    resetError,
  } = useInventoryHook();

  const { getAll: getAllSuppliers } = useSupplierHook();

  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<Partial<InventoryItem>>({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const [inventoryData, suppliersData] = await Promise.all([
      getAllInventory(),
      getAllSuppliers(),
    ]);

    setInventory(inventoryData);
    setSuppliers(suppliersData);
  };

  const handleAddNew = () => {
    setCurrentItem({});
    setIsEditing(false);
    setIsModalOpen(true);
  };

  const handleEdit = (item: InventoryItem) => {
    setCurrentItem(item);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleDelete = (item: InventoryItem) => {
    setCurrentItem(item);
    setIsDeleteDialogOpen(true);
  };

  const handleSave = async () => {
    if (isEditing && currentItem.id) {
      await update(currentItem.id, currentItem);
    } else {
      await create(currentItem);
    }
    setIsModalOpen(false);
    fetchData();
  };

  const handleConfirmDelete = async () => {
    if (currentItem.id) {
      await remove(currentItem.id);
      setIsDeleteDialogOpen(false);
      fetchData();
    }
  };

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    {
      key: 'quantity_in_stock',
      label: 'Quantity',
      render: (item: InventoryItem) => item.quantity_in_stock?.toString() || '0',
    },
    {
      key: 'selling_price',
      label: 'Price',
      render: (item: InventoryItem) =>
        item.selling_price ? `$${item.selling_price}` : '-',
    },
    {
      key: 'supplier_id',
      label: 'Supplier',
      render: (item: InventoryItem) => {
        const supplier = suppliers.find((s) => s.id === item.supplier_id);
        return supplier?.name || '-';
      },
    },
    {
      key: 'created_at',
      label: 'Created At',
      render: (item: InventoryItem) =>
        item.created_at ? format(new Date(item.created_at), 'MMM dd, yyyy') : '-',
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Inventory</h1>

      {error && (
        <div className="bg-destructive/10 text-destructive p-3 rounded-md flex justify-between items-center">
          <p>{error}</p>
          <Button variant="ghost" size="sm" onClick={resetError}>
            Dismiss
          </Button>
        </div>
      )}

      <DataTable
        data={inventory}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onAdd={handleAddNew}
        isLoading={loading}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={isEditing ? 'Edit Inventory Item' : 'Add New Inventory Item'}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
          className="space-y-4"
        >
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={currentItem.name || ''}
              onChange={(e) => setCurrentItem({ ...currentItem, name: e.target.value })}
              placeholder="Item name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={currentItem.description || ''}
              onChange={(e) => setCurrentItem({ ...currentItem, description: e.target.value })}
              placeholder="Item description"
              rows={3}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="quantity_in_stock">Quantity in Stock</Label>
              <Input
                id="quantity_in_stock"
                type="number"
                value={currentItem.quantity_in_stock?.toString() || '0'}
                onChange={(e) =>
                  setCurrentItem({
                    ...currentItem,
                    quantity_in_stock: Number.parseInt(e.target.value) || 0,
                  })
                }
                min="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="supplier_id">Supplier</Label>
              <select
                id="supplier_id"
                className="w-full rounded-md border border-input bg-background p-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-ring"
                value={currentItem.supplier_id?.toString() || ''}
                onChange={(e) =>
                  setCurrentItem({
                    ...currentItem,
                    supplier_id: Number.parseInt(e.target.value) || undefined,
                  })
                }
              >
                <option value="">Select supplier</option>
                {suppliers.map((supplier) => (
                  <option key={supplier.id} value={supplier.id.toString()}>
                    {supplier.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="cost_price">Cost Price</Label>
              <Input
                id="cost_price"
                type="number"
                step="0.01"
                value={currentItem.cost_price?.toString() || ''}
                onChange={(e) =>
                  setCurrentItem({
                    ...currentItem,
                    cost_price: Number.parseFloat(e.target.value) || undefined,
                  })
                }
                placeholder="0.00"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="selling_price">Selling Price</Label>
              <Input
                id="selling_price"
                type="number"
                step="0.01"
                value={currentItem.selling_price?.toString() || ''}
                onChange={(e) =>
                  setCurrentItem({
                    ...currentItem,
                    selling_price: Number.parseFloat(e.target.value) || undefined,
                  })
                }
                placeholder="0.00"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </Modal>

      <ConfirmDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onConfirm={handleConfirmDelete}
        title="Delete Inventory Item"
        message={`Are you sure you want to delete ${currentItem.name}? This action cannot be undone.`}
      />
    </div>
  );
}
