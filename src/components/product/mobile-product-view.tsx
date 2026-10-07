"use client";

import Image from "next/image";
import React, { useState } from "react";

import FeatherIcon from "@/assets/custom-icon";
import RelatedProducts from "./related-products";

import { cn } from "@/lib/utils";
import Button from "@/components/ui/button";
import type { DetailedProduct, ProductVariant } from "@/types/product";

interface MobileProductViewProps {
  className?: string;
  product: DetailedProduct;
}

const DEFAULT_VARIANTS: ProductVariant[] = [
  { size: "30ml", price: "₹899", isPopular: true },
  { size: "50ml", price: "₹1,199" },
];

export default function MobileProductView({
  product,
  className,
}: MobileProductViewProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const variants =
    product.variants && product.variants.length > 0
      ? product.variants
      : DEFAULT_VARIANTS;

  const currentVariant = variants[selectedVariantIndex] || variants[0];
  const carouselRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    if (target.clientWidth > 0) {
      const newIndex = Math.round(target.scrollLeft / target.clientWidth);
      if (newIndex !== selectedImageIndex && newIndex >= 0 && newIndex < product.images.length) {
        setSelectedImageIndex(newIndex);
      }
    }
  };

  const scrollToImage = (index: number) => {
    setSelectedImageIndex(index);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * carouselRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className={cn("relative w-full min-h-screen bg-bg-herbal overflow-x-hidden", className)}>
      <div className="fixed top-0 left-0 right-0 z-0 w-full aspect-[4/4.8] max-h-[65vh] overflow-hidden flex items-center justify-center bg-bg-herbal">
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="w-full h-full flex overflow-x-auto snap-x snap-mandatory scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
        >
          {product.images.map((img, i) => (
            <div
              key={i}
              className="relative w-full h-full shrink-0 snap-center snap-always"
            >
              <Image
                src={img}
                alt={`${product.name} - view ${i + 1}`}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover pointer-events-none select-none"
              />
            </div>
          ))}
        </div>
        {product.images.length > 1 && (
          <div className="absolute bottom-14 left-0 right-0 flex items-center justify-center gap-1.5 z-20 pointer-events-auto">
            {product.images.map((_, i) => (
              <Button
                key={i}
                type="button"
                onClick={() => scrollToImage(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-200 cursor-pointer",
                  i === selectedImageIndex
                    ? "bg-primary w-4"
                    : "bg-black/25 w-1.5"
                )}
              />
            ))}
          </div>
        )}
      </div>
      <div className="w-full aspect-[4/4.8] max-h-[65vh] pointer-events-none" />
      <div className="relative z-10 -mt-20 min-h-screen bg-bg-card rounded-t-[36px] p-5 pb-16 shadow-[0_-16px_40px_rgba(0,0,0,0.14)] flex flex-col gap-6">
        <div className="flex flex-col gap-2.5">
          <h1 className="text-[22px] font-semibold text-heading leading-tight tracking-tight">
            {product.name}
          </h1>
          <p className="text-[13px] text-text-muted leading-relaxed">
            {product.description ||
              "Minimize pores, control oil, and reveal clear, radiant skin."}
          </p>
          <div className="text-[17px] font-semibold text-primary pt-0.5">
            {currentVariant.price || product.price}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 w-full">
          {variants.map((v, idx) => {
            const isSelected = selectedVariantIndex === idx;
            return (
              <Button
                key={v.size}
                type="button"
                onClick={() => setSelectedVariantIndex(idx)}
                className={cn(
                  "h-12 px-4 rounded-2xl flex items-center justify-between text-[13px] font-medium transition-all duration-200 cursor-pointer select-none",
                  isSelected
                    ? "bg-bg-herbal text-heading font-semibold"
                    : "bg-white-muted text-text hover:bg-white-light"
                )}
              >
                <span>{v.size}</span>
                <span className={cn(isSelected ? "text-heading" : "text-text-muted")}>
                  {v.price}
                </span>
              </Button>
            );
          })}
        </div>
        <div className="flex items-center gap-3 pt-2">
          <Button
            type="button"
            onClick={() => setIsFavorite(!isFavorite)}
            aria-label="Wishlist"
            className={cn(
              "w-13 h-13 rounded-full flex items-center justify-center border transition-all duration-200 cursor-pointer shadow-sm shrink-0",
              isFavorite
                ? "border-primary bg-primary/10 text-primary"
                : "border-white-light bg-bg-card text-heading hover:border-white-light/80"
            )}
          >
            <FeatherIcon
              icon="heart"
              iconWidth={18}
              iconHeight={18}
              iconStrokeWidth={1.8}
              iconStrokeColor={isFavorite ? "var(--theme-primary, #256B3A)" : "currentColor"}
              iconFillColor={isFavorite ? "var(--theme-primary, #256B3A)" : "none"}
            />
          </Button>
          <Button
            type="button"
            onClick={handleAddToCart}
            className="flex-1 h-13 rounded-full mb-2.5 bg-primary hover:opacity-90 active:scale-[0.99] text-text-on-primary text-[14px] font-medium flex items-center justify-center gap-2.5 shadow-sm transition-all duration-150 cursor-pointer"
          >
            <span>{isAdded ? "Added to Cart ✓" : "Add to Cart"}</span>
            <FeatherIcon
              icon="shopping-bag"
              iconWidth={17}
              iconHeight={17}
              iconStrokeWidth={2}
              iconStrokeColor="currentColor"
            />
          </Button>
        </div>
        {product.related && product.related.length > 0 && (
          <div className="pt-10 border-t border-white-light">
            <RelatedProducts products={product.related} />
          </div>
        )}
      </div>
    </div>
  );
}
