import Link from "next/link";
import { Activity, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Shoulder Pain", href: "#services" },
    { name: "Knee Pain", href: "#services" },
    { name: "Neck Pain", href: "#services" },
    { name: "Back Pain", href: "#services" },
    { name: "After Surgery", href: "#services" },
    { name: "Restricted Movements", href: "#services" },
    { name: "Sports Injury", href: "#services" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About the Centre", href: "#about" },
    { name: "Conditions We Treat", href: "#body-map" },
    { name: "Meet Our Team", href: "#team" },
    { name: "Contact & Location", href: "#contact" },
  ];

  return (
    <footer className="mt-auto bg-dark-teal text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-teal text-white">
                <Activity className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-extrabold leading-none tracking-tight text-white">
                  DR. RAJASHREE LAD&apos;S
                </span>
                <span className="text-[9px] font-bold tracking-widest text-primary-teal uppercase mt-0.5">
                  Physiotherapy & Osteopathy
                </span>
              </div>
            </Link>
            <p className="text-sm text-light-mint/70 leading-relaxed">
              Empowering you to live your life in full motion. We offer advanced orthopedic rehabilitation, sports therapy, and personalized recovery plans designed around your body.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-base font-bold tracking-wider text-primary-teal uppercase mb-5">
              Services
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-light-mint/80">
              {services.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="hover:text-primary-teal transition-all">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-base font-bold tracking-wider text-primary-teal uppercase mb-5">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-light-mint/80">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="hover:text-primary-teal transition-all">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-bold tracking-wider text-primary-teal uppercase mb-1">
              Connect
            </h3>
            
            <div className="flex gap-3 text-sm text-light-mint/80">
              <MapPin className="h-5 w-5 shrink-0 text-primary-teal" />
              <span>Harjivandas Estate, Dr Babasaheb Ambedkar Rd, near Dadar TT, Dadar East, Dadar, Mumbai, Maharashtra 400014</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-light-mint/80">
              <Phone className="h-5 w-5 shrink-0 text-primary-teal" />
              <a href="tel:9773953209" className="hover:text-primary-teal">+91 9773953209</a>
            </div>

            <div className="flex items-center gap-3 text-sm text-light-mint/80">
              <Mail className="h-5 w-5 shrink-0 text-primary-teal" />
              <a href="mailto:trs.praj@gmail.com" className="hover:text-primary-teal">trs.praj@gmail.com</a>
            </div>

            <div className="flex gap-3 text-sm text-light-mint/80">
              <Clock className="h-5 w-5 shrink-0 text-primary-teal" />
              <div>
                <p className="font-semibold text-primary-teal">Open · Closes 8:30 pm</p>
                <p className="text-xs text-light-mint/60 mt-0.5">Mon - Sat: 9:00 AM - 8:30 PM</p>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <hr className="my-10 border-white/10" />

        {/* Bottom copyright */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-light-mint/55">
          <p>© {currentYear} Dr. Rajashree Lad&apos;s Physiotherapy & Osteopathy Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
