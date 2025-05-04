import { format } from 'date-fns';
import type { Supplier } from '@/lib';
import { useEffect, useState } from 'react';
import { Modal } from '@/components/ui/modal';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import useSupplierHook from '@/hooks/supplier-hook';
import { DataTable } from '@/components/ui/data-table';
import { ConfirmDialog } from '@/components/ui/confirm-dialog';

export default function SuppliersPage() {
  const { getAll, create, update, remove, loading, error, resetError } = useSupplierHook();

  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentSupplier, setCurrentSupplier] = useState<Partial<Supplier>>({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const fetchSuppliers = async () => {
    const data = await getAll();
    setSuppliers(data);
  };

  const handleAddNew = () => {
    setCurrentSupplier({});
    setIsEditing(false);
    setIsModalOpen(true);
  };

  const handleEdit = (supplier: Supplier) => {
    setCurrentSupplier(supplier);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleDelete = (supplier: Supplier) => {
    setCurrentSupplier(supplier);
    setIsDeleteDialogOpen(true);
  };

  const handleSave = async () => {
    if (isEditing && currentSupplier.id) {
      await update(currentSupplier.id, currentSupplier);
    } else {
      await create(currentSupplier);
    }
    setIsModalOpen(false);
    fetchSuppliers();
  };

  const handleConfirmDelete = async () => {
    if (currentSupplier.id) {
      await remove(currentSupplier.id);
      setIsDeleteDialogOpen(false);
      fetchSuppliers();
    }
  };

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'contact_info', label: 'Contact Info' },
    {
      key: 'created_at',
      label: 'Created At',
      render: (supplier: Supplier) =>
        supplier.created_at ? format(new Date(supplier.created_at), 'MMM dd, yyyy') : '-',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-1 container mx-auto px-4 py-6">
      <div className="space-y-6">
      <h1 className="text-2xl font-bold">Suppliers</h1>

      {error && (
        <div className="bg-destructive/10 text-destructive p-3 rounded-md flex justify-between items-center">
          <p>{error}</p>
          <Button variant="ghost" size="sm" onClick={resetError}>
            Dismiss
          </Button>
        </div>
      )}

      <DataTable
        data={suppliers}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onAdd={handleAddNew}
        isLoading={loading}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={isEditing ? 'Edit Supplier' : 'Add New Supplier'}
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
              value={currentSupplier.name || ''}
              onChange={(e) => setCurrentSupplier({ ...currentSupplier, name: e.target.value })}
              placeholder="Supplier name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact_info">Contact Information</Label>
            <Input
              id="contact_info"
              value={currentSupplier.contact_info || ''}
              onChange={(e) =>
                setCurrentSupplier({ ...currentSupplier, contact_info: e.target.value })
              }
              placeholder="Email, phone, or address"
            />
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
        title="Delete Supplier"
        message={`Are you sure you want to delete ${currentSupplier.name}? This action cannot be undone.`}
      />
    </div>
      </main>
    </div>
  );
}
