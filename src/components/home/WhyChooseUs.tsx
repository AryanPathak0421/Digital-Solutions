import React from 'react';
import {
  IndianRupee,
  Code2,
  Smartphone,
  Server,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: IndianRupee,
      title: 'Affordable Pricing',
      description:
        'Professional 8-page websites starting from just ₹7,000. Transparent pricing with zero hidden maintenance charges or surprise fees.',
      tag: 'Starting ₹7,000',
    },
    {
      icon: Code2,
      title: 'Custom Development',
      description:
        'We do not use bloated pre-made themes. Every project is cleanly built to match your exact business workflow and Indian customer expectations.',
      tag: 'Zero Bloat',
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description:
        'Over 85% of your local customers will visit from Android or iOS phones. We optimize every button, image, and form for flawless touch interaction.',
      tag: 'Touch Optimized',
    },
    {
      icon: Server,
      title: 'Dedicated Backend Support',
      description:
        'Need a custom database, admin panel, or staff portal? Our engineering team provides solid server architecture and direct technical assistance.',
      tag: 'Full Stack',
    },
    {
      icon: ShieldCheck,
      title: '1-Year Maintenance on Dynamic',
      description:
        'Our ₹30,000 dynamic web application package automatically includes 12 months of technical maintenance and support according to agreed scope.',
      tag: '12 Months Included',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description:
        'Start with a budget-friendly static showcase today, and effortlessly scale up to staff panels, online booking, payment gateways, and mobile apps tomorrow.',
      tag: 'Future Proof',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Rozsewa Digital"
          title="Designed for Results, Built for Indian Businesses"
          subtitle="We combine agency-grade engineering with local business pricing so you never have to settle for clumsy do-it-yourself site builders."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-indigo-200 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white flex items-center justify-center transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

