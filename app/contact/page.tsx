"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { clinicConfig } from "@/data/clinic";
import { servicesData } from "@/data/services";
import { Button } from "@/components/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    treatment: "Dental Implants",
    preferredDate: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.phone.trim()) errs.phone = "Phone number is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      errs.email = "Valid email is required";
    if (!formData.preferredDate) errs.preferredDate = "Preferred date is required";
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
    `Hello ${clinicConfig.name},\nMy Name: ${formData.fullName}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nTreatment Required: ${formData.treatment}\nPreferred Date: ${formData.preferredDate}\nMessage: ${formData.message}`
  );

  const whatsappUrl = `https://wa.me/${clinicConfig.whatsapp.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`;

  return (
    <div className="pt-28 pb-20 space-y-16 sm:space-y-24">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-teal-50/40 via-white to-slate-50 py-16 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200 text-xs font-bold uppercase tracking-wider">
            Contact & Location
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight">
            We're Here for <span className="text-gradient">Your Smile</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Have questions or need to schedule an appointment? Reach out to our front desk directly via phone, WhatsApp, or our online form.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Clinic Information
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Located conveniently in Indiranagar, Bangalore, with dedicated parking and ground-floor accessibility.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-teal-50 text-teal-700 rounded-xl shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Address</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    {clinicConfig.address}
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-teal-50 text-teal-700 rounded-xl shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Phone Hotline</h3>
                  <a
                    href={`tel:${clinicConfig.phone}`}
                    className="text-xs sm:text-sm font-semibold text-teal-700 hover:underline mt-0.5 block"
                  >
                    {clinicConfig.phone}
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">WhatsApp Support</h3>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-bold text-emerald-600 hover:underline mt-0.5 block"
                  >
                    Chat Instant on WhatsApp ({clinicConfig.whatsapp})
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-teal-50 text-teal-700 rounded-xl shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Email Address</h3>
                  <a
                    href={`mailto:${clinicConfig.email}`}
                    className="text-xs sm:text-sm font-semibold text-teal-700 hover:underline mt-0.5 block"
                  >
                    {clinicConfig.email}
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 text-white shadow-md space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-teal-400">
                  <Clock className="w-4 h-4" />
                  <span>OPD Opening Hours</span>
                </div>
                {clinicConfig.openingHours.map((oh, idx) => (
                  <div key={idx} className="text-xs text-slate-300 flex justify-between py-1 border-b border-slate-800 last:border-0">
                    <span>{oh.days}:</span>
                    <span className="font-bold text-white">{oh.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xl">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-sm text-slate-500 mb-8">
                Fill out your details below. You can submit directly or continue via WhatsApp.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-teal-50 border border-teal-200 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Thank You, {formData.fullName}!
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                    Your message has been received! Our patient desk will call you back shortly. To expedite your appointment, click below to send your details via WhatsApp.
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
                        placeholder="John Doe"
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
                        placeholder="john@example.com"
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
                        Select Treatment *
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
                      Message / Specific Concerns (Optional)
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Describe your tooth pain or treatment goals..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      fullWidth
                      size="lg"
                      icon={<Send className="w-4 h-4" />}
                    >
                      Submit Message
                    </Button>

                    <Button
                      href={whatsappUrl}
                      variant="whatsapp"
                      fullWidth
                      size="lg"
                      icon={<MessageCircle className="w-4 h-4" />}
                    >
                      Send via WhatsApp
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed Mockup Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 relative h-96 bg-slate-200">
          <iframe
            title="SmileCare Dental Clinic Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.973499427357!2d77.6409893!3d12.9731215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzIzLjIiTiA3N8KwMzgnMjcuNiJF!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
