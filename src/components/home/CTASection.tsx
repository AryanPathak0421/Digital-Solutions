import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '../common/Button';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export interface CTASectionProps {
  title?: string;
  subtitle?: string;
  onOpenConsultation?: () => void;
  className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = 'Ready to Take Your Local Business Online?',
  subtitle = 'Get a professional, mobile-ready website designed to convert local buyers into paying customers. Packages start from ₹7,000.',
  onOpenConsultation,
  className = '',
}) => {
  return (
    <section className={`py-16 sm:py-20 bg-slate-950 text-white relative overflow-hidden ${className}`}>
      {/* Decorative ambient gradients */}
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Start Growing Today</span>
        </div>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
          {title}
        </h2>

        <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
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

          <Link
            to="/pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all"
          >
            <span>View Pricing Packages</span>
          </Link>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>₹7,000 Starting Price</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>1-Year Maintenance on Dynamic</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>No Technical Knowledge Needed</span>
          </span>
        </div>
      </div>
    </section>
  );
};
