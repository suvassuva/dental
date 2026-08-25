"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2 } from "lucide-react";
import { galleryData, galleryCategories, GalleryItem } from "@/data/gallery";
import { Lightbox } from "./Lightbox";

interface GalleryGridProps {
  initialLimit?: number;
  showFilters?: boolean;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({
  initialLimit,
  showFilters = true
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const filteredItems = galleryData.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  const displayedItems = initialLimit ? filteredItems.slice(0, initialLimit) : filteredItems;

  const handlePrev = () => {
    if (activeItemIndex !== null) {
      setActiveItemIndex((prev) =>
        prev === null || prev === 0 ? displayedItems.length - 1 : prev - 1
      );
    }
  };

  const handleNext = () => {
    if (activeItemIndex !== null) {
      setActiveItemIndex((prev) =>
        prev === null || prev === displayedItems.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <div className="space-y-8">
      {/* Category Filters */}
      {showFilters && (
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {galleryCategories.map((cat) => (
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
      )}

      {/* Grid Layout */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {displayedItems.map((item, idx) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveItemIndex(idx)}
              className="group relative h-72 rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200/80 bg-slate-100"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 p-3 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-5 h-5" />
              </div>

              {/* Overlay Text */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="px-2.5 py-0.5 bg-teal-600 text-white text-[10px] font-extrabold uppercase rounded-full tracking-wider mb-1.5 inline-block">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold leading-tight group-hover:text-teal-300 transition-colors">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Fullscreen Lightbox */}
      <Lightbox
        item={activeItemIndex !== null ? displayedItems[activeItemIndex] : null}
        onClose={() => setActiveItemIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
};
