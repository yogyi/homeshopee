import Image from "next/image";
import Link from "next/link";
import { CollectionCircles } from "@/components/layout/CollectionCircles";
import { ProductCard } from "@/components/product/ProductCard";
import { InstagramReels } from "@/components/social/InstagramReels";
import { Reveal } from "@/components/ui/Reveal";
import { editorialBands } from "@/lib/navigation";
import {
  getCatalogPlanters,
  getCatalogSculptures,
  getFeaturedProducts,
  getNewArrivals,
  getProductsForCollection,
  products,
} from "@/lib/products";

export default function HomePage() {
  const planters = getCatalogPlanters();
  const sculptures = getCatalogSculptures();
  const catalogIds = new Set([...planters, ...sculptures].map((p) => p.id));
  const arrivals = getNewArrivals()
    .filter((p) => !catalogIds.has(p.id))
    .slice(0, 8);
  const featured = getFeaturedProducts()
    .filter((p) => !catalogIds.has(p.id))
    .slice(0, 8);
  const decor = getProductsForCollection("home-decor")
    .filter((p) => !catalogIds.has(p.id))
    .slice(0, 4);
  const trustCount = products.length;

  return (
    <>
      <CollectionCircles />

      <section className="hero hero--compact">
        <div className="hero__media">
          <Image
            src="/collections/hero-living.jpg"
            alt="Luxury living room styled with The Home Shopee décor"
            fill
            priority
            sizes="100vw"
          />
          <div className="hero__veil" />
        </div>
        <div className="hero__content">
          <p className="eyebrow" style={{ color: "rgba(244,239,228,0.85)" }}>
            The Home Shopee
          </p>
          <h1>Luxury home décor, curated for living.</h1>
          <p>
            Showpieces, dinnerware, paintings, clocks, and botanicals—an
            entire house of beautiful finds.
          </p>
          <div className="hero__cta">
            <Link href="/collections/new-arrivals" className="btn btn--primary">
              Shop new arrivals
              <span className="btn__icon" aria-hidden>
                →
              </span>
            </Link>
            <Link
              href="/collections/home-decor"
              className="btn btn--ghost"
              style={{
                color: "#f7f2e8",
                borderColor: "rgba(247,242,232,0.35)",
              }}
            >
              Explore décor
            </Link>
          </div>
        </div>
      </section>

      <div className="marquee" aria-label="Promotions">
        <div className="marquee__track">
          {[0, 1].map((dup) => (
            <div className="marquee__content" key={dup} aria-hidden={dup === 1}>
              <span>★ New Arrivals · Beautiful Finds</span>
              <span>✦ Free Shipping on Prepaid Above ₹2,999</span>
              <span>★ Shop Now, Pay on Delivery</span>
              <span>✦ {trustCount}+ Curated Luxury Pieces</span>
              <span>★ Easy Returns Within 7 Days</span>
              <span>✦ Secure Packaging for Fragile Décor</span>
            </div>
          ))}
        </div>
      </div>

      <InstagramReels />

      <section className="section">
        <Reveal>
          <div className="section-head">
            <div>
              <p className="eyebrow">The planter house</p>
              <h2>Sets of three, ready for home</h2>
            </div>
            <Link href="/collections/planters">Shop planters</Link>
          </div>
        </Reveal>
        <div className="product-grid">
          {planters.map((product, i) => (
            <Reveal key={product.id} delay={(i % 4) * 45}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal>
          <div className="section-head">
            <div>
              <p className="eyebrow">Sculptural décor</p>
              <h2>Showpieces for the console</h2>
            </div>
            <Link href="/collections/showpieces">Shop showpieces</Link>
          </div>
        </Reveal>
        <div className="product-grid">
          {sculptures.map((product, i) => (
            <Reveal key={product.id} delay={(i % 4) * 45}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal>
          <div className="section-head">
            <div>
              <p className="eyebrow">Just landed</p>
              <h2>New arrivals</h2>
            </div>
            <Link href="/collections/new-arrivals">View all</Link>
          </div>
        </Reveal>
        <div className="product-grid">
          {arrivals.slice(0, 8).map((product, i) => (
            <Reveal key={product.id} delay={(i % 4) * 45}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal>
          <div className="section-head">
            <div>
              <p className="eyebrow">Tabletop & accents</p>
              <h2>Decor essentials</h2>
            </div>
            <Link href="/collections/home-decor">Shop décor</Link>
          </div>
        </Reveal>
        <div className="product-grid">
          {decor.map((product, i) => (
            <Reveal key={product.id} delay={i * 45}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </section>

      {editorialBands.map((band) => (
        <section key={band.href} className="section">
          <div className={`story-band ${"reverse" in band && band.reverse ? "is-reverse" : ""}`}>
            <div className="story-band__media">
              <div className="story-band__frame">
                <Image
                  src={band.image}
                  alt={band.imageAlt}
                  fill
                  sizes="(max-width:768px) 100vw, 48vw"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="story-band__copy">
              <p className="eyebrow story-band__eyebrow">{band.eyebrow}</p>
              <h2>{band.title}</h2>
              <p>{band.body}</p>
              <Link href={band.href} className="btn btn--primary">
                {band.cta}
                <span className="btn__icon" aria-hidden>
                  →
                </span>
              </Link>
            </div>
          </div>
        </section>
      ))}

      <section className="section">
        <Reveal>
          <div className="section-head">
            <div>
              <p className="eyebrow">Editor’s pick</p>
              <h2>Add to your décor collection</h2>
            </div>
            <Link href="/collections/sale">Shop sale</Link>
          </div>
        </Reveal>
        <div className="product-grid">
          {featured.map((product, i) => (
            <Reveal key={product.id} delay={(i % 4) * 45}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="promise-band">
        <Reveal>
          <div className="section-head section-head--center">
            <div>
              <p className="eyebrow">The Home Shopee promise</p>
              <h2>Why collectors shop with us</h2>
            </div>
          </div>
        </Reveal>
        <div className="promise-grid">
          {[
            {
              title: "Curated, not crowded",
              body: "Pieces chosen for form, finish, and real Indian homes.",
              image: "/collections/cat-decor.jpg",
              href: "/collections/home-decor",
            },
            {
              title: "Secure packaging",
              body: "Layered cartons built for glass, ceramic, and metal.",
              image: "/collections/cat-glassware.jpg",
              href: "/collections/glassware",
            },
            {
              title: "Pay on delivery",
              body: "COD on eligible orders—doorstep calm when you want it.",
              image: "/products/curated/prod-tea-set.jpg",
              href: "/collections/dinnerware",
            },
            {
              title: "Easy returns",
              body: "Unused pieces return within 7 days—no drama.",
              image: "/products/curated/prod-peacock-bowl.jpg",
              href: "/collections/showpieces",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 50}>
              <Link href={item.href} className="promise-card">
                <span className="promise-card__media">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(max-width:768px) 100vw, 25vw"
                    className="object-cover"
                  />
                </span>
                <span className="promise-card__copy">
                  <span className="promise-card__index">0{i + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="quote-split">
        <div className="quote-split__media">
          <Image
            src="/collections/hero-living.jpg"
            alt="Styled luxury living room"
            fill
            sizes="(max-width:900px) 100vw, 48vw"
            className="object-cover"
          />
        </div>
        <div className="quote-split__copy">
          <Reveal>
            <p className="eyebrow">Loved by collectors</p>
            <blockquote>
              “Unusual pieces that blend together beautifully—stunning accents
              for a home that already knows its own taste.”
            </blockquote>
            <div className="quote-split__meta">
              <p>Real rooms. Statement finds. Soft light.</p>
              <Link href="/collections/home-decor" className="btn btn--primary">
                Shop the look
                <span className="btn__icon" aria-hidden>
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
