import React, { useEffect } from 'react';
import { updateSEO } from '../utils/seo';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { businessConfig } from '../config/business';
import { AlertCircle } from 'lucide-react';

export const TermsPage: React.FC = () => {
  useEffect(() => {
    updateSEO({
      title: 'Terms & Conditions — Rozsewa Digital',
      description: 'Terms of service and project engagement conditions for Rozsewa Digital.',
      canonicalPath: '/terms',
    });
  }, []);

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Terms & Conditions' }]} className="mb-6" />

        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            Legal Transparency
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            Terms & Conditions of Service
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Last Updated: November 2026 • Effective for all active client engagements
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
            <h2 className="text-lg font-bold text-slate-900">1. Project Engagement & Scope</h2>
            <p>
              {businessConfig.name} provides custom website development, dynamic web applications,
              admin portals, and mobile app design services across India. Project scope, page count,
              functional modules, and milestones are outlined prior to commencement.
            </p>
            <p>
              The standard Static Website package includes up to 8 custom pages. Any additional pages
              requested beyond the agreed scope are charged at ₹600 per page.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">2. Client Assets & Content Delivery</h2>
            <p>
              Timely delivery of websites depends on prompt supply of text content, product pictures,
              store logos, and business information. Delays in providing necessary assets will adjust
              project launch milestones accordingly.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">3. Dynamic Website Maintenance Scope</h2>
            <p>
              The Dynamic Website package includes 1-year (12 months) comprehensive technical maintenance
              beginning from the date of final staging approval. Maintenance covers server health,
              bug resolution, minor textual adjustments, and security patches within the originally
              agreed scope. New feature modules or redesigns are quoted separately.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">4. Third-Party Services & Integrations</h2>
            <p>
              Third-party services such as custom domain registrars, cloud servers, WhatsApp Business
              API, SMS gateways, and payment processors (Razorpay, PhonePe, Paytm) are operated by
              external vendors. Accounts and transaction fees remain the responsibility of the client.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">5. Governing Law & Jurisdiction</h2>
            <p>
              These business terms are interpreted in accordance with applicable laws in the Republic
              of India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
