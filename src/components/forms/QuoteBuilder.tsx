import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Send,
  MessageCircle,
} from 'lucide-react';
import { businessConfig } from '../../config/business';
import { dynamicModulesCatalog, additionalPanelsList } from '../../data/pricing';
import { submitQuoteRequest } from '../../services/api';
import type { WebsiteType, QuoteBuilderFormData } from '../../types';
import { formatINR } from '../../utils/formatters';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import { Button } from '../common/Button';

const quoteBuilderSchema = z.object({
  businessType: z.string().min(1, 'Please select your business type'),
  websiteType: z.enum(['static', 'dynamic', 'custom']),
  pageCount: z.number().min(8, 'Minimum 8 pages included'),
  features: z.array(z.string()),
  additionalPanels: z.array(z.string()),
  includeMobileApp: z.boolean(),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian phone number'),
  email: z.string().email('Please enter a valid email address'),
  city: z.string().min(2, 'City is required'),
  notes: z.string().optional(),
});

export const QuoteBuilder: React.FC<{ onSuccess?: () => void }> = ({ onSuccess }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const [generatedQuoteId, setGeneratedQuoteId] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuoteBuilderFormData>({
    resolver: zodResolver(quoteBuilderSchema),
    defaultValues: {
      businessType: 'Jewellery',
      websiteType: 'static',
      pageCount: 8,
      features: [],
      additionalPanels: [],
      includeMobileApp: false,
      name: '',
      phone: '',
      email: '',
      city: '',
      notes: '',
    },
  });

  const watchedWebsiteType = watch('websiteType');
  const watchedPageCount = watch('pageCount');
  const watchedFeatures = watch('features');
  const watchedPanels = watch('additionalPanels');
  const watchedMobileApp = watch('includeMobileApp');
  const watchedBusinessType = watch('businessType');

  // Pricing math
  const basePrice =
    watchedWebsiteType === 'static'
      ? businessConfig.pricing.staticStartingPrice
      : businessConfig.pricing.dynamicStartingPrice;

  const additionalPages =
    watchedWebsiteType === 'static'
      ? Math.max(0, watchedPageCount - businessConfig.pricing.staticIncludedPages)
      : 0;

  const additionalPagesCost =
    additionalPages * businessConfig.pricing.staticAdditionalPerPage;

  const panelsCost =
    watchedPanels.length * businessConfig.pricing.additionalPanelStartingPrice;

  const mobileAppCost = watchedMobileApp
    ? businessConfig.pricing.mobileAppStartingPrice
    : 0;

  const estimatedTotal =
    basePrice + additionalPagesCost + panelsCost + mobileAppCost;

  const onSubmit = async (data: QuoteBuilderFormData) => {
    try {
      const res = await submitQuoteRequest(data);
      if (res.success) {
        setIsSuccess(true);
        if (res.data?.quoteId) {
          setGeneratedQuoteId(res.data.quoteId);
        }
        reset();
        if (onSuccess) onSuccess();
      }
    } catch (err) {
      console.error('Error submitting quote builder', err);
    }
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(8, prev + 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(1, prev - 1));

  if (isSuccess) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 text-center max-w-xl mx-auto border border-emerald-100 shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
          Custom Quote Dispatched!
        </h3>
        <p className="text-sm text-slate-600 mb-6">
          Your tailored specification sheet and estimated starting quotation have been
          registered. A lead architect will contact you to finalize technical details.
        </p>

        {generatedQuoteId && (
          <div className="inline-block px-4 py-2 rounded-xl bg-slate-100 text-slate-800 text-xs font-mono font-bold mb-6">
            Quote ID: {generatedQuoteId}
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={getWhatsAppUrl({
              websiteType: watchedWebsiteType.toUpperCase(),
              requirements: `Quote #${generatedQuoteId} for ${watchedBusinessType}`,
              estimatedPrice: formatINR(estimatedTotal),
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Discuss on WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => {
              setIsSuccess(false);
              setCurrentStep(1);
            }}
            className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold cursor-pointer"
          >
            Build Another Quote
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-w-4xl mx-auto">
      {/* Step Progress Bar */}
      <div className="bg-slate-900 text-white p-6 sm:p-8">
        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3">
          <span>Interactive Quote Builder</span>
          <span>Step {currentStep} of 8</span>
        </div>
        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
          <div
            className="bg-indigo-500 h-full transition-all duration-300"
            style={{ width: `${(currentStep / 8) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-6 sm:p-8 lg:p-10">
        {/* Step 1: Business Type */}
        {currentStep === 1 && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900">
              Step 1: Choose Your Business Category
            </h3>
            <p className="text-xs text-slate-500">
              Select the industry that best describes your business in India.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {[
                'Jewellery',
                'Cosmetics',
                'Restaurant / Cafe',
                'Salon & Beauty',
                'Clinic / Healthcare',
                'Clothing & Boutique',
                'Real Estate',
                'Coaching Institute',
                'Other Local Business',
              ].map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setValue('businessType', category);
                    nextStep();
                  }}
                  className={`p-4 rounded-xl border text-left font-bold text-sm transition-all cursor-pointer ${
                    watchedBusinessType === category
                      ? 'border-indigo-600 bg-indigo-50/50 text-indigo-900'
                      : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Website Type */}
        {currentStep === 2 && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900">
              Step 2: Choose Website Type
            </h3>
            <p className="text-xs text-slate-500">
              Select your required architectural foundation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {[
                {
                  type: 'static' as WebsiteType,
                  title: 'Static Website',
                  price: '₹7,000 Base',
                  desc: '8 Pages included. Fast, mobile-ready with direct WhatsApp leads.',
                },
                {
                  type: 'dynamic' as WebsiteType,
                  title: 'Dynamic Web App',
                  price: '₹30,000 Base',
                  desc: 'Includes Admin Panel, Database, APIs & 1-Year Full Maintenance.',
                },
                {
                  type: 'custom' as WebsiteType,
                  title: 'Custom Solution',
                  price: 'Custom Scope',
                  desc: 'Enterprise architecture, bespoke logic, multiple role panels.',
                },
              ].map((item) => (
                <button
                  key={item.type}
                  type="button"
                  onClick={() => {
                    setValue('websiteType', item.type);
                    nextStep();
                  }}
                  className={`p-5 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                    watchedWebsiteType === item.type
                      ? 'border-indigo-600 bg-indigo-50/40'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <span className="text-xs font-bold text-indigo-600">
                    {item.price}
                  </span>
                  <h4 className="text-base font-extrabold text-slate-900 mt-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-2">{item.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Page Count */}
        {currentStep === 3 && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900">
              Step 3: Number of Required Pages
            </h3>
            <p className="text-xs text-slate-500">
              Base static plan includes 8 pages. Additional pages are ₹600 each.
            </p>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-sm font-bold text-slate-800">
                  Total Website Pages:
                </span>
                <span className="text-xs text-slate-500 block">
                  (Home, About, Services, Gallery, Contact, Testimonials, Policy, etc.)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setValue('pageCount', Math.max(8, watchedPageCount - 1))
                  }
                  className="w-10 h-10 rounded-xl bg-white border border-slate-300 font-bold text-slate-700 cursor-pointer"
                >
                  -
                </button>
                <span className="text-2xl font-black text-indigo-600 w-12 text-center">
                  {watchedPageCount}
                </span>
                <button
                  type="button"
                  onClick={() => setValue('pageCount', watchedPageCount + 1)}
                  className="w-10 h-10 rounded-xl bg-white border border-slate-300 font-bold text-slate-700 cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Required Features */}
        {currentStep === 4 && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900">
              Step 4: Choose Required Modules & Integrations
            </h3>
            <p className="text-xs text-slate-500">
              Select optional modules. Custom quote will be calculated based on selected features.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {dynamicModulesCatalog.map((feat) => {
                const checked = watchedFeatures.includes(feat.id);
                return (
                  <label
                    key={feat.id}
                    className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                      checked
                        ? 'border-indigo-600 bg-indigo-50/50'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <input
                      type="checkbox"
                      value={feat.id}
                      checked={checked}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setValue('features', [...watchedFeatures, feat.id]);
                        } else {
                          setValue(
                            'features',
                            watchedFeatures.filter((f) => f !== feat.id)
                          );
                        }
                      }}
                      className="mt-1 rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <div>
                      <span className="text-sm font-bold text-slate-900 block">
                        {feat.name}
                      </span>
                      <span className="text-xs text-slate-500">{feat.description}</span>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 5: Additional Panel */}
        {currentStep === 5 && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900">
              Step 5: Need Role-Based Operational Panels?
            </h3>
            <p className="text-xs text-slate-500">
              Add operational portals starting from ₹10,000 per panel.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {additionalPanelsList.map((panel) => {
                const checked = watchedPanels.includes(panel.id);
                return (
                  <label
                    key={panel.id}
                    className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                      checked
                        ? 'border-indigo-600 bg-indigo-50/50'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setValue('additionalPanels', [...watchedPanels, panel.id]);
                          } else {
                            setValue(
                              'additionalPanels',
                              watchedPanels.filter((p) => p !== panel.id)
                            );
                          }
                        }}
                        className="rounded text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="text-sm font-bold text-slate-800">
                        {panel.name}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-indigo-600">+₹10,000</span>
                  </label>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 6: Mobile App */}
        {currentStep === 6 && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900">
              Step 6: Companion Mobile Application
            </h3>
            <p className="text-xs text-slate-500">
              Add an Android & iOS mobile app (starting from ₹15,000).
            </p>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-slate-900">
                  Build Cross-Platform Mobile App?
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Final app pricing depends on scope, notifications & offline caching.
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setValue('includeMobileApp', false)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                    !watchedMobileApp
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-white text-slate-700 border-slate-300'
                  }`}
                >
                  No, Web Only
                </button>
                <button
                  type="button"
                  onClick={() => setValue('includeMobileApp', true)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                    watchedMobileApp
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-white text-slate-700 border-slate-300'
                  }`}
                >
                  Yes, Add App (+₹15,000)
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 7: Enter Contact Details */}
        {currentStep === 7 && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900">
              Step 7: Enter Contact Details
            </h3>
            <p className="text-xs text-slate-500">
              Where should we send this itemized quotation?
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Amit Verma"
                  {...register('name')}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-indigo-500"
                />
                {errors.name && (
                  <p className="text-xs text-rose-600 mt-1">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Phone (WhatsApp)
                </label>
                <input
                  type="tel"
                  placeholder="9876543210"
                  {...register('phone')}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-indigo-500"
                />
                {errors.phone && (
                  <p className="text-xs text-rose-600 mt-1">{errors.phone.message}</p>
                )}
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="amit@company.com"
                  {...register('email')}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-indigo-500"
                />
                {errors.email && (
                  <p className="text-xs text-rose-600 mt-1">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  City
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ahmedabad"
                  {...register('city')}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-indigo-500"
                />
                {errors.city && (
                  <p className="text-xs text-rose-600 mt-1">{errors.city.message}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Step 8: Generate Indicative Quote */}
        {currentStep === 8 && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900">
              Step 8: Indicative Quotation Breakdown
            </h3>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 divide-y divide-slate-200/70 text-sm">
              <div className="py-2.5 flex justify-between">
                <span className="text-slate-600">Base Website Architecture:</span>
                <span className="font-bold text-slate-900">
                  {watchedWebsiteType.toUpperCase()} ({formatINR(basePrice)})
                </span>
              </div>
              {additionalPages > 0 && (
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-600">
                    Additional Pages ({additionalPages} × ₹600):
                  </span>
                  <span className="font-bold text-slate-900">
                    +{formatINR(additionalPagesCost)}
                  </span>
                </div>
              )}
              {panelsCost > 0 && (
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-600">
                    Operational Panels ({watchedPanels.length} × ₹10,000):
                  </span>
                  <span className="font-bold text-slate-900">
                    +{formatINR(panelsCost)}
                  </span>
                </div>
              )}
              {mobileAppCost > 0 && (
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-600">Mobile Companion Application:</span>
                  <span className="font-bold text-slate-900">
                    +{formatINR(mobileAppCost)} (Starts)
                  </span>
                </div>
              )}
              {watchedFeatures.length > 0 && (
                <div className="py-2.5 flex justify-between text-amber-700">
                  <span>Custom Modules ({watchedFeatures.length}):</span>
                  <span className="font-bold">Custom Quote Required</span>
                </div>
              )}
              <div className="pt-4 flex justify-between text-base">
                <span className="font-extrabold text-slate-900">
                  Estimated Starting Price:
                </span>
                <span className="font-black text-2xl text-indigo-600">
                  {formatINR(estimatedTotal)}
                  {watchedFeatures.length > 0 || watchedMobileApp ? '+' : ''}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              * This is an indicative estimate. Final quotation will be provided after requirement analysis.
            </p>
          </div>
        )}

        {/* Step Navigation Controls */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {currentStep < 8 ? (
            <button
              type="button"
              onClick={nextStep}
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-xs font-bold text-white shadow-md cursor-pointer"
            >
              <span>Next Step</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <Button
              type="submit"
              variant="primary"
              size="lg"
              isLoading={isSubmitting}
              rightIcon={<Send className="w-4 h-4" />}
            >
              Send Me This Quote
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};
