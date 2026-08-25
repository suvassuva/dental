"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { clinicConfig } from "@/data/clinic";
import { servicesData } from "@/data/services";

export const Footer: React.FC = () => {
  const whatsappMessage = encodeURIComponent(
    `Hello ${clinicConfig.name}, I would like to book a dental consultation.`
  );
  const whatsappUrl = `https://wa.me/${clinicConfig.whatsapp.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`;

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-24 lg:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          {/* Col 1: Brand & Intro */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 inline-block">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white font-black text-2xl shadow-lg">
                S
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-white tracking-tight leading-none">
                  SmileCare
                </span>
                <span className="text-[11px] font-semibold tracking-widest text-teal-400 uppercase mt-0.5">
                  Dental Clinic
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed mt-4">
              {clinicConfig.description}
            </p>

            <div className="flex items-center gap-2 text-xs font-medium text-teal-400 pt-2">
              <ShieldCheck className="w-4 h-4" />
              <span>US-FDA Approved Equipment & Hygiene Standards</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-white text-base font-bold tracking-wide uppercase mb-5 relative inline-block after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-8 after:h-0.5 after:bg-teal-500">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-teal-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-teal-500" />
                  About Clinic
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-teal-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-teal-500" />
                  Our Dental Services
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:text-teal-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-teal-500" />
                  Meet Our Doctors
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-teal-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-teal-500" />
                  Clinic Gallery
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-teal-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-teal-500" />
                  Patient Reviews
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-teal-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-teal-500" />
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-teal-500" />
                  Contact & Location
                </Link>
              </li>
              <li>
                <Link href="/appointment" className="hover:text-teal-400 transition-colors flex items-center gap-1.5 font-semibold text-teal-400">
                  <ArrowRight className="w-3.5 h-3.5 text-teal-400" />
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Treatments */}
          <div>
            <h3 className="text-white text-base font-bold tracking-wide uppercase mb-5 relative inline-block after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-8 after:h-0.5 after:bg-teal-500">
              Specialties
            </h3>
            <ul className="space-y-2.5 text-sm">
              {servicesData.slice(0, 7).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-teal-400 transition-colors flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-teal-500" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div>
            <h3 className="text-white text-base font-bold tracking-wide uppercase mb-5 relative inline-block after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-8 after:h-0.5 after:bg-teal-500">
              Visit Clinic
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">{clinicConfig.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-400 shrink-0" />
                <a href={`tel:${clinicConfig.phone}`} className="text-slate-300 hover:text-white transition-colors">
                  {clinicConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                  WhatsApp Us Instant
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-400 shrink-0" />
                <a href={`mailto:${clinicConfig.email}`} className="text-slate-300 hover:text-white transition-colors">
                  {clinicConfig.email}
                </a>
              </li>
            </ul>

            <div className="mt-5 p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
              <div className="flex items-center gap-2 text-xs font-bold text-teal-400 mb-1.5">
                <Clock className="w-4 h-4" />
                <span>OPD Clinic Hours</span>
              </div>
              {clinicConfig.openingHours.map((oh, idx) => (
                <div key={idx} className="text-xs text-slate-300 flex justify-between py-0.5">
                  <span>{oh.days}:</span>
                  <span className="font-semibold text-white">{oh.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {clinicConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Sterilization Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
