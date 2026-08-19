import React, { useState } from 'react';
import { 
  FolderGit2, 
  Sparkles, 
  Database, 
  Globe, 
  Terminal, 
  GraduationCap, 
  Filter 
} from 'lucide-react';
import { projectsData } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailsModal } from './ProjectDetailsModal';
import { Project, ProjectCategory } from '../types';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: { name: ProjectCategory; icon: any; count: number }[] = [
    { 
      name: 'All', 
      icon: FolderGit2, 
      count: projectsData.length 
    },
    { 
      name: 'AI', 
      icon: Sparkles, 
      count: projectsData.filter(p => p.category === 'AI' || p.secondaryCategories?.includes('AI')).length 
    },
    { 
      name: 'Data Engineering', 
      icon: Database, 
      count: projectsData.filter(p => p.category === 'Data Engineering' || p.secondaryCategories?.includes('Data Engineering')).length 
    },
    { 
      name: 'Web Development', 
      icon: Globe, 
      count: projectsData.filter(p => p.category === 'Web Development' || p.secondaryCategories?.includes('Web Development')).length 
    },
    { 
      name: 'Automation', 
      icon: Terminal, 
      count: projectsData.filter(p => p.category === 'Automation' || p.secondaryCategories?.includes('Automation')).length 
    },
    { 
      name: 'Education', 
      icon: GraduationCap, 
      count: projectsData.filter(p => p.category === 'Education' || p.secondaryCategories?.includes('Education')).length 
    },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'All') return true;
    return project.category === activeCategory || project.secondaryCategories?.includes(activeCategory);
  });

  return (
    <section id="projects" className="py-14 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-[#3B82F6] bg-[#EEF7FF] border border-[#DCEEFF] mb-2">
            <FolderGit2 className="w-3 h-3 text-[#2563EB]" />
            <span>Showcase & Work</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2A5F] tracking-tight">
            Selected Practical Projects
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600">
            Real systems, university platforms, AI assistants, and data pipelines built with verified source repositories.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-6 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                id={`filter-btn-${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveCategory(cat.name)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-[#2563EB] text-white shadow-xs'
                    : 'bg-white text-[#0F2A5F] hover:bg-[#EEF7FF] border border-[#DCEEFF]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#3B82F6]'}`} />
                <span>{cat.name}</span>
                <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-semibold ${
                  isActive ? 'bg-white/20 text-white' : 'bg-[#EEF7FF] text-[#2563EB]'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onOpenDetails={(p) => setSelectedProject(p)} 
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="p-10 text-center bg-white rounded-2xl border border-[#DCEEFF]">
            <p className="text-xs text-slate-500">No projects found in this category.</p>
          </div>
        )}

      </div>

      {/* Project Details Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

