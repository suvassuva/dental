"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Calendar, Clock, Phone, MessageCircle, MapPin, CheckCircle2, ShieldCheck } from "lucide-react";
import { clinicConfig } from "@/data/clinic";
import { servicesData } from "@/data/services";
import { doctorsData } from "@/data/doctors";
import { Button } from "@/components/Button";

function AppointmentFormContent() {
  const searchParams = useSearchParams();
  const initialDoctor = searchParams.get("doctor") || "";
  const initialTreatment = searchParams.get("treatment") || "Dental Implants";

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    treatment: initialTreatment,
    doctor: initialDoctor,
    preferredDate: "",
    preferredTime: "10:00 AM",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Full Name is required";
    if (!formData.phone.trim()) errs.phone = "Phone number is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      errs.email = "Valid email is required";
    if (!formData.preferredDate) errs.preferredDate = "Date is required";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello ${clinicConfig.name}, I would like to confirm my appointment booking:\n\nName: ${formData.fullName}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nTreatment: ${formData.treatment}\nDoctor Preferred: ${formData.doctor || "Any Specialist"}\nDate: ${formData.preferredDate}\nTime Slot: ${formData.preferredTime}\nNotes: ${formData.message}`
  );

  const whatsappUrl = `https://wa.me/${clinicConfig.whatsapp.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Left Column: Quick Contact Cards */}
      <div className="lg:col-span-4 space-y-6">
        <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-400 block">
            Direct OPD Booking
          </span>
          <h3 className="text-2xl font-bold">Fast-Track Options</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Need urgent assistance? Call our receptionist directly or send a quick WhatsApp message.
          </p>

          <div className="space-y-3 pt-2">
            <a
              href={`tel:${clinicConfig.phone}`}
              className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 transition-colors text-white text-sm font-bold border border-slate-700"
            >
              <Phone className="w-5 h-5 text-teal-400" />
              <span>Call Clinic ({clinicConfig.phone})</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 transition-colors text-white text-sm font-bold shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Clinic</span>
            </a>

            <a
              href={clinicConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 transition-colors text-slate-200 text-sm font-semibold border border-slate-700"
            >
              <MapPin className="w-5 h-5 text-amber-400" />
              <span>Get Directions to Clinic</span>
            </a>
          </div>
        </div>

        {/* Operating Hours Box */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
            <Clock className="w-4 h-4 text-teal-600" />
            <span>Consultation Timings</span>
          </div>
          {clinicConfig.openingHours.map((oh, idx) => (
            <div key={idx} className="text-xs text-slate-600 flex justify-between py-1 border-b border-slate-100 last:border-0">
              <span>{oh.days}:</span>
              <span className="font-semibold text-slate-900">{oh.hours}</span>
            </div>
          ))}
        </div>

        {/* Guarantees */}
        <div className="p-6 rounded-3xl bg-teal-50 border border-teal-100 space-y-2 text-xs text-teal-900">
          <div className="flex items-center gap-2 font-bold text-sm text-teal-900 mb-1">
            <ShieldCheck className="w-4 h-4 text-teal-700" />
            <span>{clinicConfig.shortName} Booking Guarantee</span>
          </div>
          <p className="leading-relaxed">
            ✔ Zero Registration Fees<br />
            ✔ Instant WhatsApp Confirmation<br />
            ✔ Free Initial Dental X-Ray Consultation
          </p>
        </div>
      </div>

      {/* Right Column: Appointment Form */}
      <div className="lg:col-span-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
            Schedule Your Visit
          </h2>
          <p className="text-sm text-slate-500 mb-8">
            Select your preferred treatment, date, and doctor. Our team will instantly confirm your time slot.
          </p>

          {submitted ? (
            <div className="p-8 rounded-3xl bg-teal-50 border border-teal-200 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Appointment Drafted, {formData.fullName}!
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                Click below to finalize and send your appointment schedule directly to our clinic WhatsApp desk for instant slot confirmation.
              </p>
              <div className="pt-2">
                <Button
                  href={whatsappUrl}
                  variant="whatsapp"
                  size="lg"
                  icon={<MessageCircle className="w-5 h-5" />}
                >
                  Continue on WhatsApp
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder="Jane Smith"
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 ${
                      errors.fullName
                        ? "border-red-500 focus:ring-red-200"
                        : "border-slate-200 focus:ring-teal-500"
                    }`}
                  />
                  {errors.fullName && (
                    <span className="text-xs text-red-500 mt-1 block">
                      {errors.fullName}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+91 98765 43210"
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 ${
                      errors.phone
                        ? "border-red-500 focus:ring-red-200"
                        : "border-slate-200 focus:ring-teal-500"
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-xs text-red-500 mt-1 block">
                      {errors.phone}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="jane@example.com"
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 ${
                      errors.email
                        ? "border-red-500 focus:ring-red-200"
                        : "border-slate-200 focus:ring-teal-500"
                    }`}
                  />
                  {errors.email && (
                    <span className="text-xs text-red-500 mt-1 block">
                      {errors.email}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Treatment Required *
                  </label>
                  <select
                    value={formData.treatment}
                    onChange={(e) =>
                      setFormData({ ...formData, treatment: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
                  >
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Preferred Doctor (Optional)
                  </label>
                  <select
                    value={formData.doctor}
                    onChange={(e) =>
                      setFormData({ ...formData, doctor: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
                  >
                    <option value="">Any Specialist Doctor</option>
                    {doctorsData.map((d) => (
                      <option key={d.id} value={d.name}>
                        {d.name} ({d.specialization.split("&")[0]})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) =>
                      setFormData({ ...formData, preferredDate: e.target.value })
                    }
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 ${
                      errors.preferredDate
                        ? "border-red-500 focus:ring-red-200"
                        : "border-slate-200 focus:ring-teal-500"
                    }`}
                  />
                  {errors.preferredDate && (
                    <span className="text-xs text-red-500 mt-1 block">
                      {errors.preferredDate}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Preferred Time Slot *
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) =>
                      setFormData({ ...formData, preferredTime: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
                  >
                    <option value="9:30 AM">9:30 AM - 11:00 AM</option>
                    <option value="11:30 AM">11:30 AM - 1:00 PM</option>
                    <option value="2:30 PM">2:30 PM - 4:00 PM</option>
                    <option value="5:00 PM">5:00 PM - 7:30 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Special Notes / Pain Symptoms (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Mention any dental anxiety, medical conditions, or specific tooth pain..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  type="submit"
                  variant="gold"
                  fullWidth
                  size="lg"
                  icon={<Calendar className="w-5 h-5" />}
                >
                  Book Appointment Now
                </Button>

                <Button
                  href={whatsappUrl}
                  variant="whatsapp"
                  fullWidth
                  size="lg"
                  icon={<MessageCircle className="w-5 h-5" />}
                >
                  Continue on WhatsApp
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AppointmentPage() {
  return (
    <div className="pt-28 pb-20 space-y-16 sm:space-y-24">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-teal-50/40 via-white to-slate-50 py-16 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200 text-xs font-bold uppercase tracking-wider">
            Online Booking Desk
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight">
            Book Your <span className="text-gradient">Dental Appointment</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Reserve your consultation slot in under 60 seconds with our senior specialist doctors.
          </p>
        </div>
      </section>

      {/* Main Booking Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<div className="text-center py-12 text-slate-500">Loading booking form...</div>}>
          <AppointmentFormContent />
        </Suspense>
      </section>
    </div>
  );
}
