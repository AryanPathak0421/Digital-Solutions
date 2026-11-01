import React, { useEffect } from 'react';
import { updateSEO } from '../utils/seo';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { businessConfig } from '../config/business';
import { AlertCircle } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  useEffect(() => {
    updateSEO({
      title: 'Privacy Policy — Rozsewa Digital',
      description: 'Privacy policy and data safeguarding protocols for Rozsewa Digital.',
      canonicalPath: '/privacy',
    });
  }, []);

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Privacy Policy' }]} className="mb-6" />

        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            Data Safeguarding
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            Privacy & Data Policy
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Last Updated: November 2026 • Your personal and business data is strictly protected
          </p>
        </div>

        {/* Mandatory Policy Disclaimer */}
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3 mb-8">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed font-medium">
            This information is provided as a general business policy template and should be reviewed
            by a qualified legal professional before being used as a binding agreement.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm space-y-8 text-sm text-slate-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">1. Information We Collect</h2>
            <p>
              When you submit a consultation form, request an indicative quote, or message us on
              WhatsApp, we collect your name, business name, phone number, email address, city, and
              website requirements. This data is used solely to respond to your inquiry and evaluate
              technical specifications.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">2. No Sharing or Selling of Data</h2>
            <p>
              {businessConfig.name} maintains a strict zero-spam pledge. We never sell, rent, or trade
              your business contact details to third-party telemarketers or advertisers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">3. Security Practices</h2>
            <p>
              We implement industry-standard encryption protocols (HTTPS/SSL), restricted administrative
              access, and secure credential management across all development and production servers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">4. Contact Regarding Privacy</h2>
            <p>
              For any queries regarding personal or business data protection, contact our privacy officer
              at: <strong className="text-slate-900">{businessConfig.contact.email}</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
