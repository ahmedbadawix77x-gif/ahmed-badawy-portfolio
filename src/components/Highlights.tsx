import React, { useState } from 'react';
import { 
  Trophy, 
  ShieldCheck, 
  Award, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight, 
  X,
  FileCheck2
} from 'lucide-react';
import { achievementsData } from '../data/achievements';
import { Achievement } from '../types';

export const Highlights: React.FC = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Trophy':
        return Trophy;
      case 'Award':
        return Award;
      case 'Users':
        return Users;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="highlights" className="py-14 bg-white/70 backdrop-blur-md border-y border-[#DCEEFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-amber-700 bg-amber-50 border border-amber-200 mb-2">
              <Trophy className="w-3 h-3 text-amber-600" />
              <span>Proven Track Record</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2A5F] tracking-tight">
              Key Highlights & Achievements
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-2xl">
              Authentic milestones, verified leadership roles, top academic awards, and active tech community contributions.
            </p>
          </div>
          <div className="text-[11px] text-slate-400 font-medium shrink-0">
            Click any card for full details
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievementsData.map((item) => {
            const Icon = getIcon(item.iconName);
            return (
              <div
                key={item.id}
                id={`achievement-card-${item.id}`}
                onClick={() => setSelectedAchievement(item)}
                className="p-4 rounded-2xl bg-[#F8FBFF] border border-[#DCEEFF] hover:border-blue-300 hover:bg-white hover:shadow-sm transition-all duration-150 cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-xl bg-[#EEF7FF] text-[#2563EB] border border-[#DCEEFF] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-150 shadow-xs">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-[#EEF7FF] text-[#2563EB] border border-[#DCEEFF]">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-[#0F2A5F] group-hover:text-[#2563EB] transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-[11px] font-bold text-[#2563EB] mt-0.5">
                    {item.organization}
                  </div>

                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-[#EEF7FF] flex items-center justify-between text-xs font-semibold text-[#2563EB]">
                  <span className="flex items-center gap-1 text-[11px]">
                    <FileCheck2 className="w-3.5 h-3.5" />
                    View Details
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Achievement Detail Modal */}
      {selectedAchievement && (
        <div 
          id="achievement-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setSelectedAchievement(null)}
        >
          <div 
            className="w-full max-w-lg bg-white rounded-2xl border border-[#DCEEFF] shadow-xl p-5 sm:p-6 space-y-4 animate-in zoom-in-95 duration-150 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedAchievement(null)}
              className="absolute top-3.5 right-3.5 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#EEF7FF] text-[#2563EB] border border-[#DCEEFF] flex items-center justify-center shrink-0">
                {React.createElement(getIcon(selectedAchievement.iconName), { className: "w-5 h-5" })}
              </div>
              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#2563EB] bg-[#EEF7FF] px-2 py-0.5 rounded border border-[#DCEEFF]">
                  {selectedAchievement.badge}
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-[#0F2A5F] mt-1">
                  {selectedAchievement.title}
                </h3>
              </div>
            </div>

            <div className="text-xs font-semibold text-slate-700">
              {selectedAchievement.organization}
            </div>

            <div className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed bg-[#F8FBFF] p-3.5 rounded-xl border border-[#DCEEFF]">
              <p>{selectedAchievement.description}</p>
              <p className="font-semibold text-[#0F2A5F]">{selectedAchievement.details}</p>
            </div>

            {selectedAchievement.proofNote && (
              <div className="flex items-start gap-2 text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-700 font-semibold">Verification:</strong> {selectedAchievement.proofNote}
                </span>
              </div>
            )}

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedAchievement(null)}
                className="px-4 py-1.5 rounded-xl text-xs font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

