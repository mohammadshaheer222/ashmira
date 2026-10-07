"use client";

import React, { useState } from "react";
import Image from "next/image";
import FeatherIcon from "@/assets/custom-icon";
import RelatedProducts from "./related-products";
import type { DetailedProduct, ProductVariant } from "@/types/product";
import { cn } from "@/lib/utils";

interface MobileProductViewProps {
  product: DetailedProduct;
  className?: string;
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
    <div className={cn("flex flex-col w-full min-h-screen bg-[#DDE9DE]", className)}>
      <div className="relative w-full aspect-[4/4.8] overflow-hidden flex items-center justify-center">
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="w-full h-full flex overflow-x-auto snap-x snap-mandatory scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none]"
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
                className="object-cover pointer-events-none"
              />
            </div>
          ))}
        </div>
        {product.images.length > 1 && (
          <div className="absolute bottom-10 left-0 right-0 flex items-center justify-center gap-1.5 z-20 pointer-events-auto">
            {product.images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToImage(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-200 cursor-pointer",
                  i === selectedImageIndex
                    ? "bg-[#256B3A] w-4"
                    : "bg-black/25 w-1.5"
                )}
              />
            ))}
          </div>
        )}
      </div>
      <div className="relative z-10 -mt-6 bg-white rounded-t-4xl p-4 shadow-[0_-8px_30px_rgba(0,0,0,0.06)] flex flex-col gap-6">
        <div className="flex flex-col gap-2.5 mt-1">
          <h1 className="text-[22px] font-semibold text-[#1B1B1B] leading-tight tracking-tight">
            {product.name}
          </h1>
          <p className="text-[13px] text-[#6B7280] leading-relaxed">
            {product.description ||
              "Minimize pores, control oil, and reveal clear, radiant skin."}
          </p>
          <div className="text-[17px] font-semibold text-[#256B3A] pt-0.5">
            {currentVariant.price || product.price}
          </div>
        </div>

        {/* Size / Variant Options */}
        <div className="grid grid-cols-2 gap-3 w-full">
          {variants.map((v, idx) => {
            const isSelected = selectedVariantIndex === idx;
            return (
              <button
                key={v.size}
                type="button"
                onClick={() => setSelectedVariantIndex(idx)}
                className={cn(
                  "h-12 px-4 rounded-2xl flex items-center justify-between text-[13px] font-medium transition-all duration-200 cursor-pointer select-none",
                  isSelected
                    ? "bg-[#DDE9DE] text-[#1B1B1B] font-semibold"
                    : "bg-[#F7F7F8] text-[#374151] hover:bg-[#EFEFF0]"
                )}
              >
                <span>{v.size}</span>
                <span className={cn(isSelected ? "text-[#1B1B1B]" : "text-[#4B5563]")}>
                  {v.price}
                </span>
              </button>
            );
          })}
        </div>

        {/* Action Row: Wishlist + Add to Cart */}
        <div className="flex items-center gap-3 pt-2">
          {/* Heart / Favorite Button */}
          <button
            type="button"
            onClick={() => setIsFavorite(!isFavorite)}
            aria-label="Wishlist"
            className={cn(
              "w-13 h-13 rounded-full flex items-center justify-center border transition-all duration-200 cursor-pointer shadow-sm shrink-0",
              isFavorite
                ? "border-red-400 bg-red-50 text-red-500"
                : "border-[#E5E7EB] bg-white text-[#1B1B1B] hover:border-gray-300"
            )}
          >
            <FeatherIcon
              icon="heart"
              iconWidth={18}
              iconHeight={18}
              iconStrokeWidth={1.8}
              iconStrokeColor={isFavorite ? "#ef4444" : "currentColor"}
              iconFillColor={isFavorite ? "#ef4444" : "none"}
            />
          </button>
          <button
            type="button"
            onClick={handleAddToCart}
            className="flex-1 h-13 rounded-full mb-2.5 bg-[#256B3A] hover:bg-[#1f5930] active:scale-[0.99] text-white text-[14px] font-medium flex items-center justify-center gap-2.5 shadow-sm transition-all duration-150 cursor-pointer"
          >
            <span>{isAdded ? "Added to Cart ✓" : "Add to Cart"}</span>
            <FeatherIcon
              icon="shopping-bag"
              iconWidth={17}
              iconHeight={17}
              iconStrokeWidth={2}
              iconStrokeColor="currentColor"
            />
          </button>
        </div>
        {product.related && product.related.length > 0 && (
          <div className="py-10 border-t border-[#F0F0F2]">
            <RelatedProducts products={product.related} />
          </div>
        )}
      </div>
    </div>
  );
}
