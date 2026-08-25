"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Activity, Sparkles, Smile, Maximize2, Sun, Heart, CheckCircle, Droplet, ShieldAlert, Award, Zap } from "lucide-react";
import { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  index?: number;
}

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-5 h-5 text-teal-700" />,
  Activity: <Activity className="w-5 h-5 text-teal-700" />,
  Sparkles: <Sparkles className="w-5 h-5 text-teal-700" />,
  Smile: <Smile className="w-5 h-5 text-teal-700" />,
  Maximize2: <Maximize2 className="w-5 h-5 text-teal-700" />,
  Sun: <Sun className="w-5 h-5 text-teal-700" />,
  Heart: <Heart className="w-5 h-5 text-teal-700" />,
  CheckCircle: <CheckCircle className="w-5 h-5 text-teal-700" />,
  Droplet: <Droplet className="w-5 h-5 text-teal-700" />,
  ShieldAlert: <ShieldAlert className="w-5 h-5 text-teal-700" />,
  Award: <Award className="w-5 h-5 text-teal-700" />,
  Zap: <Zap className="w-5 h-5 text-teal-700" />
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
    >
      {/* Service Image Container */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
        
        {/* Category Tag */}
        <span className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[11px] font-bold text-teal-800 tracking-wide uppercase shadow-sm">
          {service.category}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center gap-3 mb-2.5">
            <div className="p-2.5 rounded-xl bg-teal-50 border border-teal-100 shrink-0">
              {iconMap[service.iconName] || <Smile className="w-5 h-5 text-teal-700" />}
            </div>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
              {service.name}
            </h3>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            {service.shortDescription}
          </p>
        </div>

        {/* Action Link */}
        <div className="pt-2 border-t border-slate-100">
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-900 group/link transition-colors"
          >
            <span>Learn More & Pricing</span>
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
