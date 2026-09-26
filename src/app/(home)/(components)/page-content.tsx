import ReviewsSection from "./widgets/reviews/reviews-section";
import ProductsSection from "./widgets/products/products-section";

export default function PageContent() {
  return (
    <div className="w-full max-w-7xl h-full m-auto flex flex-col gap-20 py-20 sm-lap:max-w-full">
      <ProductsSection />
      <ReviewsSection />
    </div>
  );
}