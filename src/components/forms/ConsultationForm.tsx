import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2, ArrowRight, Sparkles, MessageCircle, Phone, Mail } from 'lucide-react';
import { submitConsultationRequest } from '../../services/api';
import type { ConsultationFormData } from '../../types';
import { Button } from '../common/Button';
import { getWhatsAppUrl } from '../../utils/whatsapp';

const consultationSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  businessName: z.string().min(2, 'Business name is required'),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number'),
  email: z.string().email('Please enter a valid email address'),
  businessType: z.string().min(1, 'Please select your business type'),
  city: z.string().min(2, 'Please enter your city/town'),
  websiteRequired: z.string().min(1, 'Please select website requirement'),
  estimatedBudget: z.string().min(1, 'Please select your budget range'),
  requirements: z
    .string()
    .min(10, 'Please briefly describe your requirements (min 10 characters)'),
  preferredContact: z.enum(['phone', 'whatsapp', 'email']),
});

export interface ConsultationFormProps {
  onSuccess?: () => void;
  className?: string;
  defaultBusinessType?: string;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  onSuccess,
  className = '',
  defaultBusinessType = '',
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionReference, setSubmissionReference] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      fullName: '',
      businessName: '',
      phone: '',
      email: '',
      businessType: defaultBusinessType || 'Retail',
      city: '',
      websiteRequired: 'Static Website (Starts ₹7,000)',
      estimatedBudget: '₹7,000 – ₹15,000',
      requirements: '',
      preferredContact: 'whatsapp',
    },
  });

  const onSubmit = async (data: ConsultationFormData) => {
    try {
      const response = await submitConsultationRequest(data);
      if (response.success) {
        setIsSubmitted(true);
        if (response.data?.referenceId) {
          setSubmissionReference(response.data.referenceId);
        }
        reset();
        if (onSuccess) onSuccess();
      }
    } catch (err) {
      console.error('Failed to submit consultation request', err);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-8 sm:p-10 border border-emerald-100 text-center shadow-lg">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
          Thank you! We'll contact you shortly.
        </h3>
        <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto mb-6">
          Your free consultation request has been received. Our solutions specialist will
          reach out within 4 business hours to analyze your requirements.
        </p>
        {submissionReference && (
          <div className="inline-block px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-mono font-bold mb-6">
            Reference ID: {submissionReference}
          </div>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={getWhatsAppUrl({
              customMessage: `Hello, I just submitted consultation enquiry #${submissionReference}. Can we discuss my requirements directly?`,
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-semibold shadow-md transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat Now on WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => setIsSubmitted(false)}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold transition-colors cursor-pointer"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-200/80 ${className}`}
      noValidate
    >
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Zero Obligation • 100% Free Consultation</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
          Get Your Free Consultation
        </h3>
        <p className="text-sm text-slate-600 mt-1">
          Tell us about your business and we’ll propose the right digital solution for your budget.
        </p>
      </div>

      <div className="space-y-4">
        {/* Name & Business Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Your Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Rajesh Kumar"
              {...register('fullName')}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                errors.fullName
                  ? 'border-rose-300 focus:ring-rose-400 bg-rose-50/30'
                  : 'border-slate-300 focus:ring-indigo-500 focus:border-indigo-500 bg-slate-50/30'
              }`}
            />
            {errors.fullName && (
              <p className="text-xs text-rose-600 mt-1">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Business / Store Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Royal Silk & Sarees"
              {...register('businessName')}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                errors.businessName
                  ? 'border-rose-300 focus:ring-rose-400 bg-rose-50/30'
                  : 'border-slate-300 focus:ring-indigo-500 focus:border-indigo-500 bg-slate-50/30'
              }`}
            />
            {errors.businessName && (
              <p className="text-xs text-rose-600 mt-1">{errors.businessName.message}</p>
            )}
          </div>
        </div>

        {/* Phone & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Phone / WhatsApp Number <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500">
                +91
              </span>
              <input
                type="tel"
                placeholder="9876543210"
                maxLength={10}
                {...register('phone')}
                className={`w-full pl-12 pr-4 py-2.5 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.phone
                    ? 'border-rose-300 focus:ring-rose-400 bg-rose-50/30'
                    : 'border-slate-300 focus:ring-indigo-500 focus:border-indigo-500 bg-slate-50/30'
                }`}
              />
            </div>
            {errors.phone && (
              <p className="text-xs text-rose-600 mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <input
              type="email"
              placeholder="rajesh@business.com"
              {...register('email')}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                errors.email
                  ? 'border-rose-300 focus:ring-rose-400 bg-rose-50/30'
                  : 'border-slate-300 focus:ring-indigo-500 focus:border-indigo-500 bg-slate-50/30'
              }`}
            />
            {errors.email && (
              <p className="text-xs text-rose-600 mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Business Type & City */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Business Category <span className="text-rose-500">*</span>
            </label>
            <select
              {...register('businessType')}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50/30 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="Jewellery">Jewellery Store</option>
              <option value="Cosmetics">Cosmetics & Beauty Care</option>
              <option value="Restaurant">Restaurant / Cafe / Bakery</option>
              <option value="Salon">Salon & Beauty Parlour</option>
              <option value="Healthcare">Clinic / Dental / Healthcare</option>
              <option value="Retail">Retail Shop / Clothing / Footwear</option>
              <option value="Education">Coaching Institute / School</option>
              <option value="Real Estate">Real Estate / Interior Design</option>
              <option value="Automobile">Automobile & Garage</option>
              <option value="Other">Other Local Business</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              City / Town <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Pune, Jaipur, Lucknow"
              {...register('city')}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                errors.city
                  ? 'border-rose-300 focus:ring-rose-400 bg-rose-50/30'
                  : 'border-slate-300 focus:ring-indigo-500 focus:border-indigo-500 bg-slate-50/30'
              }`}
            />
            {errors.city && (
              <p className="text-xs text-rose-600 mt-1">{errors.city.message}</p>
            )}
          </div>
        </div>

        {/* Website Requirement & Budget */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Website Required <span className="text-rose-500">*</span>
            </label>
            <select
              {...register('websiteRequired')}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50/30 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="Static Website (Starts ₹7,000)">Static Website (Starts ₹7,000)</option>
              <option value="Dynamic Website (Starts ₹30,000)">Dynamic Website with Admin (Starts ₹30,000)</option>
              <option value="E-commerce Store">E-commerce / Catalog Store</option>
              <option value="Specialized Admin Panel">Specialized Admin Panel (Starts ₹10,000)</option>
              <option value="Mobile App">Mobile App (Starts ₹15,000)</option>
              <option value="Custom Business Software">Custom Business Software</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Estimated Budget <span className="text-rose-500">*</span>
            </label>
            <select
              {...register('estimatedBudget')}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50/30 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="₹7,000 – ₹15,000">₹7,000 – ₹15,000 (Affordable Starter)</option>
              <option value="₹15,000 – ₹30,000">₹15,000 – ₹30,000</option>
              <option value="₹30,000 – ₹50,000">₹30,000 – ₹50,000 (Dynamic + Support)</option>
              <option value="₹50,000+">₹50,000+ (Custom / Mobile App)</option>
              <option value="Not Sure">Not Sure / Suggest Best Option</option>
            </select>
          </div>
        </div>

        {/* Requirements Textarea */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Brief Requirements / Products to Showcase <span className="text-rose-500">*</span>
          </label>
          <textarea
            rows={3}
            placeholder="Tell us what you want to showcase, any design references, or features needed (e.g. WhatsApp ordering, appointment booking, gold rates, etc.)..."
            {...register('requirements')}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
              errors.requirements
                ? 'border-rose-300 focus:ring-rose-400 bg-rose-50/30'
                : 'border-slate-300 focus:ring-indigo-500 focus:border-indigo-500 bg-slate-50/30'
            }`}
          />
          {errors.requirements && (
            <p className="text-xs text-rose-600 mt-1">{errors.requirements.message}</p>
          )}
        </div>

        {/* Preferred Contact Method */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Preferred Consultation Mode
          </label>
          <div className="grid grid-cols-3 gap-2.5">
            {[
              { id: 'whatsapp', label: 'WhatsApp', icon: MessageCircle },
              { id: 'phone', label: 'Phone Call', icon: Phone },
              { id: 'email', label: 'Email', icon: Mail },
            ].map((mode) => (
              <label
                key={mode.id}
                className="flex items-center justify-center gap-2 p-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer has-checked:border-indigo-600 has-checked:bg-indigo-50/50 has-checked:text-indigo-900 transition-all"
              >
                <input
                  type="radio"
                  value={mode.id}
                  {...register('preferredContact')}
                  className="w-3.5 h-3.5 text-indigo-600 focus:ring-indigo-500"
                />
                <mode.icon className="w-3.5 h-3.5 text-slate-500" />
                <span>{mode.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            isLoading={isSubmitting}
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Request Free Consultation
          </Button>
          <p className="text-[11px] text-center text-slate-500 mt-2.5">
            We value your privacy. No spam. You will only be contacted regarding your website inquiry.
          </p>
        </div>
      </div>
    </form>
  );
};
