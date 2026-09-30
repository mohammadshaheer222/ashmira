"use client";

import React, { useState } from "react";
import FeatherIcon from "@/assets/custom-icon";
import { cn } from "@/lib/utils";

interface PurchaseOptionsProps {
  price: string;
  subscriptionPrice: string;
  currentStock: number;
  onAddToCart?: (qty: number, isSubscription: boolean) => void;
  className?: string;
}

export default function PurchaseOptions({
  price,
  subscriptionPrice,
  currentStock = 27,
  onAddToCart,
  className,
}: PurchaseOptionsProps) {
  const [quantity, setQuantity] = useState(1);
  const [isSubscription, setIsSubscription] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleDecrement = () => setQuantity((prev) => Math.max(1, prev - 1));
  const handleIncrement = () => setQuantity((prev) => Math.min(currentStock, prev + 1));

  const handleAddToCart = () => {
    setIsAdded(true);
    onAddToCart?.(quantity, isSubscription);
    setTimeout(() => setIsAdded(false), 1800);
  };

  return (
    <div className={cn("flex flex-col gap-4 w-full", className)}>
      <span className="text-xs font-medium text-text-muted">Amount & Method</span>
      <div className="flex items-center gap-4">
        <div className="inline-flex items-center bg-white-muted rounded-full px-2 py-1 gap-3 border border-white-light">
          <button
            type="button"
            onClick={handleDecrement}
            disabled={quantity <= 1}
            aria-label="Decrease quantity"
            className="w-6 h-6 rounded-full flex items-center justify-center text-heading hover:bg-black/5 disabled:opacity-40 cursor-pointer"
          >
            -
          </button>
          <span className="w-5 text-center text-xs font-semibold text-heading">
            {quantity}
          </span>
          <button
            type="button"
            onClick={handleIncrement}
            disabled={quantity >= currentStock}
            aria-label="Increase quantity"
            className="w-6 h-6 rounded-full flex items-center justify-center text-heading hover:bg-black/5 disabled:opacity-40 cursor-pointer"
          >
            +
          </button>
        </div>
        <span className="text-[11px] text-text-muted">Current stock: {currentStock}</span>
      </div>
      <div className="flex flex-col gap-2.5 pt-2">
        <button
          type="button"
          onClick={handleAddToCart}
          className="w-full mob-land:hidden bg-primary hover:opacity-90 active:scale-[0.99] text-text-on-primary text-xs font-semibold py-3.5 px-6 rounded-xl transition-all duration-150 cursor-pointer shadow-sm text-center"
        >
          {isAdded ? "Added to Cart ✓" : "Add to cart"}
        </button>
        <button
          type="button"
          onClick={() => setIsFavorite(!isFavorite)}
          className={cn(
            "w-full bg-transparent border py-3 px-6 rounded-xl text-xs font-medium transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer",
            isFavorite
              ? "border-primary text-primary bg-primary/10"
              : "border-primary/40 text-primary hover:bg-primary/5"
          )}
        >
          <span>Buy</span>
        </button>
      </div>
    </div>
  );
}
