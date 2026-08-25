import React from "react";
import { Metadata } from "next";
import { ServiceLandingPage } from "@/components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Orthodontic Braces | SmileCare Dental Clinic",
  description: "Durable metal & clear ceramic braces for kids, teens, and adults crafted by senior orthodontists."
};

export default function BracesPage() {
  return <ServiceLandingPage slug="braces" />;
}
