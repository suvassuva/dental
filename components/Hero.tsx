"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MessageCircle, ShieldCheck, Star, Award, CheckCircle2 } from "lucide-react";
import { clinicConfig } from "@/data/clinic";
import { Button } from "./Button";

export const Hero: React.FC = () => {
  const whatsappMessage = encodeURIComponent(
    `Hello ${clinicConfig.name}, I would like to book a dental consultation.`
  );
  const whatsappUrl = `https://wa.me/${clinicConfig.whatsapp.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`;

  return (
    <section className="relative pt-20 pb-8 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-teal-50/20 to-white">
      {/* Background Decorative Blur Circles */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 lg:gap-8 items-center">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-3.5 sm:space-y-6 text-center lg:text-left"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-[10px] sm:text-xs font-bold tracking-wide uppercase">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-600 shrink-0" />
              <span>Multi-Specialty ISO 9001:2015 Certified Clinic</span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-extrabold sm:font-black text-slate-900 tracking-tight leading-tight sm:leading-[1.15]">
              Your Smile. <br />
              <span className="text-gradient">Our Expertise.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Advanced dental care designed around your comfort, health, and confidence.
              Painless procedures, 3D technology, and compassionate care.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-4 pt-1 sm:pt-2">
              <Button
                href="/appointment"
                variant="primary"
                size="md"
                icon={<Calendar className="w-4 h-4" />}
              >
                Book Appointment
              </Button>

              <Button
                href={whatsappUrl}
                variant="whatsapp"
                size="md"
                icon={<MessageCircle className="w-4 h-4" />}
              >
                WhatsApp Us
              </Button>
            </div>

            {/* Quick Trust Highlights */}
            <div className="pt-3 sm:pt-6 grid grid-cols-3 gap-2 sm:gap-3 border-t border-slate-200/80 max-w-xl mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-base sm:text-2xl font-black text-slate-900">10+ Years</span>
                <span className="text-[10px] sm:text-xs text-slate-500 font-medium">Experience</span>
              </div>
              <div className="flex flex-col items-center lg:items-start border-x border-slate-200 px-2">
                <span className="text-base sm:text-2xl font-black text-slate-900">10K+</span>
                <span className="text-[10px] sm:text-xs text-slate-500 font-medium">Happy Patients</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-base sm:text-2xl font-black text-slate-900">15+</span>
                <span className="text-[10px] sm:text-xs text-slate-500 font-medium">Treatments</span>
              </div>
            </div>
          </motion.div>

          {/* Right Image Frame with Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image Container */}
              <div className="relative h-[240px] sm:h-[480px] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl shadow-teal-900/10 border-2 sm:border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000"
                  alt="Modern Dental Clinic Operatory with High Tech Equipment"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
              </div>

              {/* Floating Card 1: Rating */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-8 bg-white p-2.5 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-slate-100 flex items-center gap-2 sm:gap-3"
              >
                <div className="p-2 sm:p-3 bg-amber-50 rounded-lg sm:rounded-xl">
                  <Star className="w-4 h-4 sm:w-6 sm:h-6 text-amber-500 fill-amber-500" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-extrabold text-slate-900 text-sm sm:text-lg">4.9</span>
                    <span className="text-[10px] sm:text-xs text-slate-500">(1,200+ Reviews)</span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold text-slate-500 block">Top Rated Clinic</span>
                </div>
              </motion.div>

              {/* Floating Card 2: Painless Care */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="absolute -top-4 -right-4 sm:-right-6 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-3"
              >
                <div className="p-2.5 bg-teal-50 rounded-xl text-teal-700">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 block">100% Painless Tech</span>
                  <span className="text-[11px] text-slate-500">Zero-Anxiety Environment</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
