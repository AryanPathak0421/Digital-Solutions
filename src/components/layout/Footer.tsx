import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { businessConfig } from '../../config/business';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export const Footer: React.FC = () => {
  const currentYear = 2026;

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Agency Branding & Quick CTA */}
        <div className="pb-12 border-b border-slate-800/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-indigo-500/20">
                <span>R</span>
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight">
                {businessConfig.name}
              </span>
            </div>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed">
              {businessConfig.tagline} Empowering local Indian retailers, clinics, salons,
              restaurants, and service providers with high-impact, affordable websites and digital solutions.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row items-stretch sm:items-center lg:justify-end gap-3">
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-md transition-colors"
            >
              <span>Explore Packages (From ₹7,000)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-200 border border-slate-800 font-semibold text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>

        {/* 5 Column Grid */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 text-sm">
          {/* Column 1: Company */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-slate-400 hover:text-white transition-colors">
                  Portfolio & Case Studies
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-slate-400 hover:text-white transition-colors">
                  Our 8-Step Process
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-slate-400 hover:text-white transition-colors">
                  Pricing & Calculator
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Services</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/services#static" className="text-slate-400 hover:text-white transition-colors">
                  Static Websites (₹7,000)
                </Link>
              </li>
              <li>
                <Link to="/services#dynamic" className="text-slate-400 hover:text-white transition-colors">
                  Dynamic Websites (₹30,000)
                </Link>
              </li>
              <li>
                <Link to="/services#panels" className="text-slate-400 hover:text-white transition-colors">
                  Specialized Admin Panels
                </Link>
              </li>
              <li>
                <Link to="/services#mobile" className="text-slate-400 hover:text-white transition-colors">
                  Mobile Apps (₹15,000+)
                </Link>
              </li>
              <li>
                <Link to="/services#custom" className="text-slate-400 hover:text-white transition-colors">
                  Custom Business Modules
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Industries</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/industries/jewellery-store" className="text-slate-400 hover:text-white transition-colors">
                  Jewellery Stores
                </Link>
              </li>
              <li>
                <Link to="/industries/cosmetic-shop" className="text-slate-400 hover:text-white transition-colors">
                  Cosmetics & Retail
                </Link>
              </li>
              <li>
                <Link to="/industries/restaurant-cafe" className="text-slate-400 hover:text-white transition-colors">
                  Restaurants & Cafes
                </Link>
              </li>
              <li>
                <Link to="/industries/clinic-dental" className="text-slate-400 hover:text-white transition-colors">
                  Healthcare & Clinics
                </Link>
              </li>
              <li>
                <Link to="/industries/salon-beauty-parlour" className="text-slate-400 hover:text-white transition-colors">
                  Salons & Beauty
                </Link>
              </li>
              <li>
                <Link to="/industries/coaching-institute" className="text-slate-400 hover:text-white transition-colors">
                  Coaching Institutes
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Legal & Policy</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/terms" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
                  <span>Terms & Conditions</span>
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-slate-400 hover:text-white transition-colors">
                  Refund & Cancellation
                </Link>
              </li>
              <li className="pt-2 text-xs text-slate-500 leading-snug">
                Transparent delivery with no hidden costs or surprise surcharges.
              </li>
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div className="space-y-4 col-span-2 md:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Direct Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${businessConfig.contact.phoneRaw}`}
                  className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>{businessConfig.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${businessConfig.contact.email}`}
                  className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span className="truncate">{businessConfig.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{businessConfig.contact.whatsapp}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400 text-xs">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>{businessConfig.contact.address.displayAddress}</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-500 text-xs">
                <Clock className="w-4 h-4 shrink-0" />
                <span>{businessConfig.contact.hours.days} ({businessConfig.contact.hours.time})</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-4 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {businessConfig.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5 font-medium text-slate-400">
            <span>Made for businesses that want to grow digitally.</span>
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};
