import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import { collectionMeta } from "@/lib/navigation";
import { getProductsForCollection } from "@/lib/products";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.keys(collectionMeta).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = collectionMeta[slug];
  if (!meta) return { title: "Collection" };
  return { title: meta.title, description: meta.description };
}

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params;
  const meta = collectionMeta[slug];
  if (!meta) notFound();

  const items = getProductsForCollection(slug);

  return (
    <>
      <header className="page-hero">
        <p className="eyebrow">Collection</p>
        <h1>{meta.title}</h1>
        <p>{meta.description}</p>
      </header>

      {items.length === 0 ? (
        <div className="empty-collection">
          <p>
            This collection is part of the full Home Shopee house. Product
            photography for {meta.title.toLowerCase()} will appear here as the
            client Drive listing grows—browse Decor, Lighting, or New Arrivals
            in the meantime.
          </p>
        </div>
      ) : (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="product-grid">
            {items.map((product, i) => (
              <Reveal key={product.id} delay={(i % 4) * 40}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
