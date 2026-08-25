import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { AppointmentCTA } from "@/components/AppointmentCTA";
import { Button } from "@/components/Button";
import { servicesData } from "@/data/services";
import { clinicConfig } from "@/data/clinic";
import { ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: `All Dental Services | ${clinicConfig.name}`,
  description: `Explore complete dental treatments at ${clinicConfig.shortName}: Dental Implants, Root Canal, Laser Whitening, Clear Aligners, Orthodontics, Cosmetic Veneers, and Pediatric Care.`
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20 space-y-16 sm:space-y-24">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-teal-50/40 via-white to-slate-50 py-10 sm:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
              <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200 text-xs font-bold uppercase tracking-wider">
                Specialized Oral Care
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                Complete Dental Care <span className="text-gradient">Under One Roof</span>
              </h1>

              <p className="text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                From routine preventive checkups to advanced 3D keyhole implant surgery, experience gentle care powered by state-of-the-art dental technology.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-700">
                <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-xs">
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                  3D Keyhole Surgery
                </span>
                <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-xs">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  Painless Laser Care
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <div className="relative h-60 sm:h-72 lg:h-80 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
                    alt="Advanced Dental Technology & Care"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-slate-200/80 shadow-md flex items-center justify-between text-xs font-bold text-slate-800">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600" />
                    12 Specialized Treatments
                  </span>
                  <span className="text-teal-700 font-extrabold">100% Painless</span>
                </div>
              </div>
            </div>
          </div>
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
