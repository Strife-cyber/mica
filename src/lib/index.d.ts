import AccessDenied from "@/components/access-denied";
import { MinimalAccessDenied, AccountSuspended, PendingApproval } from "@/components/access-denied-variants";

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
  username: string;
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
  linkedin?: string;
}

export const AccessDeniedVariants = {
  MAIN: { key: "main", label: "Main Access Denied", component: AccessDenied },
  MINIMAL: { key: "minimal", label: "Minimal Access Denied", component: MinimalAccessDenied },
  PENDING_APPROVAL: { key: "pending-approval", label: "Pending Approval", component: PendingApproval },
  ACCOUNT_SUSPENDED: { key: "account-suspended", label: "Account Suspended", component: AccountSuspended },
} as const;

export type VariantKey = keyof typeof AccessDeniedVariants;

export interface Business {
  id: number;
  user: User;
  image?: File;
  name: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  location: string;
  imagePath: string;
  products: string[];
  description: string;
  hoursPerDay: number;
  socialMedia: SocialMedia;
}

export interface Plan {
  id: number;
  userId: number;
  plan: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Employee {
  id: number;
  userId: number;
  businessId: number;
  permissions: string;
}
