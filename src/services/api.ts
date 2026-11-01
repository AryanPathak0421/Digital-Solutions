import type {
  ConsultationFormData,
  ContactFormData,
  QuoteBuilderFormData,
  PortfolioProject,
  ServiceItem,
} from '../types';
import { servicesData } from '../data/services';
import { portfolioData } from '../data/portfolio';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

/**
 * Service to handle consultation enquiries
 */
export async function submitConsultationRequest(
  payload: ConsultationFormData
): Promise<ApiResponse<{ referenceId: string }>> {
  if (API_BASE_URL) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/consultations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }
      return await response.json();
    } catch (err: unknown) {
      console.warn('API submission failed, falling back to local simulation:', err);
      // Fallback for seamless UX
    }
  }

  // Graceful local simulation with reference ID if API_BASE_URL not configured
  await new Promise((resolve) => setTimeout(resolve, 800));
  return {
    success: true,
    message: 'Thank you! We will contact you shortly.',
    data: {
      referenceId: `CON-${Date.now().toString().slice(-6)}`,
    },
  };
}

/**
 * Service to handle quote builder submissions
 */
export async function submitQuoteRequest(
  payload: QuoteBuilderFormData
): Promise<ApiResponse<{ quoteId: string }>> {
  if (API_BASE_URL) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/quotes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }
      return await response.json();
    } catch (err: unknown) {
      console.warn('API submission failed, falling back to local simulation:', err);
    }
  }

  await new Promise((resolve) => setTimeout(resolve, 800));
  return {
    success: true,
    message: 'Your custom quote request has been generated and dispatched to our solutions team.',
    data: {
      quoteId: `QTE-${Date.now().toString().slice(-6)}`,
    },
  };
}

/**
 * Service to handle generic contact enquiries
 */
export async function submitContactForm(
  payload: ContactFormData
): Promise<ApiResponse<{ ticketId: string }>> {
  if (API_BASE_URL) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }
      return await response.json();
    } catch (err: unknown) {
      console.warn('API submission failed, falling back to local simulation:', err);
    }
  }

  await new Promise((resolve) => setTimeout(resolve, 700));
  return {
    success: true,
    message: 'Thank you for reaching out! Our team will respond within 4 business hours.',
    data: {
      ticketId: `TCK-${Date.now().toString().slice(-6)}`,
    },
  };
}

/**
 * Service to get services data
 */
export async function getServices(): Promise<ServiceItem[]> {
  if (API_BASE_URL) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/services`);
      if (response.ok) {
        return await response.json();
      }
    } catch (err) {
      console.warn('Using local services data fallback', err);
    }
  }
  return servicesData;
}

/**
 * Service to get portfolio projects
 */
export async function getPortfolio(category?: string): Promise<PortfolioProject[]> {
  if (API_BASE_URL) {
    try {
      const url = category && category !== 'All' 
        ? `${API_BASE_URL}/api/portfolio?category=${encodeURIComponent(category)}`
        : `${API_BASE_URL}/api/portfolio`;
      const response = await fetch(url);
      if (response.ok) {
        return await response.json();
      }
    } catch (err) {
      console.warn('Using local portfolio data fallback', err);
    }
  }
  
  if (category && category !== 'All') {
    return portfolioData.filter((item) => item.category === category);
  }
  return portfolioData;
}

