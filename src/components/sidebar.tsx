import { cn } from '../lib/utils';
import { Home, Users, Package, Truck } from 'lucide-react';

type Page = 'dashboard' | 'customers' | 'inventory' | 'suppliers';

interface SidebarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export default function Sidebar({ currentPage, setCurrentPage }: SidebarProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'inventory', label: 'Inventory', icon: Package },
    { id: 'suppliers', label: 'Suppliers', icon: Truck },
  ];

  return (
    <aside className="w-64 border-r border-border hidden md:block bg-card">
      <div className="h-16 border-b border-border flex items-center justify-center">
        <h1 className="text-xl font-bold">BMS</h1>
      </div>
      <nav className="p-2">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setCurrentPage(item.id as Page)}
                  className={cn(
                    'w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors',
                    currentPage === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted'
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
