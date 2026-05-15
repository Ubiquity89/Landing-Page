"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code,
  Briefcase,
  Stethoscope,
  Scale,
  Palette,
  Calculator,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    icon: Code,
    title: "Engineering & Technology",
    description:
      "Computer Science, AI, Electronics, Mechanical, and Civil Engineering programs with cutting-edge labs.",
    courses: ["B.Tech", "M.Tech", "Ph.D"],
    color: "from-navy to-navy-light",
  },
  {
    icon: Briefcase,
    title: "Business & Management",
    description:
      "MBA, BBA, and specialized programs in Finance, Marketing, HR, and International Business.",
    courses: ["BBA", "MBA", "PGDM"],
    color: "from-gold to-gold-light",
  },
  {
    icon: Stethoscope,
    title: "Medical Sciences",
    description:
      "MBBS, Nursing, Pharmacy, and allied health sciences with state-of-the-art medical facilities.",
    courses: ["MBBS", "B.Pharm", "Nursing"],
    color: "from-emerald-600 to-teal-500",
  },
  {
    icon: Scale,
    title: "Law & Legal Studies",
    description:
      "Comprehensive legal education with moot courts, internships, and expert faculty.",
    courses: ["BA LLB", "LLM", "Ph.D"],
    color: "from-amber-600 to-orange-500",
  },
  {
    icon: Palette,
    title: "Arts & Design",
    description:
      "Creative programs in Fine Arts, Graphic Design, Animation, and Fashion Design.",
    courses: ["BFA", "B.Des", "MFA"],
    color: "from-rose-600 to-pink-500",
  },
  {
    icon: Calculator,
    title: "Science & Research",
    description:
      "Pure sciences, Applied Mathematics, Physics, Chemistry, and Life Sciences programs.",
    courses: ["B.Sc", "M.Sc", "Ph.D"],
    color: "from-indigo-600 to-blue-500",
  },
];

export function ProgramsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="programs" className="bg-muted/50 py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold">
            Academic Programs
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-balance">Explore Our</span>{" "}
            <span className="gradient-text">Programs</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Choose from 150+ programs across various disciplines designed to prepare 
            you for success in your chosen field.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5"
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
              />

              <div className="relative">
                {/* Icon */}
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${program.color} text-white shadow-lg`}
                >
                  <program.icon className="h-7 w-7" />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-xl font-semibold">{program.title}</h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {program.description}
                </p>

                {/* Courses Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {program.courses.map((course, courseIndex) => (
                    <span
                      key={courseIndex}
                      className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {course}
                    </span>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="mt-6">
                  <button className="inline-flex items-center text-sm font-medium text-navy transition-colors hover:text-gold">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Button size="lg" variant="outline" className="rounded-full px-8 border-navy text-navy hover:bg-navy hover:text-gold">
            View All Programs
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
