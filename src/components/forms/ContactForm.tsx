import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2, Send } from 'lucide-react';
import { submitContactForm } from '../../services/api';
import type { ContactFormData } from '../../types';
import { Button } from '../common/Button';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian phone number'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const ContactForm: React.FC<{ onSuccess?: () => void }> = ({ onSuccess }) => {
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await submitContactForm(data);
      if (res.success) {
        setSubmitted(true);
        if (res.data?.ticketId) setTicketId(res.data.ticketId);
        reset();
        if (onSuccess) onSuccess();
      }
    } catch (err) {
      console.error('Contact form submission error', err);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 text-center border border-emerald-100 shadow-lg">
        <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent Successfully!</h3>
        <p className="text-sm text-slate-600 mb-4">
          Thank you for reaching out. A representative from our development team will respond within 4 business hours.
        </p>
        {ticketId && (
          <p className="text-xs font-mono font-bold text-slate-500 mb-6">
            Ticket ID: {ticketId}
          </p>
        )}
        <button
          onClick={() => setSubmitted(false)}
          className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold cursor-pointer transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Vikram Sethi"
            {...register('fullName')}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 transition-all ${
              errors.fullName
                ? 'border-rose-300 focus:ring-rose-400 bg-rose-50/20'
                : 'border-slate-300 focus:ring-indigo-500 bg-slate-50/40'
            }`}
          />
          {errors.fullName && (
            <p className="text-xs text-rose-600 mt-1">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
            Phone Number <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
              +91
            </span>
            <input
              type="tel"
              placeholder="9876543210"
              maxLength={10}
              {...register('phone')}
              className={`w-full pl-12 pr-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 transition-all ${
                errors.phone
                  ? 'border-rose-300 focus:ring-rose-400 bg-rose-50/20'
                  : 'border-slate-300 focus:ring-indigo-500 bg-slate-50/40'
              }`}
            />
          </div>
          {errors.phone && (
            <p className="text-xs text-rose-600 mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
            Email Address <span className="text-rose-500">*</span>
          </label>
          <input
            type="email"
            placeholder="vikram@domain.com"
            {...register('email')}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 transition-all ${
              errors.email
                ? 'border-rose-300 focus:ring-rose-400 bg-rose-50/20'
                : 'border-slate-300 focus:ring-indigo-500 bg-slate-50/40'
            }`}
          />
          {errors.email && (
            <p className="text-xs text-rose-600 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
            Subject <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Website revamp inquiry"
            {...register('subject')}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 transition-all ${
              errors.subject
                ? 'border-rose-300 focus:ring-rose-400 bg-rose-50/20'
                : 'border-slate-300 focus:ring-indigo-500 bg-slate-50/40'
            }`}
          />
          {errors.subject && (
            <p className="text-xs text-rose-600 mt-1">{errors.subject.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
          Your Message / Inquiries <span className="text-rose-500">*</span>
        </label>
        <textarea
          rows={4}
          placeholder="How can we assist your business today?"
          {...register('message')}
          className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 transition-all ${
            errors.message
              ? 'border-rose-300 focus:ring-rose-400 bg-rose-50/20'
              : 'border-slate-300 focus:ring-indigo-500 bg-slate-50/40'
          }`}
        />
        {errors.message && (
          <p className="text-xs text-rose-600 mt-1">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        isLoading={isSubmitting}
        rightIcon={<Send className="w-4 h-4" />}
      >
        Send Direct Message
      </Button>
    </form>
  );
};
