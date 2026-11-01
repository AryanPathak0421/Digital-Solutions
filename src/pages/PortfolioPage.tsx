import React, { useState, useEffect } from 'react';
import { updateSEO } from '../utils/seo';
import { portfolioData } from '../data/portfolio';
import { PortfolioCard } from '../components/portfolio/PortfolioCard';
import { CaseStudyModal } from '../components/portfolio/CaseStudyModal';
import { SectionHeading } from '../components/common/SectionHeading';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { CTASection } from '../components/home/CTASection';
import { useAppLayout } from '../context/LayoutContext';
import type { PortfolioProject } from '../types';

export const PortfolioPage: React.FC = () => {
  const { openConsultationModal } = useAppLayout();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeCaseStudy, setActiveCaseStudy] = useState<PortfolioProject | null>(null);

  useEffect(() => {
    updateSEO({
      title: 'Portfolio & Case Studies — Digital Solutions for Indian Retailers & Clinics',
      description:
        'Browse our portfolio of modern websites, online menus, and clinic portals developed for Indian businesses across retail, healthcare, education, and services.',
      canonicalPath: '/portfolio',
    });
  }, []);

  const categories = [
    'All',
    'Retail',
    'Restaurant',
    'Healthcare',
    'Education',
    'Services',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? portfolioData
      : portfolioData.filter((p) => p.category === selectedCategory);

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Portfolio' }]} className="mb-6" />

        <SectionHeading
          badge="Verified Case Studies"
          title="Digital Experiences Crafted for Local Indian Businesses"
          subtitle="Explore our portfolio of high-performing websites, digital catalogs, and custom portals engineered for local market conversion."
          align="center"
        />

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid (Mapped cleanly from separate portfolio data file) */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {filteredProjects.map((project) => (
              <PortfolioCard
                key={project.id}
                project={project}
                onOpenCaseStudy={(p) => setActiveCaseStudy(p)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 mb-24">
            <p className="text-slate-500 font-medium">
              No projects found in this category.
            </p>
          </div>
        )}

        {/* Case Study Modal */}
        <CaseStudyModal
          project={activeCaseStudy}
          isOpen={Boolean(activeCaseStudy)}
          onClose={() => setActiveCaseStudy(null)}
        />

        {/* Conversion CTA */}
        <CTASection
          title="Want a Similar High-Impact Website for Your Store?"
          subtitle="Let us analyze your industry and build an online presence that attracts more customers."
          onOpenConsultation={() => openConsultationModal()}
        />
      </div>
    </div>
  );
};
