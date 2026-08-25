import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { ShieldCheck, Award, HeartHandshake, Eye, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { DoctorCard } from "@/components/DoctorCard";
import { AppointmentCTA } from "@/components/AppointmentCTA";
import { doctorsData } from "@/data/doctors";
import { Button } from "@/components/Button";

import { clinicConfig } from "@/data/clinic";

export const metadata: Metadata = {
  title: `About Us | ${clinicConfig.name}`,
  description: `Learn about ${clinicConfig.name}, our expert dental surgeons, state-of-the-art 3D technology, and patient-first treatment philosophy.`
};

export default function AboutPage() {
  const values = [
    {
      icon: <Award className="w-8 h-8 text-teal-600" />,
      title: "Clinical Excellence",
      description: "Our specialists continuously train with international academies to deliver cutting-edge restorative and surgical care."
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-teal-600" />,
      title: "Compassionate Care",
      description: "We listen attentively, address dental anxieties with gentle touch techniques, and prioritize your total comfort."
    },
    {
      icon: <Eye className="w-8 h-8 text-teal-600" />,
      title: "Complete Transparency",
      description: "No hidden costs or unnecessary treatments. We provide clear, itemized treatment plans before starting any work."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-teal-600" />,
      title: "Uncompromising Hygiene",
      description: "Class-B autoclave sterilization, bio-sealed water lines, and 100% single-use disposable tools per patient."
    }
  ];

  const facilities = [
    "3D Cone Beam Computed Tomography (CBCT)",
    "Intraoral 3D Optical Scanner for putty-free digital impressions",
    "Zeiss Operating Microscope for precision root canal treatments",
    "Diode Dental Laser for painless gum procedures",
    "Zoom LED Laser Whitening System",
    "Class-B Autoclave Sterilization Suite meeting US-FDA standards",
    "Overhead TV entertainment monitors in every treatment room",
    "Ground-floor wheelchair access with dedicated valet parking"
  ];

  return (
    <div className="pt-28 pb-20 space-y-20 sm:space-y-28">
      {/* About Hero */}
      <section className="bg-gradient-to-b from-teal-50/40 via-white to-slate-50 py-10 sm:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
              <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200 text-xs font-bold uppercase tracking-wider">
                Discover {clinicConfig.shortName}
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                Modern Dentistry. <span className="text-gradient">Personal Care.</span>
              </h1>

              <p className="text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Founded with a vision to redefine dental healthcare, {clinicConfig.name} combines state-of-the-art 3D technology with deeply compassionate patient care.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <Button href="/appointment" variant="primary" size="md">
                  Book Consultation
                </Button>
                <Button href="/services" variant="outline" size="md">
                  View Services
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <div className="relative h-64 sm:h-80 lg:h-96 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
                    alt={`${clinicConfig.name} Reception & Facility`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-200/80 shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-base shrink-0">
                    10+
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Years of Clinical Excellence</h4>
                    <p className="text-[11px] text-slate-500">10,000+ Happy Patient Smiles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-widest block">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Built on Trust, Precision, and Clinical Passion
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              {clinicConfig.name} began over a decade ago with a simple mission: to eliminate the fear associated with dental visits and replace it with world-class, comfortable healthcare.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              What started as a boutique dental practice has grown into a multi-specialty center equipped with 3D digital imaging, laser therapy, and custom cosmetic smile design suites—having served over 10,000 satisfied patients.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-teal-50 border border-teal-100">
                <span className="text-3xl font-black text-teal-800 block">10+</span>
                <span className="text-xs font-semibold text-slate-600">Years of Experience</span>
              </div>
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-100">
                <span className="text-3xl font-black text-amber-800 block">10K+</span>
                <span className="text-xs font-semibold text-slate-600">Happy Patients</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative h-[400px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1000"
                alt={`${clinicConfig.name} Doctors Collaborating`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-900 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-800/80 border border-slate-700 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Our Mission</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                To deliver gentle, pain-free, and ethically sound dental care using US-FDA approved technologies, empowering our community to smile with absolute health and confidence.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-slate-800/80 border border-slate-700 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Our Vision</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                To be recognized as Bangalore’s standard-bearer in digital dentistry and oral implantology, known for pioneering painless micro-invasive techniques and warm patient relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values & Approach */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Guiding Principles"
          title="Our Treatment Approach"
          subtitle="How we ensure every visit exceeds your expectations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-3"
            >
              <div className="p-3 bg-teal-50 rounded-2xl w-fit">{v.icon}</div>
              <h3 className="text-lg font-bold text-slate-900">{v.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Facilities & Hygiene */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-teal-50/50 py-16 rounded-3xl border border-teal-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
              Safety & Facilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Hospital-Grade Hygiene & Advanced Equipment
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We uphold strict infection control standards with multi-stage sterilization equipment and digital diagnostic apparatus.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {facilities.map((fac, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>{fac}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative h-[380px] sm:h-[450px] w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000"
                alt="Class-B Sterilizer Suite and Dental Equipment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Experts"
          title="Meet Our Doctors"
          subtitle="Experienced dental surgeons with specialized degrees across oral surgery, endodontics, orthodontics, and pedodontics."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctorsData.map((doc, idx) => (
            <DoctorCard key={doc.id} doctor={doc} index={idx} />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <AppointmentCTA />
    </div>
  );
}
