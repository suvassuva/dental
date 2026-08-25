"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "whatsapp" | "gold";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  icon,
  iconPosition = "right",
  fullWidth = false
}) => {
  const baseStyles =
    "inline-flex items-center justify-center whitespace-nowrap font-semibold transition-all duration-300 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2";

  const sizeStyles = {
    sm: "px-2.5 py-1.5 text-[11px] sm:px-4 sm:py-2 sm:text-xs gap-1",
    md: "px-3.5 py-2 text-[11px] sm:px-6 sm:py-3 sm:text-sm gap-1.5",
    lg: "px-4 py-2.5 text-xs sm:px-8 sm:py-4 sm:text-base gap-2 shadow-md sm:shadow-lg"
  };

  const variantStyles = {
    primary:
      "bg-teal-700 hover:bg-teal-800 text-white shadow-teal-900/20 focus:ring-teal-700 hover:shadow-xl hover:-translate-y-0.5",
    secondary:
      "bg-teal-500 hover:bg-teal-600 text-white shadow-teal-500/20 focus:ring-teal-500 hover:shadow-xl hover:-translate-y-0.5",
    outline:
      "bg-transparent border-2 border-teal-700 text-teal-700 hover:bg-teal-50 focus:ring-teal-700",
    whatsapp:
      "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-900/20 focus:ring-emerald-600 hover:shadow-xl hover:-translate-y-0.5",
    gold: "bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold shadow-amber-500/20 focus:ring-amber-500 hover:shadow-xl hover:-translate-y-0.5"
  };

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="inline-block">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="inline-block">{icon}</span>}
    </>
  );

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${
    fullWidth ? "w-full" : ""
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      className={combinedClasses}
    >
      {content}
    </motion.button>
  );
};
