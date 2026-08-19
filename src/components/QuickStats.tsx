import React from 'react';
import { 
  GraduationCap, 
  Award, 
  ShieldCheck, 
  Trophy, 
  FolderGit2 
} from 'lucide-react';

export const QuickStats: React.FC = () => {
  const stats = [
    {
      id: "stat-year",
      icon: GraduationCap,
      value: "Third Year",
      title: "Benha University",
      subtitle: "Computer – Special Ed",
      badge: "Faculty of Ed"
    },
    {
      id: "stat-gpa",
      icon: Award,
      value: "3.0 GPA",
      title: "Academic Standing",
      subtitle: "Consistent Standing",
      badge: "University"
    },
    {
      id: "stat-depi",
      icon: ShieldCheck,
      value: "Team Leader",
      title: "DEPI Initiative",
      subtitle: "Digital Egypt Pioneers",
      badge: "Leadership"
    },
    {
      id: "stat-performer",
      icon: Trophy,
      value: "Rank #1 Performer",
      title: "Across All Tracks",
      subtitle: "Previous Season",
      badge: "1st Place"
    },
    {
      id: "stat-projects",
      icon: FolderGit2,
      value: "Practical Projects",
      title: "AI, Web & Data",
      subtitle: "Verified Repos",
      badge: "Code"
    }
  ];

  return (
    <section id="quick-stats-bar" className="py-4 bg-white/70 backdrop-blur-md border-y border-[#DCEEFF] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                id={stat.id}
                className="p-3.5 rounded-xl bg-[#F8FBFF] border border-[#DCEEFF] hover:border-blue-300 hover:bg-white hover:shadow-sm transition-all duration-150 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="w-7 h-7 rounded-lg bg-[#EEF7FF] border border-[#DCEEFF] flex items-center justify-center text-[#2563EB] group-hover:scale-105 transition-transform">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-[#EEF7FF] text-[#2563EB] border border-[#DCEEFF]">
                    {stat.badge}
                  </span>
                </div>
                <div>
                  <div className="text-base sm:text-lg font-extrabold text-[#0F2A5F] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-bold text-[#2563EB]">
                    {stat.title}
                  </div>
                  <div className="text-[10px] text-slate-500">
                    {stat.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

