export type IndustryType =
  | 'jewellery'
  | 'cosmetics'
  | 'clothing'
  | 'boutique'
  | 'salon'
  | 'restaurant'
  | 'cafe'
  | 'bakery'
  | 'gym'
  | 'clinic'
  | 'dental'
  | 'furniture'
  | 'electronics'
  | 'mobile'
  | 'real-estate'
  | 'interior'
  | 'automobile'
  | 'coaching'
  | 'travel'
  | 'hotel'
  | 'services'
  | 'other';

export type WebsiteType = 'static' | 'dynamic' | 'custom';

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  startingPrice: number | string;
  isCustomPrice?: boolean;
  priceSuffix?: string;
  description: string;
  badge?: string;
  popular?: boolean;
  features: string[];
  deliverables?: string[];
  ctaText: string;
  iconName: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  price: number | string;
  displayPrice: string;
  isPopular?: boolean;
  highlightText?: string;
  features: string[];
  excludedFeatures?: string[];
  ctaText: string;
  badge?: string;
  note?: string;
}

export interface IndustrySolution {
  id: string;
  name: string;
  slug: string;
  icon: string;
  tagline: string;
  problem: string;
  solution: string;
  recommendedPackage: string;
  keyFeatures: string[];
  typicalResults: string[];
  ctaText: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  slug: string;
  industry: string;
  category: 'Retail' | 'Restaurant' | 'Healthcare' | 'Education' | 'Services' | 'E-commerce';
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  features: string[];
  caseStudy?: {
    overview: string;
    clientProblem: string;
    strategy: string;
    designApproach: string;
    development: string;
    qualitativeOutcomes: string[];
    deliverables: string[];
  };
}

export interface FAQItemData {
  id: string;
  question: string;
  answer: string;
  category?: 'pricing' | 'development' | 'services' | 'general';
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  businessName: string;
  industry: string;
  city: string;
  feedback: string;
  rating: number;
  projectType: string;
  isPlaceholder?: boolean;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface CalculatorState {
  websiteType: WebsiteType;
  pageCount: number; // For static (min 8)
  selectedModules: string[];
  includeMobileApp: boolean;
  additionalPanels: string[];
}

export interface ConsultationFormData {
  fullName: string;
  businessName: string;
  phone: string;
  email: string;
  businessType: string;
  city: string;
  websiteRequired: string;
  estimatedBudget: string;
  requirements: string;
  preferredContact: 'phone' | 'whatsapp' | 'email';
}

export interface QuoteBuilderFormData {
  businessType: string;
  websiteType: WebsiteType;
  pageCount: number;
  features: string[];
  additionalPanels: string[];
  includeMobileApp: boolean;
  name: string;
  phone: string;
  email: string;
  city: string;
  notes?: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

