// Header.tsx

import { useState, useEffect } from 'react';
import {
  ChevronDown,
  Home,
  Moon,
  Package,
  Settings,
  Sun,
  Truck,
  Users,
  Layers,
  Repeat,
  TrendingUp,
  ReceiptText,
} from 'lucide-react';

import useAuthHook from '@/hooks/auth-hook.ts';
import { useTheme } from './theme-provider.tsx';
import { cn } from '../lib/utils';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { useNavigate, useLocation } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { NavItem } from '@/lib/index.js';

interface HeaderProps {
  onNavigate?: (path: string) => void;
  userName?: string;
  userImage?: string;
  notificationCount?: number;
}

const Header = ({ onNavigate, userName = 'John Doe', userImage }: HeaderProps) => {
  const router = useNavigate();
  const location = useLocation(); // Get current location
  const currentPath = location.pathname; // Derive currentPath from URL

  const { logout } = useAuthHook();
  const { theme, setTheme } = useTheme();

  const [isScrolled, setIsScrolled] = useState(false);

  const navItems: NavItem[] = [
    {
      name: 'Dashboard',
      href: '#',
      icon: Home,
      active: currentPath === '/dashboard',
    },
    {
      name: 'Entities',
      href: '#',
      icon: Layers,
      active: ['/customers', '/inventory', '/suppliers'].includes(currentPath),
    },
    {
      name: 'Transactions',
      href: '#',
      icon: Repeat,
      active: ['/sales', '/purchases'].includes(currentPath),
    },
  ];

  const entityItems: NavItem[] = [
    { name: 'Customers', href: '/customers', icon: Users, active: currentPath === '/customers' },
    { name: 'Inventory', href: '/inventory', icon: Package, active: currentPath === '/inventory' },
    { name: 'Suppliers', href: '/suppliers', icon: Truck, active: currentPath === '/suppliers' },
  ];

  const transactionItems: NavItem[] = [
    {
      name: 'Sales',
      href: '/sales',
      icon: TrendingUp,
      active: currentPath === '/sales',
    },
    {
      name: 'Purchases',
      href: '/purchases',
      icon: ReceiptText,
      active: currentPath === '/purchases',
    },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderDropdownNav = (item: NavItem, items: NavItem[]) => (
    <DropdownMenu key={item.name}>
      <DropdownMenuTrigger asChild>
        <Button
          variant={item.active ? 'default' : 'ghost'}
          className={cn(
            'h-9 px-3 text-sm flex items-center gap-2',
            item.active && 'bg-primary text-primary-foreground'
          )}
        >
          <item.icon className="h-4 w-4" />
          {item.name}
          <ChevronDown className="h-3 w-3 opacity-70" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-48">
        {items.map((sub) => (
          <DropdownMenuItem
            key={sub.name}
            className={cn('cursor-pointer', sub.active && 'bg-accent font-medium')}
            onClick={() => onNavigate?.(sub.href)}
          >
            <sub.icon className="mr-2 h-4 w-4" />
            {sub.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-30 w-full transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b shadow-sm'
          : 'bg-background border-b border-border'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <div className="hidden md:flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Package className="h-5 w-5" />
            </div>
            <h1 className="text-xl font-bold tracking-tight">
              <span className="hidden sm:inline">Mica</span>
              <span className="sm:hidden">MC</span>
            </h1>
          </div>

          {/* MOBILE NAVIGATION */}
          <div className="md:hidden w-full flex items-center justify-end">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open Menu">
                  <Layers className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 p-4">
                {/* Direct items */}
                {navItems.map((item) => {
                  if (item.name === 'Entities') {
                    return (
                      <div key={item.name}>
                        <DropdownMenuItem
                          key={item.name}
                          disabled
                          className="opacity-100 font-semibold"
                        >
                          Entities
                        </DropdownMenuItem>
                        {/* Entities */}
                        {entityItems.map((sub) => (
                          <DropdownMenuItem
                            key={sub.name}
                            className={cn(
                              'pl-6 cursor-pointer',
                              sub.active && 'bg-accent font-medium'
                            )}
                            onClick={() => onNavigate?.(sub.href)}
                          >
                            <sub.icon className="mr-2 h-4 w-4" />
                            {sub.name}
                          </DropdownMenuItem>
                        ))}
                      </div>
                    );
                  }

                  if (item.name === 'Transactions') {
                    return (
                      <DropdownMenuItem
                        key={item.name}
                        disabled
                        className="opacity-100 font-semibold"
                      >
                        Transactions
                      </DropdownMenuItem>
                    );
                  }
                  return (
                    <DropdownMenuItem
                      key={item.name}
                      className={cn('cursor-pointer', item.active && 'bg-accent font-medium')}
                      onClick={() => onNavigate?.(item.href)}
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.name}
                    </DropdownMenuItem>
                  );
                })}

                {/* Transactions */}
                {transactionItems.map((sub) => (
                  <DropdownMenuItem
                    key={sub.name}
                    className={cn('pl-6 cursor-pointer', sub.active && 'bg-accent font-medium')}
                    onClick={() => onNavigate?.(sub.href)}
                  >
                    <sub.icon className="mr-2 h-4 w-4" />
                    {sub.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* NAVIGATION */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              if (item.name === 'Entities') return renderDropdownNav(item, entityItems);
              if (item.name === 'Transactions') return renderDropdownNav(item, transactionItems);
              return (
                <Button
                  key={item.name}
                  variant={item.active ? 'default' : 'ghost'}
                  className={cn(
                    'h-9 px-3 text-sm',
                    item.active && 'bg-primary text-primary-foreground'
                  )}
                  onClick={() => onNavigate?.(item.href)}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.name}
                </Button>
              );
            })}
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-2">
            {/* THEME SWITCH */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {theme === 'dark' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Switch to {theme === 'dark' ? 'light' : 'dark'} mode</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* USER MENU */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8 transition-all hover:scale-105">
                    {userImage ? (
                      <AvatarImage src={userImage} alt={userName} />
                    ) : (
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {userName
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </AvatarFallback>
                    )}
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">{userName}</p>
                    <p className="text-xs text-muted-foreground">admin@example.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Users className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="text-destructive"
                  onClick={() => {
                    logout();
                    router('/');
                  }}
                >
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
