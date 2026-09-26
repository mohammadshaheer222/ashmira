export interface ReviewCard {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string; // initials or image url
  avatarUrl?: string;
  featuredImage?: string;
  featuredTitle?: string;
  featuredTag?: string;
  accent?: string; // card background color
}

export const REVIEWS: ReviewCard[] = [
  // ── Column 1 ──────────────────────────────────────────────────────────────
  {
    id: "r1",
    name: "David Lee",
    role: "Founder",
    company: "Studio Atelier",
    avatar: "DL",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
    accent: "#FFF3E0",
    quote:
      "We switched to Ashmira botanical oils for our studio treatments. The texture is ultra-lightweight, deeply nourishing, and our clients notice an instant radiant glow.",
  },
  {
    id: "r2",
    name: "Sarah Mitchell",
    role: "Aesthetician",
    company: "Luxe Skin Spa",
    avatar: "SM",
    avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80",
    accent: "#E8F5E9",
    quote:
      "The purity of these cold-pressed oils is unmatched. They absorb seamlessly without greasiness, leaving dry and sensitive skin completely balanced and restored.",
  },
  {
    id: "r3",
    name: "Jonathan Reed",
    role: "Creative Director",
    company: "Nexora Living",
    avatar: "JR",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
    accent: "#EDE7F6",
    quote:
      "Every single drop feels like a luxury ritual. Minimalist, sustainably packaged, and genuinely effective — it's become an essential daily staple in my routine.",
  },
  // ── Column 2 (featured + text) ────────────────────────────────────────────
  {
    id: "r4",
    name: "Ashmira Rituals",
    role: "",
    company: "Ashmira",
    avatar: "AR",
    quote: "",
    featuredImage:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&auto=format&fit=crop&q=80",
    featuredTitle: "How Ashmira Restores Skin Barrier in 14 Days",
    featuredTag: "Ashmira Botanical",
  },
  {
    id: "r5",
    name: "Daniel Kim",
    role: "Holistic Dermatologist",
    company: "PureLab Care",
    avatar: "DK",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
    accent: "#FFF8E1",
    quote:
      "I frequently recommend Ashmira's unrefined argan and rosehip formulations to patients needing gentle barrier repair. The organic cold-pressed extraction retains full antioxidant potency.",
  },
  {
    id: "r6",
    name: "Alex Johnson",
    role: "Formulator",
    company: "Botanical Arts",
    avatar: "AJ",
    avatarUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&auto=format&fit=crop&q=80",
    accent: "#FCE4EC",
    quote:
      "Clean ingredients with zero fillers or synthetic fragrances. The natural golden hue and subtle earthy aroma prove how honest and premium these oils are.",
  },
  // ── Column 3 (featured + text) ────────────────────────────────────────────
  {
    id: "r7",
    name: "Michael Tran",
    role: "Founder",
    company: "Aura Wellness",
    avatar: "MT",
    avatarUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=120&auto=format&fit=crop&q=80",
    accent: "#E3F2FD",
    quote:
      "The hair and scalp oil transformed brittle ends within two weeks. My hair feels significantly softer, denser, and retains natural moisture effortlessly.",
  },
  {
    id: "r8",
    name: "Pure Extraction",
    role: "",
    company: "Ashmira",
    avatar: "AR",
    quote: "",
    featuredImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80",
    featuredTitle: "Scaling Sustainable Cold-Pressed Botanicals",
    featuredTag: "Ashmira Labs",
  },
  {
    id: "r9",
    name: "Laura Martinez",
    role: "Beauty Editor",
    company: "Vogue Living",
    avatar: "LM",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
    accent: "#E0F7FA",
    quote:
      "In a crowded beauty market, Ashmira stands out through quiet elegance, uncompromising ingredient sourcing, and results that speak for themselves.",
  },
];

export const COLUMN_1 = REVIEWS.filter((r) => ["r1", "r2", "r3"].includes(r.id));
export const COLUMN_2 = REVIEWS.filter((r) => ["r4", "r5", "r6"].includes(r.id));
export const COLUMN_3 = REVIEWS.filter((r) => ["r7", "r8", "r9"].includes(r.id));
