import React from "react";
import { Metadata } from "next";
import { ServiceLandingPage } from "@/components/ServiceLandingPage";
import { clinicConfig } from "@/data/clinic";

export const metadata: Metadata = {
  title: `Dental Implants | ${clinicConfig.name}`,
  description: "Restore missing teeth permanently with titanium dental implants placed by board-certified implantologists."
};

export default function DentalImplantsPage() {
  return <ServiceLandingPage slug="dental-implants" />;
}
