import { businessConfig } from '../config/business';

export interface WhatsAppMessageOptions {
  serviceName?: string;
  websiteType?: string;
  estimatedPrice?: string;
  requirements?: string;
  customMessage?: string;
}

/**
 * Generates an encoded WhatsApp chat URL with compliant prefilled business messages
 */
export function getWhatsAppUrl(options?: WhatsAppMessageOptions): string {
  const number = businessConfig.contact.whatsappRaw;
  let text = 'Hello, I am interested in getting a website for my business. I would like to know more about your pricing and services.';

  if (options?.customMessage) {
    text = options.customMessage;
  } else if (options?.websiteType) {
    const details = options.requirements ? ` (${options.requirements})` : '';
    const priceStr = options.estimatedPrice ? ` with indicative estimate of ${options.estimatedPrice}` : '';
    text = `Hello, I am interested in a ${options.websiteType} website${details}${priceStr}. Please share a detailed quotation.`;
  } else if (options?.serviceName) {
    text = `Hello, I am interested in your ${options.serviceName} service. Please share details and pricing.`;
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

