import React from 'react';
import {
  XCircle,
  CheckCircle2,
  ArrowRight,
  Zap,
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

export interface SolutionSectionProps {
  onOpenConsultation?: () => void;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({ onOpenConsultation }) => {
  const beforePoints = [
    'No official website — buyers question business legitimacy',
    'Exhausting manual enquiries over personal phone numbers',
    'Zero Google presence when local buyers search nearby',
    'Unorganized product photos scattered across chat threads',
    'Lost sales to organized retail chains and local competitors',
  ];

  const afterPoints = [
    'Verified, professional website customized to your branding',
    'Instant click-to-WhatsApp enquiries with pre-filled models',
    'Organized product/service catalogs with HD zoom and pricing',
    'Consistent 24/7 automated lead generation and booking forms',
    'Mobile-first responsive experience loading in under 2 seconds',
    'Significantly stronger brand credibility and higher walk-ins',
  ];

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="The Business Transformation"
          title="See The Direct Difference A Real Website Makes"
          subtitle="Compare how your local business operates today versus how it transforms with an optimized digital presence from Rozsewa."
        />

        {/* Before vs After Split Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Before Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border-2 border-slate-200/80 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500" />
                  <h3 className="text-xl font-extrabold text-slate-800">
                    BEFORE: Traditional Way
                  </h3>
                </div>
                <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full">
                  High Effort, Low Reach
                </span>
              </div>

              <ul className="space-y-4">
                {beforePoints.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-600 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/80 bg-white/70 -mx-6 -mb-6 p-6 rounded-b-3xl">
              <p className="text-xs text-slate-500 italic">
                Result: Missed leads, wasted staff hours, and capped local revenue.
              </p>
            </div>
          </div>

          {/* After Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white border-2 border-indigo-700/50 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            {/* Subtle Top Glow */}
            <div
              className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-indigo-800/80">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <h3 className="text-xl font-extrabold text-white">
                    AFTER: With Rozsewa
                  </h3>
                </div>
                <span className="text-xs font-bold text-emerald-300 bg-emerald-500/20 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  Modern & Automated
                </span>
              </div>

              <ul className="space-y-4">
                {afterPoints.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-200 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-indigo-800/80 relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold text-slate-300">
                  Ready in as little as 7–10 days
                </span>
              </div>
              {onOpenConsultation ? (
                <Button
                  variant="primary"
                  size="sm"
                  onClick={onOpenConsultation}
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Start Your Transformation
                </Button>
              ) : (
                <Button
                  asAnchor
                  href="/pricing"
                  variant="primary"
                  size="sm"
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  View Packages
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
