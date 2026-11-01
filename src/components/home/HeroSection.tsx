import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  MessageCircle,
  Eye,
  Store,
  Smartphone,
} from 'lucide-react';
import { businessConfig } from '../../config/business';
import { Button } from '../common/Button';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export interface HeroSectionProps {
  onOpenConsultation?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-indigo-50/70 via-white to-slate-50">
      {/* Subtle Background Glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-200/40 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-sky-200/30 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & High-Conversion CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Pricing Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 shadow-xs mb-6">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
              <span className="text-xs sm:text-sm font-bold text-indigo-700 tracking-tight">
                {businessConfig.badges.pricingBadge}
              </span>
              <span className="hidden sm:inline text-indigo-300">•</span>
              <span className="hidden sm:inline text-xs font-semibold text-indigo-600">
                8 Pages Included
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Your Business Deserves a{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-sky-600 bg-clip-text text-transparent">
                Better Digital Presence.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {businessConfig.subheadline}
            </p>

            {/* Trust Pill Highlights */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 text-xs sm:text-sm font-medium text-slate-700">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>100% Mobile First</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Lead Flow</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>No Hidden Fees</span>
              </span>
            </div>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5">
              {onOpenConsultation ? (
                <Button
                  variant="primary"
                  size="lg"
                  onClick={onOpenConsultation}
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Get Free Consultation
                </Button>
              ) : (
                <Button
                  asAnchor
                  href="/contact"
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Get Free Consultation
                </Button>
              )}

              <Button
                asAnchor
                href="/services"
                variant="outline"
                size="lg"
              >
                Explore Services
              </Button>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Micro Trust Quote */}
            <p className="mt-4 text-xs text-slate-500">
              Starting from ₹7,000 • Free consultation • Pan-India remote delivery
            </p>
          </motion.div>

          {/* Right Column: Premium UI Mockup Showcase (No Stock Photos, Pure UI Dashboard) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            {/* Browser Frame Mockup */}
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl bg-white shadow-2xl border border-slate-200/90 overflow-hidden">
              {/* Browser Window Bar */}
              <div className="bg-slate-900 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                </div>
                <div className="px-3 py-1 rounded-md bg-slate-800 text-[11px] font-mono text-slate-300 flex items-center gap-1.5 max-w-[200px] truncate">
                  <Store className="w-3 h-3 text-indigo-400" />
                  <span>https://yourbusiness.online</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  LIVE
                </span>
              </div>

              {/* Mockup Screen Inside */}
              <div className="p-4 sm:p-5 bg-slate-50/50 space-y-4">
                {/* Store Header Bar Inside Mockup */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold text-sm flex items-center justify-center">
                      S
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">
                        Swarna Jewellers & Sons
                      </p>
                      <p className="text-[10px] text-slate-500">
                        Showroom & Bridal Collections
                      </p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                    Open Now
                  </span>
                </div>

                {/* Dashboard Metrics Cards */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-white border border-slate-200/70 shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-slate-500">
                        Customer Inquiries
                      </span>
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <p className="text-lg font-black text-slate-900 mt-1">+148</p>
                    <span className="text-[10px] font-semibold text-emerald-600 flex items-center gap-0.5">
                      <TrendingUp className="w-3 h-3" /> via WhatsApp & Web
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200/70 shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-slate-500">
                        Catalog Views
                      </span>
                      <Eye className="w-3.5 h-3.5 text-indigo-600" />
                    </div>
                    <p className="text-lg font-black text-slate-900 mt-1">2,410</p>
                    <span className="text-[10px] font-semibold text-indigo-600">
                      Local Area Shoppers
                    </span>
                  </div>
                </div>

                {/* Live Product Showcase Preview */}
                <div className="p-3 rounded-xl bg-white border border-slate-200/70 shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-800">
                      Featured Bridal Collection
                    </span>
                    <span className="text-[10px] text-indigo-600 font-bold">
                      ₹7,000 Starter Site
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-lg bg-slate-50 border border-slate-100">
                    <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center font-bold text-amber-700 text-xs">
                      22K
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-slate-900 truncate">
                        Royal Kundan Choker Set
                      </p>
                      <p className="text-[10px] text-slate-500">
                        Hallmark Certified • Showroom Trial
                      </p>
                    </div>
                    <span className="px-2 py-1 rounded bg-[#25D366] text-white text-[10px] font-bold">
                      Inquire
                    </span>
                  </div>
                </div>

                {/* Mobile Preview Floating Badge */}
                <div className="flex items-center justify-between pt-1 text-[11px] text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Smartphone className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Optimized for 4G & 5G Phones</span>
                  </span>
                  <span className="font-semibold text-emerald-600">
                    99.8% Uptime
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Trust Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="hidden sm:flex absolute -bottom-5 -left-5 bg-white p-3.5 rounded-xl shadow-xl border border-slate-200 items-center gap-3 z-10"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">
                  100% Indian Business Tailored
                </p>
                <p className="text-[10px] text-slate-500">
                  Direct WhatsApp lead generation ready
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
