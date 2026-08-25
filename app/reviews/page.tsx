import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { Star, ShieldCheck, ThumbsUp, MessageSquare } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialCard } from "@/components/TestimonialCard";
import { AutoScrollReviews } from "@/components/AutoScrollReviews";
import { AppointmentCTA } from "@/components/AppointmentCTA";
import { testimonialsData } from "@/data/testimonials";

import { clinicConfig } from "@/data/clinic";

export const metadata: Metadata = {
  title: `Patient Reviews & Testimonials | ${clinicConfig.name}`,
  description: `Read genuine 5-star patient reviews and testimonials for dental implants, root canals, clear aligners, and smile makeovers at ${clinicConfig.shortName}.`
};

export default function ReviewsPage() {
  return (
    <div className="pt-28 pb-20 space-y-16 sm:space-y-24">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-teal-50/40 via-white to-slate-50 py-10 sm:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
              <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200 text-xs font-bold uppercase tracking-wider">
                Patient Stories
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                Trusted by Our <span className="text-gradient">Patients</span>
              </h1>

              <p className="text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                See how our gentle care, skilled specialists, and modern dental solutions have transformed thousands of smiles across Bangalore.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-700">
                <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-xs">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  4.9/5 Rating (1,200+ Reviews)
                </span>
                <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-xs">
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                  100% Verified Patients
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <div className="relative h-60 sm:h-72 lg:h-80 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800"
                    alt="Happy Patient Confident Smile Makeover"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-slate-200/80 shadow-md flex items-center justify-between text-xs font-bold text-slate-900">
                  <span className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    ))}
                  </span>
                  <span className="text-teal-700 font-extrabold">99.4% Recommendation Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overall Rating Breakdown Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white shadow-2xl grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          <div className="space-y-2 flex flex-col items-center md:items-start">
            <span className="text-5xl sm:text-6xl font-black text-amber-400">4.9</span>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs font-semibold text-slate-400">
              Based on 1,250+ Verified Google & Practo Reviews
            </span>
          </div>

          <div className="space-y-3 border-y md:border-y-0 md:border-x border-slate-800 py-6 md:py-0 md:px-8">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-teal-400 shrink-0" />
              <span className="text-sm font-semibold">100% Painless Laser Treatment Rating</span>
            </div>
            <div className="flex items-center gap-3">
              <ThumbsUp className="w-6 h-6 text-teal-400 shrink-0" />
              <span className="text-sm font-semibold">99.4% Patient Recommendation Score</span>
            </div>
            <div className="flex items-center gap-3">
              <MessageSquare className="w-6 h-6 text-teal-400 shrink-0" />
              <span className="text-sm font-semibold">Zero Waiting Queue Guarantee</span>
            </div>
          </div>

          <div className="text-center md:text-right">
            <span className="text-xs uppercase tracking-wider font-bold text-teal-400 block mb-1">
              Need Assistance?
            </span>
            <p className="text-sm text-slate-300 mb-4">
              Schedule a visit to experience our 5-star clinical care firsthand.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Verified Reviews"
          title="What Our Patients Say"
          subtitle="Real, unedited feedback from individuals treated at our Indiranagar clinic."
        />

        <AutoScrollReviews testimonials={testimonialsData} />
      </section>

      {/* Final Callout CTA */}
      <AppointmentCTA />
    </div>
  );
}
