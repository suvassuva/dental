"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQItem } from "@/data/faq";

interface FAQAccordionProps {
  items: FAQItem[];
  defaultOpenIndex?: number;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  defaultOpenIndex
}) => {
  const [openId, setOpenId] = useState<string | null>(
    defaultOpenIndex !== undefined && items[defaultOpenIndex]
      ? items[defaultOpenIndex].id
      : items[0]?.id || null
  );

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? "bg-white border-teal-500 shadow-lg ring-2 ring-teal-500/20"
                : "bg-white border-slate-200 hover:border-slate-300 shadow-sm"
            }`}
          >
            <button
              onClick={() => toggleFAQ(item.id)}
              className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 focus:outline-none"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <HelpCircle
                  className={`w-5 h-5 shrink-0 ${
                    isOpen ? "text-teal-600" : "text-slate-400"
                  }`}
                />
                <span className="font-bold text-slate-900 text-base sm:text-lg">
                  {item.question}
                </span>
              </div>
              <div
                className={`p-1.5 rounded-full transition-transform duration-300 ${
                  isOpen ? "bg-teal-50 text-teal-700 rotate-180" : "bg-slate-100 text-slate-500"
                }`}
              >
                <ChevronDown className="w-5 h-5" />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
