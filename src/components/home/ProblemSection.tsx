import React from 'react';
import {
  SearchX,
  Share2,
  GlobeX,
  PackageX,
  PhoneOff,
  UserCheck,
  ArrowDown,
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: SearchX,
      title: "Customers Can't Easily Find You",
      description:
        'When local buyers search Google for products or treatments near them, your store doesn’t show up—sending footfall straight to nearby competitors.',
    },
    {
      icon: Share2,
      title: 'Information Scattered Across Social Media',
      description:
        'Address, timings, phone numbers, and pricing are buried in old Instagram posts or WhatsApp chats, confusing potential buyers.',
    },
    {
      icon: GlobeX,
      title: 'No Professional Online Presence',
      description:
        'Relying solely on social media makes your business appear temporary or informal to modern consumers who expect a verified website.',
    },
    {
      icon: PackageX,
      title: 'Difficult to Showcase Full Collections',
      description:
        'Sending dozens of compressed photos manually on WhatsApp tires your staff and causes interested buyers to lose patience.',
    },
    {
      icon: PhoneOff,
      title: 'Customers Cannot Easily Inquire or Book',
      description:
        'Without a 1-tap WhatsApp button or organized inquiry form, busy shoppers abandon their intention to order or book appointments.',
    },
    {
      icon: UserCheck,
      title: 'Competitors Look Far More Professional',
      description:
        'Modern shops and chains with polished websites command higher prices and win customer trust even when your quality is identical.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="The Offline Dilemma"
          title="Still Running Your Business Without a Professional Website?"
          subtitle="In today's India, over 80% of buyers search online before stepping into a showroom, clinic, or restaurant. Here is what missing a website actually costs you:"
        />

        {/* 6 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((prob, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-rose-100/80 shadow-xs hover:shadow-md transition-shadow duration-200 relative overflow-hidden group"
            >
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <prob.icon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {prob.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {prob.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bridge Transition to Solution */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 mb-4 animate-bounce">
            <ArrowDown className="w-5 h-5" />
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-900 to-slate-900 text-white shadow-xl">
            <p className="text-xs font-bold uppercase tracking-wider text-indigo-300 mb-1">
              The Rozsewa Solution
            </p>
            <h4 className="text-lg sm:text-xl font-extrabold">
              We solve this with a professional digital presence built around your business.
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              From an affordable ₹7,000 static site to a complete ₹30,000 dynamic enterprise platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
