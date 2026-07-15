"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/cart/CartProvider";
import { formatINR } from "@/lib/products";

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal, openCart } = useCart();

  return (
    <div className="cart-page">
      <p className="eyebrow">Bag</p>
      <h1>Your cart</h1>

      {items.length === 0 ? (
        <div className="empty-collection" style={{ paddingInline: 0 }}>
          <p>Nothing here yet — discover something beautiful for your home.</p>
          <Link href="/collections/new-arrivals" className="btn btn--primary">
            Shop new arrivals
            <span className="btn__icon" aria-hidden>
              →
            </span>
          </Link>
        </div>
      ) : (
        <>
          <ul className="cart-list" style={{ marginTop: "2rem" }}>
            {items.map(({ product, quantity }) => (
              <li key={product.id} className="cart-line">
                <Link href={`/products/${product.slug}`} className="cart-line__media">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="88px"
                      className="object-cover"
                    />
                  ) : null}
                </Link>
                <div className="cart-line__info">
                  <Link href={`/products/${product.slug}`}>{product.name}</Link>
                  <p>{formatINR(product.price)}</p>
                  <div className="qty">
                    <button
                      type="button"
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                    >
                      −
                    </button>
                    <span>{quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <strong>{formatINR(product.price * quantity)}</strong>
                  <button
                    type="button"
                    className="cart-line__remove"
                    style={{ display: "block", marginTop: "0.5rem", marginLeft: "auto" }}
                    onClick={() => removeItem(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-drawer__foot" style={{ marginTop: "2rem", border: "1px solid var(--line)", borderRadius: "1.2rem" }}>
            <div className="cart-subtotal">
              <span>Subtotal</span>
              <strong>{formatINR(subtotal)}</strong>
            </div>
            <p className="cart-note">
              Shipping & taxes calculated at checkout.
            </p>
            <button type="button" className="btn btn--primary" onClick={openCart}>
              Proceed to checkout
              <span className="btn__icon" aria-hidden>
                →
              </span>
            </button>
            <Link href="/collections/new-arrivals" className="btn btn--ghost">
              Continue shopping
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
