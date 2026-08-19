import React from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  Layers, 
  HelpCircle, 
  Lightbulb, 
  CheckCircle2, 
  AlertTriangle, 
  Compass, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailsModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      id="project-details-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-3xl bg-white rounded-2xl border border-[#DCEEFF] shadow-2xl overflow-hidden my-6 animate-in zoom-in-95 duration-150 relative max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar (High Density Dark) */}
        <div className="p-5 sm:p-6 bg-[#0F2A5F] text-white relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-white/10 text-cyan-200 border border-white/15">
              {project.category}
            </span>
            <span className="px-2.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-white text-[#0F2A5F] shadow-xs">
              {project.status}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
            {project.title}
          </h2>
          {project.subtitle && (
            <p className="text-xs text-blue-200 mt-0.5 font-medium">
              {project.subtitle}
            </p>
          )}

          {/* Quick links inside modal header */}
          <div className="flex items-center gap-2.5 mt-3 pt-3 border-t border-white/15">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/15 hover:bg-white/25 text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            )}
            {project.demo && project.demo !== '#' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#2563EB] hover:bg-[#1D4ED8] text-white transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live System Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 space-y-4 overflow-y-auto text-slate-700 text-xs sm:text-sm leading-relaxed">
          
          {/* Key Highlights Grid */}
          <div className="p-4 rounded-xl bg-[#EEF7FF] border border-[#DCEEFF] space-y-2.5">
            <h4 className="text-[10px] font-bold tracking-wider text-[#0F2A5F] uppercase flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Project Key Highlights</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.details.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-1.5 text-xs font-medium text-slate-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="flex items-center gap-1.5 text-rose-700 font-bold text-[10px] uppercase tracking-wide">
                <HelpCircle className="w-3.5 h-3.5 text-rose-600" />
                <span>The Problem</span>
              </div>
              <p className="text-slate-600 text-xs">
                {project.details.problem}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#F8FBFF] border border-[#DCEEFF] space-y-1.5">
              <div className="flex items-center gap-1.5 text-[#0F2A5F] font-bold text-[10px] uppercase tracking-wide">
                <Lightbulb className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>The Idea & Solution</span>
              </div>
              <p className="text-slate-700 text-xs">
                {project.details.solution}
              </p>
            </div>
          </div>

          {/* Role & Tech Stack */}
          <div className="space-y-2">
            <h4 className="text-[10px] font-bold tracking-wider text-[#0F2A5F] uppercase flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Technologies & Architecture</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-[#F8FBFF] border border-[#DCEEFF] text-[#0F2A5F]"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs">
              <strong className="text-[#0F2A5F]">My Role:</strong> {project.details.role}
            </div>
          </div>

          {/* Challenges & How I Solved Them */}
          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/80 space-y-1">
              <div className="flex items-center gap-1.5 text-amber-900 font-bold text-[10px] uppercase tracking-wide">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                <span>Challenges Encountered</span>
              </div>
              <p className="text-slate-700 text-xs">
                {project.details.challenges}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200/80 space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-900 font-bold text-[10px] uppercase tracking-wide">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>How I Solved Them (Rapid Learning & AI-Assistance)</span>
              </div>
              <p className="text-slate-800 text-xs">
                {project.details.howISolvedThem}
              </p>
            </div>
          </div>

          {/* What I Learned & Future Roadmap */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 border-t border-[#EEF7FF]">
            <div>
              <h5 className="text-[10px] font-bold text-[#0F2A5F] uppercase tracking-wide mb-1">
                What I Learned
              </h5>
              <p className="text-xs text-slate-600">
                {project.details.whatILearned}
              </p>
            </div>
            <div>
              <h5 className="text-[10px] font-bold text-[#2563EB] uppercase tracking-wide mb-1 flex items-center gap-1">
                <Compass className="w-3 h-3 text-[#2563EB]" />
                <span>Future Improvements</span>
              </h5>
              <p className="text-xs text-slate-600">
                {project.details.futureImprovements}
              </p>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-3.5 sm:p-4 bg-[#F8FBFF] border-t border-[#DCEEFF] flex items-center justify-between shrink-0">
          <div className="text-[11px] text-slate-500">
            Status: <span className="font-semibold text-[#0F2A5F]">{project.status}</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl text-xs font-bold text-[#0F2A5F] bg-white hover:bg-slate-50 border border-[#DCEEFF] transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};

