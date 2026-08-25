import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { Award, Clock, Calendar, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { DoctorCard } from "@/components/DoctorCard";
import { AutoScrollDoctors } from "@/components/AutoScrollDoctors";
import { AppointmentCTA } from "@/components/AppointmentCTA";
import { Button } from "@/components/Button";
import { doctorsData } from "@/data/doctors";
import { clinicConfig } from "@/data/clinic";

export const metadata: Metadata = {
  title: `Our Doctors & Specialists | ${clinicConfig.name}`,
  description: `Meet leading dental surgeons, MDS gold-medalist endodontists, implantologists, and orthodontists at ${clinicConfig.name}.`
};

export default function DoctorsPage() {
  return (
    <div className="pt-28 pb-20 space-y-20 sm:space-y-28">
      {/* Hero */}
      <section className="bg-gradient-to-b from-teal-50/40 via-white to-slate-50 py-10 sm:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
              <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200 text-xs font-bold uppercase tracking-wider">
                Clinical Specialists
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                Meet Your <span className="text-gradient">Dental Care Team</span>
              </h1>

              <p className="text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Our multi-specialty team of board-certified dental surgeons brings decades of clinical expertise, gentle bedside manner, and international training to your care.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <Button href="/appointment" variant="primary" size="md" icon={<Calendar className="w-4 h-4" />}>
                  Book Consultation
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <div className="relative h-60 sm:h-72 lg:h-80 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=800"
                    alt="Senior Dental Surgeons Team"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-200/80 shadow-md flex items-center justify-between text-xs font-bold text-slate-900">
                  <span className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-teal-600" />
                    Board-Certified Surgeons
                  </span>
                  <span className="text-teal-700 font-extrabold">MDS Gold Medalists</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Cards Overview Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Specialists"
          title="Lead Medical Officers"
          subtitle="Click to schedule a direct one-on-one consultation with any of our senior doctors."
        />

        <AutoScrollDoctors doctors={doctorsData} />
      </section>

      {/* Detailed Doctor Profiles Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          badge="In-Depth Profiles"
          title="Doctor Qualifications & Specialties"
          subtitle="Learn more about our team's background, academic achievements, and surgical experience."
        />

        <div className="space-y-12">
          {doctorsData.map((doc, idx) => (
            <div
              key={doc.id}
              className={`p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/80 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:col-span-4 relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg border-2 border-slate-100">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div className="lg:col-span-8 space-y-5">
                <div>
                  <span className="px-3 py-1 bg-teal-50 text-teal-800 text-xs font-bold rounded-full uppercase tracking-wider mb-2 inline-block">
                    {doc.specialization}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                    {doc.name}
                  </h3>
                  <p className="text-sm font-bold text-slate-500 mt-1">
                    {doc.qualification} • <span className="text-teal-700">{doc.experience} Experience</span>
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {doc.bio}
                </p>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Key Clinical Highlights:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {doc.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <Button
                    href={`/appointment?doctor=${encodeURIComponent(doc.name)}`}
                    variant="primary"
                    size="md"
                    icon={<Calendar className="w-4 h-4" />}
                  >
                    Book Consultation with {doc.name.split(" ")[1]}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Callout CTA */}
      <AppointmentCTA />
    </div>
  );
}
