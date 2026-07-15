import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "The Home Shopee — curated décor for soft, lived-in Indian homes.",
};

export default function AboutPage() {
  return (
    <div className="prose-page">
      <p className="eyebrow">Our story</p>
      <h1>A full house of luxurious finds.</h1>
      <p>
        The Home Shopee is a luxury home-décor destination—showpieces, lighting,
        dinnerware, paintings, furniture, clocks, and botanicals—curated for
        homes that want presence without noise.
      </p>
      <p>
        We organise shopping the way collectors browse: beautifully curated
        collections, polished product stories, and a cart that feels
        effortless.
      </p>
      <p>
        Follow along on Instagram at{" "}
        <a href="https://www.instagram.com/the_home_shopee" target="_blank" rel="noreferrer">
          @the_home_shopee
        </a>{" "}
        for new drops and styling notes.
      </p>
      <p style={{ marginTop: "2rem" }}>
        <Link href="/collections/new-arrivals" className="btn btn--primary">
          Shop the collection
          <span className="btn__icon" aria-hidden>
            →
          </span>
        </Link>
      </p>
    </div>
  );
}
