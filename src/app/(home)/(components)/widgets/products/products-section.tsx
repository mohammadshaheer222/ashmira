import { PRODUCTS } from "@/lib/constants/products-data";

import Section from "@/components/ui/section";
import ProductCard from "@/components/ui/product-card";
import SectionHeader from "@/components/ui/section-header";

export default function ProductsSection() {
  return (
    <Section id="products" label="Our Products">
      <SectionHeader
        align="center"
        eyebrow="Shop Collection"
        heading="Pure botanicals, bottled with care"
      />
      <div
        className="grid grid-cols-4 ipad-land:grid-cols-2 mob-land:grid-cols-1 gap-5"
        aria-label="Product listing"
      >
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Section>
  );
}
