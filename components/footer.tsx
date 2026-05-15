"use client";

import Link from "next/link";
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUpRight } from "lucide-react";

const footerLinks = {
  programs: {
    title: "Programs",
    links: [
      { label: "Engineering", href: "#" },
      { label: "Business", href: "#" },
      { label: "Medical Sciences", href: "#" },
      { label: "Law", href: "#" },
      { label: "Arts & Design", href: "#" },
      { label: "Sciences", href: "#" },
    ],
  },
  campus: {
    title: "Campus Life",
    links: [
      { label: "Student Housing", href: "#" },
      { label: "Library", href: "#" },
      { label: "Sports", href: "#" },
      { label: "Clubs & Societies", href: "#" },
      { label: "Events", href: "#" },
      { label: "Career Services", href: "#" },
    ],
  },
  admissions: {
    title: "Admissions",
    links: [
      { label: "How to Apply", href: "#" },
      { label: "Tuition & Fees", href: "#" },
      { label: "Scholarships", href: "#" },
      { label: "International Students", href: "#" },
      { label: "Virtual Tour", href: "#" },
      { label: "FAQs", href: "#" },
    ],
  },
  about: {
    title: "About",
    links: [
      { label: "Our Story", href: "#" },
      { label: "Leadership", href: "#" },
      { label: "News & Media", href: "#" },
      { label: "Research", href: "#" },
      { label: "Partnerships", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-6">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-gold">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <span className="text-xl font-bold tracking-tight">
                  JG<span className="gradient-text"> Global</span>
                </span>
              </Link>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                Empowering minds and transforming lives through world-class education,
                cutting-edge research, and a commitment to excellence since 1970.
              </p>

              {/* Social Links */}
              <div className="mt-6 flex gap-3">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-navy hover:text-gold"
                  >
                    <social.icon className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            {Object.values(footerLinks).map((section, index) => (
              <div key={index}>
                <h3 className="text-sm font-semibold uppercase tracking-wider">
                  {section.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                        <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              {new Date().getFullYear()} JG Global University. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
