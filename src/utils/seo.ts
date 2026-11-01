import { businessConfig } from '../config/business';

export interface SeoProps {
  title: string;
  description?: string;
  canonicalPath?: string;
}

/**
 * Updates document title, meta tags, and canonical url dynamically for technical SEO
 */
export function updateSEO({ title, description, canonicalPath }: SeoProps) {
  const fullTitle = `${title} | ${businessConfig.name}`;
  document.title = fullTitle;

  const metaDesc = document.querySelector('meta[name="description"]');
  const defaultDesc = `${businessConfig.subheadline} Websites starting from ${businessConfig.pricing.currencySymbol}${businessConfig.pricing.staticStartingPrice.toLocaleString('en-IN')}.`;
  
  if (metaDesc) {
    metaDesc.setAttribute('content', description || defaultDesc);
  }

  // Canonical tag
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  const baseUrl = window.location.origin;
  canonical.setAttribute('href', `${baseUrl}${canonicalPath || window.location.pathname}`);
}

