"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  {
    value: 25000,
    suffix: "+",
    label: "Students Enrolled",
    description: "From 50+ countries",
  },
  {
    value: 500,
    suffix: "+",
    label: "Expert Faculty",
    description: "Ph.D holders & industry experts",
  },
  {
    value: 150,
    suffix: "+",
    label: "Academic Programs",
    description: "UG, PG & Doctoral",
  },
  {
    value: 95,
    suffix: "%",
    label: "Placement Rate",
    description: "Within 6 months of graduation",
  },
  {
    value: 100,
    suffix: "+",
    label: "Global Partners",
    description: "Universities worldwide",
  },
  {
    value: 50,
    suffix: "+",
    label: "Years of Excellence",
    description: "Since 1970",
  },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += stepValue;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stats" className="relative overflow-hidden py-24 lg:py-32" ref={ref}>
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -left-1/4 h-full w-full"
        >
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full border border-white/10" />
          <div className="absolute top-1/3 left-1/3 h-64 w-64 rounded-full border border-white/10" />
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
            Our Achievements
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            <span className="text-balance">Numbers That Define</span>{" "}
            <span className="text-white/80">Excellence</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
            >
              <div className="text-4xl font-bold text-white sm:text-5xl">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-3 text-lg font-semibold text-white">
                {stat.label}
              </div>
              <div className="mt-1 text-sm text-white/70">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
