"use client";

import Image from "next/image";
import Link from "next/link";
import { WhatsAppCheckout } from "@/components/cart/WhatsAppCheckout";
import { useCart } from "@/components/cart/CartProvider";
import { formatINR } from "@/lib/products";

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    subtotal,
    itemCount,
  } = useCart();

  return (
    <>
      <div
        className={`cart-backdrop ${isOpen ? "is-open" : ""}`}
        onClick={closeCart}
        aria-hidden={!isOpen}
      />
      <aside
        className={`cart-drawer ${isOpen ? "is-open" : ""}`}
        aria-hidden={!isOpen}
        aria-label="Shopping cart"
      >
        <div className="cart-drawer__head">
          <div>
            <p className="eyebrow">Your cart</p>
            <h2>{itemCount} {itemCount === 1 ? "item" : "items"}</h2>
          </div>
          <button type="button" className="icon-btn" onClick={closeCart} aria-label="Close cart">
            <span />
            <span />
          </button>
        </div>

        <div className="cart-drawer__body">
          {items.length === 0 ? (
            <div className="cart-empty">
              <p>Your cart is waiting for something beautiful.</p>
              <button type="button" className="btn btn--ghost" onClick={closeCart}>
                Continue shopping
              </button>
            </div>
          ) : (
            <ul className="cart-list">
              {items.map(({ product, quantity }) => (
                <li key={product.id} className="cart-line">
                  <Link href={`/products/${product.slug}`} onClick={closeCart} className="cart-line__media">
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
                    <Link href={`/products/${product.slug}`} onClick={closeCart}>
                      {product.name}
                    </Link>
                    <p>{formatINR(product.price)}</p>
                    <div className="qty">
                      <button
                        type="button"
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span>{quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="cart-line__remove"
                    onClick={() => removeItem(product.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 ? (
          <div className="cart-drawer__foot">
            <div className="cart-subtotal">
              <span>Subtotal</span>
              <strong>{formatINR(subtotal)}</strong>
            </div>
            <p className="cart-note">
              Checkout on WhatsApp for now. A payment gateway can be added later.
            </p>
            <WhatsAppCheckout items={items} subtotal={subtotal} />
            <Link href="/cart" className="btn btn--ghost" onClick={closeCart}>
              View cart
            </Link>
          </div>
        ) : null}
      </aside>
    </>
  );
}
