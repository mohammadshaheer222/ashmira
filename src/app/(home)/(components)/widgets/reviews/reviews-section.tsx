import { COLUMN_1, COLUMN_2, COLUMN_3 } from "@/lib/constants/reviews-data";

import ScrollColumn from "./scroll-column";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";

export default function ReviewsSection() {
  return (
    <Section id="reviews" label="Testimonials">
      <SectionHeader
        align="center"
        eyebrow="Testimonials"
        heading="What our customers are saying"
      />
      <div
        className="flex gap-5 h-170 ipad-land:h-150 mob-land:h-130"
        aria-label="Customer testimonials"
      >
        <ScrollColumn cards={COLUMN_1} speed="28s" direction="up" />
        <ScrollColumn cards={COLUMN_2} speed="36s" direction="up" className="mob-land:hidden" />
        <ScrollColumn cards={COLUMN_3} speed="32s" direction="down" className="ipad-land:hidden" />
      </div>
      <style>{`
        @keyframes reviews-scroll-up {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes reviews-scroll-down {
          0%   { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </Section>
  );
}
