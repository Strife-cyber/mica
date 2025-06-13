export interface Metadata {
  title?: string;
  name?: string;
  content?: string;
}

export interface User {
  name: string;
  email: string;
  role: string;
  plan: Plan[];
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
  name: string;
  href: string;
  icon: React.ElementType;
  active?: boolean;
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

export interface InventoryTransaction {
  id: number;
  inventory_id: number;
  transaction_type: string; // "SALE" or "PURCHASE"
  quantity_change: number;
  date: Date;
  reference_type: string; // "sale" or "purchase"
  created_at?: Date;
  updated_at?: Date;
  inventory: InventoryItem[];
}

interface SocialMedia {
  facebook?: string;
  twitter?: string;
  linkedIn?: string;
  website?: string;
  instagram?: string;  
}

export interface Business {
  id: number;
  userId: number;
  name: string;
  products: string[];
  location: string;
  description: string;
  imagePath: string;
  image?: File;
  socialMedia: SocialMedia;
  hoursPerDay: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Plan {
  id: number;
  userId: number;
  plan: string;
  createdAt: Date;
  updatedAt: Date;
}
