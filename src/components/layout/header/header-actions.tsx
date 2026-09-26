"use client";

import { Fragment, useState } from "react";

import FeatherIcon from "@/assets/custom-icon";
import HeaderMobileDrawer from "./header-mobile-drawer";

export type HeaderActionsVariant = "header" | "drawer";

interface HeaderActionsProps {
  onLinkClick?: () => void;
  variant?: HeaderActionsVariant;
}

export default function HeaderActions({
  variant = "header",
  onLinkClick,
}: HeaderActionsProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const isDrawer = variant === "drawer";

  return (
    <Fragment>
      <div className="flex items-center gap-x-1">
        {!isDrawer && (
          <button
            onClick={() => setMobileOpen(true)}
            className="mob-only items-center justify-center p-2 text-text hover:text-heading transition-colors duration-200"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <FeatherIcon icon="hamburger" iconWidth={20} iconHeight={20} iconStrokeWidth={1.75} />
          </button>
        )}
      </div>
      {!isDrawer && (
        <HeaderMobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
      )}
    </Fragment>
  );
}
