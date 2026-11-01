import type { ProcessStep } from '../types';

export const processSteps: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Consultation',
    duration: 'Day 1',
    description:
      'We conduct a focused discovery session to understand your business model, target local customers, competitor landscape, and core objectives.',
    deliverables: [
      'Discovery discussion (Phone/WhatsApp/Video)',
      'Understanding your service or product line',
      'Initial recommendation on package (Static vs. Dynamic)',
    ],
    icon: 'MessageSquareText',
  },
  {
    stepNumber: '02',
    title: 'Requirement Analysis',
    duration: 'Day 2',
    description:
      'We document the specific pages, content requirements, feature list, WhatsApp integrations, and design preferences needed for your project.',
    deliverables: [
      'Site architecture map & page structure breakdown',
      'Content and asset gathering checklist (photos, text, logo)',
      'Transparent milestone and timeline confirmation',
    ],
    icon: 'FileCheck',
  },
  {
    stepNumber: '03',
    title: 'UI/UX Design',
    duration: 'Day 3 – 5',
    description:
      'Our designers craft a modern, clean visual layout tailored specifically to your industry—ensuring an intuitive mobile experience and strong brand identity.',
    deliverables: [
      'Modern, conversion-focused layout mockups',
      'Color palette, typography, and visual assets alignment',
      'Client review and feedback iteration before coding begins',
    ],
    icon: 'Palette',
  },
  {
    stepNumber: '04',
    title: 'Development',
    duration: 'Day 6 – 10',
    description:
      'We write clean, high-performance code using modern frameworks (React, TypeScript, Tailwind) to ensure lightning-fast load times and rock-solid stability.',
    deliverables: [
      'High-speed, component-based frontend construction',
      'Backend & database setup (for Dynamic projects)',
      'Admin management dashboard and API integrations',
    ],
    icon: 'Code2',
  },
  {
    stepNumber: '05',
    title: 'Testing & Optimization',
    duration: 'Day 11 – 12',
    description:
      'Rigorous cross-device testing across smartphones, tablets, laptops, and varying network speeds to ensure flawless responsiveness and zero broken links.',
    deliverables: [
      'Mobile responsiveness testing (iOS & Android)',
      'Form submission & WhatsApp link validation',
      'Speed optimization & Google Core Web Vitals checks',
    ],
    icon: 'CheckCircle2',
  },
  {
    stepNumber: '06',
    title: 'Client Review',
    duration: 'Day 13',
    description:
      'We share a private staging preview of the website with you. You test all pages, inspect content, and provide any fine-tuning feedback.',
    deliverables: [
      'Live staging preview link for your review',
      'Interactive walkthrough of admin panel if applicable',
      'Incorporation of finalized client adjustments',
    ],
    icon: 'Eye',
  },
  {
    stepNumber: '07',
    title: 'Deployment & Launch',
    duration: 'Day 14',
    description:
      'We connect your custom domain, install free SSL security certificates, set up Google Search Console indexing, and launch your business website live to the world.',
    deliverables: [
      'Custom domain pointing & DNS verification',
      'Free SSL security encryption activated',
      'Google Search Console and Google Maps link indexing',
    ],
    icon: 'Rocket',
  },
  {
    stepNumber: '08',
    title: 'Maintenance & Support',
    duration: 'Ongoing',
    description:
      'We stand behind our work. Enjoy dedicated support, with 1-Year Comprehensive Maintenance included automatically on our Dynamic Website package.',
    deliverables: [
      '12 Months technical maintenance on Dynamic packages',
      'Technical assistance for bug fixes and security patches',
      'Fast turnaround for future feature upgrades and additions',
    ],
    icon: 'Headphones',
  },
];

