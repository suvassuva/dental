"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Calendar, MessageCircle, ChevronRight } from "lucide-react";
import { clinicConfig } from "@/data/clinic";
import { Button } from "./Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string }[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navLinks }) => {
  const pathname = usePathname();

  const whatsappMessage = encodeURIComponent(
    `Hello ${clinicConfig.name}, I would like to inquire about an appointment.`
  );
  const whatsappUrl = `https://wa.me/${clinicConfig.whatsapp.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm lg:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-white shadow-2xl flex flex-col lg:hidden overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-700 to-teal-500 flex items-center justify-center text-white font-black text-xl shadow-md">
                  S
                </div>
                <div>
                  <span className="text-base font-bold text-slate-900 leading-tight block">
                    SmileCare
                  </span>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-teal-700 block">
                    Dental Clinic
                  </span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full text-slate-500 hover:bg-slate-100 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation links */}
            <div className="px-5 py-6 flex-1 space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl font-medium text-base transition-colors ${
                      isActive
                        ? "bg-teal-50 text-teal-800 font-semibold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight
                      className={`w-4 h-4 ${isActive ? "text-teal-700" : "text-slate-400"}`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Action buttons footer */}
            <div className="p-5 border-t border-slate-100 bg-slate-50 space-y-3">
              <Button
                href="/appointment"
                onClick={onClose}
                variant="primary"
                fullWidth
                size="md"
                icon={<Calendar className="w-4 h-4" />}
              >
                Book Appointment
              </Button>

              <Button
                href={whatsappUrl}
                onClick={onClose}
                variant="whatsapp"
                fullWidth
                size="md"
                icon={<MessageCircle className="w-4 h-4" />}
              >
                WhatsApp Us
              </Button>

              <div className="pt-2 text-center">
                <a
                  href={`tel:${clinicConfig.phone}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-teal-700"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-700" />
                  <span>Call: {clinicConfig.phone}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
