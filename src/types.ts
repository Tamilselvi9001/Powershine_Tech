export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  brand: string;
  model?: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  gallery?: string[];
  specifications: Record<string, string>;
  applications: string[];
  featured?: boolean;
  inStock?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  iconName: string;
  itemCount?: number;
  image?: string;
  subcategories?: string[];
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  applications: string[];
  iconName: string;
  image?: string;
}

export interface EnquiryItem {
  product: Product;
  quantity: number;
}

export interface EnquirySubmission {
  id: string;
  customerName: string;
  companyName: string;
  phone: string;
  email: string;
  city: string;
  requirementNote: string;
  items: {
    productId: string;
    name: string;
    model?: string;
    brand?: string;
    quantity: number;
  }[];
  createdAt: string;
  status: 'New' | 'Contacted' | 'Quoted' | 'Completed' | 'Cancelled';
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  subject: string;
  message: string;
  createdAt: string;
}

export interface Brand {
  name: string;
  category: string;
  logoText: string;
  description: string;
}
