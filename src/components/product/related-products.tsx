"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Section from "@/components/ui/section";
import ProductCard from "@/components/ui/product-card";
import type { RelatedProductItem } from "@/types/product";
import type { Product } from "@/lib/constants/products-data";
import { cn } from "@/lib/utils";
import SectionHeader from "../ui/section-header";

interface RelatedProductsProps {
  products: (RelatedProductItem | Product)[];
  className?: string;
}

export default function RelatedProducts({ products, className }: RelatedProductsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    containerRef.current?.scrollBy({ left: -280, behavior: "smooth" });
  };

  const handleNext = () => {
    containerRef.current?.scrollBy({ left: 280, behavior: "smooth" });
  };

  return (
    <Section
      id="related-products"
      label="You might also like"
    >
      <SectionHeader
        align="center"
        eyebrow="Related Products"
        heading="You might also like"
      />
      <div
        ref={containerRef}
        className="grid grid-cols-4 sm-lap:grid-cols-2 gap-6 sm-lap:gap-4 mob-land:gap-3"
      >
        {products.map((item) => {
          const productData: Product = {
            id: item.id,
            name: item.name,
            tagline:
              "tagline" in item && typeof item.tagline === "string"
                ? item.tagline
                : "Pure & Cold-Pressed",
            description:
              "description" in item && typeof item.description === "string"
                ? item.description
                : "Deeply nourishing botanical formula for radiant skin and daily wellness.",
            image: item.image,
            price: item.price,
            rating: item.rating,
            reviewCount:
              "reviewCount" in item && typeof item.reviewCount === "number"
                ? item.reviewCount
                : 128,
            badge: item.badge,
          };

          return <ProductCard key={item.id} product={productData} />;
        })}
      </div>
    </Section>
  );
}
