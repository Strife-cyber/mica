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
