"use client";

import React from "react";
import FeatherIcon from "@/assets/custom-icon";
import { cn } from "@/lib/utils";

interface ProductInfoProps {
  brand: string;
  name: string;
  subtitle?: string;
  price: string;
  installmentPrice?: string;
  rating: number;
  reviewCount?: number;
  badge?: string;
  purchasedCount?: number;
  className?: string;
}

export default function ProductInfo({
  brand,
  name,
  subtitle,
  price,
  rating,
  reviewCount = 142,
  className,
}: ProductInfoProps) {
  const fullStars = Math.floor(rating);

  return (
    <div className={cn("flex flex-col gap-3 w-full", className)}>
      {/* ── Brand & Rating Row ── */}
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-text-muted">
          {brand}
        </span>
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <FeatherIcon
                key={i}
                icon="star"
                iconWidth={12}
                iconHeight={12}
                iconFillColor={i < fullStars ? "var(--theme-primary)" : "none"}
                iconStrokeColor={i < fullStars ? "var(--theme-primary)" : "var(--theme-text-muted)"}
                iconStrokeWidth={1.5}
              />
            ))}
          </div>
          <span className="text-xs font-semibold text-heading">{rating.toFixed(1)}</span>
          <span className="text-xs text-text-muted">({reviewCount})</span>
        </div>
      </div>

      {/* ── Product Title ── */}
      <h1 className="text-2xl sm-lap:text-xl font-bold text-heading leading-tight tracking-tight">
        {name}
      </h1>

      {/* ── Price & Subtitle ── */}
      <div className="flex items-baseline justify-between border-b border-white-light pb-4">
        <span className="text-2xl font-bold text-heading">{price}</span>
        {subtitle && (
          <span className="text-xs text-text-muted font-normal">{subtitle}</span>
        )}
      </div>
    </div>
  );
}
