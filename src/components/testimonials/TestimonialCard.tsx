import React from 'react';
import { Star, MapPin, Building } from 'lucide-react';
import type { TestimonialItem } from '../../types';

export const TestimonialCard: React.FC<{ item: TestimonialItem }> = ({ item }) => {
  return (
    <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between relative group hover:border-indigo-200 transition-all">
      <div>
        {/* Placeholder Badge for transparency */}
        {item.isPlaceholder && (
          <div className="mb-3 inline-block px-2.5 py-0.5 rounded-md bg-amber-50 border border-amber-200/60 text-[10px] font-bold text-amber-800">
            Preview Template Format
          </div>
        )}

        {/* Rating Stars */}
        <div className="flex items-center gap-1 text-amber-400 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>

        {/* Feedback Quote */}
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
          "{item.feedback}"
        </p>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <div>
          <h4 className="text-sm font-bold text-slate-900">{item.clientName}</h4>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5">
            <Building className="w-3 h-3 text-slate-400 shrink-0" />
            <span className="font-medium text-slate-700">{item.businessName}</span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mt-0.5">
            <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
            <span>{item.city}</span>
          </div>
        </div>

        <span className="text-[10px] font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
          {item.projectType}
        </span>
      </div>
    </div>
  );
};
