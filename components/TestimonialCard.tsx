"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full relative group"
    >
      <Quote className="absolute top-6 right-6 w-10 h-10 text-teal-100 group-hover:text-teal-200 transition-colors pointer-events-none" />

      <div className="space-y-4 relative z-10">
        {/* Rating Stars */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < testimonial.rating
                  ? "text-amber-400 fill-amber-400"
                  : "text-slate-200"
              }`}
            />
          ))}
          <span className="text-xs font-bold text-slate-700 ml-1.5">5.0</span>
        </div>

        {/* Review Text */}
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
          "{testimonial.review}"
        </p>
      </div>

      {/* Patient Profile Footer */}
      <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-teal-500 shadow-md">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                {testimonial.name}
              </h4>
              {testimonial.verified && (
                <CheckCircle2 className="w-4 h-4 text-teal-600 fill-teal-50 shrink-0" />
              )}
            </div>
            <span className="text-xs text-slate-500 block">
              {testimonial.location} • {testimonial.date}
            </span>
          </div>
        </div>

        {/* Treatment Tag */}
        <span className="px-3 py-1 bg-teal-50 border border-teal-100 text-teal-800 text-xs font-bold rounded-full hidden sm:inline-block">
          {testimonial.treatment}
        </span>
      </div>
    </motion.div>
  );
};
