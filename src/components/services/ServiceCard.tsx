import React from 'react';
import {
  Globe,
  Layers,
  LayoutDashboard,
  Smartphone,
  Cpu,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import type { ServiceItem } from '../../types';
import { formatINR } from '../../utils/formatters';
import { Button } from '../common/Button';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export interface ServiceCardProps {
  service: ServiceItem;
  onSelect?: (service: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect }) => {
  const iconMap: Record<string, React.ElementType> = {
    Globe,
    Layers,
    LayoutDashboard,
    Smartphone,
    Cpu,
  };

  const IconComponent = iconMap[service.iconName] || Globe;

  const displayStartingPrice =
    typeof service.startingPrice === 'number'
      ? formatINR(service.startingPrice)
      : service.startingPrice;

  return (
    <div
      className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 border-2 ${
        service.popular
          ? 'bg-white border-indigo-600 shadow-xl relative ring-4 ring-indigo-50'
          : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-sm hover:shadow-md'
      }`}
    >
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <IconComponent className="w-6 h-6" />
          </div>
          {service.badge && (
            <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200/60">
              {service.badge}
            </span>
          )}
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-extrabold text-slate-900">{service.title}</h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">{service.tagline}</p>

        {/* Price Tag */}
        <div className="mt-5 pb-5 border-b border-slate-100 flex items-baseline gap-2">
          <span className="text-2xl sm:text-3xl font-black text-slate-900">
            {displayStartingPrice}
          </span>
          {service.priceSuffix && (
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              / {service.priceSuffix}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed">
          {service.description}
        </p>

        {/* Features List */}
        <div className="mt-6 space-y-2.5">
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
            What's Included:
          </span>
          <ul className="space-y-2">
            {service.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-2.5">
        <Button
          variant={service.popular ? 'primary' : 'secondary'}
          size="md"
          className="w-full flex-1"
          onClick={() => {
            if (onSelect) onSelect(service);
          }}
          rightIcon={<ArrowRight className="w-4 h-4" />}
        >
          {service.ctaText}
        </Button>

        <a
          href={getWhatsAppUrl({ serviceName: service.title })}
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp Inquiry"
          aria-label="WhatsApp Inquiry for this service"
          className="p-2.5 rounded-xl border border-slate-200 hover:bg-emerald-50 text-emerald-600 hover:border-emerald-300 flex items-center justify-center transition-colors cursor-pointer"
        >
          <MessageCircle className="w-5 h-5 fill-emerald-600" />
        </a>
      </div>
    </div>
  );
};

