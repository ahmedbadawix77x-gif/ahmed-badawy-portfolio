import React from 'react';
import { 
  Github, 
  ExternalLink, 
  Info,
  Star
} from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails, featured }) => {
  const getStatusBadgeClass = (status: string) => {
    if (status.includes('Completed')) {
      return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    }
    if (status.includes('In Development')) {
      return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    }
    if (status.includes('In Progress')) {
      return 'bg-indigo-50 text-indigo-700 border-indigo-200';
    }
    if (status.includes('Coming Soon')) {
      return 'bg-amber-50 text-amber-700 border-amber-200';
    }
    return 'bg-cyan-50 text-cyan-700 border-cyan-200';
  };

  // Extract accent color for featured glow
  const accentColor = project.imageAccent?.match(/#[0-9a-fA-F]{6}/)?.[0] ?? '#2563EB';

  return (
    <div
      id={`project-card-${project.id}`}
      className="rounded-2xl bg-white flex flex-col justify-between overflow-hidden group transition-all duration-200 hover:-translate-y-0.5"
      style={featured ? {
        border: `1.5px solid ${accentColor}44`,
        boxShadow: `0 4px 24px ${accentColor}18, 0 1px 4px ${accentColor}10`,
      } : {
        border: '1px solid #DCEEFF',
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      }}
    >
      {/* Card Header Top Color Accent */}
      <div
        className="w-full"
        style={{
          height: featured ? '3px' : '2px',
          background: project.imageAccent || 'linear-gradient(90deg, #2563EB, #60A5FA)',
        }}
      />

      <div className="p-4 sm:p-5 space-y-3 flex-1 flex flex-col justify-between">
        <div className="space-y-2.5">
          
          {/* Tags bar */}
          <div className="flex flex-wrap items-center justify-between gap-1.5">
            <div className="flex items-center gap-1.5">
              <span
                className="text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full border"
                style={{ background: `${accentColor}15`, color: accentColor, borderColor: `${accentColor}40` }}
              >
                {project.category}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              {featured && (
                <span className="inline-flex items-center gap-0.5 text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-amber-50 text-amber-600 border border-amber-200">
                  <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                  Featured
                </span>
              )}
              <span className={`text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-full border ${getStatusBadgeClass(project.status)}`}>
                {project.status}
              </span>
            </div>
          </div>

          {/* Project Title & Subtitle */}
          <div>
            <h3 
              onClick={() => onOpenDetails(project)}
              className="text-base sm:text-lg font-bold text-[#0F2A5F] group-hover:text-[#2563EB] transition-colors cursor-pointer"
            >
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-[11px] font-semibold text-[#2563EB] mt-0.5">
                {project.subtitle}
              </p>
            )}
          </div>

          {/* Description */}
          <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Technologies Chips */}
          <div className="pt-1 flex flex-wrap gap-1">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span 
                key={idx}
                className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#F8FBFF] text-slate-600 border border-[#DCEEFF]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-[#EEF7FF] text-[#2563EB] border border-[#DCEEFF]">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

        </div>

        {/* Action Controls */}
        <div className="pt-3 border-t border-[#EEF7FF] flex items-center justify-between mt-3">
          <button
            onClick={() => onOpenDetails(project)}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#2563EB] hover:text-[#1D4ED8]"
          >
            <Info className="w-3.5 h-3.5" />
            <span>Architecture & Specs</span>
          </button>

          <div className="flex items-center gap-1.5">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-slate-500 hover:text-[#2563EB] hover:bg-[#EEF7FF] transition-colors"
                aria-label={`View ${project.title} on GitHub`}
                title="GitHub Repository"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            )}
            {project.demo && project.demo !== '#' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-slate-500 hover:text-[#2563EB] hover:bg-[#EEF7FF] transition-colors"
                aria-label={`View live demo for ${project.title}`}
                title="Live Demo"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

