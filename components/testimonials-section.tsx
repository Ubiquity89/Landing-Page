"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "B.Tech Computer Science, 2023",
    company: "Software Engineer at Google",
    image: "/testimonials/person1.jpg",
    quote:
      "Nova University transformed my career trajectory. The practical exposure, industry connections, and mentorship I received here were invaluable. I landed my dream job even before graduation.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "MBA Finance, 2022",
    company: "Investment Analyst at Goldman Sachs",
    image: "/testimonials/person2.jpg",
    quote:
      "The business school at Nova is exceptional. The case-study approach, global exposure through exchange programs, and networking opportunities prepared me for the competitive finance world.",
    rating: 5,
  },
  {
    name: "Ananya Patel",
    role: "MBBS, 2021",
    company: "Resident Doctor at AIIMS",
    image: "/testimonials/person3.jpg",
    quote:
      "The medical program here is rigorous yet supportive. State-of-the-art labs, experienced faculty, and hands-on clinical training gave me the confidence to excel in my residency.",
    rating: 5,
  },
  {
    name: "Arjun Kumar",
    role: "Ph.D Physics, 2020",
    company: "Research Scientist at CERN",
    image: "/testimonials/person4.jpg",
    quote:
      "The research ecosystem at Nova is world-class. I had access to cutting-edge facilities and collaboration opportunities that shaped my research career.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Student Success
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-balance">What Our Alumni</span>{" "}
            <span className="gradient-text">Say About Us</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Hear from our successful graduates who are making a difference in
            their respective fields.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="mt-16">
          <div className="relative">
            {/* Main Testimonial Card */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-4xl"
            >
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-xl lg:p-12">
                {/* Quote Icon */}
                <div className="absolute right-8 top-8 opacity-10">
                  <Quote className="h-24 w-24 text-primary" />
                </div>

                <div className="relative">
                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      )
                    )}
                  </div>

                  {/* Quote */}
                  <blockquote className="mt-6 text-xl leading-relaxed text-foreground lg:text-2xl">
                    &ldquo;{testimonials[currentIndex].quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="mt-8 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-xl font-bold text-white">
                      {testimonials[currentIndex].name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-lg font-semibold">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].role}
                      </div>
                      <div className="text-sm font-medium text-primary">
                        {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="h-12 w-12 rounded-full"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="h-12 w-12 rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <p className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Our Alumni Work At
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {["Google", "Microsoft", "Amazon", "Meta", "Apple", "Tesla"].map(
              (company, index) => (
                <div
                  key={index}
                  className="text-xl font-bold text-muted-foreground/50 transition-colors hover:text-muted-foreground"
                >
                  {company}
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
