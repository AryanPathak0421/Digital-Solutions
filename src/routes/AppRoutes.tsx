import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { LoadingState } from '../components/common/LoadingState';

// Lazy loading route components for optimal Lighthouse performance & bundle splitting
const HomePage = lazy(() =>
  import('../pages/HomePage').then((m) => ({ default: m.HomePage }))
);
const ServicesPage = lazy(() =>
  import('../pages/ServicesPage').then((m) => ({ default: m.ServicesPage }))
);
const PricingPage = lazy(() =>
  import('../pages/PricingPage').then((m) => ({ default: m.PricingPage }))
);
const PortfolioPage = lazy(() =>
  import('../pages/PortfolioPage').then((m) => ({ default: m.PortfolioPage }))
);
const ProcessPage = lazy(() =>
  import('../pages/ProcessPage').then((m) => ({ default: m.ProcessPage }))
);
const AboutPage = lazy(() =>
  import('../pages/AboutPage').then((m) => ({ default: m.AboutPage }))
);
const ContactPage = lazy(() =>
  import('../pages/ContactPage').then((m) => ({ default: m.ContactPage }))
);
const IndustryDetailPage = lazy(() =>
  import('../pages/IndustryDetailPage').then((m) => ({
    default: m.IndustryDetailPage,
  }))
);
const TermsPage = lazy(() =>
  import('../pages/TermsPage').then((m) => ({ default: m.TermsPage }))
);
const PrivacyPage = lazy(() =>
  import('../pages/PrivacyPage').then((m) => ({ default: m.PrivacyPage }))
);
const RefundPolicyPage = lazy(() =>
  import('../pages/RefundPolicyPage').then((m) => ({
    default: m.RefundPolicyPage,
  }))
);
const NotFoundPage = lazy(() =>
  import('../pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage }))
);

// Automatic scroll restoration on route transition
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior,
    });
  }, [pathname]);

  return null;
}

export const AppRoutes: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<LoadingState message="Loading experience..." className="min-h-screen" />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="pricing" element={<PricingPage />} />
            <Route path="portfolio" element={<PortfolioPage />} />
            <Route path="process" element={<ProcessPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="industries/:industry" element={<IndustryDetailPage />} />
            <Route path="terms" element={<TermsPage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="refund-policy" element={<RefundPolicyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

