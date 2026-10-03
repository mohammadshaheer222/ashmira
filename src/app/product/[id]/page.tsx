import React from "react";
import type { Metadata } from "next";

import PageContent from "./(components)/page-content";
import { SINGLE_PRODUCT_DATA } from "@/lib/constants/single-product-data";

import { PRODUCTS } from "@/lib/constants/products-data";
import type { DetailedProduct } from "@/types/product";

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

  const product: DetailedProduct = match
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

  return <PageContent product={product} />;
}
