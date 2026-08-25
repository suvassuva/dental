import React from "react";
import { Metadata } from "next";
import { ServiceLandingPage } from "@/components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Dental Implants | SmileCare Dental Clinic",
  description: "Restore missing teeth permanently with titanium dental implants placed by board-certified implantologists in Bangalore."
};

export default function DentalImplantsPage() {
  return <ServiceLandingPage slug="dental-implants" />;
}
