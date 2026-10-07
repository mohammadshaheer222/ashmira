"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/button";

interface ProductGalleryProps {
  images: string[];
  productName: string;
  className?: string;
}

export default function ProductGallery({
  images,
  productName,
  className,
}: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const activeImage = images[selectedIndex] || images[0];

  return (
    <div className={cn("flex flex-col gap-4 w-full", className)}>
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-white-muted/60 flex items-center justify-center shadow-card">
        <Image
          key={activeImage}
          src={activeImage}
          alt={`${productName} - View ${selectedIndex + 1}`}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 560px"
          className="object-fit transition-all duration-300 hover:scale-105"
        />
      </div>
      <div className="grid grid-cols-5 gap-3 w-full">
        {images.map((img, idx) => {
          const isSelected = selectedIndex === idx;
          return (
            <Button
              key={idx}
              type="button"
              onClick={() => setSelectedIndex(idx)}
              aria-label={`View photo ${idx + 1}`}
              className={cn(
                "relative aspect-square rounded-xl overflow-hidden bg-white-muted/60 cursor-pointer transition-all duration-200",
                isSelected
                  ? "border-2 border-primary shadow-xs ring-2 ring-primary/20 scale-[1.02]"
                  : ""
              )}
            >
              <Image
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                fill
                sizes="120px"
                className="object-contain p-2"
              />
            </Button>
          );
        })}
      </div>
    </div>
  );
}
