"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Award, CheckCircle2, Clock } from "lucide-react";
import { Doctor } from "@/data/doctors";
import { Button } from "./Button";

interface DoctorCardProps {
  doctor: Doctor;
  index?: number;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
    >
      {/* Doctor Image Container */}
      <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-100">
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

        {/* Experience Badge */}
        <span className="absolute top-4 right-4 px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-full text-xs font-bold text-teal-800 shadow-md flex items-center gap-1.5">
          <Award className="w-3.5 h-3.5 text-teal-600" />
          {doctor.experience}
        </span>

        {/* Doctor Name Overlay */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-tight">
            {doctor.name}
          </h3>
          <p className="text-xs text-teal-300 font-semibold mt-0.5">
            {doctor.specialization}
          </p>
        </div>
      </div>

      {/* Doctor Details */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <div className="text-xs text-slate-500 font-medium bg-slate-50 p-2.5 rounded-xl border border-slate-100">
            <span className="font-bold text-slate-700 block mb-0.5">Qualification:</span>
            {doctor.qualification}
          </div>

          <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
            {doctor.bio}
          </p>

          <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
            <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0" />
            <span>{doctor.schedule}</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-3 border-t border-slate-100">
          <Button
            href={`/appointment?doctor=${encodeURIComponent(doctor.name)}`}
            variant="primary"
            fullWidth
            size="sm"
            icon={<Calendar className="w-4 h-4" />}
          >
            Book Consultation
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
