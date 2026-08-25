"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Doctor } from "@/data/doctors";
import { DoctorCard } from "./DoctorCard";

interface AutoScrollDoctorsProps {
  doctors: Doctor[];
}

export const AutoScrollDoctors: React.FC<AutoScrollDoctorsProps> = ({ doctors }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || doctors.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % doctors.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, doctors.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % doctors.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + doctors.length) % doctors.length);
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
        <div className="overflow-hidden min-h-[420px] px-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={doctors[currentIndex]?.id || currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full"
            >
              <DoctorCard doctor={doctors[currentIndex]} index={0} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows & Controls */}
        <div className="flex items-center justify-between mt-4 px-2">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-white border border-slate-200 shadow-md text-slate-700 active:scale-95 transition-transform"
            aria-label="Previous Doctor"
          >
            <ChevronLeft className="w-4 h-4 text-teal-700" />
          </button>

          {/* Indicator Dots */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-[200px] px-2 py-1 no-scrollbar">
            {doctors.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-6 bg-teal-700"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-white border border-slate-200 shadow-md text-slate-700 active:scale-95 transition-transform"
            aria-label="Next Doctor"
          >
            <ChevronRight className="w-4 h-4 text-teal-700" />
          </button>
        </div>
      </div>

      {/* Desktop Grid (>= md) */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {doctors.map((doctor, idx) => (
          <DoctorCard key={doctor.id} doctor={doctor} index={idx} />
        ))}
      </div>
    </div>
  );
};
