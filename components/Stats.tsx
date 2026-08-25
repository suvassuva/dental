"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Smile, Star } from "lucide-react";

export const Stats: React.FC = () => {
  const statsList = [
    {
      icon: <Award className="w-7 h-7 text-teal-600" />,
      value: "10+ Years",
      label: "Clinical Experience",
      bgColor: "bg-teal-50"
    },
    {
      icon: <Users className="w-7 h-7 text-teal-600" />,
      value: "10,000+",
      label: "Happy Patients",
      bgColor: "bg-teal-50"
    },
    {
      icon: <Smile className="w-7 h-7 text-amber-600" />,
      value: "15+ Specialized",
      label: "Treatments Offered",
      bgColor: "bg-amber-50"
    },
    {
      icon: <Star className="w-7 h-7 text-amber-500 fill-amber-500" />,
      value: "4.9 / 5.0",
      label: "Patient Satisfaction",
      bgColor: "bg-amber-50"
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {statsList.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left"
        >
          <div className={`p-3.5 rounded-xl ${stat.bgColor} shrink-0`}>
            {stat.icon}
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-extrabold text-slate-900 block tracking-tight">
              {stat.value}
            </span>
            <span className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5 block">
              {stat.label}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
