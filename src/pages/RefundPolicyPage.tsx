import React, { useEffect } from 'react';
import { updateSEO } from '../utils/seo';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { AlertCircle } from 'lucide-react';

export const RefundPolicyPage: React.FC = () => {
  useEffect(() => {
    updateSEO({
      title: 'Refund & Cancellation Policy — Rozsewa Digital',
      description: 'Refund terms, project cancellation conditions and milestone policies for Rozsewa Digital.',
      canonicalPath: '/refund-policy',
    });
  }, []);

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Refund Policy' }]} className="mb-6" />

        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            Commercial Terms
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            Refund & Cancellation Policy
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Last Updated: November 2026 • Transparent milestone agreements
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
            <h2 className="text-lg font-bold text-slate-900">1. Milestone-Based Project Payments</h2>
            <p>
              To protect both our clients and engineering resources, website development projects are
              structured with clear milestone confirmations. Work begins once initial project parameters
              are approved by the client.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">2. Cancellation Prior to Development</h2>
            <p>
              If a client requests cancellation before design or engineering work has commenced (within
              24 hours of consultation confirmation), an administrative fee of 10% may be deducted and
              the remainder returned.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">3. Staging Review & Revisions</h2>
            <p>
              We provide staging review rounds for all packages. We work collaboratively to incorporate
              revisions, adjust styling, and ensure all specified pages and forms operate smoothly before
              live deployment.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">4. Third-Party Non-Refundable Fees</h2>
            <p>
              Expenses disbursed directly to external third-party service providers (such as domain
              name registrations, dedicated hosting server allocations, SMS gateway credits, or SSL
              certificates) are strictly non-refundable once registered with registry authorities.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
