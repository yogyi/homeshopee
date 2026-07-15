export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  subcategory: string;
  mrp: number;
  price: number;
  discount: number;
  driveFileId?: string | null;
  image: string | null;
  badge?: string | null;
  featured?: boolean;
};

export type NavItem = {
  label: string;
  href: string;
  slug: string;
  children?: { label: string; href: string; slug: string }[];
};

export type CartItem = {
  product: Product;
  quantity: number;
};
