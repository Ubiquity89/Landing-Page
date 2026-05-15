"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, BookOpen, Globe, Users } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Excellence in Education",
    description:
      "NAAC A++ accredited with a legacy of academic brilliance spanning over 50 years.",
  },
  {
    icon: Globe,
    title: "Global Recognition",
    description:
      "International partnerships with 100+ universities across 40 countries worldwide.",
  },
  {
    icon: Users,
    title: "Diverse Community",
    description:
      "A vibrant campus with students from 50+ nationalities fostering cultural exchange.",
  },
  {
    icon: BookOpen,
    title: "Research Excellence",
    description:
      "Over 2000+ research publications and cutting-edge innovation labs for students.",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              About Us
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              <span className="text-balance">Empowering Minds,</span>
              <br />
              <span className="gradient-text text-balance">Transforming Lives</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Founded in 1970, Nova University has been at the forefront of higher education, 
              nurturing generations of leaders, innovators, and changemakers. Our commitment 
              to excellence extends beyond academics to holistic development.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              With state-of-the-art facilities, world-class faculty, and a curriculum 
              designed for the future, we prepare our students to excel in an ever-evolving 
              global landscape.
            </p>

            {/* Mini Stats */}
            <div className="mt-10 grid grid-cols-3 gap-8">
              {[
                { value: "50+", label: "Years Legacy" },
                { value: "A++", label: "NAAC Grade" },
                { value: "100+", label: "Global Partners" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <div className="text-2xl font-bold text-primary sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
