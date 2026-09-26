"use client";

import { Fragment, useEffect } from "react";

import { cn } from "@/lib/utils";
import FeatherIcon from "@/assets/custom-icon";

import HeaderNav from "./header-nav";
import HeaderLogo from "./header-logo";
import HeaderActions from "./header-actions";

interface HeaderMobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function HeaderMobileDrawer({ open, onClose }: HeaderMobileDrawerProps) {

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <Fragment>
      <div
        onClick={onClose}
        aria-hidden="true"
        className={cn(
          "fixed inset-0 z-40 backdrop-blur-sm transition-opacity duration-300 bg-bg-card ",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          "fixed inset-0 z-50 w-full h-screen bg-bg-card flex flex-col",
          "shadow-2xl transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="relative flex items-center justify-between h-14 px-5 m-5 bg-bg-card ">
          <HeaderLogo onClick={onClose} />
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 text-text-muted hover:text-heading transition-colors duration-200"
          >
            <FeatherIcon icon="close" iconWidth={20} iconHeight={20} iconStrokeWidth={1.75} />
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center overflow-y-auto">
          <HeaderNav variant="drawer" onLinkClick={onClose} />
        </div>
        <div className="border-t border-white-light px-3 py-4">
          <HeaderActions variant="drawer" onLinkClick={onClose} />
        </div>
      </div>
    </Fragment>
  );
}
