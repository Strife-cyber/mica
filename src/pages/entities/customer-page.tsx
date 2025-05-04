'use client';

import { format } from 'date-fns';
import type { Customer } from '@/lib';
import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Modal } from '@/components/ui/modal';
import { Button } from '@/components/ui/button';
import useCustomerHook from '@/hooks/customer-hook';
import { DataTable } from '@/components/ui/data-table';
import { ConfirmDialog } from '@/components/ui/confirm-dialog';

export default function CustomersPage() {
  const { getAll, create, update, remove, loading, error, resetError } = useCustomerHook();

  const [customers, setCustomers] = useState<Customer[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentCustomer, setCurrentCustomer] = useState<Partial<Customer>>({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    const data = await getAll();
    setCustomers(data);
  };

  const handleAddNew = () => {
    setCurrentCustomer({});
    setIsEditing(false);
    setIsModalOpen(true);
  };

  const handleEdit = (customer: Customer) => {
    setCurrentCustomer(customer);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleDelete = (customer: Customer) => {
    setCurrentCustomer(customer);
    setIsDeleteDialogOpen(true);
  };

  const handleSave = async () => {
    if (isEditing && currentCustomer.id) {
      await update(currentCustomer.id, currentCustomer);
    } else {
      await create(currentCustomer);
    }
    setIsModalOpen(false);
    fetchCustomers();
  };

  const handleConfirmDelete = async () => {
    if (currentCustomer.id) {
      await remove(currentCustomer.id);
      setIsDeleteDialogOpen(false);
      fetchCustomers();
    }
  };

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Phone' },
    {
      key: 'created_at',
      label: 'Created At',
      render: (customer: Customer) =>
        customer.created_at ? format(new Date(customer.created_at), 'MMM dd, yyyy') : '-',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-1 container mx-auto px-4 py-6">
      <div className="space-y-6">
      <h1 className="text-2xl font-bold">Customers</h1>

      {error && (
        <div className="bg-destructive/10 text-destructive p-3 rounded-md flex justify-between items-center">
          <p>{error}</p>
          <Button variant="ghost" size="sm" onClick={resetError}>
            Dismiss
          </Button>
        </div>
      )}

      <DataTable
        data={customers}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onAdd={handleAddNew}
        isLoading={loading}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={isEditing ? 'Edit Customer' : 'Add New Customer'}
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
              value={currentCustomer.name || ''}
              onChange={(e) => setCurrentCustomer({ ...currentCustomer, name: e.target.value })}
              placeholder="Customer name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={currentCustomer.email || ''}
              onChange={(e) => setCurrentCustomer({ ...currentCustomer, email: e.target.value })}
              placeholder="customer@example.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              value={currentCustomer.phone || ''}
              onChange={(e) => setCurrentCustomer({ ...currentCustomer, phone: e.target.value })}
              placeholder="Phone number"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              value={currentCustomer.address || ''}
              onChange={(e) => setCurrentCustomer({ ...currentCustomer, address: e.target.value })}
              placeholder="Customer address"
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
        title="Delete Customer"
        message={`Are you sure you want to delete ${currentCustomer.name}? This action cannot be undone.`}
      />
    </div>
      </main>
    </div>
  );
}
