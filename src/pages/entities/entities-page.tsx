'use client';

import { useState } from 'react';
import CustomersPage from './customer-page';
import Header from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';
import InventoryPage from './inventory-page';
import SuppliersPage from './supplier-page';

type Page = 'dashboard' | 'customers' | 'inventory' | 'suppliers';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'customers':
        return <CustomersPage />;
      case 'inventory':
        return <InventoryPage />;
      case 'suppliers':
        return <SuppliersPage />;
      default:
        return <CustomersPage />;
    }
  };

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Header
          currentPath={currentPage}
          onNavigate={(path) => setCurrentPage(path as Page)}
          userName="John Doe"
          notificationCount={5}
        />
        <main className="flex-1 container mx-auto px-4 py-6">{renderPage()}</main>
      </div>
    </ThemeProvider>
  );
}

export default App;
