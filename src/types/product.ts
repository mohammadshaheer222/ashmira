export interface ProductVariant {
  size: string;
  price: string;
  isPopular?: boolean;
}

export interface RelatedProductItem {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  rating: number;
  image: string;
  badge?: string;
}

export interface DetailedProduct {
  id: string;
  brand: string;
  name: string;
  subtitle: string;
  description: string;
  price: string;
  subscriptionPrice: string;
  installmentPrice: string;
  size: string;
  rating: number;
  reviewCount: number;
  purchasedCount: number;
  currentStock: number;
  badge?: string;
  images: string[];
  variants: ProductVariant[];
  tabs: {
    howToUse: string;
    benefits: string;
    ingredients: string;
    returnPolicy: string;
  };
  related: RelatedProductItem[];
}

