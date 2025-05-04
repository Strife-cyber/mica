import type React from 'react';

import { cn } from '../lib/utils';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';
import useAuthHook from '@/hooks/auth-hook.ts';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './theme-provider.tsx';
import {
  ChevronDown,
  Home,
  Moon,
  Package,
  Settings,
  Sun,
  Truck,
  Users,
  X,
  Layers,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

type NavItem = {
  name: string;
  href: string;
  icon: React.ElementType;
  active?: boolean;
};

interface HeaderProps {
  onNavigate?: (path: string) => void;
  currentPath?: string;
  userName?: string;
  userImage?: string;
  notificationCount?: number;
}

export default function Header({
  onNavigate,
  currentPath = 'dashboard',
  userName = 'John Doe',
  userImage
}: HeaderProps) {
  const router = useNavigate();
  const { logout } = useAuthHook();
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Replace the navItems array with a simplified version that includes the Dashboard and a new Entities item
  const navItems: NavItem[] = [
    { name: 'Dashboard', href: 'dashboard', icon: Home, active: currentPath === 'dashboard' },
    {
      name: 'Entities',
      href: '#',
      icon: Layers,
      active: ['customers', 'inventory', 'suppliers'].includes(currentPath),
    },
  ];

  // Add a new entityItems array to hold the entity options
  const entityItems: NavItem[] = [
    { name: 'Customers', href: 'customers', icon: Users, active: currentPath === 'customers' },
    { name: 'Inventory', href: 'inventory', icon: Package, active: currentPath === 'inventory' },
    { name: 'Suppliers', href: 'suppliers', icon: Truck, active: currentPath === 'suppliers' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implement search functionality
    setIsSearchOpen(false);
  };

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
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="hidden md:flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Package className="h-5 w-5" />
              </div>
              <h1 className="text-xl font-bold tracking-tight">
                <span className="hidden sm:inline">Mica</span>
                <span className="sm:hidden">MC</span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              // Special handling for Entities dropdown
              if (item.name === 'Entities') {
                return (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant={item.active ? 'default' : 'ghost'}
                        className={cn(
                          'h-9 px-3 text-sm transition-all flex items-center gap-2',
                          item.active && 'bg-primary text-primary-foreground'
                        )}
                      >
                        <item.icon className="h-4 w-4" />
                        {item.name}
                        <ChevronDown className="h-3 w-3 opacity-70" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-48">
                      {entityItems.map((entity) => (
                        <DropdownMenuItem
                          key={entity.name}
                          className={cn('cursor-pointer', entity.active && 'bg-accent font-medium')}
                          onClick={() => onNavigate?.(entity.href)}
                        >
                          <entity.icon className="mr-2 h-4 w-4" />
                          <a href={`/${entity.name.toLowerCase()}`}>
                            <span>{entity.name}</span>
                          </a>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }

              // Regular navigation item
              return (
                <Button
                  key={item.name}
                  variant={item.active ? 'default' : 'ghost'}
                  className={cn(
                    'h-9 px-3 text-sm transition-all',
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

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
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

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8 transition-all hover:scale-105">
                    {userImage ? (
                      <AvatarImage src={userImage || '/placeholder.svg'} alt={userName} />
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
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{userName}</p>
                    <p className="text-xs leading-none text-muted-foreground">admin@example.com</p>
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
                <DropdownMenuItem onClick={() => {
                  logout();
                  router("/");
                }} className="text-destructive">
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden border-t border-border">
          <div className="flex justify-between">
            {navItems.map((item) => {
              // Special handling for Entities on mobile
              if (item.name === 'Entities') {
                return (
                  <Sheet key={item.name}>
                    <SheetTrigger asChild>
                      <Button
                        variant="ghost"
                        className={cn(
                          'flex-1 flex flex-col items-center justify-center rounded-none h-12 px-0 py-1',
                          item.active && 'bg-accent text-accent-foreground'
                        )}
                      >
                        <item.icon className="h-5 w-5" />
                        <span className="text-xs mt-1">{item.name}</span>
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="bottom" className="h-auto max-h-[40vh]">
                      <div className="py-4">
                        <h3 className="text-lg font-semibold mb-4">Select Entity</h3>
                        <div className="space-y-2">
                          {entityItems.map((entity) => (
                            <Button
                              key={entity.name}
                              variant={entity.active ? 'default' : 'outline'}
                              className="w-full justify-start"
                              onClick={() => {
                                onNavigate?.(entity.href);
                                // Close the sheet after selection
                                const closeEvent = new Event('close-sheet');
                                document.dispatchEvent(closeEvent);
                              }}
                            >
                              <entity.icon className="mr-2 h-4 w-4" />
                              {entity.name}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                );
              }

              // Regular navigation item
              return (
                <Button
                  key={item.name}
                  variant="ghost"
                  className={cn(
                    'flex-1 flex flex-col items-center justify-center rounded-none h-12 px-0 py-1',
                    item.active && 'bg-accent text-accent-foreground'
                  )}
                  onClick={() => onNavigate?.(item.href)}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="text-xs mt-1">{item.name}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Search Modal */}
      <Sheet open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <SheetContent side="top" className="h-auto max-h-screen">
          <div className="flex flex-col space-y-4 py-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Search</h2>
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <form onSubmit={handleSearch} className="flex gap-2">
              <Input
                placeholder="Search for anything..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
                autoFocus
              />
              <Button type="submit">Search</Button>
            </form>
            <div className="mt-4">
              <h3 className="text-sm font-medium mb-2">Recent Searches</h3>
              <div className="flex flex-wrap gap-2">
                {['Customer #1024', 'Inventory Report', 'Monthly Sales'].map((item) => (
                  <Button
                    key={item}
                    variant="outline"
                    size="sm"
                    className="h-8"
                    onClick={() => {
                      setSearchQuery(item);
                      handleSearch(new Event('submit') as any);
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
