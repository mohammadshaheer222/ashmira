"use client";

import React, { useState } from "react";
import FeatherIcon from "@/assets/custom-icon";
import { cn } from "@/lib/utils";

interface PurchaseOptionsProps {
  price?: string;
  subscriptionPrice?: string;
  currentStock?: number;
  onAddToCart?: (qty: number) => void;
  className?: string;
}

export default function PurchaseOptions({
  currentStock = 27,
  onAddToCart,
  className,
}: PurchaseOptionsProps) {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleDecrement = () => setQuantity((prev) => Math.max(1, prev - 1));
  const handleIncrement = () => setQuantity((prev) => Math.min(currentStock, prev + 1));

  const handleAddToCart = () => {
    setIsAdded(true);
    onAddToCart?.(quantity);
    setTimeout(() => setIsAdded(false), 1800);
  };

  return (
    <div className={cn("flex items-center gap-3 w-full pt-1", className)}>
      {/* ── Minimal Quantity Stepper ── */}
      <div className="inline-flex items-center bg-white-muted rounded-xl px-2.5 py-1.5 gap-2.5 border border-white-light shrink-0">
        <button
          type="button"
          onClick={handleDecrement}
          disabled={quantity <= 1}
          aria-label="Decrease quantity"
          className="w-8 h-8 rounded-lg flex items-center justify-center text-heading hover:bg-black/5 disabled:opacity-30 cursor-pointer transition-colors text-base font-medium"
        >
          -
        </button>
        <span className="w-6 text-center text-sm font-semibold text-heading">
          {quantity}
        </span>
        <button
          type="button"
          onClick={handleIncrement}
          disabled={quantity >= currentStock}
          aria-label="Increase quantity"
          className="w-8 h-8 rounded-lg flex items-center justify-center text-heading hover:bg-black/5 disabled:opacity-30 cursor-pointer transition-colors text-base font-medium"
        >
          +
        </button>
      </div>

      {/* ── Add to Cart Button ── */}
      <button
        type="button"
        onClick={handleAddToCart}
        className="flex-1 bg-primary hover:opacity-90 active:scale-[0.99] text-text-on-primary text-sm font-semibold py-3.5 px-6 rounded-xl transition-all duration-150 cursor-pointer shadow-xs text-center flex items-center justify-center gap-2"
      >
        <FeatherIcon
          icon="shopping-bag"
          iconWidth={16}
          iconHeight={16}
          iconStrokeWidth={2}
          iconStrokeColor="currentColor"
        />
        <span>{isAdded ? "Added to Cart ✓" : "Add to Cart"}</span>
      </button>
    </div>
  );
}
