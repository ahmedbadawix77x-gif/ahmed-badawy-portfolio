import React from 'react';
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
  Database
} from 'lucide-react';
import { HeroVisual } from './HeroVisual';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section 
      id="home" 
      className="relative pt-6 pb-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Left Column: Main Hero High Density Overview */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white border border-[#DCEEFF] shadow-xs relative overflow-hidden">
            
            {/* Subtle decorative background icon */}
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none text-[#0F2A5F]">
              <svg width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"></path>
              </svg>
            </div>

            <div className="space-y-4">
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
                  {/* Render 3 copies for seamless infinite loop */}
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
                        <span>🎓</span>
                        <span>Benha University — CS</span>
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
                          background: 'linear-gradient(135deg, #991b1b 0%, #dc2626 60%, #f87171 100%)',
                          boxShadow: '0 2px 12px rgba(220,38,38,0.30)',
                        }}
                      >
                        <span>🤖</span>
                        <span>AI & Data Science</span>
                        <span className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(105deg, rgba(255,255,255,0.15) 0%, transparent 60%)' }} />
                      </div>

                      {/* Dot separator */}
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Keyframe injected inline */}
              <style>{`
                @keyframes badge-marquee {
                  0%   { transform: translateX(0); }
                  100% { transform: translateX(-33.333%); }
                }
              `}</style>

              {/* Main Headline */}
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F2A5F] leading-tight">
                  Ahmed <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8]">Badawy</span>
                </h1>
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">
                  Ahmed Badawy Ramadan Hassanein • Cairo, Egypt
                </p>
                <div className="text-lg sm:text-xl font-bold text-[#0F2A5F] mt-2">
                  Aspiring{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8]">
                    Data Engineer
                  </span>{' '}
                  | AI & Data Science
                </div>
              </div>

              {/* Bio description */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                Computer student at Faculty of Specific Education, Benha University, transitioning into <strong className="text-[#0F2A5F] font-semibold">Data Engineering via DEPI – Microsoft Data Engineer Program</strong>. Ranked #1 across all tracks, selected as Team Leader. Graduation project rated "Excellent" by the University President & 15+ Department Heads.
              </p>

              {/* Quick Technology Avatars & Public Learning indicator */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <div className="flex -space-x-1.5">
                  <div className="w-7 h-7 rounded-full bg-[#EEF7FF] border-2 border-white flex items-center justify-center text-xs shadow-xs" title="Python">🐍</div>
                  <div className="w-7 h-7 rounded-full bg-[#EEF7FF] border-2 border-white flex items-center justify-center text-xs shadow-xs" title="SQL">🛢️</div>
                  <div className="w-7 h-7 rounded-full bg-[#EEF7FF] border-2 border-white flex items-center justify-center text-xs shadow-xs" title="React">⚛️</div>
                  <div className="w-7 h-7 rounded-full bg-[#EEF7FF] border-2 border-white flex items-center justify-center text-xs shadow-xs" title="AI">🤖</div>
                  <div className="w-7 h-7 rounded-full bg-[#EEF7FF] border-2 border-white flex items-center justify-center text-xs shadow-xs" title="Linux">🐧</div>
                </div>
                <span className="text-[11px] font-medium text-slate-500 italic underline underline-offset-4 decoration-blue-200">
                  Learning & Building in Public • 2026
                </span>
              </div>
            </div>

            {/* CTAs & Action Bar */}
            <div className="pt-6 mt-6 border-t border-[#EEF7FF] flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  id="hero-view-projects-btn"
                  href="#projects"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#3B82F6] to-[#2563EB] hover:from-[#2563EB] hover:to-[#1D4ED8] shadow-md shadow-blue-500/20 active:scale-95 transition-all"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

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
                <a
                  id="hero-email-link"
                  href="#contact"
                  className="p-2 rounded-lg bg-[#F8FBFF] hover:bg-white text-slate-600 hover:text-[#2563EB] border border-[#DCEEFF] transition-colors"
                  aria-label="Email Ahmed"
                >
                  <Mail className="w-4 h-4" />
                </a>
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

