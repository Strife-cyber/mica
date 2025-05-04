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

export interface Purchase {
  id: number;  
  total_amount: number;
  supplier_id?: number;
  created_at?: Date;
  updated_at?: Date;
  purchase_date?: Date;
  suppliers?: Supplier[];
  purchase_items?: PurchaseItem[];
}

export interface PurchaseItem {
  id: number;
  purchase_id: number;
  inventory_id: number;
  quantity: number;
  unit_price: number;
  total_price: number;
  created_at?: Date;
  updated_at?: Date;
  purchases: Purchase[];
  inventory: InventoryItem[];
}

export interface Sale {
  id: number;
  customer_id: number;
  sale_date: Date;
  total_amount: number;
  created_at?: Date;
  updated_at?: Date;
  customers: Customer[];
  sales_items: SaleItem[];
}

export interface SaleItem {
  id: number;
  sale_id: number;
  inventory_id: number;
  quantity: number;
  unit_price: number;
  total_price: number;
  created_at?: Date;
  updated_at?: Date;
  sales: Sale[];
  inventory: InventoryItem[];
}
