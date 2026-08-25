import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  MessageCircle,
  Shield,
  Smile,
  Activity,
  CheckCircle,
  Zap,
  Clock,
  Sun,
  Sparkles,
  Heart,
  Award,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

import { serviceDetailsData } from "@/data/services";
import { clinicConfig } from "@/data/clinic";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { TestimonialCard } from "@/components/TestimonialCard";
import { AppointmentCTA } from "@/components/AppointmentCTA";
import { Button } from "@/components/Button";

interface ServiceLandingPageProps {
  slug: string;
}

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-6 h-6 text-teal-600" />,
  Smile: <Smile className="w-6 h-6 text-teal-600" />,
  Activity: <Activity className="w-6 h-6 text-teal-600" />,
  CheckCircle: <CheckCircle className="w-6 h-6 text-teal-600" />,
  Zap: <Zap className="w-6 h-6 text-amber-500" />,
  Clock: <Clock className="w-6 h-6 text-teal-600" />,
  Sun: <Sun className="w-6 h-6 text-amber-500" />,
  Sparkles: <Sparkles className="w-6 h-6 text-amber-500" />,
  Heart: <Heart className="w-6 h-6 text-red-500" />,
  Award: <Award className="w-6 h-6 text-teal-600" />
};

export const ServiceLandingPage: React.FC<ServiceLandingPageProps> = ({ slug }) => {
  const detail = serviceDetailsData[slug];

  if (!detail) {
    notFound();
  }

  const whatsappMessage = encodeURIComponent(
    `Hello ${clinicConfig.name}, I would like to consult about ${detail.title}.`
  );
  const whatsappUrl = `https://wa.me/${clinicConfig.whatsapp.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`;

  return (
    <div className="pt-28 pb-20 space-y-20 sm:space-y-28">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src={detail.heroImage}
            alt={detail.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-950/80 z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="px-3.5 py-1.5 rounded-full bg-teal-900/80 border border-teal-700/60 text-teal-300 text-xs font-bold uppercase tracking-wider">
                Specialized Treatment
              </span>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                {detail.title}
              </h1>

              <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal">
                {detail.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <Button
                  href={`/appointment?treatment=${encodeURIComponent(slug)}`}
                  variant="gold"
                  size="lg"
                  icon={<Calendar className="w-5 h-5" />}
                >
                  Book Consultation
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
            </div>

            <div className="lg:col-span-5">
              <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                <Image
                  src={detail.heroImage}
                  alt={detail.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Introduction */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold text-teal-700 uppercase tracking-widest block">
          Overview & Clinical Approach
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          What Is {detail.title.split(" ").slice(-2).join(" ")}?
        </h2>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          {detail.introduction}
        </p>
      </section>

      {/* Benefits Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Key Advantages"
          title="Why Choose This Treatment?"
          subtitle="Designed to provide long-lasting oral health benefits and effortless comfort."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {detail.benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-3"
            >
              <div className="p-3 bg-teal-50 rounded-2xl w-fit">
                {iconMap[benefit.icon] || <Shield className="w-6 h-6 text-teal-600" />}
              </div>
              <h3 className="text-lg font-bold text-slate-900">{benefit.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Step-by-Step Treatment Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-900 text-white py-16 rounded-3xl">
        <SectionHeading
          badge="Treatment Journey"
          title="Step-by-Step Procedure"
          subtitle={`What to expect during your visits at ${clinicConfig.shortName}.`}
          dark
        />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {detail.process.map((step) => (
            <div
              key={step.number}
              className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 flex flex-col justify-between space-y-4"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-500 text-slate-950 font-black text-lg flex items-center justify-center shadow-lg">
                {step.number}
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-white text-base">{step.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Our Clinic */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-teal-50/60 rounded-3xl p-8 sm:p-12 border border-teal-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
              Trust & Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Why Get Treated at {clinicConfig.name}?
            </h2>
            <ul className="space-y-3 pt-2">
              {detail.whyChooseUs.map((factor, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 text-center lg:text-right space-y-4">
            <div className="p-6 bg-white rounded-3xl shadow-lg border border-slate-100 text-left space-y-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Have Questions?
              </span>
              <p className="text-sm font-semibold text-slate-800">
                Speak directly with our clinical coordinator to learn about pricing and scheduling.
              </p>
              <Button
                href={whatsappUrl}
                variant="whatsapp"
                fullWidth
                size="md"
                icon={<MessageCircle className="w-4 h-4" />}
              >
                Instant WhatsApp Chat
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials for this Treatment */}
      {detail.testimonials.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Real Patient Feedback"
            title="Patient Experiences"
            subtitle={`What patients say after completing their ${detail.title} treatment.`}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {detail.testimonials.map((t, idx) => (
              <TestimonialCard
                key={idx}
                testimonial={{
                  id: `service-t-${idx}`,
                  name: t.name,
                  location: "Bangalore",
                  rating: t.rating,
                  treatment: t.treatment,
                  review: t.review,
                  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
                  date: "Verified Patient",
                  verified: true
                }}
              />
            ))}
          </div>
        </section>
      )}

      {/* Treatment FAQ */}
      {detail.faqs.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Treatment FAQ"
            title="Frequently Asked Questions"
            subtitle={`Common queries about ${detail.title}.`}
          />

          <FAQAccordion
            items={detail.faqs.map((f, idx) => ({
              id: `faq-${idx}`,
              category: "Treatments",
              question: f.question,
              answer: f.answer
            }))}
          />
        </section>
      )}

      {/* Final CTA */}
      <AppointmentCTA />
    </div>
  );
};
