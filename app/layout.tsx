import type { Metadata } from "next";
import "./globals.css";
import { clinicConfig } from "@/data/clinic";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MobileBottomBar } from "@/components/MobileBottomBar";

export const metadata: Metadata = {
  title: {
    default: `${clinicConfig.name} — ${clinicConfig.tagline}`,
    template: `%s | ${clinicConfig.name}`
  },
  description: clinicConfig.description,
  keywords: [
    "Dental Clinic Bangalore",
    "Best Dentist Indiranagar",
    "Dental Implants",
    "Root Canal Treatment",
    "Teeth Whitening",
    "Clear Aligners",
    "Porcelain Veneers",
    "Pediatric Dentistry"
  ],
  authors: [{ name: clinicConfig.name }],
  openGraph: {
    title: `${clinicConfig.name} — Premium Dental Care`,
    description: clinicConfig.description,
    url: "https://smilecaredental.com",
    siteName: clinicConfig.name,
    images: [
      {
        url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 630,
        alt: clinicConfig.name
      }
    ],
    locale: "en_US",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": clinicConfig.name,
    "image": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
    "telephone": clinicConfig.phone,
    "email": clinicConfig.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": clinicConfig.address,
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560038",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "20:00"
      }
    ],
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1250"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileBottomBar />
      </body>
    </html>
  );
}
