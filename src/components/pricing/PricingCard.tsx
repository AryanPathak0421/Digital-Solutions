import React from 'react';
import { Check, X, ArrowRight, MessageCircle } from 'lucide-react';
import type { PricingPlan } from '../../types';
import { Button } from '../common/Button';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export interface PricingCardProps {
  plan: PricingPlan;
  onSelect?: (plan: PricingPlan) => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan, onSelect }) => {
  return (
    <div
      className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 border-2 ${
        plan.isPopular
          ? 'bg-slate-900 text-white border-indigo-500 shadow-2xl relative lg:-translate-y-2'
          : 'bg-white text-slate-900 border-slate-200/90 shadow-md'
      }`}
    >
      <div>
        {/* Top Badge */}
        <div className="flex items-center justify-between mb-3">
          <span
            className={`text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full ${
              plan.isPopular
                ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-400/30'
                : 'bg-slate-100 text-slate-700'
            }`}
          >
            {plan.name}
          </span>
          {plan.badge && (
            <span
              className={`text-[11px] font-bold ${
                plan.isPopular ? 'text-emerald-400' : 'text-indigo-600'
              }`}
            >
              {plan.badge}
            </span>
          )}
        </div>

        {/* Pricing Display */}
        <div className="mt-4 mb-2 flex items-baseline gap-2">
          <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            {plan.displayPrice}
          </span>
          {typeof plan.price === 'number' && (
            <span
              className={`text-xs font-semibold uppercase tracking-wider ${
                plan.isPopular ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              One-Time
            </span>
          )}
        </div>

        {plan.highlightText && (
          <p
            className={`text-xs font-bold mb-4 ${
              plan.isPopular ? 'text-indigo-300' : 'text-indigo-600'
            }`}
          >
            {plan.highlightText}
          </p>
        )}

        <p
          className={`text-xs sm:text-sm leading-relaxed mb-6 ${
            plan.isPopular ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {plan.subtitle}
        </p>

        {/* Included Features */}
        <div className="space-y-3 pt-4 border-t border-slate-200/20">
          <span
            className={`text-xs font-bold uppercase tracking-wider block ${
              plan.isPopular ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            Package Features:
          </span>
          <ul className="space-y-2.5">
            {plan.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                <Check
                  className={`w-4 h-4 shrink-0 mt-0.5 ${
                    plan.isPopular ? 'text-emerald-400' : 'text-indigo-600'
                  }`}
                />
                <span className={plan.isPopular ? 'text-slate-200' : 'text-slate-700'}>
                  {feat}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Excluded Features if any */}
        {plan.excludedFeatures && plan.excludedFeatures.length > 0 && (
          <div className="mt-6 pt-4 border-t border-slate-200/20">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
              Not Included:
            </span>
            <ul className="space-y-2">
              {plan.excludedFeatures.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs text-slate-400 line-through opacity-75"
                >
                  <X className="w-3.5 h-3.5 shrink-0 mt-0.5 text-slate-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="mt-8 pt-6 border-t border-slate-200/20 space-y-3">
        <Button
          variant={plan.isPopular ? 'primary' : 'secondary'}
          size="lg"
          className="w-full"
          onClick={() => {
            if (onSelect) onSelect(plan);
          }}
          rightIcon={<ArrowRight className="w-4 h-4" />}
        >
          {plan.ctaText}
        </Button>

        <a
          href={getWhatsAppUrl({
            websiteType: plan.name,
            estimatedPrice: plan.displayPrice,
          })}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-2 py-2 text-xs font-bold transition-colors ${
            plan.isPopular
              ? 'text-emerald-400 hover:text-emerald-300'
              : 'text-emerald-600 hover:text-emerald-700'
          }`}
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Discuss {plan.name} on WhatsApp</span>
        </a>

        {plan.note && (
          <p
            className={`text-[11px] text-center ${
              plan.isPopular ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            {plan.note}
          </p>
        )}
      </div>
    </div>
  );
};
