import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  label?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({ children, className, id, label }: SectionProps) {
  return (
    <section
      id={id}
      aria-label={label}
      className={cn(
        "overflow-hidden flex flex-col gap-10",
        className
      )}
    >
      {children}
    </section>
  );
}
