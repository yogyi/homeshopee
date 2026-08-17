"use client";

import { useEffect, useRef } from "react";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/site";

const REELS = [
  "Dbh4WCNJnvz",
  "DaKlCwXpPQn",
  "DZJoO6SphUm",
  "DY4ERkcMqg1",
];

export function InstagramReels() {
  const railRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const items = [...REELS, ...REELS];

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const videos = Array.from(rail.querySelectorAll("video"));
    videos.forEach((video) => {
      video.muted = true;
      void video.play().catch(() => undefined);
    });

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    let frame = 0;
    const speed = 0.55;

    const tick = () => {
      if (!pausedRef.current) {
        rail.scrollLeft += speed;
        const half = rail.scrollWidth / 2;
        if (rail.scrollLeft >= half) {
          rail.scrollLeft -= half;
        }
      }
      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);

    const pause = () => {
      pausedRef.current = true;
    };
    const resume = () => {
      pausedRef.current = false;
    };

    rail.addEventListener("mouseenter", pause);
    rail.addEventListener("mouseleave", resume);
    rail.addEventListener("touchstart", pause, { passive: true });
    rail.addEventListener("touchend", resume, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      rail.removeEventListener("mouseenter", pause);
      rail.removeEventListener("mouseleave", resume);
      rail.removeEventListener("touchstart", pause);
      rail.removeEventListener("touchend", resume);
    };
  }, []);

  return (
    <section className="ig-reels" aria-label="House films">
      <div className="ig-reels__head">
        <p className="eyebrow">On film</p>
        <h2>See the house in motion</h2>
        <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
          Follow {INSTAGRAM_HANDLE}
        </a>
      </div>

      <div
        className="ig-reels__rail"
        ref={railRef}
        aria-label="Auto-scrolling house films"
      >
        {items.map((id, index) => (
          <article
            key={`${id}-${index}`}
            className="ig-reels__card"
            aria-hidden={index >= REELS.length ? true : undefined}
          >
            <video
              src={`/reels/${id}.mp4`}
              autoPlay
              muted
              loop
              playsInline
              preload={index < REELS.length ? "metadata" : "none"}
              tabIndex={index >= REELS.length ? -1 : undefined}
            />
          </article>
        ))}
      </div>
    </section>
  );
}
