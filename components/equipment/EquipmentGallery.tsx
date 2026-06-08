"use client";

import Image from "next/image";
import { useState } from "react";
import type { EquipmentGalleryImage } from "@/data/equipment";

type EquipmentGalleryProps = {
  images: EquipmentGalleryImage[];
};

export function EquipmentGallery({ images }: EquipmentGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex];

  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
        <Image
          src={active.src}
          alt={active.alt}
          fill
          priority={activeIndex === 0}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Product gallery">
        {images.map((image, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={image.src}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={image.alt}
              onClick={() => setActiveIndex(index)}
              className={`relative shrink-0 w-20 h-16 sm:w-24 sm:h-20 rounded-lg overflow-hidden border-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 ${
                isActive ? "border-yellow-500" : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={image.src}
                alt=""
                fill
                sizes="96px"
                className="object-cover"
                aria-hidden
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
