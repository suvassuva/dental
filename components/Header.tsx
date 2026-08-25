"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Calendar, MessageCircle, Phone } from "lucide-react";
import { clinicConfig } from "@/data/clinic";
import { Button } from "./Button";
import { MobileMenu } from "./MobileMenu";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Doctors", href: "/doctors" },
    { name: "Gallery", href: "/gallery" },
    { name: "Reviews", href: "/reviews" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" }
  ];

  const whatsappMessage = encodeURIComponent(
    `Hello ${clinicConfig.name}, I would like to book a consultation.`
  );
  const whatsappUrl = `https://wa.me/${clinicConfig.whatsapp.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "glass-header shadow-md border-b border-slate-200/60 py-2 sm:py-3"
            : "bg-white/90 backdrop-blur-md py-2.5 sm:py-4 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-teal-700 to-teal-500 flex items-center justify-center text-white font-black text-lg sm:text-2xl shadow-md shadow-teal-700/20 group-hover:scale-105 transition-transform duration-300">
                S
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-xl font-extrabold text-slate-900 tracking-tight leading-none group-hover:text-teal-700 transition-colors">
                  SmileCare
                </span>
                <span className="text-[9px] sm:text-[11px] font-semibold tracking-widest text-teal-700 uppercase mt-0.5">
                  Dental Clinic
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-all ${
                      isActive
                        ? "text-teal-700 bg-teal-50"
                        : "text-slate-700 hover:text-teal-700 hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                title="WhatsApp Us"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <Button
                href="/appointment"
                variant="primary"
                size="sm"
                icon={<Calendar className="w-4 h-4" />}
              >
                Book Appointment
              </Button>
            </div>

            {/* Mobile Hamburger Menu Button */}
            <div className="flex lg:hidden items-center gap-1.5">
              <a
                href={`tel:${clinicConfig.phone}`}
                className="p-2 rounded-full bg-teal-50 text-teal-700 hover:bg-teal-100 transition-colors"
                aria-label="Call clinic"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-lg bg-slate-100 text-slate-800 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Responsive Mobile Drawer Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
};
