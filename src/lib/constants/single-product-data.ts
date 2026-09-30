import type { DetailedProduct } from "@/types/product";

export const SINGLE_PRODUCT_DATA: DetailedProduct = {
  id: "chicori-velvety-elixir",
  brand: "CHICORI",
  name: "Glow Rituals Pore Refining Serum",
  subtitle: "Protect | Size: 50 ml",
  description:
    "Minimize pores, control oil, and reveal clear, radiant skin. A deeply restorative cold-pressed herbal serum infused with pure botanical actives.",
  price: "$20",
  subscriptionPrice: "$16",
  installmentPrice: "$5.00",
  size: "50 ml",
  rating: 4.6,
  reviewCount: 142,
  purchasedCount: 88,
  currentStock: 27,
  badge: "Best Seller",
  images: [
    "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=1000&auto=format&fit=crop&q=85",
    "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=1000&auto=format&fit=crop&q=85",
    "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=1000&auto=format&fit=crop&q=85",
    "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=1000&auto=format&fit=crop&q=85",
    "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=1000&auto=format&fit=crop&q=85",
  ],
  variants: [
    { size: "30ml", price: "RM 89", isPopular: true },
    { size: "50ml", price: "RM 119" },
  ],
  tabs: {
    howToUse:
      "We always recommend that you speak to your GP before you embark on taking any new supplements or botanical treatments. Everyone is different and your GP is best positioned to provide specific guidance for your unique situation and support your overall wellness journey.\n\nTake 3-4 drops in the morning and evening onto cleansed skin. Gently press into face, neck, and décolletage with upward circular motions. For hair & scalp, massage 4-6 drops directly into roots 30 minutes prior to washing or leave overnight for intensive rejuvenation.",
    benefits:
      "• Visibly minimizes appearance of enlarged pores and balances sebum production.\n• Provides long-lasting cellular hydration without pore congestion.\n• Fortifies skin's natural barrier against environmental pollutants and oxidative stress.\n• Calms redness, soothes inflammation, and imparts an immediate lit-from-within glow.",
    ingredients:
      "Cold-Pressed Moroccan Argan Oil, Cold-Infused Bhringraj (Eclipta Prostrata) Extract, Organic Rosehip Seed Oil, Niacinamide 10%, Zinc PCA 1%, Squalane (Plant-Derived), Centella Asiatica (Gotu Kola) Extract, Tocopherol (Vitamin E), Natural Frankincense Oleoresin.",
    returnPolicy:
      "We offer a 30-day 100% satisfaction guarantee. If for any reason you are not completely delighted with your Ashmira ritual, return the unused portion within 30 days of delivery for a full refund or exchange.",
  },
  related: [
    {
      id: "rel-1",
      name: "OPULENT",
      price: "$19",
      originalPrice: "$29",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "rel-2",
      name: "GRACE",
      price: "$13",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "rel-3",
      name: "VELVET",
      price: "$23",
      originalPrice: "$30",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "rel-4",
      name: "IRIDESCENT",
      price: "$25.9",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=600&auto=format&fit=crop&q=80",
    },
  ],
};
