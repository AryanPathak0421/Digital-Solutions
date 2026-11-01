import React from 'react';
import { Link } from 'react-router-dom';
import {
  Gem,
  Sparkles,
  UtensilsCrossed,
  Scissors,
  Stethoscope,
  Shirt,
  Building2,
  GraduationCap,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';
import type { IndustrySolution } from '../../types';
import { Button } from '../common/Button';

export interface IndustryCardProps {
  solution: IndustrySolution;
  onOpenConsultation?: (industryName: string) => void;
}

export const IndustryCard: React.FC<IndustryCardProps> = ({
  solution,
  onOpenConsultation,
}) => {
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
    <div className="rounded-3xl p-6 sm:p-7 bg-white border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-indigo-200 transition-all duration-200 flex flex-col justify-between group">
      <div>
        {/* Industry Header */}
        <div className="flex items-center gap-3.5 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white flex items-center justify-center transition-colors">
            <IconComponent className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
              {solution.name}
            </h3>
            <span className="text-xs font-semibold text-slate-500">
              {solution.recommendedPackage}
            </span>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="mb-4 p-3 rounded-xl bg-rose-50/60 border border-rose-100 text-xs text-rose-900 flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold block mb-0.5">Typical Bottleneck:</strong>
            <p className="text-slate-700 leading-relaxed">{solution.problem}</p>
          </div>
        </div>

        {/* Solution Statement */}
        <div className="mb-5 p-3 rounded-xl bg-emerald-50/60 border border-emerald-100 text-xs text-emerald-950 flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold block mb-0.5">Recommended Digital Fix:</strong>
            <p className="text-slate-700 leading-relaxed">{solution.solution}</p>
          </div>
        </div>

        {/* Key Features Preview */}
        <div className="space-y-1.5 mb-6">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
            Core Inclusions:
          </span>
          <ul className="space-y-1 text-xs text-slate-600">
            {solution.keyFeatures.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="flex items-center gap-2 truncate">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                <span className="truncate">{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        <Link
          to={`/industries/${solution.slug}`}
          className="text-xs font-bold text-slate-600 hover:text-indigo-600 transition-colors flex items-center gap-1"
        >
          <span>View Blueprint</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        {onOpenConsultation ? (
          <Button
            variant="primary"
            size="sm"
            onClick={() => onOpenConsultation(solution.name)}
          >
            {solution.ctaText}
          </Button>
        ) : (
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-colors"
          >
            {solution.ctaText}
          </Link>
        )}
      </div>
    </div>
  );
};

