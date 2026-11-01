export const businessConfig = {
  name: 'Rozsewa Digital',
  legalName: 'Rozsewa Digital Solutions India',
  tagline: 'Affordable Websites. Professional Digital Presence. Scalable Technology.',
  headline: 'Your Business Deserves a Better Digital Presence.',
  subheadline: 'We build affordable, modern and scalable websites and digital solutions for local businesses across India.',
  
  // Pricing Constants (as strictly required)
  pricing: {
    staticStartingPrice: 7000,
    staticIncludedPages: 8,
    staticAdditionalPerPage: 600,
    dynamicStartingPrice: 30000,
    additionalPanelStartingPrice: 10000,
    mobileAppStartingPrice: 15000,
    currencySymbol: '₹',
    currencyCode: 'INR',
  },

  // Contact Information
  contact: {
    phone: '+91 98765 43210',
    phoneRaw: '919876543210',
    whatsapp: '+91 98765 43210',
    whatsappRaw: '919876543210',
    email: 'contact@rozsewa.online',
    supportEmail: 'support@rozsewa.online',
    address: {
      line1: 'Digital Innovation Hub, Outer Ring Road',
      line2: 'Sector 62, Technology Zone',
      city: 'Delhi NCR',
      state: 'New Delhi',
      pincode: '110001',
      country: 'India',
      displayAddress: 'Delhi NCR & Pan-India Remote Delivery',
    },
    hours: {
      days: 'Monday – Saturday',
      time: '9:30 AM – 7:30 PM IST',
      emergency: '24/7 WhatsApp Enquiries Welcome',
    },
    serviceAreas: [
      'Delhi NCR',
      'Mumbai',
      'Bengaluru',
      'Hyderabad',
      'Ahmedabad',
      'Pune',
      'Kolkata',
      'Jaipur',
      'Surat',
      'Lucknow',
      'Chandigarh',
      'Pan-India Service',
    ],
  },

  // Social Links
  socials: {
    whatsapp: 'https://wa.me/919876543210',
    linkedin: 'https://linkedin.com/company/rozsewa-digital',
    instagram: 'https://instagram.com/rozsewa.online',
    facebook: 'https://facebook.com/rozsewa.online',
    twitter: 'https://twitter.com/rozsewa_online',
  },

  // Core Value Propositions
  badges: {
    pricingBadge: 'Websites Starting From ₹7,000',
    maintenanceBadge: '1-Year Maintenance on Dynamic Package',
    supportBadge: 'Dedicated Indian Support & Fast Turnaround',
  },
} as const;

export type BusinessConfig = typeof businessConfig;

