"use client";

import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/site";

const REELS = [
  "Dbh4WCNJnvz",
  "DaKlCwXpPQn",
  "DZJoO6SphUm",
  "DY4ERkcMqg1",
];

export function InstagramReels() {
  return (
    <section className="ig-reels" aria-label="Instagram reels">
      <div className="ig-reels__head">
        <p className="eyebrow">On Instagram</p>
        <h2>See the house in motion</h2>
        <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
          Follow {INSTAGRAM_HANDLE}
        </a>
      </div>

      <div className="ig-reels__rail">
        {REELS.map((id, index) => (
          <article key={id} className="ig-reels__card">
            <iframe
              src={`https://www.instagram.com/reel/${id}/embed`}
              title={`Home Shopee Instagram reel ${index + 1}`}
              loading={index === 0 ? "eager" : "lazy"}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          </article>
        ))}
      </div>
    </section>
  );
}
