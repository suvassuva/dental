import React from "react";
import { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { AppointmentCTA } from "@/components/AppointmentCTA";
import { servicesData } from "@/data/services";
import { clinicConfig } from "@/data/clinic";

export const metadata: Metadata = {
  title: `All Dental Services | ${clinicConfig.name}`,
  description: `Explore complete dental treatments at ${clinicConfig.shortName}: Dental Implants, Root Canal, Laser Whitening, Clear Aligners, Orthodontics, Cosmetic Veneers, and Pediatric Care.`
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20 space-y-16 sm:space-y-24">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-teal-50/40 via-white to-slate-50 py-16 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200 text-xs font-bold uppercase tracking-wider">
            Specialized Care
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight">
            Complete Dental Care <span className="text-gradient">Under One Roof</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From routine preventive checkups to advanced 3D keyhole implant surgery, experience gentle care powered by modern dental technology.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Full Spectrum Dentistry"
          title="Our Comprehensive Dental Treatments"
          subtitle="Click on any service card below to view detailed procedures, benefits, and step-by-step treatment processes."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>
      </section>

      {/* Final Callout Banner */}
      <AppointmentCTA />
    </div>
  );
}
