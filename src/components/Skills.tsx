import React from 'react';
import { 
  Code2, 
  Database, 
  BrainCircuit, 
  Globe, 
  Terminal, 
  Network, 
  Sparkles, 
  CheckCircle2, 
  Zap, 
  Layers,
  ArrowRight
} from 'lucide-react';
import { skillGroups, professionalSkills } from '../data/skills';

export const Skills: React.FC = () => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'programming':
        return Code2;
      case 'data-engineering':
        return Database;
      case 'ai-problem-solving':
        return BrainCircuit;
      case 'web-development':
        return Globe;
      case 'systems-troubleshooting':
        return Terminal;
      case 'networking':
        return Network;
      default:
        return Layers;
    }
  };

  return (
    <section id="skills" className="py-20 bg-white border-y border-blue-100/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-blue-700 bg-blue-100/70 border border-blue-200 mb-3">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>Capabilities & Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Technical Skills Matrix
          </h2>
          <p className="mt-2 text-base text-slate-600">
            A structured breakdown of core engineering foundations, data pipelines, AI problem-solving workflows, and system environments.
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillGroups.map((group) => {
            const Icon = getCategoryIcon(group.id);
            return (
              <div
                key={group.id}
                id={`skill-card-${group.id}`}
                className="p-6 rounded-2xl bg-[#F8FBFF] border border-blue-100/90 hover:border-blue-300 hover:bg-white hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-100/80 text-blue-700 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200/60">
                      {group.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {group.category}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 mb-4 leading-relaxed">
                    {group.description}
                  </p>

                  {/* Skills List */}
                  <div className="space-y-2.5">
                    {group.skills.map((skill, idx) => (
                      <div 
                        key={idx}
                        className={`p-2 rounded-lg text-xs transition-colors ${
                          skill.highlight 
                            ? 'bg-blue-100/60 border border-blue-200/80 font-semibold text-blue-950' 
                            : 'bg-white border border-slate-200/80 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold">{skill.name}</span>
                          {skill.highlight && (
                            <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded-sm bg-blue-600 text-white">
                              Core
                            </span>
                          )}
                        </div>
                        {skill.focus && (
                          <div className="text-[11px] text-slate-500 mt-0.5 leading-tight font-normal">
                            {skill.focus}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* AI & Problem-Solving Methodology Spotlight */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white shadow-xl shadow-blue-950/15 mb-16 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-800">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Methodology Spotlight</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                AI & Problem-Solving Multiplier
              </h3>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                I actively use modern AI tools to amplify engineering productivity: accelerating technical research, writing automation scripts, dissecting complicated error logs, and converting novel ideas into functional solutions.
              </p>
              <div className="p-4 rounded-xl bg-blue-900/60 border border-blue-700/60 text-xs font-medium text-cyan-200">
                "AI is a productivity and problem-solving tool, not a replacement for technical thinking."
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
              {[
                { title: "Building Projects", desc: "Fast prototype-to-code execution" },
                { title: "Rapid Onboarding", desc: "Mastering new frameworks in days" },
                { title: "Smart Debugging", desc: "Root cause log & trace analysis" },
                { title: "Script Authoring", desc: "PowerShell & Python automation" },
                { title: "Error Diagnostics", desc: "System crash & exception repair" },
                { title: "Workflow Boost", desc: "Eliminating repetitive dev tasks" }
              ].map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
                  <div className="font-bold text-white mb-1">{item.title}</div>
                  <div className="text-[10px] text-slate-400">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Professional & Behavioral Skills */}
        <div>
          <div className="max-w-2xl mb-8">
            <h3 className="text-2xl font-extrabold text-slate-900">
              Professional & Analytical Strengths
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Key cognitive, interpersonal, and leadership abilities that drive reliable engineering outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {professionalSkills.map((skill, idx) => (
              <div 
                key={idx}
                className={`p-4 rounded-xl border transition-all ${
                  skill.highlight
                    ? 'bg-blue-50/90 border-blue-300 shadow-sm shadow-blue-500/5'
                    : 'bg-[#F8FBFF] border-slate-200/80 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-sm font-bold ${skill.highlight ? 'text-blue-900' : 'text-slate-900'}`}>
                    {skill.name}
                  </span>
                  {skill.highlight && (
                    <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-full bg-blue-600 text-white">
                      Top Strength
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
