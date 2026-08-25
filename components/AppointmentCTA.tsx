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
    <section className="relative py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white overflow-hidden rounded-3xl mx-4 sm:mx-6 lg:mx-8 shadow-2xl border border-teal-900/50">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-900/80 border border-teal-700/60 text-teal-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Transform Your Oral Health Today</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
          Ready for a Healthier, <br className="hidden sm:inline" />
          <span className="text-gold-gradient">More Confident Smile?</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Book your personalized consultation today with our senior dental specialists. Zero waiting time, flexible scheduling, and 100% painless care.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            href="/appointment"
            variant="gold"
            size="lg"
            icon={<Calendar className="w-5 h-5" />}
          >
            Book Appointment
          </Button>

          <Button
            href={whatsappUrl}
            variant="whatsapp"
            size="lg"
            icon={<MessageCircle className="w-5 h-5" />}
          >
            WhatsApp Us
          </Button>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            No Long Waiting Times
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            US-FDA Approved Equipment
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            Easy EMI Payment Options
          </span>
        </div>
      </div>
    </section>
  );
};
