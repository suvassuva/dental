import React from "react";
import { Metadata } from "next";
import { serviceDetailsData } from "@/data/services";
import { ServiceLandingPage } from "@/components/ServiceLandingPage";
import { clinicConfig } from "@/data/clinic";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const detail = serviceDetailsData[slug];

  if (!detail) {
    return {
      title: `Service Not Found | ${clinicConfig.name}`
    };
  }

  return {
    title: `${detail.title} | ${clinicConfig.name}`,
    description: detail.subtitle
  };
}

export async function generateStaticParams() {
  return Object.keys(serviceDetailsData).map((slug) => ({
    slug
  }));
}

export default async function DynamicServicePage({ params }: PageProps) {
  const { slug } = await params;
  return <ServiceLandingPage slug={slug} />;
}
