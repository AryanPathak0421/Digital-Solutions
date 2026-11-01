import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export interface WhatsAppButtonProps {
  label?: string;
  variant?: 'floating' | 'inline';
  className?: string;
  customMessage?: string;
  websiteType?: string;
  estimatedPrice?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  label = 'WhatsApp Us',
  variant = 'floating',
  className = '',
  customMessage,
  websiteType,
  estimatedPrice,
}) => {
  const url = getWhatsAppUrl({
    customMessage,
    websiteType,
    estimatedPrice,
  });

  if (variant === 'inline') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold shadow-md shadow-emerald-500/20 transition-all duration-200 active:scale-95 ${className}`}
      >
        <MessageCircle className="w-5 h-5 fill-white text-white" />
        <span>{label}</span>
      </a>
    );
  }

  return (
    <aside
      aria-label="WhatsApp quick contact"
      className={`fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-50 flex items-center group ${className}`}
    >
      {/* Tooltip on desktop hover */}
      <div className="hidden sm:flex items-center mr-3 px-3.5 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-medium shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <span>Instant WhatsApp Inquiry</span>
      </div>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat with Solutions Specialist"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl shadow-emerald-600/30 transition-transform duration-200 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        {/* Subtle pulsing background ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-white text-white relative z-10" />
      </a>
    </aside>
  );
};

