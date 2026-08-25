"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { clinicConfig } from "@/data/clinic";

export const MobileBottomBar: React.FC = () => {
  const whatsappMessage = encodeURIComponent(
    `Hello ${clinicConfig.name}, I would like to book a dental appointment.`
  );
  const whatsappUrl = `https://wa.me/${clinicConfig.whatsapp.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/80 px-3 py-2 flex items-center justify-around lg:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      {/* Call Button */}
      <a
        href={`tel:${clinicConfig.phone}`}
        className="flex flex-col items-center justify-center gap-1 text-slate-700 hover:text-teal-700 py-1 px-3 rounded-lg active:bg-slate-100"
      >
        <div className="p-1.5 rounded-full bg-teal-50 text-teal-700">
          <Phone className="w-4 h-4" />
        </div>
        <span className="text-[11px] font-semibold">Call Clinic</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-1 text-slate-700 hover:text-emerald-700 py-1 px-3 rounded-lg active:bg-slate-100"
      >
        <div className="p-1.5 rounded-full bg-emerald-50 text-emerald-600">
          <MessageCircle className="w-4 h-4" />
        </div>
        <span className="text-[11px] font-semibold">WhatsApp</span>
      </a>

      {/* Book Now Button */}
      <Link
        href="/appointment"
        className="flex items-center gap-2 bg-teal-700 text-white font-bold text-xs px-4 py-2.5 rounded-full shadow-md shadow-teal-700/20 active:scale-95 transition-transform"
      >
        <Calendar className="w-4 h-4" />
        <span>Book Now</span>
      </Link>
    </div>
  );
};
