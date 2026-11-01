import type { PricingPlan } from '../types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'STARTER',
    subtitle: 'For local Indian businesses looking to establish a trusted, modern online presence.',
    price: 7000,
    displayPrice: '₹7,000',
    highlightText: 'Ideal for Retail Shops, Salons, Clinics & Service Providers',
    badge: 'Affordable Entry',
    features: [
      'Up to 8 complete custom pages included',
      'Additional pages at ₹600 per page',
      '100% Mobile, tablet & desktop responsive',
      'Direct WhatsApp click-to-chat integration',
      'Lead capture & Contact inquiry form',
      'Google Maps store location integration',
      'Social media links & business details',
      'Essential On-Page SEO optimization',
      'Deployment assistance & live testing',
      'Standard SSL security configuration',
    ],
    excludedFeatures: [
      'Dynamic database backend',
      'Admin content management panel',
      'Customer login portal',
      'E-commerce payment gateway',
    ],
    ctaText: 'Start With ₹7,000',
    note: 'One-time investment. Domain & hosting can be connected or arranged.',
  },
  {
    id: 'business',
    name: 'BUSINESS',
    subtitle: 'For businesses requiring dynamic content, custom admin control, and database architecture.',
    price: 30000,
    displayPrice: '₹30,000+',
    isPopular: true,
    badge: 'Best Value for Growing Businesses',
    highlightText: 'Includes 1-Year Maintenance & Backend Support',
    features: [
      'Full dynamic web application frontend',
      'Secure custom backend server architecture',
      'Scalable production database setup',
      'Full-featured Admin Management Panel',
      'REST API architecture & external integration',
      '1-Year comprehensive maintenance included',
      'Dedicated backend technical support',
      'Customer enquiry management & export',
      'Role-based secure authentication',
      'Automated database backup schedules',
      'Performance & speed optimization',
    ],
    ctaText: 'Discuss Requirements',
    note: 'Includes 12 months technical maintenance according to agreed scope.',
  },
  {
    id: 'custom',
    name: 'CUSTOM',
    subtitle: 'For enterprises and businesses needing specialized automation, mobile apps, or multi-panel systems.',
    price: 'Custom Quote',
    displayPrice: "Let's Build It",
    badge: 'Enterprise Solutions',
    highlightText: 'Tailored specifically around your operational workflow',
    features: [
      'Everything in Business package',
      'Custom business modules (Booking, CRM, Billing)',
      'Multiple specialized panels (Staff, Vendor, Delivery)',
      'Native-feel Android / Cross-platform Mobile App',
      'Indian Payment Gateway integration (UPI, Cards, Netbanking)',
      'Custom financial & operational dashboards',
      'Automated SMS & WhatsApp notification alerts',
      'Tailored API endpoints & third-party connectors',
      'Priority SLA support & dedicated account lead',
    ],
    ctaText: 'Request Custom Quote',
    note: 'Final pricing depends on project requirements, complexity, integrations and scope.',
  },
];

export interface DynamicModuleOption {
  id: string;
  name: string;
  description: string;
  isCustomQuote: boolean;
  indicativeNote?: string;
}

export const dynamicModulesCatalog: DynamicModuleOption[] = [
  {
    id: 'payment-gateway',
    name: 'Payment Gateway Integration',
    description: 'UPI, Razorpay, PhonePe & Netbanking integration for instant payments',
    isCustomQuote: true,
    indicativeNote: 'Custom Quote Required',
  },
  {
    id: 'booking-system',
    name: 'Online Booking & Scheduling',
    description: 'Slot-based booking for clinics, salons, coaching, and consultations',
    isCustomQuote: true,
    indicativeNote: 'Custom Quote Required',
  },
  {
    id: 'inventory',
    name: 'Store Inventory & Stock Control',
    description: 'Real-time item count, low-stock warnings, and barcode compatibility',
    isCustomQuote: true,
    indicativeNote: 'Custom Quote Required',
  },
  {
    id: 'crm',
    name: 'Lead & Customer CRM',
    description: 'Track customer history, follow-up reminders, and communication logs',
    isCustomQuote: true,
    indicativeNote: 'Custom Quote Required',
  },
  {
    id: 'advanced-dashboard',
    name: 'Executive Analytics Dashboard',
    description: 'Interactive business charts, revenue metrics, and downloadable Excel/PDF reports',
    isCustomQuote: true,
    indicativeNote: 'Custom Quote Required',
  },
  {
    id: 'auth-system',
    name: 'Multi-Role User Authentication',
    description: 'Secure OTP / password login with granular staff access permissions',
    isCustomQuote: true,
    indicativeNote: 'Custom Quote Required',
  },
  {
    id: 'notifications',
    name: 'Automated WhatsApp & SMS Alerts',
    description: 'Instant notification triggers on customer booking or order updates',
    isCustomQuote: true,
    indicativeNote: 'Custom Quote Required',
  },
];

export const additionalPanelsList = [
  { id: 'staff-panel', name: 'Staff Management Panel', startingPrice: 10000 },
  { id: 'manager-panel', name: 'Store Manager Panel', startingPrice: 10000 },
  { id: 'vendor-panel', name: 'Vendor / Supplier Portal', startingPrice: 10000 },
  { id: 'delivery-panel', name: 'Delivery & Dispatch Panel', startingPrice: 10000 },
];

