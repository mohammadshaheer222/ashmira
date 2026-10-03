import React from "react";

import Section from "@/components/ui/section";
import FaqSection from "@/app/(home)/(components)/widgets/faq/faq";
import {
  ProductGallery,
  ProductInfo,
  PurchaseOptions,
  ProductTabs,
  RelatedProducts,
  MobileProductView,
} from "@/components/product";

import type { DetailedProduct } from "@/types/product";

interface PageContentProps {
  product: DetailedProduct;
}

export default function PageContent({ product }: PageContentProps) {
  return (
    <div className="w-full min-h-screen bg-bg">
      <div className="mob-only flex-col w-full">
        <MobileProductView product={product} />
      </div>
      <div className="desk-only flex-col w-full max-w-7xl m-auto px-6 py-12 gap-20 md-lap:gap-12 sm-lap:max-w-full sm-lap:px-4">
        <Section id="product-overview" label="Product Overview">
          <div className="grid grid-cols-12 gap-20 md-lap:gap-10 sm-lap:gap-8 ipad-land:grid-cols-1 items-start">
            <div className="col-span-6 ipad-land:col-span-12">
              <ProductGallery
                images={product.images}
                productName={product.name}
              />
            </div>
            <div className="col-span-6 ipad-land:col-span-12 flex flex-col gap-6">
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
            </div>
          </div>
        </Section>
        <RelatedProducts products={product.related} />
        <FaqSection />
      </div>
    </div>
  );
}
