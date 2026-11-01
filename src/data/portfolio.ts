import type { PortfolioProject } from '../types';

export const portfolioData: PortfolioProject[] = [
  {
    id: 'tanisha-jewellers',
    title: 'Swarna Mahal Fine Jewellers',
    slug: 'swarna-mahal-jewellers',
    industry: 'Fine Gold & Diamond Jewellery',
    category: 'Retail',
    description:
      'A luxury, fast-loading digital catalog showcasing bridal jewellery, daily hallmark rates, and direct WhatsApp consultations for a heritage family jewellery brand.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'WhatsApp Business API', 'Vite'],
    features: [
      'Interactive Bridal & Daily Wear collection filters',
      'Live Gold & Silver rate ticker with manual showroom override',
      'One-click WhatsApp inquiry with product model pre-filled',
      'Showroom GPS navigation and VIP consultation booking',
    ],
    caseStudy: {
      overview:
        'Swarna Mahal operated a renowned offline showroom for over two decades but lost customers to online competitors who showcased modern catalogues. We created an elegant digital presence that mirrors their showroom splendour.',
      clientProblem:
        'Potential brides and festive buyers were calling showroom staff to request photos individually on WhatsApp, creating delays and losing sales to organized retail chains.',
      strategy:
        'Build a mobile-first, high-trust digital catalogue categorized by metal purity, weight, and occasion, empowering customers to pre-select items before visiting the showroom.',
      designApproach:
        'Minimalist, luxurious royal aesthetics with deep charcoal backgrounds, gold metallic accents, crisp photography zoom, and instant WhatsApp inquiry triggers.',
      development:
        'Engineered with ultra-fast static rendering to ensure pages load in under 1.2 seconds even on modest 4G connections common in suburban market zones.',
      qualitativeOutcomes: [
        'Staff time previously spent repeatedly sending individual pictures on phone was significantly freed up.',
        'Customers entered the showroom already knowing their exact preferred designs from the online catalog.',
        'Enhanced showroom credibility among modern millennial couples planning weddings.',
      ],
      deliverables: [
        '8-Page high-speed responsive website',
        'Bridal lookbook with high-definition image optimization',
        'Google Business Profile integration with direct directions',
      ],
    },
  },
  {
    id: 'saffron-bistro',
    title: 'Zaika Royal Dining & Cafe',
    slug: 'zaika-royal-dining',
    industry: 'Multi-Cuisine Fine Dining & Cafe',
    category: 'Restaurant',
    description:
      'A vibrant digital culinary menu with instant table booking, private banquet reservations, and direct parcel ordering without hefty commission fees.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'REST API'],
    features: [
      'Contactless QR code menu optimized for mobile screens',
      'Table reservation and birthday/anniversary booking modal',
      'Direct WhatsApp home delivery orders without aggregator commission',
      'Chef special dish showcases and hygiene certifications',
    ],
    caseStudy: {
      overview:
        'Zaika Royal wanted an independent digital identity to reduce dependence on food aggregators charging steep 28% commissions on takeout orders.',
      clientProblem:
        'Dine-in guests struggled with faded paper menus, and regular neighborhood customers had no easy way to place large parcel orders directly.',
      strategy:
        'Implement an interactive digital menu accessible via QR codes at tables and shared as a web link across the restaurant’s social media and Google listing.',
      designApproach:
        'Appetizing typography, warm amber tones, mouth-watering dish cards with dietary tags (Veg, Non-Veg, Jain), and visible price tags.',
      development:
        'Created with instant-filter category navigation (Starters, Tandoor, Main Course, Desserts) that scrolls smoothly without page reloads.',
      qualitativeOutcomes: [
        'Regular loyal patrons adopted direct WhatsApp ordering for weekend family dinners.',
        'Table turn time improved as patrons could browse the menu on mobile while waiting to be seated.',
        'Banquet inquiry handling became organized with automated form alerts.',
      ],
      deliverables: [
        'Fast-loading interactive digital menu',
        'Table reservation system',
        'Print-ready branded QR code table standee designs',
      ],
    },
  },
  {
    id: 'careplus-polyclinic',
    title: 'Dr. Sharma Multi-Specialty Clinic',
    slug: 'dr-sharma-clinic',
    industry: 'Healthcare & Dental Services',
    category: 'Healthcare',
    description:
      'A clean, reassuring clinic portal providing patient guidance, verified doctor credentials, treatment fees transparency, and appointment requests.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Accessible Forms', 'SEO Engine'],
    features: [
      'Comprehensive doctor profiles with medical registration numbers',
      'Departmental breakdown: Dental, Ortho, Pediatrics, General Medicine',
      'Online appointment request with morning/evening slot preferences',
      'Emergency telephone dialer and clinic map directions',
    ],
    caseStudy: {
      overview:
        'A reputable clinic in a busy urban neighborhood required an authoritative online presence to answer frequent queries about timings, fees, and visiting specialists.',
      clientProblem:
        'Reception staff was overwhelmed by repetitive phone calls asking for doctor timings, specialist days, and consultation fees.',
      strategy:
        'Design a clean, reassuring medical website displaying doctor consultation schedules, treatment scopes, FAQs, and a hassle-free appointment request form.',
      designApproach:
        'Calming clinical teal and slate color palette, legible typography compliant with WCAG accessibility, and high contrast for senior patients.',
      development:
        'Built with accessible form validation, instant phone dialing buttons for emergencies, and structured schema markup for local medical search.',
      qualitativeOutcomes: [
        'Substantial reduction in routine phone queries regarding clinic timings and doctor availability.',
        'New residents in the neighborhood frequently cite discovering the clinic via Google search.',
        'Patients arrive better prepared with required past medical documentation as outlined on the website.',
      ],
      deliverables: [
        'Medical credentials and service directory website',
        'Automated appointment request routing',
        'Local SEO schema optimization for healthcare searches',
      ],
    },
  },
  {
    id: 'vedanta-academy',
    title: 'Vedanta Learning & Coaching Academy',
    slug: 'vedanta-learning-academy',
    industry: 'Competitive Exam & School Coaching',
    category: 'Education',
    description:
      'An education portal engineered to convert prospective student enquiries into demo admissions with downloadable syllabi and faculty showcases.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Admin Panel', 'Database'],
    features: [
      'Course catalog for Foundation, JEE, NEET, and Commerce batches',
      'Ranker showcase wall and verified student testimonials',
      'Book Free Demo Class lead capture engine',
      'Admin portal to manage admission leads and batch timings',
    ],
    caseStudy: {
      overview:
        'Vedanta Academy needed to scale admissions beyond word-of-mouth by demonstrating academic rigor, experienced faculty, and consistent student results.',
      clientProblem:
        'Parents inquiring about admissions found it difficult to compare batch schedules and verify past year results before commuting to the institute.',
      strategy:
        'Position the institute as an elite academic center with clear course breakdowns, faculty credentials, downloadable sample material, and an inviting demo class invitation.',
      designApproach:
        'Inspiring navy and warm amber academic theme, bold visual cards for course duration, and prominent parent helpline CTAs.',
      development:
        'Full dynamic application paired with a streamlined Admin Panel allowing institute administrators to view new demo registrations and update batch dates.',
      qualitativeOutcomes: [
        'Higher quality inquiries from parents who had already reviewed fee structures and syllabus outlines.',
        'Seamless tracking of leads by reception staff through the central management panel.',
        'Improved student enrollment during competitive exam cycle launches.',
      ],
      deliverables: [
        'Dynamic website with Course management module',
        'Institute Admin Panel for admission lead exports',
        'Demo registration pipeline with automated notifications',
      ],
    },
  },
  {
    id: 'glamour-studio',
    title: 'Aura Luxury Salon & Bridal Studio',
    slug: 'aura-luxury-salon',
    industry: 'Beauty, Hair Styling & Bridal Studio',
    category: 'Services',
    description:
      'A stylish salon website featuring a complete service rate card, bridal makeover portfolio, stylist introductions, and WhatsApp consultation booking.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'WhatsApp Webhook'],
    features: [
      'Transparent service menu with hair, skin, and nail treatment rates',
      'High-resolution bridal makeover portfolio gallery',
      'Stylist portfolio and salon hygiene protocols',
      'Instant WhatsApp booking for customized bridal packages',
    ],
    caseStudy: {
      overview:
        'A boutique beauty salon aimed to capture high-margin bridal and pre-wedding makeup packages in their city.',
      clientProblem:
        'Prospective brides were hesitant to book without seeing authentic, high-quality photos of real makeovers without social media compression artifacts.',
      strategy:
        'Build an editorial-grade portfolio showcasing bridal looks, complete transparent package details, client praises, and a direct bridal consultation chat link.',
      designApproach:
        'Sophisticated rose-gold accents, editorial typography, generous whitespace, and immersive image carousels.',
      development:
        'Optimized for fast mobile loading so clients exploring during Instagram breaks experience instant page transitions and effortless booking.',
      qualitativeOutcomes: [
        'Marked increase in bridal package inquiries during wedding season.',
        'Clients arrived for trials with exact reference photos from the salon’s own website.',
        'Positioned the salon above cheaper neighborhood competitors.',
      ],
      deliverables: [
        'Bridal portfolio and rate-card website',
        'One-click WhatsApp bridal consultation flow',
        'Mobile-friendly treatment price directory',
      ],
    },
  },
  {
    id: 'urban-living-interiors',
    title: 'Urban Spaces Interior Studio',
    slug: 'urban-spaces-interiors',
    industry: 'Interior Design & Modular Kitchens',
    category: 'Services',
    description:
      'A portfolio for an interior design practice featuring residential transformations, 3D render comparisons, and interior budget calculators.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Admin Panel', 'PostgreSQL Ready'],
    features: [
      'Filterable project gallery: 2BHK, 3BHK, Villa, Modular Kitchen',
      'Material warranty specifications and design process explanation',
      'Site consultation booking and floor plan upload module',
      'Admin dashboard to upload new completed projects and photos',
    ],
    caseStudy: {
      overview:
        'Urban Spaces needed a website to showcase their completed residential projects to new homeowners receiving keys to newly constructed apartments.',
      clientProblem:
        'Homeowners in new housing societies required proof of past completed flats and material warranties before committing to multi-lakh interior contracts.',
      strategy:
        'Create a project gallery structured by apartment configurations with detailed breakdown of materials used, execution timeline, and design challenges solved.',
      designApproach:
        'Architectural, structured design with dark accents, crisp architectural photography, and clear step-by-step design roadmap.',
      development:
        'Implemented with dynamic project pagination, image preloading, and a multi-step design estimate request form.',
      qualitativeOutcomes: [
        'Significant boost in homeowner trust during initial pitch meetings.',
        'Designers can now instantly share a clean project URL instead of heavy PDF files over email.',
        'Better qualification of leads based on budget expectations entered into the online consultation form.',
      ],
      deliverables: [
        'Interior showcase website with floorplan consultation forms',
        'Project administration portal',
        'Full responsive design for iPad/tablet presentation in client meetings',
      ],
    },
  },
];

