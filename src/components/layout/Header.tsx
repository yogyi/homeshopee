"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { navigation } from "@/lib/navigation";

const PROMOS = [
  <>
    Enjoy an Extra 5% OFF on <u>Prepaid Orders</u>
  </>,
  <>Free shipping on prepaid orders above ₹2,999</>,
  <>COD available on eligible orders</>,
];

function IconSearch() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M16.2 16.2 20 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconBag() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.5 8.5h11l-.7 10.2a1.5 1.5 0 0 1-1.5 1.4H8.7a1.5 1.5 0 0 1-1.5-1.4L6.5 8.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M9 8.5V7a3 3 0 0 1 6 0v1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Header() {
  const { openCart, itemCount } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [promoIndex, setPromoIndex] = useState(0);
  const [mobileExpand, setMobileExpand] = useState<string | null>(null);
  const [openMega, setOpenMega] = useState<string | null>(null);

  useEffect(() => {
    const id = window.setInterval(() => {
      setPromoIndex((i) => (i + 1) % PROMOS.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen || searchOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, searchOpen]);

  return (
    <header className="site-header">
      <div className="promo-carousel" aria-live="polite">
        <button
          type="button"
          className="promo-carousel__arrow"
          aria-label="Previous offer"
          onClick={() =>
            setPromoIndex((i) => (i - 1 + PROMOS.length) % PROMOS.length)
          }
        >
          ‹
        </button>
        <p key={promoIndex} className="promo-carousel__text">
          {PROMOS[promoIndex]}
        </p>
        <button
          type="button"
          className="promo-carousel__arrow"
          aria-label="Next offer"
          onClick={() => setPromoIndex((i) => (i + 1) % PROMOS.length)}
        >
          ›
        </button>
      </div>

      <div className="header-bar">
        <div className="header-bar__inner">
          <Link
            href="/"
            className="brand-lockup"
            onClick={() => setMobileOpen(false)}
          >
            The Home Shopee
          </Link>

          <nav className="header-links" aria-label="Primary">
            {navigation.map((item) => (
              <div
                key={item.slug}
                className={`nav-item ${openMega === item.slug ? "is-open" : ""}`}
                onMouseEnter={() =>
                  setOpenMega(item.children ? item.slug : null)
                }
                onMouseLeave={() => setOpenMega(null)}
              >
                <Link href={item.href}>{item.label}</Link>
                {item.children ? (
                  <div className="mega">
                    <div className="mega__inner">
                      <p className="mega__label">{item.label}</p>
                      <ul>
                        {item.children.map((child) => (
                          <li key={child.slug}>
                            <Link href={child.href}>{child.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          <div className="header-icons">
            <button
              type="button"
              className="header-icon"
              aria-label="Search"
              onClick={() => {
                setSearchOpen(true);
                setMobileOpen(false);
              }}
            >
              <IconSearch />
            </button>
            <button
              type="button"
              className="header-icon header-icon--cart"
              aria-label={`Cart, ${itemCount} items`}
              onClick={openCart}
            >
              <IconBag />
              <em>{itemCount}</em>
            </button>
            <button
              type="button"
              className={`header-icon menu-burger ${mobileOpen ? "is-open" : ""}`}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((o) => !o)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      {searchOpen ? (
        <div className="search-overlay">
          <form
            className="search-overlay__form"
            onSubmit={(e) => {
              e.preventDefault();
              setSearchOpen(false);
            }}
          >
            <IconSearch />
            <input
              type="search"
              placeholder="Search décor, dinnerware, paintings…"
              autoFocus
              aria-label="Search"
            />
            <button type="button" onClick={() => setSearchOpen(false)}>
              Close
            </button>
          </form>
        </div>
      ) : null}

      <div className={`mobile-drawer ${mobileOpen ? "is-open" : ""}`}>
        <div
          className="mobile-drawer__backdrop"
          onClick={() => setMobileOpen(false)}
        />
        <div className="mobile-drawer__panel">
          <div className="mobile-drawer__head">
            <p>Menu</p>
            <button type="button" onClick={() => setMobileOpen(false)}>
              Close
            </button>
          </div>
          {navigation.map((item) => (
            <div key={item.slug} className="mobile-nav__group">
              {item.children ? (
                <>
                  <button
                    type="button"
                    className="mobile-nav__parent"
                    onClick={() =>
                      setMobileExpand((s) =>
                        s === item.slug ? null : item.slug,
                      )
                    }
                  >
                    {item.label}
                    <span>{mobileExpand === item.slug ? "−" : "+"}</span>
                  </button>
                  {mobileExpand === item.slug ? (
                    <ul>
                      {item.children.map((child) => (
                        <li key={child.slug}>
                          <Link
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </>
              ) : (
                <Link href={item.href} onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
