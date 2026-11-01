import React from 'react';
import { Link } from 'react-router-dom';
import {
  Gem,
  ShoppingBag,
  UtensilsCrossed,
  Stethoscope,
  Scissors,
  GraduationCap,
  Building2,
  Wrench,
} from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const industries = [
    { label: 'Jewellery', icon: Gem, slug: 'jewellery-store' },
    { label: 'Retail & Shops', icon: ShoppingBag, slug: 'clothing-boutique' },
    { label: 'Restaurants & Cafes', icon: UtensilsCrossed, slug: 'restaurant-cafe' },
    { label: 'Healthcare & Clinics', icon: Stethoscope, slug: 'clinic-dental' },
    { label: 'Beauty & Salons', icon: Scissors, slug: 'salon-beauty-parlour' },
    { label: 'Education & Coaching', icon: GraduationCap, slug: 'coaching-institute' },
    { label: 'Real Estate & Interiors', icon: Building2, slug: 'real-estate-interior' },
    { label: 'Local Services', icon: Wrench, slug: 'services' },
  ];

  return (
    <div className="py-10 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Engineered Specifically For Local Businesses Across India
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {industries.map((ind) => (
            <Link
              key={ind.label}
              to={ind.slug === 'services' ? '/services' : `/industries/${ind.slug}`}
              className="flex flex-col items-center justify-center p-3.5 rounded-2xl bg-slate-50 hover:bg-indigo-50/60 border border-slate-200/70 hover:border-indigo-200 transition-all duration-200 group text-center"
            >
              <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 flex items-center justify-center shadow-xs transition-colors mb-2">
                <ind.icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-700 group-hover:text-indigo-900 transition-colors">
                {ind.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
