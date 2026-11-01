import React, { useEffect } from 'react';
import { updateSEO } from '../utils/seo';
import { servicesData } from '../data/services';
import { ServiceCard } from '../components/services/ServiceCard';
import { SectionHeading } from '../components/common/SectionHeading';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { CTASection } from '../components/home/CTASection';
import { useAppLayout } from '../context/LayoutContext';

export const ServicesPage: React.FC = () => {
  const { openConsultationModal, openQuoteModal } = useAppLayout();

  useEffect(() => {
    updateSEO({
      title: 'Digital Services & Web Development Packages',
      description:
        'Explore our web services: Static Websites from ₹7,000, Dynamic Web Applications from ₹30,000, Custom Admin Panels, and Mobile Apps.',
      canonicalPath: '/services',
    });
  }, []);

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Services' }]} className="mb-6" />

        <SectionHeading
          badge="End-to-End Solutions"
          title="Digital Solutions Engineered for Indian Business Growth"
          subtitle="Whether you need a high-speed showroom catalogue, an automated booking portal, or customized staff dashboards, we build scalable software without enterprise price tags."
          align="center"
        />

        {/* 5 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={() => {
                if (service.id === 'custom-modules') {
                  openQuoteModal();
                } else {
                  openConsultationModal(service.title);
                }
              }}
            />
          ))}
        </div>

        {/* Detailed Comparison Matrix */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm mb-20 overflow-x-auto">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
              Transparent Comparison
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 mt-2">
              Compare Features Across Packages
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Select the right tier for your current stage and scale as your customer base expands.
            </p>
          </div>

          <table className="w-full text-left border-collapse min-w-[600px] text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500">
                <th className="py-4 px-4 font-bold text-slate-900">Feature</th>
                <th className="py-4 px-4 font-bold text-slate-900">Static Website</th>
                <th className="py-4 px-4 font-bold text-indigo-600">Dynamic Web App</th>
                <th className="py-4 px-4 font-bold text-slate-900">Custom Solution</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
              <tr>
                <td className="py-3.5 px-4 font-semibold text-slate-900">Starting Price</td>
                <td className="py-3.5 px-4 font-bold text-slate-900">₹7,000</td>
                <td className="py-3.5 px-4 font-bold text-indigo-600">₹30,000+</td>
                <td className="py-3.5 px-4 font-bold text-slate-900">Custom Quote</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4">Pages Included</td>
                <td className="py-3.5 px-4">Up to 8 Pages</td>
                <td className="py-3.5 px-4">Unlimited Dynamic Content</td>
                <td className="py-3.5 px-4">Unlimited Architecture</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4">Additional Pages</td>
                <td className="py-3.5 px-4">₹600 / page</td>
                <td className="py-3.5 px-4">Via Admin Panel (Free)</td>
                <td className="py-3.5 px-4">Via Custom CMS</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4">Admin Management Panel</td>
                <td className="py-3.5 px-4 text-slate-400">—</td>
                <td className="py-3.5 px-4 text-emerald-600 font-bold">✓ Included</td>
                <td className="py-3.5 px-4 text-emerald-600 font-bold">✓ Multi-Role Panels</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4">Maintenance & Support</td>
                <td className="py-3.5 px-4">Launch Warranty</td>
                <td className="py-3.5 px-4 text-emerald-600 font-bold">✓ 1-Year Included</td>
                <td className="py-3.5 px-4 text-emerald-600 font-bold">✓ Dedicated SLA Support</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4">Database & Backend Server</td>
                <td className="py-3.5 px-4 text-slate-400">—</td>
                <td className="py-3.5 px-4 text-emerald-600 font-bold">✓ Included</td>
                <td className="py-3.5 px-4 text-emerald-600 font-bold">✓ Enterprise Scalable</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4">WhatsApp Click-to-Inquire</td>
                <td className="py-3.5 px-4 text-emerald-600 font-bold">✓ Included</td>
                <td className="py-3.5 px-4 text-emerald-600 font-bold">✓ Included</td>
                <td className="py-3.5 px-4 text-emerald-600 font-bold">✓ Automated API Flow</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4">Mobile Responsive Design</td>
                <td className="py-3.5 px-4 text-emerald-600 font-bold">✓ 100% Mobile Ready</td>
                <td className="py-3.5 px-4 text-emerald-600 font-bold">✓ 100% Mobile Ready</td>
                <td className="py-3.5 px-4 text-emerald-600 font-bold">✓ Companion Native App</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CTA Section */}
        <CTASection
          title="Not Sure Which Package Fits Your Business?"
          subtitle="Our lead consultant will review your current business workflow and recommend the most cost-effective solution."
          onOpenConsultation={() => openConsultationModal()}
        />
      </div>
    </div>
  );
};
