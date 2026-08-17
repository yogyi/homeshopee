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

export function getWhatsAppCheckoutUrl(items: CartItem[], subtotal: number) {
  const text = encodeURIComponent(buildWhatsAppOrderMessage(items, subtotal));
  if (WHATSAPP_NUMBER) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  }
  return `https://wa.me/?text=${text}`;
}
