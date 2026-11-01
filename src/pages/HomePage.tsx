import React, { useEffect, useState } from 'react';
import { updateSEO } from '../utils/seo';
import { HeroSection } from '../components/home/HeroSection';
import { TrustStrip } from '../components/home/TrustStrip';
import { ProblemSection } from '../components/home/ProblemSection';
import { SolutionSection } from '../components/home/SolutionSection';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { SectionHeading } from '../components/common/SectionHeading';
import { ServiceCard } from '../components/services/ServiceCard';
import { PricingCard } from '../components/pricing/PricingCard';
import { PricingCalculator } from '../components/pricing/PricingCalculator';
import { IndustryCard } from '../components/industries/IndustryCard';
import { PortfolioCard } from '../components/portfolio/PortfolioCard';
import { CaseStudyModal } from '../components/portfolio/CaseStudyModal';
import { ProcessTimeline } from '../components/process/ProcessTimeline';
import { TestimonialCard } from '../components/testimonials/TestimonialCard';
import { FAQAccordion } from '../components/faq/FAQAccordion';
import { ConsultationForm } from '../components/forms/ConsultationForm';
import { servicesData } from '../data/services';
import { pricingPlans } from '../data/pricing';
import { industriesData } from '../data/industries';
import { portfolioData } from '../data/portfolio';
import { testimonialsData } from '../data/testimonials';
import type { PortfolioProject } from '../types';
import { useAppLayout } from '../context/LayoutContext';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const { openConsultationModal, openQuoteModal } = useAppLayout();
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<PortfolioProject | null>(null);

  useEffect(() => {
    updateSEO({
      title: 'Affordable Website Development for Local Businesses in India',
      description:
        'Professional websites, dynamic web applications, admin panels and mobile apps for Indian local businesses. Websites starting from ₹7,000.',
      canonicalPath: '/',
    });
  }, []);

  return (
    <div className="relative">
      {/* 1. Hero Section */}
      <HeroSection onOpenConsultation={() => openConsultationModal()} />

      {/* 2. Trust Strip */}
      <TrustStrip />

      {/* 3. Problem Section */}
      <ProblemSection />

      {/* 4. Solution Section */}
      <SolutionSection onOpenConsultation={() => openConsultationModal()} />

      {/* 5. Services Section */}
      <section id="services" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Tailored Solutions"
            title="Complete Web & Digital Solutions For Every Stage"
            subtitle="From fast, budget-conscious static websites to high-powered dynamic enterprise systems with dedicated admin controls."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.slice(0, 3).map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelect={() => openConsultationModal(service.title)}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              <span>Explore All 5 Core Service Modules (Panels, Mobile Apps & Modules)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Strategic Pricing Section & Calculator */}
      <section id="pricing" className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Honest & Predictable Pricing"
            title="Clear, Fixed Packages With Zero Hidden Charges"
            subtitle="Every local business deserves to know exactly what they are investing. No surprises. No bloated retainer contracts."
          />

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
            {pricingPlans.map((plan) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                onSelect={() => {
                  if (plan.id === 'custom') {
                    openQuoteModal();
                  } else {
                    openConsultationModal(plan.name);
                  }
                }}
              />
            ))}
          </div>

          {/* Interactive Pricing Calculator */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                Interactive Tool
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Calculate Your Exact Website Cost
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Customize page count, admin panels, and mobile apps to see an instant estimate.
              </p>
            </div>

            <PricingCalculator onOpenQuoteModal={() => openQuoteModal()} />
          </div>
        </div>
      </section>

      {/* 7. Why Choose Us */}
      <WhyChooseUs />

      {/* 8. Industry Solutions */}
      <section id="industries" className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Industry-Specific Blueprints"
            title="Engineered Around Your Specific Business Model"
            subtitle="A jewellery store requires different features than a dental clinic or a restaurant. We build solutions tuned to your actual day-to-day operations."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industriesData.map((item) => (
              <IndustryCard
                key={item.id}
                solution={item}
                onOpenConsultation={(indName) => openConsultationModal(indName)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 9. Featured Portfolio */}
      <section id="portfolio" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Real Work Samples"
            title="Recent Digital Transformations For Indian Businesses"
            subtitle="Explore how we craft clean, high-speed, conversion-focused websites that elevate local brands above their competitors."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.slice(0, 3).map((project) => (
              <PortfolioCard
                key={project.id}
                project={project}
                onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-colors"
            >
              <span>View All Portfolio Projects & Filter by Category</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Development Process */}
      <section id="process" className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Clear 8-Step Roadmap"
            title="From Consultation to Live Deployment in 14 Days"
            subtitle="A transparent, hassle-free development workflow designed so you can focus on running your business while we build your digital identity."
          />

          <ProcessTimeline />
        </div>
      </section>

      {/* 11. Testimonials (Clearly Marked Placeholders as per strict instructions) */}
      <section className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Client Feedback Format"
            title="What Business Owners Appreciate About Our Process"
            subtitle="Transparency is our foundation. Below is our standard feedback format; genuine project reviews are added as projects go live."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialsData.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 12. FAQ Section */}
      <section id="faq" className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Frequently Answered Questions"
            title="Everything You Need To Know Before Starting"
            subtitle="Have questions about costs, maintenance, WhatsApp integrations, or timelines? Here are clear, upfront answers."
          />

          <FAQAccordion limit={6} />

          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="text-xs sm:text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              Have a specific technical question? Contact our team directly →
            </Link>
          </div>
        </div>
      </section>

      {/* 13. Consultation Lead Generation Form Section */}
      <section className="py-20 sm:py-28 bg-slate-900 text-white relative overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                Let's Build Together
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                Get Your Free Digital Strategy & Quotation.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether you need a sleek ₹7,000 showcase website for your store, or a full dynamic
                ordering portal with staff management panels, our solutions specialists are ready to guide you.
              </p>

              <div className="space-y-3 pt-2 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                  <span>100% Free consultation with zero pushy sales talk</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                  <span>Clear pricing proposal delivered in under 4 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                  <span>Direct phone or WhatsApp support in Hindi & English</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        isOpen={Boolean(selectedCaseStudy)}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </div>
  );
};
