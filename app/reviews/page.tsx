import React from "react";
import { Metadata } from "next";
import { Star, ShieldCheck, ThumbsUp, MessageSquare } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialCard } from "@/components/TestimonialCard";
import { AppointmentCTA } from "@/components/AppointmentCTA";
import { testimonialsData } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Patient Reviews & Testimonials | SmileCare Dental Clinic",
  description: "Read genuine 5-star patient reviews and testimonials for dental implants, root canals, clear aligners, and smile makeovers at SmileCare."
};

export default function ReviewsPage() {
  return (
    <div className="pt-28 pb-20 space-y-16 sm:space-y-24">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-teal-50/40 via-white to-slate-50 py-16 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200 text-xs font-bold uppercase tracking-wider">
            Patient Stories
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight">
            Trusted by Our <span className="text-gradient">Patients</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            See how our gentle care, skilled specialists, and modern dental solutions have transformed thousands of smiles.
          </p>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonialsData.map((item, idx) => (
            <TestimonialCard key={item.id} testimonial={item} index={idx} />
          ))}
        </div>
      </section>

      {/* Final Callout CTA */}
      <AppointmentCTA />
    </div>
  );
}
