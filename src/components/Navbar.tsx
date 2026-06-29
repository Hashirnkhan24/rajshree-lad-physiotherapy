"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, MapPin, Menu, X, Calendar, Activity } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Conditions", href: "#conditions" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full px-4 py-3 md:px-8">
      <div className="mx-auto max-w-7xl">
        <nav className="relative flex items-center justify-between rounded-2xl border border-white/30 bg-white/80 px-6 py-3 shadow-lg backdrop-blur-md">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-teal text-white shadow-md shadow-primary-teal/20 transition-transform group-hover:scale-105">
              <Activity className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-extrabold leading-none tracking-tight text-dark-teal">
                DR. RAJASHREE LAD&apos;S
              </span>
              <span className="text-[9px] font-bold tracking-widest text-primary-teal uppercase mt-0.5">
                Physiotherapy & Osteopathy
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-semibold tracking-wide text-dark-text/80 hover:text-primary-teal hover:translate-y-[-1px] transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Utilities & CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Search Input Toggle */}
            <div className="relative flex items-center">
              {showSearch && (
                <input
                  type="text"
                  placeholder="Search services..."
                  className="mr-2 rounded-lg border border-dark-teal/10 bg-white px-3 py-1 text-xs text-dark-text focus:outline-none focus:ring-1 focus:ring-primary-teal w-40 animate-fade-in"
                  autoFocus
                />
              )}
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="rounded-lg p-2 text-dark-text/75 hover:bg-light-mint hover:text-primary-teal transition-all"
                aria-label="Search"
              >
                <Search className="h-4 w-4" />
              </button>
            </div>

            {/* Location Icon */}
            <Link
              href="#contact"
              className="rounded-lg p-2 text-dark-text/75 hover:bg-light-mint hover:text-primary-teal transition-all"
              aria-label="Location"
            >
              <MapPin className="h-4 w-4" />
            </Link>

            {/* Make an Appointment Button */}
            <Link
              href="#appointment"
              className="flex items-center gap-2 rounded-xl bg-primary-teal px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-primary-teal/20 hover:bg-dark-teal hover:shadow-lg hover:shadow-dark-teal/20 transition-all duration-200"
            >
              <Calendar className="h-4 w-4" />
              Make an Appointment
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Make an Appointment Compact button for mobile */}
            <Link
              href="#appointment"
              className="md:hidden flex items-center justify-center rounded-xl bg-primary-teal p-2.5 text-white shadow-md hover:bg-dark-teal transition-all"
              aria-label="Make an Appointment"
            >
              <Calendar className="h-4 w-4" />
            </Link>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-xl border border-dark-text/10 p-2 text-dark-text hover:bg-light-mint transition-all"
              aria-expanded={isOpen}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="absolute inset-x-4 top-24 z-50 rounded-2xl border border-white/30 bg-white/95 p-6 shadow-xl backdrop-blur-md lg:hidden animate-in fade-in slide-in-from-top-5 duration-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-2 text-base font-semibold text-dark-text hover:bg-light-mint hover:text-primary-teal transition-all"
                >
                  {link.label}
                </Link>
              ))}

              <hr className="my-2 border-dark-text/10" />

              <div className="flex items-start justify-between px-3 py-1">
                <div className="flex items-start gap-2 text-sm text-dark-text/70">
                  <MapPin className="h-4 w-4 text-primary-teal shrink-0 mt-0.5" />
                  <span className="text-xs leading-relaxed">
                    Harjivandas Estate, Dr Babasaheb Ambedkar Rd, near Dadar TT,
                    Dadar East, Dadar, Mumbai, Maharashtra 400014
                  </span>
                </div>
              </div>

              <Link
                href="#appointment"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-primary-teal py-3 text-base font-bold text-white shadow-lg shadow-primary-teal/10 hover:bg-dark-teal transition-all"
              >
                <Calendar className="h-5 w-5" />
                Make an Appointment
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
