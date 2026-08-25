"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { clinicConfig } from "@/data/clinic";

export const WhatsAppButton: React.FC = () => {
  const whatsappMessage = encodeURIComponent(
    `Hello ${clinicConfig.name}, I would like to book a dental consultation.`
  );
  const whatsappUrl = `https://wa.me/${clinicConfig.whatsapp.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl shadow-emerald-900/30 border border-emerald-400/30 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-300 rounded-full animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full"></span>
      </div>
      <span className="hidden sm:inline font-bold text-xs tracking-wide uppercase pr-1">
        WhatsApp Us
      </span>
    </motion.a>
  );
};
