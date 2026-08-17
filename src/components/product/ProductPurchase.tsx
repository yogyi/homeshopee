"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { formatINR } from "@/lib/products";
import { getWhatsAppCheckoutUrl } from "@/lib/whatsapp";
import type { Product } from "@/lib/types";

export function ProductPurchase({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);

  return (
    <div className="purchase">
      <div className="purchase__price">
        <span>{formatINR(product.price)}</span>
        {product.mrp > product.price ? <s>{formatINR(product.mrp)}</s> : null}
        {product.discount > 0 ? (
          <em>{product.discount}% off</em>
        ) : null}
      </div>
      <div className="purchase__row">
        <div className="qty qty--lg">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span>{qty}</span>
          <button
            type="button"
            onClick={() => setQty((q) => q + 1)}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        <button
          type="button"
          className="btn btn--primary"
          onClick={() => addItem(product, qty)}
        >
          Add to cart
          <span className="btn__icon" aria-hidden>
            →
          </span>
        </button>
        <a
          href={getWhatsAppCheckoutUrl(
            [{ product, quantity: qty }],
            product.price * qty,
          )}
          target="_blank"
          rel="noreferrer"
          className="btn btn--ghost"
        >
          Order on WhatsApp
        </a>
      </div>
      <ul className="purchase__perks">
        <li>Pan-India shipping</li>
        <li>Secure packaging for decor pieces</li>
        <li>Easy returns within 7 days</li>
      </ul>
    </div>
  );
}

export function ProductGallery({ product }: { product: Product }) {
  return (
    <div className="pdp-gallery">
      <div className="pdp-gallery__main">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="(max-width:900px) 100vw, 50vw"
            className="object-cover"
          />
        ) : null}
      </div>
    </div>
  );
}

export function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      {items.map((item, i) => (
        <span key={`${item.label}-${i}`}>
          {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
          {i < items.length - 1 ? <i>/</i> : null}
        </span>
      ))}
    </nav>
  );
}
