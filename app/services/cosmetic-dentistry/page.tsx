import React from "react";
import { Metadata } from "next";
import { ServiceLandingPage } from "@/components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Cosmetic Dentistry & Veneers | SmileCare Dental Clinic",
  description: "Complete Hollywood smile makeovers with ultra-thin porcelain veneers, composite bonding, and Digital Smile Design."
};

export default function CosmeticDentistryPage() {
  return <ServiceLandingPage slug="cosmetic-dentistry" />;
}
