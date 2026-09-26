"use client";

import React from "react";

import ReviewCardItem from "./review-card";
import type { ReviewCard } from "@/lib/constants/reviews-data";

const FADE_MASK = {
  maskImage:
    "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
  WebkitMaskImage:
    "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
} as React.CSSProperties;

interface ScrollColumnProps {
  speed?: string;
  className?: string;
  cards: ReviewCard[];
  direction?: "up" | "down";
}

export default function ScrollColumn({
  cards,
  speed = "30s",
  direction = "up",
  className = "",
}: ScrollColumnProps) {
  const doubled = [...cards, ...cards];

  return (
    <div
      className={`relative overflow-hidden flex-1 min-w-0 ${className}`}
      style={FADE_MASK}
    >
      <div
        className="flex flex-col gap-3"
        style={{
          animation: `reviews-scroll-${direction} ${speed} linear infinite`,
        }}
      >
        {doubled.map((review, i) => (
          <ReviewCardItem key={`${review.id}-${i}`} review={review} />
        ))}
      </div>
    </div>
  );
}
