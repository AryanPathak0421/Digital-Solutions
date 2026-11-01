import React from 'react';
import { ExternalLink, BookOpen, CheckCircle2 } from 'lucide-react';
import type { PortfolioProject } from '../../types';

export interface PortfolioCardProps {
  project: PortfolioProject;
  onOpenCaseStudy: (project: PortfolioProject) => void;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  project,
  onOpenCaseStudy,
}) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Project Mockup / Image Frame */}
        <div className="relative aspect-video overflow-hidden bg-slate-900">
          <img
            src={project.image}
            alt={`${project.title} Preview Mockup`}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

          {/* Category Pill Over Image */}
          <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-white text-[11px] font-bold border border-white/10">
              {project.category}
            </span>
          </div>

          <div className="absolute bottom-3.5 left-3.5 right-3.5">
            <span className="text-[11px] font-bold text-indigo-300 uppercase tracking-wider block">
              {project.industry}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-3 leading-relaxed">
            {project.description}
          </p>

          {/* Key Inclusions Preview */}
          <div className="mt-4 space-y-1.5">
            {project.features.slice(0, 2).map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>

          {/* Technology Badges */}
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Actions */}
      <div className="p-6 pt-0 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => onOpenCaseStudy(project)}
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold transition-colors cursor-pointer"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Read Case Study</span>
        </button>

        <button
          type="button"
          onClick={() => onOpenCaseStudy(project)}
          aria-label="View Project Details"
          className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
        >
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
