import Link from "next/link";
import { cn } from "@/lib/utils";

interface HeaderLogoProps {
  className?: string;
  textClassName?: string;
  onClick?: () => void;
}

export default function HeaderLogo({ className, textClassName, onClick }: HeaderLogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn("shrink-0 flex flex-col leading-none tracking-widest", className)}
      aria-label="Ashmira — Home"
    >
      <span className={cn("text-sm font-semibold uppercase text-heading tracking-[0.2em]", textClassName)}>
        ASHMIRA
      </span>
    </Link>
  );
}
