import React, { useEffect } from 'react';
import { updateSEO } from '../utils/seo';
import { businessConfig } from '../config/business';
import { ContactForm } from '../components/forms/ContactForm';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SectionHeading } from '../components/common/SectionHeading';
import { FAQAccordion } from '../components/faq/FAQAccordion';
import { getWhatsAppUrl } from '../utils/whatsapp';
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  Globe,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    updateSEO({
      title: 'Contact Rozsewa Digital — Free Consultation & Direct Helpline',
      description:
        'Get in touch with Rozsewa Digital for custom website development, dynamic web apps, and mobile applications for local businesses in India.',
      canonicalPath: '/contact',
    });
  }, []);

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Contact' }]} className="mb-6" />

        <SectionHeading
          badge="Let's Connect"
          title="Speak Directly With a Web Solutions Specialist"
          subtitle="Ready to take your business online? Reach out via phone, direct WhatsApp chat, or send an enquiry below for a rapid response within 4 hours."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Left Column: Direct Contact Info, Service Areas, Business Hours */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-xl space-y-6">
              <h3 className="text-xl font-extrabold text-white">
                Direct Communication Channels
              </h3>

              <div className="space-y-4 text-sm">
                <a
                  href={`tel:${businessConfig.contact.phoneRaw}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">
                      Phone Consultation
                    </span>
                    <span className="font-bold text-white text-base">
                      {businessConfig.contact.phone}
                    </span>
                  </div>
                </a>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors border border-emerald-500/20"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 fill-white" />
                  </div>
                  <div>
                    <span className="text-xs text-emerald-300 block font-medium">
                      Instant WhatsApp Chat
                    </span>
                    <span className="font-bold text-white text-base">
                      {businessConfig.contact.whatsapp}
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${businessConfig.contact.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">
                      Email Inquiries
                    </span>
                    <span className="font-bold text-white text-sm truncate block">
                      {businessConfig.contact.email}
                    </span>
                  </div>
                </a>
              </div>

              {/* Working Hours */}
              <div className="pt-4 border-t border-white/10 flex items-start gap-3 text-xs text-slate-300">
                <Clock className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Business Operating Hours:</span>
                  <span>{businessConfig.contact.hours.days}</span>
                  <span className="block text-slate-400">{businessConfig.contact.hours.time}</span>
                  <span className="block text-emerald-400 mt-1">{businessConfig.contact.hours.emergency}</span>
                </div>
              </div>
            </div>

            {/* Address & Service Areas (using compliant [Business Address] placeholder) */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <h4 className="font-bold text-slate-900">Headquarters / Delivery Hub:</h4>
                  <p className="text-slate-600 mt-0.5">[Business Address]</p>
                  <p className="text-xs text-slate-500">{businessConfig.contact.address.displayAddress}</p>
                </div>
              </div>

              {/* Map Placeholder as explicitly instructed */}
              <div className="rounded-2xl bg-slate-100 border border-slate-200 p-6 text-center text-xs text-slate-500">
                <Globe className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <p className="font-semibold text-slate-700">Service Map & Delivery Coverage</p>
                <p className="text-[11px] mt-1 text-slate-500">
                  We provide end-to-end remote delivery across all states & union territories in India with dedicated video/phone walkthroughs.
                </p>
              </div>

              {/* Service Areas */}
              <div className="pt-2">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  Active Client Coverage Across India:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {businessConfig.contact.serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-xl">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                Online Inquiry
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-2">
                Send Us a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Fill out this quick form and an engineer will reply with project scope notes and timelines.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>

        {/* Contact FAQ */}
        <div className="mb-12">
          <SectionHeading
            badge="Common Questions"
            title="Frequently Asked Before Reaching Out"
            subtitle="Find quick answers on communication modes, deposit procedures, and project kickoffs."
            align="center"
          />
          <FAQAccordion limit={4} />
        </div>
      </div>
    </div>
  );
};
