"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ArrowLeftRight } from "lucide-react";

interface TransformationCase {
  id: string;
  category: "Smile Makeover" | "Whitening" | "Braces" | "Dental Implants";
  title: string;
  treatment: string;
  duration: string;
  beforeImage: string;
  afterImage: string;
}

const transformations: TransformationCase[] = [
  {
    id: "1",
    category: "Smile Makeover",
    title: "Full Smile Reconstruction with Porcelain Veneers",
    treatment: "8 Porcelain Veneers",
    duration: "2 Sessions",
    beforeImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000",
    afterImage: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "2",
    category: "Whitening",
    title: "Laser Whitening for Severe Coffee Stains",
    treatment: "Laser In-Office Whitening",
    duration: "45 Minutes",
    beforeImage: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=1000",
    afterImage: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "3",
    category: "Braces",
    title: "Orthodontic Crowding & Overbite Correction",
    treatment: "Clear Aligners",
    duration: "14 Months",
    beforeImage: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=1000",
    afterImage: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "4",
    category: "Dental Implants",
    title: "Front Tooth Replacement & Bone Regeneration",
    treatment: "Single Titanium Implant + Zirconia Crown",
    duration: "3 Months",
    beforeImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1000",
    afterImage: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=1000"
  }
];

export const BeforeAfter: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<
    "Smile Makeover" | "Whitening" | "Braces" | "Dental Implants"
  >("Smile Makeover");
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = ["Smile Makeover", "Whitening", "Braces", "Dental Implants"] as const;

  const currentCase =
    transformations.find((t) => t.category === activeCategory) || transformations[0];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="space-y-8">
      {/* Category Tabs */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setSliderPosition(50);
            }}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
              activeCategory === cat
                ? "bg-teal-700 text-white shadow-lg shadow-teal-700/20 scale-105"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Before & After Interactive Slider Container */}
      <div className="max-w-4xl mx-auto">
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative h-[340px] sm:h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white select-none cursor-ew-resize touch-none"
        >
          {/* AFTER Image (Full Background) */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={currentCase.afterImage}
              alt="After Smile Transformation"
              fill
              className="object-cover"
            />
            <span className="absolute top-4 right-4 px-3.5 py-1.5 bg-emerald-600/90 text-white font-extrabold text-xs uppercase tracking-wider rounded-full backdrop-blur-md shadow-md">
              AFTER (Transformed)
            </span>
          </div>

          {/* BEFORE Image (Clipped Overlay) */}
          <div
            className="absolute inset-0 h-full overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="absolute inset-0 w-full h-full min-w-[340px] sm:min-w-[768px] lg:min-w-[896px]">
              <Image
                src={currentCase.beforeImage}
                alt="Before Dental Treatment"
                fill
                className="object-cover"
              />
            </div>
            <span className="absolute top-4 left-4 px-3.5 py-1.5 bg-slate-900/90 text-white font-extrabold text-xs uppercase tracking-wider rounded-full backdrop-blur-md shadow-md">
              BEFORE
            </span>
          </div>

          {/* Slider Divider Bar & Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-teal-700 text-white shadow-2xl flex items-center justify-center border-2 border-white ring-4 ring-teal-500/30">
              <ArrowLeftRight className="w-5 h-5 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Case Info Footer */}
        <div className="mt-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <h4 className="font-extrabold text-slate-900 text-base sm:text-lg">
              {currentCase.title}
            </h4>
            <span className="text-xs text-slate-500 font-medium">
              Procedure: <strong className="text-teal-700">{currentCase.treatment}</strong>
            </span>
          </div>
          <span className="px-4 py-1.5 rounded-full bg-teal-50 text-teal-800 font-bold text-xs shrink-0 border border-teal-100">
            Duration: {currentCase.duration}
          </span>
        </div>
      </div>
    </div>
  );
};
