"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { AppointmentCTA } from "@/components/AppointmentCTA";
import { faqData, faqCategories } from "@/data/faq";

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredFAQs = faqData.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  return (
    <div className="pt-28 pb-20 space-y-16 sm:space-y-24">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-teal-50/40 via-white to-slate-50 py-16 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200 text-xs font-bold uppercase tracking-wider">
            Help Center
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight">
            Your Questions, <span className="text-gradient">Answered.</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about our dental treatments, procedures, pricing, technology, and appointments.
          </p>
        </div>
      </section>

      {/* Category Tabs & Accordion List */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {faqCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-teal-700 text-white shadow-md scale-105"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Animated Accordion List */}
        <FAQAccordion items={filteredFAQs} />
      </section>

      {/* Final Callout CTA */}
      <AppointmentCTA />
    </div>
  );
}
