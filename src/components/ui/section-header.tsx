import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  heading: string;
  eyebrow?: string;
  className?: string;
  description?: string;
  align?: "left" | "center" | "right";
}

export default function SectionHeader({
  eyebrow,
  heading,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  const alignClass =
    align === "center"
      ? "text-center items-center"
      : align === "right"
      ? "text-right items-end"
      : "text-left items-start";

  return (
    <div className={cn("max-w-2xl m-auto flex flex-col", alignClass, className)}>
      {/* {eyebrow && (
        <p className="text-xs font-semibold text-start uppercase tracking-widest text-primary">
          {eyebrow}
        </p>
      )} */}
      <h2 className="text-4xl sm-lap:text-2xl mob-land:text-2xl font-bold text-heading leading-tight">
        {heading}
      </h2>
      {description && (
        <p className="text-sm text-text-muted leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
