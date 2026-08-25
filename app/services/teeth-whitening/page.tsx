import React from "react";
import { Metadata } from "next";
import { ServiceLandingPage } from "@/components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Teeth Whitening | Laser Whitening Bangalore",
  description: "Transform your smile up to 8 shades whiter in 45 minutes with clinical-grade Zoom LED laser whitening."
};

export default function TeethWhiteningPage() {
  return <ServiceLandingPage slug="teeth-whitening" />;
}
