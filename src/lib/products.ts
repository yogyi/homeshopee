import productsData from "../../data/products.json";
import { collectionMeta } from "./navigation";
import type { Product } from "./types";

export const products = productsData as Product[];

export function formatINR(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

export function getNewArrivals() {
  return products.filter((p) => p.badge === "New");
}

export function getRelatedProducts(product: Product, limit = 4) {
  return products
    .filter(
      (p) =>
        p.id !== product.id &&
        (p.subcategory === product.subcategory ||
          p.category === product.category),
    )
    .slice(0, limit);
}

export function getProductsForCollection(slug: string): Product[] {
  const meta = collectionMeta[slug];
  if (!meta) return [];

  if (meta.filter === "new") {
    return getNewArrivals().length ? getNewArrivals() : products.slice(0, 8);
  }

  if (meta.filter === "sale") {
    return products.filter((p) => p.discount >= 25);
  }

  return products.filter((p) => {
    if (meta.category && p.category !== meta.category) return false;
    if (meta.subcategory === "german-silver-ware") {
      return (
        p.subcategory === "german-silver-ware" ||
        p.subcategory === "tea-sets"
      );
    }
    if (meta.subcategory && p.subcategory !== meta.subcategory) return false;
    return true;
  });
}
