import Image from "next/image";

import { cn } from "@/lib/utils";
import FeatherIcon from "@/assets/custom-icon";

import type { Product } from "@/lib/constants/products-data";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className }: ProductCardProps) {
  const badgeColor =
    product.badge === "New"
      ? "bg-secondary text-white"
      : product.badge === "Bestseller"
        ? "bg-primary text-white"
        : "bg-white-muted text-text";

  return (
    <div
      className={cn("rounded-2xl overflow-hidden flex flex-col shadow-card p-2 w-full", className)}
      style={{ backgroundColor: "var(--theme-bg-card, #ffffff)" }}
    >
      <div className="relative w-full h-64 shrink-0 overflow-hidden rounded-2xl">
        <Image
          fill
          alt={product.name}
          src={product.image}
          sizes="(max-width: 767px) 100vw, 272px"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-3 px-2 pt-4">
        <div>
          <div className="flex items-center gap-1.5">
            <h3 className="text-sm font-bold text-heading leading-none">
              {product.name}
            </h3>
          </div>
          <p className="text-[11px] text-text-muted mt-0.5">{product.tagline}</p>
        </div>
        <p className="text-xs text-text-muted leading-relaxed line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-base font-bold text-heading">{product.price}</span>
          <button
            type="button"
            aria-label={`Add ${product.name} to cart`}
            className="w-10 h-10 rounded-2xl bg-white-muted hover:bg-white-light flex items-center justify-center active:scale-95 transition-all duration-150 cursor-pointer shrink-0"
          >
            <FeatherIcon
              iconWidth={16}
              iconHeight={16}
              icon={"shopping-cart"}
              iconStrokeColor="var(--theme-text, #374151)"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

