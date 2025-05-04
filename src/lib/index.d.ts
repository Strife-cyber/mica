export interface Metadata {
  title?: string;
  name?: string;
  content?: string;
}

export interface User {
  name: string;
  email: string;
  role: string;
}

export interface BreadcrumbItem {
  title: string;
  href: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export interface NavItem {
  title: string;
  href: string;
  isActive?: boolean;
  icon?: LucideIcon | null;
}

export interface Customer {
  id: number;
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface Supplier {
  id: number;
  name?: string;
  contact_info?: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface InventoryItem {
  id: number;
  name?: string;
  description?: string;
  quantity_in_stock?: number;
  cost_price?: number;
  selling_price?: number;
  supplier_id?: number;
  created_at?: Date;
  updated_at?: Date;
  suppliers?: Supplier[];
}
