"use client";

import { Fragment, useEffect } from "react";

import { cn } from "@/lib/utils";
import FeatherIcon from "@/assets/custom-icon";
import Button from "@/components/ui/button";

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
          "fixed inset-0 z-50 w-full h-screen bg-bg-card flex flex-col p-5 mob-land:p-3",
          "shadow-2xl transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="w-full max-w-7xl m-auto sm-lap:max-w-full shrink-0">
          <div className="bg-bg-card rounded-xl">
            <div className="relative flex items-center justify-between h-14 px-5">
              <HeaderLogo onClick={onClose} />
              <Button
                onClick={onClose}
                aria-label="Close menu"
                className="p-2 text-text hover:text-heading transition-colors duration-200 flex items-center justify-center cursor-pointer"
              >
                <FeatherIcon icon="close" iconWidth={20} iconHeight={20} iconStrokeWidth={1.75} />
              </Button>
            </div>
          </div>
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
