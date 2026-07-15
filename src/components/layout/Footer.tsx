import Link from "next/link";
import { navigation } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <p className="brand-lockup" style={{ color: "inherit", letterSpacing: "0.08em" }}>
            The Home Shopee
          </p>
          <p>
            Soft light, layered textures, and a full catalogue of décor—from
            showpieces and lighting to dinnerware and furniture. A luxury home
            house for India.
          </p>
          <a
            href="https://www.instagram.com/the_home_shopee"
            target="_blank"
            rel="noreferrer"
          >
            Instagram · @the_home_shopee
          </a>
        </div>

        <div>
          <p className="footer-title">Shop</p>
          <ul>
            {navigation.slice(0, 6).map((item) => (
              <li key={item.slug}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="footer-title">Help</p>
          <ul>
            <li>
              <Link href="/about">About us</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/shipping">Shipping & returns</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="footer-title">Stay in the know</p>
          <p className="footer-note">
            New drops, styling notes, and quiet invitations—no noise.
          </p>
          <form className="newsletter" action="#">
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input id="email" type="email" placeholder="Email address" />
            <button type="submit" className="btn btn--primary btn--sm">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="footer-watermark" aria-hidden="true">
        <svg viewBox="0 0 1000 100" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
          <text
            x="500"
            y="78"
            textAnchor="middle"
            fontFamily="'Cormorant Garamond', Georgia, serif"
            fontSize="96"
            fontWeight="400"
            letterSpacing="6"
            fill="currentColor"
          >
            THE HOME SHOPEE
          </text>
        </svg>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} The Home Shopee. All rights reserved.</p>
      </div>
    </footer>
  );
}
