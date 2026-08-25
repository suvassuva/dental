"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryItem } from "@/data/gallery";

interface LightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ item, onClose, onPrev, onNext }) => {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          {onPrev && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-slate-800/80 text-white hover:bg-teal-700 transition-colors hidden sm:flex"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Next Button */}
          {onNext && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-slate-800/80 text-white hover:bg-teal-700 transition-colors hidden sm:flex"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-900 rounded-3xl overflow-hidden max-w-4xl w-full border border-slate-800 shadow-2xl flex flex-col max-h-[90vh]"
          >
            {/* Image Container */}
            <div className="relative h-[350px] sm:h-[500px] w-full bg-slate-950">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Description Bar */}
            <div className="p-6 bg-slate-900 text-white border-t border-slate-800">
              <span className="px-3 py-1 bg-teal-900/60 border border-teal-700/50 text-teal-300 text-xs font-bold rounded-full uppercase tracking-wider mb-2 inline-block">
                {item.category}
              </span>
              <h3 className="text-xl font-extrabold">{item.title}</h3>
              <p className="text-sm text-slate-400 mt-1">{item.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
