"use client";

import { useEffect, useState } from "react";

import { gallery } from "@/lib/site";
import { cn } from "@/lib/utils";

const INTERVAL_MS = 6500;

export function HeroPhotos() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (gallery.length < 2 || paused) {
      return;
    }

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % gallery.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <div
      className="relative overflow-hidden rounded-3xl border border-border bg-muted/40 shadow-[0_20px_50px_oklch(0.3_0.04_50_/_0.08)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[3/2] w-full">
        {gallery.map((photo, photoIndex) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={photo.src}
            src={photo.src}
            alt={photoIndex === index ? photo.alt : ""}
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
              photoIndex === index ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
        {gallery.length > 0 ? (
          <div className="absolute inset-0 bg-linear-to-t from-black/25 to-transparent" />
        ) : null}
      </div>
      {gallery.length > 1 ? (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
          {gallery.map((photo, photoIndex) => (
            <button
              key={photo.src}
              type="button"
              aria-label={`Show photo ${photoIndex + 1}`}
              onClick={() => setIndex(photoIndex)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                photoIndex === index
                  ? "w-6 bg-white"
                  : "w-1.5 bg-white/50 hover:bg-white/80",
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
