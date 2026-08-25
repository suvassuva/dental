import React from "react";
import { Metadata } from "next";
import { ServiceLandingPage } from "@/components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Root Canal Treatment | Painless Micro-Endodontics",
  description: "Single-session painless root canal treatment using microscopic rotary tools to save infected natural teeth."
};

export default function RootCanalPage() {
  return <ServiceLandingPage slug="root-canal" />;
}
