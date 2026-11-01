import React, { useEffect } from 'react';
import { updateSEO } from '../utils/seo';
import { pricingPlans } from '../data/pricing';
import { PricingCard } from '../components/pricing/PricingCard';
import { PricingCalculator } from '../components/pricing/PricingCalculator';
import { SectionHeading } from '../components/common/SectionHeading';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { FAQAccordion } from '../components/faq/FAQAccordion';
import { CTASection } from '../components/home/CTASection';
import { useAppLayout } from '../context/LayoutContext';
import { ShieldCheck, Clock, Zap } from 'lucide-react';

export const PricingPage: React.FC = () => {
  const { openConsultationModal, openQuoteModal } = useAppLayout();

  useEffect(() => {
    updateSEO({
      title: 'Affordable Website Pricing & Calculator (Starts ₹7,000)',
      description:
        'Transparent website development packages starting from ₹7,000 for local businesses in India. Explore our interactive price calculator with zero hidden fees.',
      canonicalPath: '/pricing',
    });
  }, []);

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Pricing' }]} className="mb-6" />

        <SectionHeading
          badge="Clear & Predictable Investment"
          title="Simple, Affordable Packages Built For Local Indian Businesses"
          subtitle="No hidden surprises, no mandatory monthly recurring traps. Just high-quality software engineering delivered transparently."
          align="center"
        />

        {/* 3 Main Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-24">
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

        {/* Pricing Notice Callout */}
        <div className="mb-20 p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-amber-900 text-xs sm:text-sm text-center max-w-3xl mx-auto">
          <p className="font-semibold">
            Important Business Note: Final pricing depends on project requirements, complexity,
            integrations and scope. Additional static pages are charged at ₹600 per page.
          </p>
        </div>

        {/* Interactive Pricing Calculator Section */}
        <div className="mb-24">
          <SectionHeading
            badge="Cost Estimator"
            title="Interactive Website Price Calculator"
            subtitle="Adjust pages, select modules, and see an estimated starting price for your exact project needs."
            align="center"
          />

          <PricingCalculator onOpenQuoteModal={() => openQuoteModal()} />
        </div>

        {/* Pricing Guarantee Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-24">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center shadow-xs">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 mb-1">Zero Hidden Charges</h4>
            <p className="text-xs text-slate-600">
              The quote you approve is the exact price you pay. No sudden surprises upon deployment.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center shadow-xs">
            <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto mb-3">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 mb-1">1-Year Maintenance</h4>
            <p className="text-xs text-slate-600">
              Enjoy 12 months comprehensive technical maintenance included with the Dynamic Package.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center shadow-xs">
            <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center mx-auto mb-3">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 mb-1">7–14 Day Delivery</h4>
            <p className="text-xs text-slate-600">
              Fast turnaround so your business can start generating online leads without long delays.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <SectionHeading
            badge="Pricing FAQs"
            title="Questions About Development Costs"
            subtitle="Clear answers on page inclusions, maintenance, hosting, and payment gateways."
            align="center"
          />
          <FAQAccordion />
        </div>

        {/* CTA */}
        <CTASection onOpenConsultation={() => openConsultationModal()} />
      </div>
    </div>
  );
};
