"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants/navigation";

export type HeaderNavVariant = "header" | "drawer";

interface HeaderNavProps {
  variant?: HeaderNavVariant;
  onLinkClick?: () => void;
}

export default function HeaderNav({ variant = "header", onLinkClick }: HeaderNavProps) {
  const pathname = usePathname();
  const isDrawer = variant === "drawer";

  return (
    <nav aria-label={isDrawer ? "Mobile navigation" : "Main navigation"}>
      <ul className={cn(isDrawer ? "flex flex-col items-center gap-y-2" : "flex items-center gap-x-8 md-lap:gap-x-6 sm-lap:gap-x-4")}>
        {NAV_LINKS.map(({ label, href, highlight }) => {
          const isActive = pathname === href || pathname.startsWith(`${href}/`);

          return (
            <li key={href}>
              <Link
                href={href}
                onClick={onLinkClick}
                className={
                  isDrawer
                    ? cn(
                        "flex items-center justify-center px-8 py-3 text-sm font-medium uppercase tracking-widest rounded-lg",
                        "transition-colors duration-150",
                        isActive || highlight
                          ? "text-heading"
                          : "text-text-muted hover:text-heading hover:bg-bg"
                      )
                    : cn(
                        "relative text-xs font-medium tracking-wide uppercase transition-colors duration-200",
                        "after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-heading after:transition-[width] after:duration-200",
                        "hover:after:w-full",
                        isActive
                          ? "text-heading"
                          : "text-text-muted hover:text-heading",
                        highlight && "text-heading"
                      )
                }
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
