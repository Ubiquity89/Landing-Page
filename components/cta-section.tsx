"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative overflow-hidden bg-muted/50 py-24 lg:py-32" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded-full bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold">
              Get Started
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              <span className="text-balance">Ready to Begin Your</span>
              <br />
              <span className="gradient-text">Academic Journey?</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Take the first step towards a brighter future. Our admissions team
              is here to guide you through the application process and answer
              any questions you may have.
            </p>

            {/* Contact Info */}
            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/10 text-navy">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Call Us</div>
                  <div className="font-semibold">+91 (800) 123-4567</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/10 text-navy">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email Us</div>
                  <div className="font-semibold">admissions@jgglobal.edu</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/10 text-navy">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Visit Us</div>
                  <div className="font-semibold">123 University Avenue, Tech City</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-3xl border border-border bg-card p-8 shadow-xl lg:p-10">
              <h3 className="text-2xl font-bold">Request Information</h3>
              <p className="mt-2 text-muted-foreground">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>

              <form className="mt-8 space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      First Name
                    </label>
                    <Input
                      type="text"
                      placeholder="John"
                      className="h-12 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Last Name
                    </label>
                    <Input
                      type="text"
                      placeholder="Doe"
                      className="h-12 rounded-xl"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="h-12 rounded-xl"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Phone</label>
                  <Input
                    type="tel"
                    placeholder="+91 (555) 000-0000"
                    className="h-12 rounded-xl"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Program of Interest
                  </label>
                  <select className="h-12 w-full rounded-xl border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>Select a program</option>
                    <option>Engineering & Technology</option>
                    <option>Business & Management</option>
                    <option>Medical Sciences</option>
                    <option>Law & Legal Studies</option>
                    <option>Arts & Design</option>
                    <option>Science & Research</option>
                  </select>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="h-14 w-full rounded-xl text-lg bg-navy text-gold hover:bg-navy-light"
                >
                  Submit Request
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
