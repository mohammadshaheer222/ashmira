"use client";

import React, { useState } from "react";

import { cn } from "@/lib/utils";

import Section from "@/components/ui/section";
import FeatherIcon from "@/assets/custom-icon";
import SectionHeader from "@/components/ui/section-header";
import { FAQ_ITEMS, type FaqItem } from "@/lib/constants/faq-data";

interface FaqAccordionItemProps {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}

function FaqAccordionItem({ item, isOpen, onToggle }: FaqAccordionItemProps) {
  return (
    <div
      className={cn(
        "rounded-2xl transition-all duration-300 overflow-hidden",
        isOpen
          ? "bg-bg-card shadow-card"
          : "bg-bg-card/60 hover:bg-bg-card"
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
        className="w-full text-left pt-6 px-6 pb-2 flex items-start justify-between gap-4 cursor-pointer select-none"
      >
        <div className="flex flex-col gap-1.5 pr-2">
          <h3
            className={cn(
              "text-base font-semibold sm-lap:text-sm leading-snug transition-colors duration-200",
              isOpen ? "text-primary" : "text-heading"
            )}
          >
            {item.question}
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
            icon={"chevron-down"}
            iconStrokeColor={isOpen ? "var(--theme-primary, #dc2626)" : "#000000"}
          />
        </div>
      </button>
      <div
        role={"region"}
        id={`faq-answer-${item.id}`}
        aria-labelledby={`faq-question-${item.id}`}
        className={cn(
          "grid transition-all duration-300 ease-in-out px-6 sm-lap:px-5",
          isOpen ? "grid-rows-[1fr] pb-6 sm-lap:pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="text-sm sm-lap:text-xs text-text-muted leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <Section id="faq" label="Frequently Asked Questions">
      <SectionHeader
        align="center"
        eyebrow="Common Inquiries"
        heading="Frequently asked questions"
      />
      <div className="max-w-full w-full m-auto flex flex-col gap-3">
        {FAQ_ITEMS.map((item) => (
          <FaqAccordionItem
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            onToggle={() => handleToggle(item.id)}
          />
        ))}
      </div>
    </Section>
  );
}
