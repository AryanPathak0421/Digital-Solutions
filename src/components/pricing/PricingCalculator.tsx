import React, { useState } from 'react';
import {
  Calculator,
  Check,
  Plus,
  Minus,
  Smartphone,
  ShieldCheck,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { businessConfig } from '../../config/business';
import { dynamicModulesCatalog, additionalPanelsList } from '../../data/pricing';
import type { WebsiteType } from '../../types';
import { formatINR } from '../../utils/formatters';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import { Button } from '../common/Button';

export interface PricingCalculatorProps {
  onOpenQuoteModal?: (summary: {
    websiteType: WebsiteType;
    pageCount: number;
    estimatedTotal: number;
    hasCustomModules: boolean;
    includeMobileApp: boolean;
    selectedModules: string[];
    selectedPanels: string[];
  }) => void;
  className?: string;
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({
  onOpenQuoteModal,
  className = '',
}) => {
  const [websiteType, setWebsiteType] = useState<WebsiteType>('static');
  const [pageCount, setPageCount] = useState<number>(businessConfig.pricing.staticIncludedPages);
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [selectedPanels, setSelectedPanels] = useState<string[]>([]);
  const [includeMobileApp, setIncludeMobileApp] = useState<boolean>(false);

  // Price calculations based strictly on user specifications
  const basePrice =
    websiteType === 'static'
      ? businessConfig.pricing.staticStartingPrice
      : websiteType === 'dynamic'
      ? businessConfig.pricing.dynamicStartingPrice
      : 30000; // Custom starts from dynamic baseline

  const additionalPages =
    websiteType === 'static'
      ? Math.max(0, pageCount - businessConfig.pricing.staticIncludedPages)
      : 0;

  const additionalPagesCost =
    additionalPages * businessConfig.pricing.staticAdditionalPerPage;

  const panelsCost = selectedPanels.length * businessConfig.pricing.additionalPanelStartingPrice;
  const mobileAppCost = includeMobileApp ? businessConfig.pricing.mobileAppStartingPrice : 0;

  const calculatedBaseEstimate = basePrice + additionalPagesCost + panelsCost + mobileAppCost;
  const hasCustomAddons = selectedModules.length > 0;

  const toggleModule = (id: string) => {
    setSelectedModules((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const togglePanel = (id: string) => {
    setSelectedPanels((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const formattedEstimate = formatINR(calculatedBaseEstimate);

  const requirementSummary =
    websiteType === 'static'
      ? `Static Website with ${pageCount} pages${includeMobileApp ? ' + Mobile App' : ''}`
      : `${websiteType.toUpperCase()} Website with ${selectedModules.length} custom modules${
          selectedPanels.length > 0 ? ` + ${selectedPanels.length} Panels` : ''
        }${includeMobileApp ? ' + Mobile App' : ''}`;

  return (
    <div
      className={`bg-white rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden ${className}`}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-6 sm:p-8 text-white">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-400">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                Interactive Cost Estimator
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Transparent pricing with zero hidden development fees
              </p>
            </div>
          </div>
          <div className="px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Guaranteed Price Structure</span>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8 lg:p-10 space-y-8">
        {/* Step 1: Select Website Type */}
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
            Step 1: Choose Website Architecture
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {[
              {
                type: 'static' as WebsiteType,
                title: 'Static Website',
                price: 'Starts ₹7,000',
                badge: '8 Pages Included',
                desc: 'Fast, responsive, lead-generating online presence for retail & clinics',
              },
              {
                type: 'dynamic' as WebsiteType,
                title: 'Dynamic Website',
                price: 'Starts ₹30,000',
                badge: 'Admin Panel + 1-Yr Support',
                desc: 'Database, custom admin dashboard, content control & APIs',
              },
              {
                type: 'custom' as WebsiteType,
                title: 'Custom Enterprise',
                price: 'Scope Dependent',
                badge: 'Bespoke Modules',
                desc: 'Multiple role panels, complex automation & custom logic',
              },
            ].map((option) => (
              <button
                key={option.type}
                type="button"
                onClick={() => setWebsiteType(option.type)}
                className={`text-left p-4 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer relative ${
                  websiteType === option.type
                    ? 'border-indigo-600 bg-indigo-50/40 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                {websiteType === option.type && (
                  <div className="absolute top-3.5 right-3.5 w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                )}
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                  {option.badge}
                </span>
                <h4 className="font-extrabold text-base text-slate-900 mt-2">
                  {option.title}
                </h4>
                <p className="text-sm font-bold text-indigo-600 mt-0.5">
                  {option.price}
                </p>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {option.desc}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Static Page Counter (Only for Static) */}
        {websiteType === 'static' && (
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-slate-900 text-sm">
                  Total Number of Pages
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Base package includes 8 pages (Home, About, Services, Gallery, Contact, etc.).
                  Additional pages at ₹600/page.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setPageCount((prev) => Math.max(8, prev - 1))}
                  disabled={pageCount <= 8}
                  aria-label="Decrease pages"
                  className="w-10 h-10 rounded-xl bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 flex items-center justify-center font-bold disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <div className="w-16 text-center">
                  <span className="text-2xl font-black text-slate-900">
                    {pageCount}
                  </span>
                  <span className="block text-[10px] text-slate-500 font-semibold uppercase">
                    Pages
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setPageCount((prev) => prev + 1)}
                  aria-label="Increase pages"
                  className="w-10 h-10 rounded-xl bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 flex items-center justify-center font-bold cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Calculations breakdown for transparency */}
            <div className="mt-4 pt-3 border-t border-slate-200/60 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-2">
              <span>
                Base cost (8 pages): <strong className="text-slate-900">₹7,000</strong>
              </span>
              {additionalPages > 0 ? (
                <span>
                  + {additionalPages} extra {additionalPages === 1 ? 'page' : 'pages'} × ₹600 ={' '}
                  <strong className="text-indigo-600">+{formatINR(additionalPagesCost)}</strong>
                </span>
              ) : (
                <span className="text-emerald-600 font-medium">Standard 8-page allocation</span>
              )}
            </div>
          </div>
        )}

        {/* Step 3: Optional Modules (For Dynamic & Custom) */}
        {websiteType !== 'static' && (
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Step 2: Optional Business Modules
              </label>
              <span className="text-xs text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full font-medium">
                Priced according to complexity
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {dynamicModulesCatalog.map((module) => {
                const isSelected = selectedModules.includes(module.id);
                return (
                  <button
                    key={module.id}
                    type="button"
                    onClick={() => toggleModule(module.id)}
                    className={`flex items-start gap-3 p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'border-indigo-600 bg-indigo-50/40'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-md mt-0.5 flex items-center justify-center shrink-0 border ${
                        isSelected
                          ? 'bg-indigo-600 border-indigo-600 text-white'
                          : 'border-slate-300 bg-slate-50'
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-slate-900">
                          {module.name}
                        </span>
                        <span className="text-[10px] font-semibold text-slate-500 px-2 py-0.5 bg-slate-100 rounded">
                          {module.indicativeNote}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">
                        {module.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 4: Additional Specialized Panels (Starts ₹10,000/panel) */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {websiteType === 'static' ? 'Step 2' : 'Step 3'}: Additional Operational Panels
            </label>
            <span className="text-xs text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full font-medium">
              Starts ₹10,000 / panel
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {additionalPanelsList.map((panel) => {
              const isSelected = selectedPanels.includes(panel.id);
              return (
                <button
                  key={panel.id}
                  type="button"
                  onClick={() => togglePanel(panel.id)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-50/50'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-800">
                      {panel.name}
                    </span>
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 border ${
                        isSelected
                          ? 'bg-indigo-600 border-indigo-600 text-white'
                          : 'border-slate-300'
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3" />}
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-indigo-600">
                    +₹10,000
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 5: Mobile App Toggle (Starts ₹15,000) */}
        <div className="p-4 sm:p-5 rounded-2xl bg-indigo-900/5 border border-indigo-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-slate-900 text-sm">
                  Add Companion Mobile App
                </h4>
                <span className="text-[11px] font-bold text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded-full">
                  Starting ₹15,000+
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-0.5">
                Final app pricing depends on scope, offline features, and push notifications.
              </p>
            </div>
          </div>

          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={includeMobileApp}
              onChange={(e) => setIncludeMobileApp(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-12 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600" />
            <span className="ml-3 text-xs font-bold text-slate-700">
              {includeMobileApp ? 'Included (+₹15,000)' : 'Not Included'}
            </span>
          </label>
        </div>

        {/* Calculation Summary Bar */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 block mb-1">
              Estimated Starting Price
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
                {formattedEstimate}
              </span>
              {(websiteType !== 'static' || hasCustomAddons || includeMobileApp) && (
                <span className="text-sm font-semibold text-slate-400">+</span>
              )}
            </div>

            <p className="text-xs text-slate-400 mt-2 max-w-md">
              {hasCustomAddons ? (
                <span className="text-amber-300 block font-medium">
                  * Contains custom modules ({selectedModules.length}). Custom quote required after review.
                </span>
              ) : null}
              This is an indicative estimate. Final quotation will be provided after requirement analysis.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch gap-3">
            {onOpenQuoteModal ? (
              <Button
                variant="primary"
                size="lg"
                onClick={() =>
                  onOpenQuoteModal({
                    websiteType,
                    pageCount,
                    estimatedTotal: calculatedBaseEstimate,
                    hasCustomModules: hasCustomAddons,
                    includeMobileApp,
                    selectedModules,
                    selectedPanels,
                  })
                }
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Request Detailed Quote
              </Button>
            ) : (
              <Button
                asAnchor
                href="/contact"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Request Detailed Quote
              </Button>
            )}

            <a
              href={getWhatsAppUrl({
                websiteType: websiteType.toUpperCase(),
                requirements: requirementSummary,
                estimatedPrice: formattedEstimate,
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Estimate</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
