import React from 'react';
import { 
  Database, 
  Code, 
  Zap, 
  BarChart3, 
  GitBranch, 
  Cloud, 
  Cpu, 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  Compass,
  ArrowRight
} from 'lucide-react';
import { dataEngineeringJourney, currentLearningItems } from '../data/journey';

export const Journey: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database':
        return Database;
      case 'Code':
        return Code;
      case 'Zap':
        return Zap;
      case 'BarChart3':
        return BarChart3;
      case 'GitBranch':
        return GitBranch;
      case 'Cloud':
        return Cloud;
      case 'Cpu':
        return Cpu;
      default:
        return Database;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Currently Learning':
        return 'bg-blue-600 text-white font-bold animate-pulse';
      case 'Next Direction':
        return 'bg-slate-100 text-slate-600 border-slate-200';
      default:
        return 'bg-slate-100 text-slate-600';
    }
  };

  return (
    <section id="journey" className="py-20 bg-[#F8FBFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-blue-700 bg-blue-100/70 border border-blue-200 mb-3">
            <Compass className="w-3.5 h-3.5 text-blue-600" />
            <span>Development Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            My Data Engineering Journey
          </h2>
          <p className="mt-2 text-base text-slate-600">
            A clear, deliberate progression from core database modeling to advanced query tuning, automated pipelines, cloud infrastructure, and AI data systems.
          </p>
        </div>

        {/* Step-by-Step Interactive Timeline */}
        <div className="space-y-4 mb-20">
          {dataEngineeringJourney.map((step, idx) => {
            const Icon = getStepIcon(step.icon);
            const isCurrent = step.status === 'Currently Learning';

            return (
              <div
                key={step.id}
                id={`journey-step-${step.stepNumber}`}
                className={`p-6 rounded-2xl border transition-all duration-200 ${
                  isCurrent
                    ? 'bg-white border-blue-400 shadow-lg shadow-blue-500/10 ring-2 ring-blue-500/20'
                    : 'bg-white/80 border-blue-100/80 hover:bg-white hover:border-blue-200'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  
                  <div className="flex items-start gap-4">
                    {/* Step Number Badge */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-base shrink-0 ${
                      isCurrent
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                        : step.status === 'Completed'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-mono font-bold text-slate-400">
                          STAGE 0{step.stepNumber}
                        </span>
                        <h3 className="text-lg font-bold text-slate-900">
                          {step.title}
                        </h3>
                        <span className={`text-[11px] px-2.5 py-0.5 rounded-full ${getStatusBadge(step.status)}`}>
                          {step.status}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-blue-700">
                        {step.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Focus Topic Pills */}
                  <div className="flex flex-wrap md:justify-end gap-1.5 shrink-0 max-w-sm pt-2 md:pt-0">
                    {step.focusTopics.map((topic, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-blue-50/80 text-blue-800 border border-blue-100"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Current Active Learning Section */}
        <div>
          <div className="max-w-2xl mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-blue-700 bg-blue-100/70 border border-blue-200 mb-2">
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              <span>Real-Time Pursuit</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Currently Learning
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Active programs, official initiatives, and learning tracks I am currently advancing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {currentLearningItems.map((item) => (
              <div
                key={item.id}
                id={`learning-card-${item.id}`}
                className="p-6 rounded-2xl bg-white border border-blue-100/90 shadow-sm hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200/60">
                      {item.source}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      {item.status}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 mb-1">
                    {item.title}
                  </h4>

                  {item.timeline && (
                    <div className="text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                      📅 {item.timeline}
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-50 text-slate-600 border border-slate-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
