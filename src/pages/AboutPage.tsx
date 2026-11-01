import React, { useEffect } from 'react';
import { updateSEO } from '../utils/seo';
import { SectionHeading } from '../components/common/SectionHeading';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { CTASection } from '../components/home/CTASection';
import { businessConfig } from '../config/business';
import { useAppLayout } from '../context/LayoutContext';
import {
  Code2,
  HeartHandshake,
  CheckCircle2,
  ShieldCheck,
  Target,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { openConsultationModal } = useAppLayout();

  useEffect(() => {
    updateSEO({
      title: 'About Rozsewa Digital — Empowering Indian Local Businesses',
      description:
        'Rozsewa Digital builds modern, premium, affordable websites and digital solutions for local shops, healthcare clinics, salons, and restaurants across India starting at ₹7,000.',
      canonicalPath: '/about',
    });
  }, []);

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'About' }]} className="mb-6" />

        <SectionHeading
          badge="Our Mission & Philosophy"
          title="Bridging the Digital Divide for India's Local Businesses"
          subtitle="We believe every neighborhood retail shop, salon, doctor, and service provider deserves an enterprise-grade digital presence without paying multi-lakh fees."
          align="center"
        />

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
              Why We Founded <span className="text-indigo-600">{businessConfig.name}</span>
            </h3>
            <p>
              For years, Indian small and medium business owners faced an unfair dilemma: either spend
              huge sums hiring expensive IT agencies, or struggle with fragile, slow WordPress templates
              that broke constantly and didn't generate phone calls.
            </p>
            <p>
              We established {businessConfig.name} with a singular focus: to engineer clean, lightning-fast,
              and conversion-oriented web solutions starting at just ₹7,000. We don't just build websites
              that look attractive; we build tools that directly produce WhatsApp enquiries, customer phone
              calls, and showroom visits.
            </p>
            <p className="font-semibold text-slate-800">
              Our core pledge: "Affordable Websites. Professional Digital Presence. Scalable Technology."
            </p>
          </div>

          {/* Visual Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Conversion Focused</h4>
              <p className="text-xs text-slate-600">
                Every layout is planned around capturing customer inquiries, WhatsApp clicks, and bookings.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <Code2 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Modern Architecture</h4>
              <p className="text-xs text-slate-600">
                React, TypeScript & Tailwind codebases engineered for sub-2-second load times on mobile networks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Transparent Pricing</h4>
              <p className="text-xs text-slate-600">
                Fixed packages with no hidden costs, no surprise renewals, and clear additional page costs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">1-Year Maintenance</h4>
              <p className="text-xs text-slate-600">
                Continuous backend and technical support included automatically with dynamic applications.
              </p>
            </div>
          </div>
        </div>

        {/* Our Technological Philosophy */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 mb-24 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-white/10 px-3 py-1 rounded-full">
              Engineering Excellence
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Why We Avoid Bloated Generic Site Builders
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Most mass-market website creators generate hundreds of unnecessary scripts that slow down
              smartphones and cause customers to bounce before the page even opens. We engineer bespoke,
              component-driven applications that pass Google's strictest Core Web Vitals checks.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero bloated plugins</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Enterprise security & SSL</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Instant WhatsApp triggers</span>
              </span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <CTASection onOpenConsultation={() => openConsultationModal()} />
      </div>
    </div>
  );
};
