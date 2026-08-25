"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  dark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = "center",
  dark = false,
  className = ""
}) => {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col max-w-3xl mb-6 sm:mb-16 ${alignClasses[align]} ${className}`}
    >
      {badge && (
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-2 sm:mb-3 ${
            dark
              ? "bg-teal-900/60 text-teal-300 border border-teal-700/50"
              : "bg-teal-50 text-teal-800 border border-teal-200/80"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
          {badge}
        </span>
      )}
      <h2
        className={`text-xl sm:text-3xl md:text-4xl font-bold sm:font-extrabold tracking-tight ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-2 sm:mt-4 text-xs sm:text-lg leading-relaxed ${
            dark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
