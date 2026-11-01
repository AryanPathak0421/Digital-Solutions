import React from 'react';
import {
  MessageSquareText,
  FileCheck,
  Palette,
  Code2,
  CheckCircle2,
  Eye,
  Rocket,
  Headphones,
  Clock,
} from 'lucide-react';
import { processSteps } from '../../data/process';

export const ProcessTimeline: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    MessageSquareText,
    FileCheck,
    Palette,
    Code2,
    CheckCircle2,
    Eye,
    Rocket,
    Headphones,
  };

  return (
    <div className="relative">
      {/* Desktop Horizontal/Staggered Timeline or Vertical Clean Stepper */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {processSteps.map((step) => {
          const IconComponent = iconMap[step.icon] || Code2;
          return (
            <div
              key={step.stepNumber}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-indigo-200 transition-all duration-200 flex flex-col justify-between relative group"
            >
              <div>
                {/* Step Number & Duration */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white flex items-center justify-center font-black text-sm transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-[11px] font-bold text-slate-600">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{step.duration}</span>
                  </div>
                </div>

                <div className="mb-2 flex items-baseline gap-2">
                  <span className="text-xs font-mono font-bold text-indigo-600">
                    STEP {step.stepNumber}
                  </span>
                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {step.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Deliverables */}
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Deliverables:
                  </span>
                  <ul className="space-y-1">
                    {step.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-500">
                        <span className="w-1 h-1 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

