import React from "react";
import { Metadata } from "next";
import { ServiceLandingPage } from "@/components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Pediatric Dentistry | Gentle Kids Dental Care",
  description: "Fun, anxiety-free pediatric dental care for children featuring specialized pedodontists, ceiling screens, and fluoride cavity sealants."
};

export default function PediatricDentistryPage() {
  return <ServiceLandingPage slug="pediatric-dentistry" />;
}
