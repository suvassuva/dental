"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MessageCircle, Sparkles, ShieldCheck } from "lucide-react";
import { clinicConfig } from "@/data/clinic";
import { Button } from "./Button";

export const AppointmentCTA: React.FC = () => {
  const whatsappMessage = encodeURIComponent(
    `Hello ${clinicConfig.name}, I would like to book a dental consultation.`
  );
  const whatsappUrl = `https://wa.me/${clinicConfig.whatsapp.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`;

  return (
    <section className="relative py-8 sm:py-24 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white overflow-hidden rounded-2xl sm:rounded-3xl mx-3 sm:mx-6 lg:mx-8 shadow-xl sm:shadow-2xl border border-teal-900/50">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-3 sm:space-y-6">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-teal-900/80 border border-teal-700/60 text-teal-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>Transform Your Oral Health Today</span>
        </div>

        <h2 className="text-xl sm:text-4xl md:text-5xl font-bold sm:font-black tracking-tight leading-snug sm:leading-tight">
          Ready for a Healthier, <br className="hidden sm:inline" />
          <span className="text-gold-gradient">More Confident Smile?</span>
        </h2>

        <p className="text-xs sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Book your personalized consultation today with our senior dental specialists. Zero waiting time & 100% painless care.
        </p>

        <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 pt-1 sm:pt-4">
          <Button
            href="/appointment"
            variant="gold"
            size="md"
            icon={<Calendar className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />}
          >
            Book Appointment
          </Button>

          <Button
            href={whatsappUrl}
            variant="whatsapp"
            size="md"
            icon={<MessageCircle className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />}
          >
            WhatsApp Us
          </Button>
        </div>

        <div className="pt-3 sm:pt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[10px] sm:text-xs text-slate-400 font-medium">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            No Waiting Times
          </span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            US-FDA Approved
          </span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            Easy EMI Payment
          </span>
        </div>
      </div>
    </section>
  );
};
