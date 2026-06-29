"use client";

import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import Link from "next/link";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up">
      <Link
        href="#appointment"
        className="flex items-center gap-2 rounded-full border border-white/20 bg-primary-teal p-4 text-white shadow-2xl shadow-primary-teal/40 hover:bg-dark-teal hover:scale-105 hover:-translate-y-1 active:scale-95 transition-all duration-300 md:px-6 md:py-4 group"
      >
        <Calendar className="h-5 w-5 transition-transform group-hover:rotate-6" />
        <span className="hidden md:inline text-sm font-extrabold tracking-wider uppercase">
          Book Appointment
        </span>
        {/* Decorative active pulse dot */}
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
      </Link>
    </div>
  );
}
