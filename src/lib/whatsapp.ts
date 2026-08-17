import { formatINR } from "@/lib/products";
import { WHATSAPP_NUMBER } from "@/lib/site";
import type { CartItem } from "@/lib/types";

export function buildWhatsAppOrderMessage(items: CartItem[], subtotal: number) {
  const lines = items.map(
    ({ product, quantity }, i) =>
      `${i + 1}. ${product.name} × ${quantity} — ${formatINR(product.price * quantity)}`,
  );

  return [
    "Hello Home Shopee,",
    "I would like to place an order:",
    "",
    ...lines,
    "",
    `Subtotal: ${formatINR(subtotal)}`,
    "",
    "Please confirm availability, shipping, and payment.",
  ].join("\n");
}

export function getWhatsAppContactUrl(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppCheckoutUrl(items: CartItem[], subtotal: number) {
  return getWhatsAppContactUrl(buildWhatsAppOrderMessage(items, subtotal));
}
