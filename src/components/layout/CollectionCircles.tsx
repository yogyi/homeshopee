"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { circleCollections } from "@/lib/navigation";

/** Decor Kart–style circular category row with auto-scroll */
export function CollectionCircles({
  showTitle = false,
}: {
  showTitle?: boolean;
}) {
  const railRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    let frame = 0;
    const speed = 0.45;

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

  const items = [...circleCollections, ...circleCollections];

  return (
    <section
      className="circle-section circle-section--top"
      aria-label="Shop collections"
    >
      <div className="circle-section__inner">
        {showTitle ? (
          <div className="section-head section-head--center">
            <div>
              <p className="eyebrow">Collections</p>
              <h2>Shop the house</h2>
            </div>
          </div>
        ) : null}
      </div>

      <div
        className="circle-rail"
        ref={railRef}
        aria-label="Auto-scrolling collections"
      >
        {items.map((cat, index) => (
          <Link
            key={`${cat.href}-${index}`}
            href={cat.href}
            className="circle-cat"
            tabIndex={index >= circleCollections.length ? -1 : undefined}
            aria-hidden={index >= circleCollections.length ? true : undefined}
          >
            <span className="circle-cat__ring">
              <span className="circle-cat__media">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  priority={index < 6}
                  sizes="120px"
                  className="object-cover"
                />
              </span>
            </span>
            <span className="circle-cat__label">{cat.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
