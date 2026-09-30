"use client";

import React from "react";
import FeatherIcon from "@/assets/custom-icon";
import { cn } from "@/lib/utils";

interface ProductInfoProps {
  brand: string;
  name: string;
  subtitle: string;
  price: string;
  installmentPrice: string;
  rating: number;
  badge?: string;
  purchasedCount: number;
  className?: string;
}

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const total = 5;

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: total }).map((_, i) => (
          <FeatherIcon
            key={i}
            icon="star"
            iconWidth={13}
            iconHeight={13}
            iconFillColor={i < fullStars ? "var(--theme-primary)" : "none"}
            iconStrokeColor={i < fullStars ? "var(--theme-primary)" : "var(--theme-text-muted)"}
            iconStrokeWidth={1}
          />
        ))}
      </div>
      <span className="text-xs font-semibold text-heading ml-1">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function ProductInfo({
  brand,
  subtitle,
  price,
  installmentPrice,
  rating,
  badge = "Best Seller",
  purchasedCount = 88,
  className,
}: ProductInfoProps) {
  return (
    <div className={cn("flex flex-col gap-2 w-full", className)}>
      <div>
        <h1 className="text-2xl font-bold uppercase text-heading">
          {brand}
        </h1>
        <div className="flex items-center justify-between border-b border-white-light pb-3 text-xs text-text-muted">
          <span>{subtitle}</span>
        </div>
      </div>
      <div className="flex items-baseline gap-2 flex-wrap">
        <span className="text-2xl text-heading font-bold">{price}</span>
      </div>
    </div>
  );
}
