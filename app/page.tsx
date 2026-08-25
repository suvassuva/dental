import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Cpu,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  CalendarCheck,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { DoctorCard } from "@/components/DoctorCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { BeforeAfter } from "@/components/BeforeAfter";
import { GalleryGrid } from "@/components/GalleryGrid";
import { FAQAccordion } from "@/components/FAQAccordion";
import { AppointmentCTA } from "@/components/AppointmentCTA";
import { Button } from "@/components/Button";

import { servicesData } from "@/data/services";
import { doctorsData } from "@/data/doctors";
import { testimonialsData } from "@/data/testimonials";
import { faqData } from "@/data/faq";

export default function HomePage() {
  const whyChooseUsCards = [
    {
      icon: <Award className="w-8 h-8 text-teal-600" />,
      title: "Experienced Dentists",
      description: "Our team consists of MDS gold-medalist specialists with over a decade of clinical mastery in oral surgery and endodontics."
    },
    {
      icon: <Cpu className="w-8 h-8 text-teal-600" />,
      title: "Modern 3D Technology",
      description: "State-of-the-art 3D CBCT scanners, intraoral optical digital cameras, and painless laser instruments."
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-teal-600" />,
      title: "Personalized Treatment",
      description: "Tailored treatment maps built around your personal dental goals, schedule, and comfort preferences."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-teal-600" />,
      title: "Advanced Hygiene",
      description: "Strict 7-step Class-B autoclave sterilization protocol meeting US-FDA and WHO safety standards."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-teal-600" />,
      title: "Comfortable Environment",
      description: "Spa-like relaxing waiting lounge, overhead entertainment monitors, and a warm, anxiety-free atmosphere."
    },
    {
      icon: <CalendarCheck className="w-8 h-8 text-teal-600" />,
      title: "Easy Appointments",
      description: "Seamless instant booking via website or WhatsApp, zero long waiting queues, and Sunday emergency OPD."
    }
  ];

  const featuredServices = servicesData.slice(0, 10);
  const featuredDoctors = doctorsData.slice(0, 3);
  const faqPreview = faqData.slice(0, 5);

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* Hero Section */}
      <Hero />

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="The SmileCare Difference"
          title="Exceptional Care. Exceptional Smiles."
          subtitle="Why thousands of patients trust us as their premier family dental healthcare provider."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyChooseUsCards.map((card, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4 group"
            >
              <div className="p-4 rounded-2xl bg-teal-50 border border-teal-100/80 w-fit group-hover:bg-teal-700 group-hover:text-white transition-colors duration-300">
                {React.cloneElement(card.icon, {
                  className: "w-8 h-8 group-hover:text-white transition-colors"
                })}
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                {card.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Overview Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50/50 py-8 rounded-3xl">
        <SectionHeading
          badge="Complete Oral Care"
          title="Complete Dental Care Under One Roof"
          subtitle="From preventive checkups to complex full-mouth digital smile makeovers."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredServices.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/services" variant="outline" size="lg">
            View All 12 Dental Services
          </Button>
        </div>
      </section>

      {/* About Clinic Two-Column Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[400px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000"
                alt="SmileCare Dental Clinic Interior Reception"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-teal-700 text-white p-6 rounded-3xl shadow-xl max-w-xs space-y-1">
              <span className="text-3xl font-black block">10,000+</span>
              <span className="text-xs font-medium text-teal-100 block">
                Successful Treatments Completed
              </span>
            </div>
          </div>

          {/* Right Column Text */}
          <div className="lg:col-span-6 space-y-6">
            <span className="px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-800 text-xs font-bold uppercase tracking-wider border border-teal-200">
              About Our Practice
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Modern Dentistry. <br />
              <span className="text-gradient">Personal Care.</span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              At SmileCare Dental Clinic, we believe every patient deserves a healthy, radiant smile delivered in an atmosphere of warmth and trust. Founded by leading dental surgeons, our facility brings world-class dental care to Indiranagar, Bangalore.
            </p>

            <ul className="space-y-3.5">
              {[
                "Experienced MDS-certified specialist doctors in every department",
                "Advanced 3D CBCT digital radiograph equipment for zero-error diagnosis",
                "Strict 7-tier hospital sterilization & disposable hygiene protocols",
                "Painless micro-laser procedures for quick recovery"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Button
                href="/about"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Discover Our Clinic
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Expert Clinical Team"
          title="Meet Our Lead Dental Specialists"
          subtitle="Experienced dental surgeons dedicated to your comfort and health."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredDoctors.map((doctor, idx) => (
            <DoctorCard key={doctor.id} doctor={doctor} index={idx} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/doctors" variant="outline" size="md">
            Meet Entire Medical Team
          </Button>
        </div>
      </section>

      {/* Before & After Interactive Slider */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-900 py-16 rounded-3xl text-white">
        <SectionHeading
          badge="Proven Clinical Results"
          title="Real Smiles. Real Transformations."
          subtitle="Drag the slider horizontally to compare original smiles with our final treatment results."
          dark
        />

        <BeforeAfter />
      </section>

      {/* Patient Reviews Carousel / Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Patient Proof"
          title="Trusted by Our Patients"
          subtitle="Read genuine experiences from individuals who restored their smiles at SmileCare."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonialsData.slice(0, 3).map((item, idx) => (
            <TestimonialCard key={item.id} testimonial={item} index={idx} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/reviews" variant="outline" size="md">
            View All 1,200+ Patient Reviews
          </Button>
        </div>
      </section>

      {/* Clinic Gallery Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Inside Our Facility"
          title="Take a Tour of Our Clinic"
          subtitle="Explore our ultra-hygienic operatory suites, technology, and comfortable patient lounge."
        />

        <GalleryGrid initialLimit={6} showFilters={false} />

        <div className="mt-10 text-center">
          <Button href="/gallery" variant="outline" size="md">
            Explore Full Image Gallery
          </Button>
        </div>
      </section>

      {/* FAQ Preview Accordion */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Got Questions?"
          title="Frequently Asked Dental Questions"
          subtitle="Clear answers to common questions regarding dental treatments and procedures."
        />

        <FAQAccordion items={faqPreview} />

        <div className="mt-10 text-center">
          <Button href="/faq" variant="outline" size="md">
            View All Frequently Asked Questions
          </Button>
        </div>
      </section>

      {/* Final Appointment Callout CTA */}
      <AppointmentCTA />
    </div>
  );
}
