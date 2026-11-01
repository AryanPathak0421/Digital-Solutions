import React, { useEffect } from 'react';
import { updateSEO } from '../utils/seo';
import { ProcessTimeline } from '../components/process/ProcessTimeline';
import { SectionHeading } from '../components/common/SectionHeading';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { CTASection } from '../components/home/CTASection';
import { useAppLayout } from '../context/LayoutContext';
import { ShieldCheck, Zap, Users } from 'lucide-react';

export const ProcessPage: React.FC = () => {
  const { openConsultationModal } = useAppLayout();

  useEffect(() => {
    updateSEO({
      title: 'Our 8-Step Development Process — Fast 14-Day Delivery',
      description:
        'Discover how Rozsewa builds and launches your business website in 8 clear steps, from consultation to live domain deployment and 1-year maintenance.',
      canonicalPath: '/process',
    });
  }, []);

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Process' }]} className="mb-6" />

        <SectionHeading
          badge="Guaranteed Transparency"
          title="Our Streamlined 8-Step Development Process"
          subtitle="From initial phone consultation to live Google indexing and 1-year ongoing maintenance, here is exactly how we deliver your project on schedule."
          align="center"
        />

        {/* 8-Step Visual Timeline */}
        <div className="mb-24">
          <ProcessTimeline />
        </div>

        {/* Process Guarantees */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm mb-24">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
              Our Commitments
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 mt-2">
              What You Can Always Expect From Us
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-indigo-600 font-bold text-base">
                <Zap className="w-5 h-5" />
                <span>On-Time Milestone Delivery</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We respect your business launch schedule. Static websites are typically delivered within 7 to 10 days of receiving content.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-indigo-600 font-bold text-base">
                <ShieldCheck className="w-5 h-5" />
                <span>Zero Technical Jargon</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We speak plain business language. We handle all DNS, hosting, SSL, and responsive code so you don't have to stress.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-indigo-600 font-bold text-base">
                <Users className="w-5 h-5" />
                <span>Direct Human Communication</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                No endless automated bots. Speak directly with your dedicated project coordinator over phone or WhatsApp throughout the build.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <CTASection onOpenConsultation={() => openConsultationModal()} />
      </div>
    </div>
  );
};
