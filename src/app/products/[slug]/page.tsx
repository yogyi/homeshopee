import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Breadcrumbs,
  ProductGallery,
  ProductPurchase,
} from "@/components/product/ProductPurchase";
import { ProductCard } from "@/components/product/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import { collectionMeta } from "@/lib/navigation";
import {
  getProductBySlug,
  getRelatedProducts,
  products,
} from "@/lib/products";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product" };
  return {
    title: product.name,
    description: product.description.slice(0, 160),
  };
}

function categoryCrumb(category: string) {
  const match = Object.entries(collectionMeta).find(
    ([, meta]) => meta.category === category && !meta.subcategory,
  );
  if (!match) return { label: "Shop", href: "/collections/new-arrivals" };
  return { label: match[1].title, href: `/collections/${match[0]}` };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);
  const parent = categoryCrumb(product.category);

  return (
    <>
      <article className="pdp">
        <ProductGallery product={product} />
        <div className="pdp-info">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              parent,
              { label: product.name },
            ]}
          />
          {product.badge ? <p className="eyebrow">{product.badge}</p> : null}
          <h1>{product.name}</h1>
          <p className="desc">{product.description}</p>
          <ProductPurchase product={product} />
        </div>
      </article>

      {related.length > 0 ? (
        <section className="section">
          <Reveal>
            <div className="section-head">
              <div>
                <p className="eyebrow">More to love</p>
                <h2>You may also like</h2>
              </div>
            </div>
          </Reveal>
          <div className="product-grid">
            {related.map((item, i) => (
              <Reveal key={item.id} delay={i * 50}>
                <ProductCard product={item} />
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
