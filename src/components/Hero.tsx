import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  Sparkles, 
  ShieldCheck, 
  GraduationCap,
  Trophy,
  Cpu,
  Database,
  Layers,
  Zap,
  GitBranch,
  BarChart3,
  CheckCircle2
} from 'lucide-react';
import { HeroVisual } from './HeroVisual';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const coreHighlights = [
    {
      icon: Layers,
      label: "Lakehouse & Dimensional Modeling",
      color: "from-violet-500 to-indigo-500",
      text: "Medallion + Kimball Star Schema"
    },
    {
      icon: GitBranch,
      label: "ETL/ELT & Orchestration",
      color: "from-blue-500 to-cyan-500",
      text: "Airflow DAGs • Kafka Streams"
    },
    {
      icon: BarChart3,
      label: "Analytics & BI-Friendly Outputs",
      color: "from-emerald-500 to-teal-500",
      text: "Pandas EDA • KPI-ready Gold tables"
    },
    {
      icon: Zap,
      label: "Platform Observability & CI/CD",
      color: "from-amber-500 to-orange-500",
      text: "Docker • Grafana • GitHub Actions"
    }
  ];

  return (
    <section 
      id="home" 
      className="relative pt-6 pb-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Left Column: Main Hero High Density Overview */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white border border-[#DCEEFF] shadow-xs relative overflow-hidden">
            
            {/* Ambient background glow */}
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-gradient-to-br from-blue-400/30 via-indigo-400/20 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-gradient-to-tr from-cyan-400/20 via-emerald-400/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Subtle decorative background icon */}
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none text-[#0F2A5F]">
              <svg width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"></path>
              </svg>
            </div>

            <div className="space-y-5 relative z-10">
              {/* ====== MARQUEE TICKER ====== */}
              <div
                className="overflow-hidden relative"
                style={{
                  maskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    gap: '10px',
                    width: 'max-content',
                    animation: 'badge-marquee 18s linear infinite',
                  }}
                >
                  {[0, 1, 2].map((set) => (
                    <div key={set} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>

                      <div
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-[11px] font-bold text-white relative overflow-hidden shrink-0"
                        style={{
                          background: 'linear-gradient(135deg, #1e40af 0%, #3B82F6 60%, #6366F1 100%)',
                          boxShadow: '0 2px 12px rgba(59,130,246,0.35)',
                        }}
                      >
                        <span className="text-blue-200">⚡</span>
                        <span>Personal Technology Portfolio</span>
                        <span className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(105deg, rgba(255,255,255,0.15) 0%, transparent 60%)' }} />
                      </div>

                      <div
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-[11px] font-bold text-white relative overflow-hidden shrink-0"
                        style={{
                          background: 'linear-gradient(135deg, #065f46 0%, #059669 60%, #10B981 100%)',
                          boxShadow: '0 2px 12px rgba(16,185,129,0.35)',
                        }}
                      >
                        <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse shrink-0" />
                        <span>DEPI Team Leader</span>
                        <span className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(105deg, rgba(255,255,255,0.15) 0%, transparent 60%)' }} />
                      </div>

                      <div
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-[11px] font-bold text-white relative overflow-hidden shrink-0"
                        style={{
                          background: 'linear-gradient(135deg, #92400e 0%, #d97706 60%, #fbbf24 100%)',
                          boxShadow: '0 2px 12px rgba(217,119,6,0.35)',
                        }}
                      >
                        <span>🏆</span>
                        <span>Top Performer #1</span>
                        <span className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(105deg, rgba(255,255,255,0.18) 0%, transparent 60%)' }} />
                      </div>

                      <div
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-[11px] font-bold text-white relative overflow-hidden shrink-0"
                        style={{
                          background: 'linear-gradient(135deg, #4c1d95 0%, #7c3aed 60%, #a78bfa 100%)',
                          boxShadow: '0 2px 12px rgba(124,58,237,0.35)',
                        }}
                      >
                        <span>🏗️</span>
                        <span>Lakehouse &amp; Star Schema</span>
                        <span className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(105deg, rgba(255,255,255,0.15) 0%, transparent 60%)' }} />
                      </div>

                      <div
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-[11px] font-bold text-white relative overflow-hidden shrink-0"
                        style={{
                          background: 'linear-gradient(135deg, #0e7490 0%, #0891b2 60%, #06B6D4 100%)',
                          boxShadow: '0 2px 12px rgba(6,182,212,0.35)',
                        }}
                      >
                        <span>🗄️</span>
                        <span>Data Engineering</span>
                        <span className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(105deg, rgba(255,255,255,0.15) 0%, transparent 60%)' }} />
                      </div>

                      <div
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-[11px] font-bold text-white relative overflow-hidden shrink-0"
                        style={{
                          background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 60%, #38bdf8 100%)',
                          boxShadow: '0 2px 12px rgba(37,99,235,0.30)',
                        }}
                      >
                        <span>⚙️</span>
                        <span>ETL & ELT Pipelines</span>
                        <span className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(105deg, rgba(255,255,255,0.15) 0%, transparent 60%)' }} />
                      </div>

                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    </div>
                  ))}
                </div>
              </div>

              <style>{`
                @keyframes badge-marquee {
                  0%   { transform: translateX(0); }
                  100% { transform: translateX(-33.333%); }
                }
                @keyframes hero-name-glow {
                  0%, 100% { filter: drop-shadow(0 0 18px rgba(59,130,246,0.35)); }
                  50%      { filter: drop-shadow(0 0 28px rgba(59,130,246,0.55)); }
                }
                @keyframes hero-subtitle-shine {
                  0%   { background-position: -200% 50%; }
                  100% { background-position: 200% 50%; }
                }
              `}</style>

              {/* Main Headline with premium glow */}
              <div className="relative">
                {/* Glow aura behind name */}
                <div 
                  className="absolute -inset-x-6 -inset-y-3 rounded-[2rem] pointer-events-none"
                  style={{ 
                    background: 'radial-gradient(ellipse at 30% 50%, rgba(59,130,246,0.25) 0%, transparent 55%), radial-gradient(ellipse at 80% 40%, rgba(99,102,241,0.18) 0%, transparent 60%)',
                    filter: 'blur(12px)'
                  }}
                />
                <h1 
                  className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F2A5F] leading-tight relative"
                  style={{ animation: 'hero-name-glow 3.5s ease-in-out infinite' }}
                >
                  Ahmed <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#2563EB] to-[#1D4ED8]">Badawy</span>
                </h1>
                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#EEF7FF] border border-[#DCEEFF] text-[10px] font-bold text-[#2563EB] uppercase tracking-[0.18em]">
                    <GraduationCap className="w-3 h-3" />
                    Benha University
                  </span>
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Ahmed Badawy Ramadan Hassanein • Cairo, Egypt
                  </p>
                </div>

                {/* Animated gradient role line */}
                <div className="mt-3 relative inline-block">
                  <div 
                    className="text-lg sm:text-2xl font-extrabold tracking-tight relative"
                    style={{
                      background: 'linear-gradient(90deg, #1D4ED8 0%, #3B82F6 20%, #06B6D4 40%, #10B981 60%, #3B82F6 80%, #1D4ED8 100%)',
                      backgroundSize: '200% 100%',
                      animation: 'hero-subtitle-shine 4.5s linear infinite',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    Data Engineer • Data Platform &amp; Pipeline Architect
                  </div>
                </div>
              </div>

              {/* Structured Bio – Split into Short Elevator Pitch + 4 Colored Pillars */}
              <div className="space-y-3.5">
                {/* Short elevator pitch in soft callout */}
                <div className="p-3.5 rounded-xl bg-gradient-to-br from-[#F8FBFF] via-white to-[#EEF7FF] border border-[#DCEEFF] text-xs sm:text-sm text-slate-700 leading-relaxed max-w-xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#3B82F6] via-[#06B6D4] to-[#10B981] rounded-l-xl" />
                  <p className="pl-1">
                    Building <strong className="text-[#0F2A5F]">production-grade data platforms</strong>: Medallion Lakehouse on MinIO/S3, 
                    <strong className="text-[#2563EB]"> Kimball Star Schema</strong> in PostgreSQL, 
                    <strong className="text-[#0891b2]"> Airflow</strong>-orchestrated ETL and <strong className="text-[#0F766E]">Kafka</strong> event streams, 
                    with <strong className="text-[#4C1D95]">Pydantic</strong> data contracts, 100% test coverage, and containerized multi-service deployments.
                  </p>
                </div>

                {/* Four Core Pillars – Colorful Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {coreHighlights.map((h, i) => {
                    const Icon = h.icon;
                    return (
                      <div 
                        key={i} 
                        className="group relative flex items-start gap-3 p-3 rounded-xl border border-slate-200/80 bg-white hover:border-transparent hover:shadow-md transition-all duration-200 overflow-hidden"
                      >
                        {/* Left accent bar */}
                        <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${h.color} opacity-0 group-hover:opacity-100 transition-opacity duration-200`} />
                        <div className={`shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br ${h.color} flex items-center justify-center shadow-sm text-white`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="space-y-0.5">
                          <div className="text-[11.5px] font-extrabold text-[#0F2A5F] tracking-tight flex items-center gap-1.5">
                            {h.label}
                            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                          </div>
                          <div className="text-[10.5px] text-slate-500 font-medium leading-snug">
                            {h.text}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Stack keywords bar – tiny gradient pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {[
                    { t: 'Python / Pandas', c: 'from-blue-600 to-sky-500' },
                    { t: 'SQL / PostgreSQL', c: 'from-indigo-600 to-violet-500' },
                    { t: 'PySpark', c: 'from-emerald-600 to-teal-500' },
                    { t: 'Apache Kafka', c: 'from-amber-600 to-orange-500' },
                    { t: 'Apache Airflow', c: 'from-cyan-600 to-sky-500' },
                    { t: 'Docker', c: 'from-sky-600 to-blue-500' },
                    { t: 'Medallion', c: 'from-fuchsia-600 to-purple-500' },
                    { t: 'Kimball Star', c: 'from-rose-600 to-pink-500' }
                  ].map((p, i) => (
                    <span 
                      key={i} 
                      className={`inline-flex items-center px-2 py-0.5 rounded-md text-[9.5px] font-bold text-white bg-gradient-to-r ${p.c} shadow-[0_1px_4px_rgba(0,0,0,0.12)]`}
                    >
                      {p.t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Technology Avatars & Public Learning indicator */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <div className="flex -space-x-1.5">
                  <div className="w-7 h-7 rounded-full bg-[#EEF7FF] border-2 border-white flex items-center justify-center text-xs shadow-xs" title="Python">🐍</div>
                  <div className="w-7 h-7 rounded-full bg-[#EEF7FF] border-2 border-white flex items-center justify-center text-xs shadow-xs" title="SQL / PostgreSQL">🛢️</div>
                  <div className="w-7 h-7 rounded-full bg-[#EEF7FF] border-2 border-white flex items-center justify-center text-xs shadow-xs" title="Data Viz & BI Dashboards">📊</div>
                  <div className="w-7 h-7 rounded-full bg-[#EEF7FF] border-2 border-white flex items-center justify-center text-xs shadow-xs" title="AI-Assisted Engineering">🤖</div>
                  <div className="w-7 h-7 rounded-full bg-[#EEF7FF] border-2 border-white flex items-center justify-center text-xs shadow-xs" title="Linux / Ubuntu / Docker">🐧</div>
                </div>
                <span className="text-[11px] font-medium text-slate-500 italic underline underline-offset-4 decoration-blue-200">
                  Learning & Building in Public • 2026
                </span>
              </div>
            </div>

            {/* CTAs & Action Bar */}
            <div className="pt-6 mt-6 border-t border-[#EEF7FF] flex flex-wrap items-center justify-between gap-3 relative z-10">
              <div className="flex flex-wrap items-center gap-2.5">
                <Link
                  id="hero-view-projects-btn"
                  to="/projects"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#3B82F6] to-[#2563EB] hover:from-[#2563EB] hover:to-[#1D4ED8] shadow-[0_6px_18px_rgba(59,130,246,0.35)] active:scale-95 transition-all"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  id="hero-resume-btn"
                  href="/Ahmed_Badawy_CV.pdf"
                  download="Ahmed_Badawy_CV.pdf"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-xs text-[#0F2A5F] bg-[#F8FBFF] hover:bg-white border border-[#DCEEFF] shadow-xs active:scale-95 transition-all"
                >
                  <FileText className="w-3.5 h-3.5 text-[#3B82F6]" />
                  <span>Download CV</span>
                </a>
              </div>

              <div className="flex items-center gap-1.5">
                <a
                  id="hero-github-link"
                  href="https://github.com/ahmedbadawix77x-gif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#F8FBFF] hover:bg-white text-slate-600 hover:text-[#2563EB] border border-[#DCEEFF] transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  id="hero-linkedin-link"
                  href="https://www.linkedin.com/in/ahmed-badawy-45060431b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#F8FBFF] hover:bg-white text-slate-600 hover:text-[#2563EB] border border-[#DCEEFF] transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <Link
                  id="hero-contact-link"
                  to="/contact"
                  className="p-2 rounded-xl text-slate-500 hover:text-[#0F2A5F] hover:bg-[#EEF7FF] transition-colors"
                  aria-label="Contact"
                >
                  <Mail className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>

          {/* Right Column: High Density Command Center Visual */}
          <div className="lg:col-span-5 flex flex-col">
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
};
