export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  badge?: string;
  rating: number;
  reviewCount: number;
  price: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Argan Gold Oil",
    tagline: "Pure & Cold-Pressed",
    description:
      "Deeply nourishing Moroccan argan oil for radiant skin & silky hair.",
    image:
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600&auto=format&fit=crop&q=80",
    badge: "Bestseller",
    rating: 4.9,
    reviewCount: 312,
    price: "₹599",
    isBestseller: true,
  },
  {
    id: "p2",
    name: "Rosehip Elixir",
    tagline: "Antioxidant Rich",
    description:
      "Brightening rosehip seed oil that visibly reduces fine lines & dark spots.",
    image:
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600&auto=format&fit=crop&q=80",
    badge: "New",
    rating: 4.8,
    reviewCount: 187,
    price: "₹429",
    isNew: true,
  },
  {
    id: "p3",
    name: "Black Seed Oil",
    tagline: "Therapeutic Grade",
    description:
      "Premium Nigella Sativa oil renowned for its powerful anti-inflammatory benefits.",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&auto=format&fit=crop&q=80",
    rating: 4.7,
    reviewCount: 248,
    price: "₹349",
  },
  {
    id: "p4",
    name: "Jojoba Serum",
    tagline: "Balancing & Lightweight",
    description:
      "Ultra-light jojoba oil that mimics your skin's natural sebum for perfect balance.",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&auto=format&fit=crop&q=80",
    badge: "Editor's Pick",
    rating: 4.8,
    reviewCount: 156,
    price: "₹290",
  },
];
