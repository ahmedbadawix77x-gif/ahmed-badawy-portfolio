import React from 'react';
import { 
  Sparkles, 
  Video, 
  Linkedin, 
  Youtube, 
  Share2, 
  Compass, 
  Layers,
  ArrowRight,
  PenTool,
  BarChart3,
  Users
} from 'lucide-react';

export const ContentAndBrand: React.FC = () => {
  return (
    <section className="py-20 bg-[#F8FBFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Beyond Code Card */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white shadow-xl shadow-blue-950/10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
            
            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-700/60">
                <Compass className="w-3.5 h-3.5 text-cyan-400" />
                <span>Engineering Philosophy</span>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white">
                Beyond Pipelines
              </h2>
              <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-xl">
                "I care not only about writing clean data transformation code, but about understanding the business question first, validating data contracts, tracing lineage end-to-end, and delivering reliable pipelines that stakeholders can actually trust."
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-blue-700/50 flex flex-wrap items-center gap-4 text-xs font-semibold text-cyan-200 relative z-10">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                Data-Centric Mindset
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                Contract-First Validation
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                Continuous Learning
              </span>
            </div>
          </div>

          {/* Data Storytelling & Communication Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-blue-100/90 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-blue-700 bg-blue-100/70 border border-blue-200">
                <BarChart3 className="w-3.5 h-3.5 text-blue-600" />
                <span>Impact Multipliers</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Data Storytelling &amp; Technical Communication
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Translating raw pipeline outputs and analytical findings into clear decisions. Turning dashboards, metric definitions, and technical designs into language cross-functional teams can act on.
              </p>

              <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-100">
                  <div className="font-bold text-slate-900">Insight Storytelling</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">EDA narratives &amp; dashboards</div>
                </div>
                <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-100">
                  <div className="font-bold text-slate-900">Technical Writing</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Design docs &amp; data contracts</div>
                </div>
                <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-100">
                  <div className="font-bold text-slate-900">KPI &amp; Metric Design</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Business-aligned definitions</div>
                </div>
                <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-100">
                  <div className="font-bold text-slate-900">Stakeholder Sync</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Cross-team data alignment</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="font-medium">Platforms: LinkedIn • GitHub • Portfolio</span>
              <Share2 className="w-4 h-4 text-blue-600" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
