"use client";

import React, { useState } from "react";
import FeatherIcon from "@/assets/custom-icon";
import ProductGallery from "./product-gallery";
import ProductInfo from "./product-info";
import PurchaseOptions from "./purchase-options";
import ProductTabs from "./product-tabs";
import RelatedProducts from "./related-products";
import type { DetailedProduct } from "@/types/product";
import { cn } from "@/lib/utils";

interface MobileProductViewProps {
  product: DetailedProduct;
  className?: string;
}

export default function MobileProductView({
  product,
  className,
}: MobileProductViewProps) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className={cn("flex flex-col w-full min-h-screen bg-bg relative pb-28", className)}>
      <div className="flex flex-col gap-5 w-full">
        <ProductGallery
          images={product.images}
          productName={product.name}
        />
        <ProductInfo
          brand={product.brand}
          name={product.name}
          subtitle={product.subtitle}
          price={product.price}
          installmentPrice={product.installmentPrice}
          rating={product.rating}
          badge={product.badge}
          purchasedCount={product.purchasedCount}
        />
        <PurchaseOptions
          price={product.price}
          subscriptionPrice={product.subscriptionPrice}
          currentStock={product.currentStock}
        />
        <ProductTabs tabs={product.tabs} />
        <RelatedProducts products={product.related} />
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-bg-card/95 backdrop-blur-md border-t border-white-light px-4 py-3 flex items-center justify-between gap-3 shadow-lg">
        <div className="flex flex-col">
          <span className="text-[10px] text-text-muted leading-none">Total Price</span>
          <span className="text-lg font-bold text-heading leading-tight">{product.price}</span>
        </div>
        <button
          type="button"
          onClick={handleAddToCart}
          className="flex-1 max-w-[220px] h-11 rounded-xl bg-primary hover:opacity-90 active:scale-[0.98] text-text-on-primary text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
        >
          <span>{isAdded ? "Added to Cart ✓" : "Add to Cart"}</span>
          <FeatherIcon
            icon="shopping-bag"
            iconWidth={15}
            iconHeight={15}
            iconStrokeWidth={2}
            iconStrokeColor="currentColor"
          />
        </button>
      </div>
    </div>
  );
}
