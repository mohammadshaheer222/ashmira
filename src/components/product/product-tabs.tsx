"use client";

import React, { useState } from "react";
import FeatherIcon from "@/assets/custom-icon";
import { cn } from "@/lib/utils";

interface ProductTabsProps {
  tabs: {
    howToUse: string;
    benefits: string;
    ingredients: string;
    returnPolicy: string;
  };
  className?: string;
}

type TabKey = "howToUse" | "benefits" | "ingredients" | "returnPolicy";

const TAB_CONFIG: { key: TabKey; label: string }[] = [
  { key: "howToUse", label: "How to use" },
  { key: "benefits", label: "Benefit" },
  { key: "ingredients", label: "Ingredients" },
  { key: "returnPolicy", label: "Return Policy" },
];

export default function ProductTabs({ tabs, className }: ProductTabsProps) {
  // Desktop active tab
  const [activeTab, setActiveTab] = useState<TabKey>("howToUse");
  // Mobile accordion active item
  const [openAccordionKey, setOpenAccordionKey] = useState<TabKey | null>("howToUse");

  const toggleAccordion = (key: TabKey) => {
    setOpenAccordionKey((prev) => (prev === key ? null : key));
  };

  return (
    <div className={cn("flex flex-col gap-4 w-full pt-4", className)}>
      <div className="desk-only flex-col gap-4 w-full">
        <div className="flex items-center justify-between border-b border-white-light text-xs">
          {TAB_CONFIG.map(({ key, label }) => {
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveTab(key)}
                className={cn(
                  "pb-2.5 font-medium transition-all relative cursor-pointer select-none",
                  isActive
                    ? "text-primary font-semibold"
                    : "text-text-muted hover:text-heading"
                )}
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full" />
                )}
              </button>
            );
          })}
        </div>
        <div className="text-[11px] leading-relaxed text-text-muted whitespace-pre-line min-h-[140px] pt-1">
          {tabs[activeTab]}
        </div>
      </div>
      <div className="mob-only flex-col gap-3 w-full">
        {TAB_CONFIG.map(({ key, label }) => {
          const isOpen = openAccordionKey === key;
          return (
            <div
              key={key}
              className={cn(
                "rounded-2xl transition-all duration-300 overflow-hidden",
                isOpen
                  ? "bg-bg-card shadow-card"
                  : "bg-bg-card/60 hover:bg-bg-card"
              )}
            >
              <button
                type="button"
                onClick={() => toggleAccordion(key)}
                aria-expanded={isOpen}
                className="w-full text-left pt-5 px-5 pb-2 flex items-start justify-between gap-4 cursor-pointer select-none"
              >
                <div className="flex flex-col gap-1.5 pr-2">
                  <h3
                    className={cn(
                      "text-sm font-medium leading-snug transition-colors duration-200",
                      isOpen ? "text-primary" : "text-heading"
                    )}
                  >
                    {label}
                  </h3>
                </div>

                <div
                  className={cn(
                    "w-8 h-8 rounded-full shrink-0 flex items-center justify-center transition-all duration-300",
                    isOpen ? "rotate-180 text-primary" : "text-heading"
                  )}
                >
                  <FeatherIcon
                    iconWidth={16}
                    iconHeight={16}
                    iconStrokeWidth={2}
                    icon="chevron-down"
                    iconStrokeColor={isOpen ? "var(--theme-primary, #dc2626)" : "var(--theme-heading, #000000)"}
                  />
                </div>
              </button>

              <div
                className={cn(
                  "grid transition-all duration-300 ease-in-out px-5",
                  isOpen
                    ? "grid-rows-[1fr] pb-5 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <p className="text-sm sm-lap:text-xs text-text-muted leading-relaxed whitespace-pre-line">
                    {tabs[key]}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
