"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/cart/CartProvider";
import { formatINR } from "@/lib/products";
import type { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <article className="product-card">
      <Link href={`/products/${product.slug}`} className="product-card__media">
        {product.badge ? <span className="product-card__badge">{product.badge}</span> : null}
        {product.discount > 0 ? (
          <span className="product-card__off">{product.discount}% OFF</span>
        ) : null}
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width:768px) 50vw, 25vw"
            className="object-cover"
          />
        ) : (
          <div className="product-card__placeholder" />
        )}
      </Link>
      <div className="product-card__body">
        <Link href={`/products/${product.slug}`}>
          <h3>{product.name}</h3>
        </Link>
        <div className="product-card__price">
          <span>{formatINR(product.price)}</span>
          {product.mrp > product.price ? (
            <s>{formatINR(product.mrp)}</s>
          ) : null}
        </div>
        <button
          type="button"
          className="product-card__add"
          onClick={() => addItem(product)}
        >
          Add to cart
        </button>
      </div>
    </article>
  );
}
