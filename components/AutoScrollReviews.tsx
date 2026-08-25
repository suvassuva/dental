"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Testimonial } from "@/data/testimonials";
import { TestimonialCard } from "./TestimonialCard";

interface AutoScrollReviewsProps {
  testimonials: Testimonial[];
}

export const AutoScrollReviews: React.FC<AutoScrollReviewsProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || testimonials.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, testimonials.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div>
      {/* Mobile Auto-Scrolling Carousel (< md) */}
      <div
        className="block md:hidden relative px-1 py-2"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div className="overflow-hidden min-h-[300px] px-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[currentIndex]?.id || currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full"
            >
              <TestimonialCard testimonial={testimonials[currentIndex]} index={0} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows & Controls */}
        <div className="flex items-center justify-between mt-4 px-2">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-white border border-slate-200 shadow-md text-slate-700 active:scale-95 transition-transform"
            aria-label="Previous Review"
          >
            <ChevronLeft className="w-4 h-4 text-teal-700" />
          </button>

          {/* Indicator Dots */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-[200px] px-2 py-1 no-scrollbar">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-6 bg-teal-700"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to review slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-white border border-slate-200 shadow-md text-slate-700 active:scale-95 transition-transform"
            aria-label="Next Review"
          >
            <ChevronRight className="w-4 h-4 text-teal-700" />
          </button>
        </div>
      </div>

      {/* Desktop Grid (>= md) */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {testimonials.map((item, idx) => (
          <TestimonialCard key={item.id} testimonial={item} index={idx} />
        ))}
      </div>
    </div>
  );
};
