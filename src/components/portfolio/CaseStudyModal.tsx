import React from 'react';
import {
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Palette,
  Code2,
  MessageCircle,
} from 'lucide-react';
import type { PortfolioProject } from '../../types';
import { Modal } from '../common/Modal';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export interface CaseStudyModalProps {
  project: PortfolioProject | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  if (!project || !project.caseStudy) return null;

  const { caseStudy } = project;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`${project.title} — Detailed Case Study`}
      maxWidth="4xl"
    >
      <div className="space-y-8">
        {/* Project Header Banner */}
        <div className="relative rounded-2xl overflow-hidden aspect-[21/9] bg-slate-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="px-2.5 py-1 rounded bg-indigo-600 text-[10px] font-bold uppercase tracking-wider">
              {project.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-black mt-2">{project.title}</h2>
            <p className="text-xs text-slate-300">{project.industry}</p>
          </div>
        </div>

        {/* Overview Statement */}
        <div className="p-5 rounded-2xl bg-indigo-50/60 border border-indigo-100">
          <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-900 mb-1">
            Project Overview
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {caseStudy.overview}
          </p>
        </div>

        {/* 5-Step Narrative: Problem -> Strategy -> Design -> Development -> Launch */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
            Transformation Journey
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Step 1: Client Problem */}
            <div className="p-4 rounded-xl bg-rose-50/50 border border-rose-100">
              <div className="flex items-center gap-2 mb-2 text-rose-700 font-bold text-xs uppercase">
                <AlertTriangle className="w-4 h-4" />
                <span>01. The Core Problem</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {caseStudy.clientProblem}
              </p>
            </div>

            {/* Step 2: Strategic Plan */}
            <div className="p-4 rounded-xl bg-sky-50/50 border border-sky-100">
              <div className="flex items-center gap-2 mb-2 text-sky-700 font-bold text-xs uppercase">
                <Lightbulb className="w-4 h-4" />
                <span>02. Strategic Approach</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {caseStudy.strategy}
              </p>
            </div>

            {/* Step 3: Design Process */}
            <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-100">
              <div className="flex items-center gap-2 mb-2 text-amber-700 font-bold text-xs uppercase">
                <Palette className="w-4 h-4" />
                <span>03. UI/UX Design Direction</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {caseStudy.designApproach}
              </p>
            </div>

            {/* Step 4: Development Engineering */}
            <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-100">
              <div className="flex items-center gap-2 mb-2 text-emerald-700 font-bold text-xs uppercase">
                <Code2 className="w-4 h-4" />
                <span>04. Clean Development</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {caseStudy.development}
              </p>
            </div>
          </div>
        </div>

        {/* Qualitative Outcomes (Compliant with business rule: no fabricated stats) */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
            Qualitative Business Outcomes
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {caseStudy.qualitativeOutcomes.map((outcome, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-start gap-2.5"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{outcome}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables Delivered */}
        <div className="p-4 rounded-xl bg-slate-100/70 text-xs flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="font-bold text-slate-800 block">Deliverables Delivered:</span>
            <span className="text-slate-600">
              {caseStudy.deliverables.join(' • ')}
            </span>
          </div>

          <a
            href={getWhatsAppUrl({
              customMessage: `Hello, I reviewed your case study for "${project.title}". I would like a similar digital solution for my business.`,
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25D366] text-white font-bold text-xs shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Build Similar Website</span>
          </a>
        </div>
      </div>
    </Modal>
  );
};
