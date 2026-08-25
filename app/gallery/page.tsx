import React from "react";
import { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { GalleryGrid } from "@/components/GalleryGrid";
import { AppointmentCTA } from "@/components/AppointmentCTA";

import { clinicConfig } from "@/data/clinic";

export const metadata: Metadata = {
  title: `Clinic Gallery | ${clinicConfig.name}`,
  description: `Take a visual tour of ${clinicConfig.name}: our luxury lounge, operatory suites, 3D CBCT digital technology, and smile transformations.`
};

export default function GalleryPage() {
  return (
    <div className="pt-28 pb-20 space-y-16 sm:space-y-24">
      {/* Hero */}
      <section className="bg-gradient-to-b from-teal-50/40 via-white to-slate-50 py-16 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200 text-xs font-bold uppercase tracking-wider">
            Visual Experience
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight">
            Inside Our <span className="text-gradient">Dental Clinic</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Step into our modern healthcare facility designed for supreme hygiene, patient relaxation, and cutting-edge digital dentistry.
          </p>
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
