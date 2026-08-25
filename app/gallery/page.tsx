import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { GalleryGrid } from "@/components/GalleryGrid";
import { AppointmentCTA } from "@/components/AppointmentCTA";
import { Button } from "@/components/Button";
import { Sparkles, Camera, ShieldCheck } from "lucide-react";

import { clinicConfig } from "@/data/clinic";

export const metadata: Metadata = {
  title: `Clinic Gallery | ${clinicConfig.name}`,
  description: `Take a visual tour of ${clinicConfig.name}: our luxury lounge, operatory suites, 3D CBCT digital technology, and smile transformations.`
};

export default function GalleryPage() {
  return (
    <div className="pt-28 pb-20 space-y-16 sm:space-y-24">
      {/* Hero */}
      <section className="bg-gradient-to-b from-teal-50/40 via-white to-slate-50 py-10 sm:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
              <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200 text-xs font-bold uppercase tracking-wider">
                Visual Experience
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                Inside Our <span className="text-gradient">Dental Clinic</span>
              </h1>

              <p className="text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Step into our modern healthcare facility designed for supreme hygiene, patient relaxation, and cutting-edge digital dentistry.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-700">
                <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-xs">
                  <Camera className="w-4 h-4 text-teal-600" />
                  3D Operatory Suites
                </span>
                <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-xs">
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                  Class-B Sterilization
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <div className="relative h-60 sm:h-72 lg:h-80 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
                    alt="Clinic Interior Ambiance & Facilities"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-slate-200/80 shadow-md flex items-center justify-between text-xs font-bold text-slate-900">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    Interactive Photo Tour
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid with Category Filters and Lightbox */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="High-Res Gallery"
          title="Explore Our Facilities & Technology"
          subtitle="Click on any image to launch the full-screen interactive lightbox preview."
        />

        <GalleryGrid showFilters={true} />
      </section>

      {/* Final Callout CTA */}
      <AppointmentCTA />
    </div>
  );
}
