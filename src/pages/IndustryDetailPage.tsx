import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { updateSEO } from '../utils/seo';
import { industriesData } from '../data/industries';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SectionHeading } from '../components/common/SectionHeading';
import { CTASection } from '../components/home/CTASection';
import { useAppLayout } from '../context/LayoutContext';
import { Button } from '../components/common/Button';
import { getWhatsAppUrl } from '../utils/whatsapp';
import {
  Gem,
  Sparkles,
  UtensilsCrossed,
  Scissors,
  Stethoscope,
  Shirt,
  Building2,
  GraduationCap,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';

export const IndustryDetailPage: React.FC = () => {
  const { industry } = useParams<{ industry: string }>();
  const { openConsultationModal } = useAppLayout();

  const solution = industriesData.find((item) => item.slug === industry);

  useEffect(() => {
    if (solution) {
      updateSEO({
        title: `${solution.name} Website Development & Digital Solutions`,
        description: `Custom website design, WhatsApp catalog, and online presence tailored for ${solution.name} businesses across India. Starting from ₹7,000.`,
        canonicalPath: `/industries/${solution.slug}`,
      });
    }
  }, [solution]);

  if (!solution) {
    return <Navigate to="/services" replace />;
  }

  const iconMap: Record<string, React.ElementType> = {
    Gem,
    Sparkles,
    UtensilsCrossed,
    Scissors,
    Stethoscope,
    Shirt,
    Building2,
    GraduationCap,
  };
  const IconComponent = iconMap[solution.icon] || Gem;

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Industries', to: '/services' },
            { label: solution.name },
          ]}
          className="mb-6"
        />

        {/* Hero Banner for Industry */}
        <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 mb-16 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-indigo-300 text-xs font-bold border border-white/10">
              <IconComponent className="w-4 h-4 text-indigo-400" />
              <span>Tailored Digital Blueprint</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Website & Digital Solutions for {solution.name}s
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {solution.tagline}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => openConsultationModal(solution.name)}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                {solution.ctaText}
              </Button>
              <a
                href={getWhatsAppUrl({
                  serviceName: `${solution.name} Website`,
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Solutions Lead</span>
              </a>
            </div>
          </div>
        </div>

        {/* Problem vs Solution Deep Dive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 rounded-3xl bg-rose-50/50 border border-rose-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-rose-700 font-bold text-xs uppercase mb-3">
                <AlertTriangle className="w-5 h-5 text-rose-500" />
                <span>The Common Challenge</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Why Traditional Offline Management Holds You Back
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">{solution.problem}</p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-emerald-50/50 border border-emerald-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-emerald-700 font-bold text-xs uppercase mb-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>The Engineered Solution</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                How Rozsewa Transforms Your Local Footfall
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">{solution.solution}</p>
            </div>
          </div>
        </div>

        {/* Key Inclusions for This Industry */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
              Feature Roadmap
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 mt-2">
              Everything Your {solution.name} Website Includes
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {solution.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-slate-800">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Expected Outcomes */}
        <div className="mb-20">
          <SectionHeading
            badge="Expected Value"
            title="Real-World Business Impact"
            subtitle="Qualitative improvements our clients experience upon moving from unorganized social media to an official website."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solution.typicalResults.map((result, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 text-center shadow-xs"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3 font-black text-sm">
                  {idx + 1}
                </div>
                <p className="text-sm font-medium text-slate-700 leading-relaxed">
                  {result}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <CTASection
          title={`Ready to Build Your ${solution.name} Website?`}
          subtitle={`Packages start from ₹7,000 with 100% mobile-friendly responsive architecture and direct WhatsApp lead flows.`}
          onOpenConsultation={() => openConsultationModal(solution.name)}
        />
      </div>
    </div>
  );
};
