import React from "react";
import type { Metadata } from "next";
import { SINGLE_PRODUCT_DATA } from "@/lib/constants/single-product-data";
import { PRODUCTS } from "@/lib/constants/products-data";
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

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const match = PRODUCTS.find((p) => p.id === id);
  const title = match ? match.name : SINGLE_PRODUCT_DATA.name;

  return {
    title: `${title} - Ashmira`,
    description: match ? match.description : SINGLE_PRODUCT_DATA.description,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const match = PRODUCTS.find((p) => p.id === id);

  // Use matching product info or default to single product design data
  const product = match
    ? {
      ...SINGLE_PRODUCT_DATA,
      id: match.id,
      name: match.name,
      price: match.price,
      description: match.description,
      badge: match.badge || SINGLE_PRODUCT_DATA.badge,
      rating: match.rating || SINGLE_PRODUCT_DATA.rating,
      images: [match.image, ...SINGLE_PRODUCT_DATA.images.slice(1)],
    }
    : SINGLE_PRODUCT_DATA;

  return (
    <div className="w-full max-w-7xl h-full m-auto flex flex-col gap-20 py-20 sm-lap:max-w-full mob-land:py-0">
      <div className="mob-only flex-col w-full">
        <MobileProductView product={product} />
      </div>
      <div className="desk-only flex-col w-full max-w-7xl m-auto gap-20 sm-lap:max-w-full">
        <Section id="product-overview" label="Product Overview">
          <div className="grid grid-cols-12 gap-20 ipad-land:grid-cols-1 items-start">
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
      </div>
    </div>
  );
}
