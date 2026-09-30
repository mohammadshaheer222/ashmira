export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    category: "Purity & Extraction",
    question: "What makes Ashmira cold-pressed Ayurvedic oils different from commercial oils?",
    answer:
      "Ashmira oils are crafted using the ancient Kshirapaka extraction method — a low-temperature decoction where whole botanical herbs (like Bhringraj and Amla) are slowly infused into pure cold-pressed sesame oil. Unlike commercial oils, we never use heat, mineral oils, liquid paraffin, synthetic silicones, or chemical preservatives.",
  },
  {
    id: "faq-2",
    category: "Ritual & Application",
    question: "How should I incorporate Ashmira oils into my daily routine?",
    answer:
      "Dispense 4–6 drops using the calibrated glass dropper onto your palms, rub gently to warm the oil, and massage into the scalp using circular motions focusing on meridian points. You can leave it overnight for intensive repair, or apply 1–2 hours before washing. A single drop can also be smoothed onto dry ends for instant shine and frizz control.",
  },
  {
    id: "faq-3",
    category: "Hair & Skin Types",
    question: "Are Ashmira formulations suitable for sensitive scalps and all hair types?",
    answer:
      "Yes. Our oils are Tridosha-balanced — formulated to pacify excess Pitta heat, calm Vata dryness, and nourish Kapha density. Because our carrier bases are lightweight, cold-pressed, and non-comedogenic, they absorb rapidly without clogging follicles or weighing down fine hair.",
  },
  {
    id: "faq-4",
    category: "Results & Efficacy",
    question: "How soon can I expect visible results?",
    answer:
      "Most customers observe immediate scalp soothing, hydration, and gloss from the very first ritual. Visible reduction in hair breakage and noticeable root strengthening typically occur within 2 to 4 weeks of consistent 3-times-per-week application as hair completes its cellular renewal cycle.",
  },
  {
    id: "faq-5",
    category: "Shelf Life & Packaging",
    question: "What is the shelf life and how should the oil be stored?",
    answer:
      "Our cold-pressed oils retain peak bioactivity for 24 months from the date of manufacture. Because we use zero synthetic stabilizers, we bottle in UV-protective medical-grade amber glass to shield delicate herbal phytosterols from photo-oxidation. Store in a cool, dry place away from direct sunlight.",
  },
  {
    id: "faq-6",
    category: "Multi-Use",
    question: "Can Ashmira oils be used on the face or beard?",
    answer:
      "Absolutely. Our botanical lipid profiles mimic the natural sebum of human skin. A single micro-drop works wonderfully as a facial night elixir or a softening beard conditioning treatment, delivering deep antioxidant protection with zero greasy residue.",
  },
];
