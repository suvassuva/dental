import React from "react";
import { Metadata } from "next";
import { ServiceLandingPage } from "@/components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Clear Aligners | Invisible Teeth Alignment",
  description: "Removable, 100% invisible clear aligners custom 3D-scanned for your teeth. Straighten teeth comfortably without metal wires."
};

export default function ClearAlignersPage() {
  return <ServiceLandingPage slug="clear-aligners" />;
}
