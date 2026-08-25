import { MetadataRoute } from "next";
import { servicesData } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://smilecaredental.com";

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/doctors",
    "/gallery",
    "/reviews",
    "/faq",
    "/contact",
    "/appointment"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8
  }));

  const serviceRoutes = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9
  }));

  return [...staticRoutes, ...serviceRoutes];
}
