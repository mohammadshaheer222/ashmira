import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ReviewCard } from "@/lib/constants/reviews-data";

interface ReviewCardProps {
  review: ReviewCard;
  className?: string;
}

function TextCard({ review, className }: ReviewCardProps) {
  const bg = "#ffffff";

  return (
    <div
      className={cn("rounded-2xl p-5 flex flex-col gap-2 shadow-card", className)}
      style={{ backgroundColor: bg }}
    >
      <span
        className="text-5xl font-serif leading-none select-none"
        style={{ color: "rgba(0,0,0,0.10)" }}
        aria-hidden="true"
      >
        &ldquo;
      </span>
      <p className="text-xs text-heading leading-relaxed -mt-2">{review.quote}</p>
      <div className="flex items-center gap-2">
        {review.avatarUrl ? (
          <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0 ring-2 ring-white">
            <Image
              fill
              sizes="36px"
              alt={review.name}
              src={review.avatarUrl}
              className="object-cover"
            />
          </div>
        ) : (
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-xs font-semibold text-heading uppercase ring-2 ring-white"
            style={{ backgroundColor: "rgba(0,0,0,0.08)" }}
          >
            {review.avatar}
          </div>
        )}
        <div>
          <p className="text-xs font-semibold text-heading leading-none">{review.name}</p>
          {review.role && (
            <p className="text-[10px] text-text-muted mt-0.5 leading-none">
              {review.role} · {review.company}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function FeaturedCard({ review, className }: ReviewCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl overflow-hidden flex flex-col shadow-card",
        className
      )}
    >
      {review.featuredImage && (
        <div className="relative w-full h-44 shrink-0">
          <Image
            src={review.featuredImage}
            alt={review.featuredTitle ?? ""}
            fill
            sizes="(max-width: 767px) 100vw, 300px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
          {review.featuredTag && (
            <span className="absolute top-3 left-3 text-[10px] font-semibold bg-white/90 text-heading px-2.5 py-1 rounded-full">
              {review.featuredTag}
            </span>
          )}
          <p className="absolute bottom-3 left-4 right-4 text-xs font-semibold text-white leading-snug">
            {review.featuredTitle}
          </p>
        </div>
      )}
    </div>
  );
}

export default function ReviewCardItem({ review, className }: ReviewCardProps) {
  if (review.featuredImage) {
    return <FeaturedCard review={review} className={className} />;
  }
  return <TextCard review={review} className={className} />;
}
