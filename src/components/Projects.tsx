import React, { useState } from 'react';
import {
  FolderGit2,
  Sparkles,
  Database,
  Globe,
  Terminal,
  GraduationCap,
  Server,
  ArrowRight,
  Star,
} from 'lucide-react';
import { projectsData } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailsModal } from './ProjectDetailsModal';
import { Project, ProjectCategory } from '../types';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: { name: ProjectCategory; icon: any; count: number; color: string }[] = [
    {
      name: 'All',
      icon: FolderGit2,
      count: projectsData.length,
      color: '#2563EB',
    },
    {
      name: 'Back-End',
      icon: Server,
      count: projectsData.filter(p => p.category === 'Back-End' || p.secondaryCategories?.includes('Back-End')).length,
      color: '#059669',
    },
    {
      name: 'AI',
      icon: Sparkles,
      count: projectsData.filter(p => p.category === 'AI' || p.secondaryCategories?.includes('AI')).length,
      color: '#7C3AED',
    },
    {
      name: 'Data Engineering',
      icon: Database,
      count: projectsData.filter(p => p.category === 'Data Engineering' || p.secondaryCategories?.includes('Data Engineering')).length,
      color: '#1D4ED8',
    },
    {
      name: 'Web Development',
      icon: Globe,
      count: projectsData.filter(p => p.category === 'Web Development' || p.secondaryCategories?.includes('Web Development')).length,
      color: '#0891B2',
    },
    {
      name: 'Automation',
      icon: Terminal,
      count: projectsData.filter(p => p.category === 'Automation' || p.secondaryCategories?.includes('Automation')).length,
      color: '#D97706',
    },
    {
      name: 'Education',
      icon: GraduationCap,
      count: projectsData.filter(p => p.category === 'Education' || p.secondaryCategories?.includes('Education')).length,
      color: '#DC2626',
    },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'All') return true;
    return project.category === activeCategory || project.secondaryCategories?.includes(activeCategory);
  });

  const featuredProjects = filteredProjects.filter(p => p.featured);
  const otherProjects = filteredProjects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">

      {/* Background decoration */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-120px',
          right: '-120px',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-80px',
          left: '-80px',
          width: '360px',
          height: '360px',
          background: 'radial-gradient(circle, rgba(5,150,105,0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* ── Section Header ── */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-[#2563EB] bg-[#EEF7FF] border border-[#DCEEFF] mb-4">
            <FolderGit2 className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Showcase &amp; Work</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2A5F] tracking-tight leading-tight">
                Selected Practical Projects
              </h2>
              <p className="mt-2 text-sm text-slate-500 max-w-2xl">
                Real systems — from production-grade back-end APIs to university platforms, data pipelines, and immersive front-end experiences. Each built with verified source repositories.
              </p>
            </div>

            {/* Stats pills */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#DCEEFF] shadow-xs">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span className="text-xs font-bold text-[#0F2A5F]">{projectsData.filter(p => p.featured).length} Featured</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#DCEEFF] shadow-xs">
                <FolderGit2 className="w-3.5 h-3.5 text-[#2563EB]" />
                <span className="text-xs font-bold text-[#0F2A5F]">{projectsData.length} Total</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Category Filter Pills ── */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                id={`filter-btn-${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveCategory(cat.name)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? 'text-white shadow-md scale-[1.03]'
                    : 'bg-white text-[#0F2A5F] hover:scale-[1.02] border-[#DCEEFF] hover:border-blue-200 hover:bg-[#EEF7FF]'
                }`}
                style={
                  isActive
                    ? {
                        background: `linear-gradient(135deg, ${cat.color}, ${cat.color}cc)`,
                        borderColor: cat.color,
                        boxShadow: `0 4px 14px ${cat.color}33`,
                      }
                    : {}
                }
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : ''}`} style={!isActive ? { color: cat.color } : {}} />
                <span>{cat.name}</span>
                <span
                  className="text-[9px] px-1.5 py-0.5 rounded-full font-bold"
                  style={
                    isActive
                      ? { background: 'rgba(255,255,255,0.25)', color: 'white' }
                      : { background: '#EEF7FF', color: cat.color }
                  }
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Featured Projects ── */}
        {featuredProjects.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Featured</span>
              <div className="flex-1 h-px bg-gradient-to-r from-amber-200/60 to-transparent" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenDetails={(p) => setSelectedProject(p)}
                  featured
                />
              ))}
            </div>
          </div>
        )}

        {/* ── Other Projects ── */}
        {otherProjects.length > 0 && (
          <div>
            {featuredProjects.length > 0 && (
              <div className="flex items-center gap-2 mb-4">
                <FolderGit2 className="w-4 h-4 text-slate-400" />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">More Projects</span>
                <div className="flex-1 h-px bg-gradient-to-r from-slate-200/80 to-transparent" />
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenDetails={(p) => setSelectedProject(p)}
                />
              ))}
            </div>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center bg-white rounded-2xl border border-[#DCEEFF]">
            <FolderGit2 className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <p className="text-sm font-semibold text-slate-400">No projects in this category yet.</p>
            <p className="text-xs text-slate-300 mt-1">Check back soon — more coming!</p>
          </div>
        )}

        {/* ── GitHub CTA ── */}
        <div className="mt-10 text-center">
          <a
            href="https://github.com/ahmedbadawix77x-gif"
            target="_blank"
            rel="noopener noreferrer"
            id="view-all-github-btn"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-[#2563EB] border border-[#DCEEFF] bg-white hover:bg-[#EEF7FF] hover:shadow-md transition-all duration-200 hover:scale-[1.02]"
          >
            <span>View All on GitHub</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
