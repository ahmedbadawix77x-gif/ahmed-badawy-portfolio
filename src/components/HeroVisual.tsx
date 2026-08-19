import React, { useEffect, useRef } from 'react';
import { CheckCircle2, Star, Award, Zap, Code2, Database, Cpu, Shield } from 'lucide-react';

export const HeroVisual: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
      card.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${y}deg) scale(1.01)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) scale(1)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      id="hero-visual-card"
      ref={cardRef}
      className="w-full rounded-2xl border border-[#DCEEFF] bg-white shadow-xs overflow-hidden relative"
      style={{
        minHeight: '420px',
        transition: 'transform 0.15s ease-out',
        background: 'linear-gradient(135deg, #f0f7ff 0%, #ffffff 50%, #f8f4ff 100%)',
      }}
    >
      {/* ===== BACKGROUND DECORATIVE BLOBS ===== */}
      <div
        className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-40 h-40 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 70%)',
        }}
      />

      {/* ===== INNER CONTENT ===== */}
      <div className="relative w-full h-full flex flex-col items-center justify-center py-10 px-4" style={{ minHeight: '420px' }}>

        {/* --- Orbit rings (centered on photo) --- */}
        <div
          className="absolute left-1/2 top-1/2 pointer-events-none"
          style={{
            width: '300px',
            height: '300px',
            transform: 'translate(-50%, -55%)',
            border: '1.5px dashed rgba(59,130,246,0.20)',
            borderRadius: '50%',
            animation: 'hv-spin 22s linear infinite',
          }}
        />
        <div
          className="absolute left-1/2 top-1/2 pointer-events-none"
          style={{
            width: '240px',
            height: '240px',
            transform: 'translate(-50%, -55%)',
            border: '1px solid rgba(99,102,241,0.15)',
            borderRadius: '50%',
            animation: 'hv-spin 15s linear infinite reverse',
          }}
        />

        {/* --- Corner floating icon badges --- */}
        <div
          className="absolute top-6 left-6 w-12 h-12 rounded-xl border border-blue-100 bg-white shadow-md flex items-center justify-center"
          style={{ animation: 'hv-float 3s ease-in-out infinite' }}
        >
          <Code2 className="w-5 h-5 text-[#3B82F6]" />
        </div>
        <div
          className="absolute top-6 right-6 w-12 h-12 rounded-xl border border-indigo-100 bg-white shadow-md flex items-center justify-center"
          style={{ animation: 'hv-float 3.5s ease-in-out infinite 0.5s' }}
        >
          <Database className="w-5 h-5 text-[#6366F1]" />
        </div>
        <div
          className="absolute bottom-20 left-6 w-12 h-12 rounded-xl border border-cyan-100 bg-white shadow-md flex items-center justify-center"
          style={{ animation: 'hv-float 3.2s ease-in-out infinite 1s' }}
        >
          <Cpu className="w-5 h-5 text-[#06B6D4]" />
        </div>
        <div
          className="absolute bottom-20 right-6 w-12 h-12 rounded-xl border border-emerald-100 bg-white shadow-md flex items-center justify-center"
          style={{ animation: 'hv-float 2.8s ease-in-out infinite 0.8s' }}
        >
          <Shield className="w-5 h-5 text-[#10B981]" />
        </div>

        {/* --- Floating DEPI badge --- */}
        <div
          className="absolute z-20"
          style={{
            top: '22%',
            right: '8%',
            animation: 'hv-float 3s ease-in-out infinite 0.3s',
          }}
        >
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white text-[10px] font-bold shadow-lg shadow-blue-500/30 whitespace-nowrap">
            <Star className="w-3 h-3 text-yellow-300 fill-yellow-300" />
            DEPI Team Leader
          </div>
        </div>

        {/* --- Floating Top Performer badge --- */}
        <div
          className="absolute z-20"
          style={{
            top: '22%',
            left: '8%',
            animation: 'hv-float 3.8s ease-in-out infinite 1.2s',
          }}
        >
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 text-white text-[10px] font-bold shadow-lg shadow-amber-500/30 whitespace-nowrap">
            <Award className="w-3 h-3" />
            Top Performer #1
          </div>
        </div>

        {/* ===== PHOTO FRAME ===== */}
        <div className="relative z-10 flex items-center justify-center mb-4" style={{ marginTop: '-10px' }}>
          {/* Animated conic gradient ring */}
          <div
            className="absolute rounded-full"
            style={{
              width: '192px',
              height: '192px',
              background: 'conic-gradient(from 0deg, #3B82F6, #6366F1, #06B6D4, #10B981, #3B82F6)',
              animation: 'hv-spin 5s linear infinite',
              padding: '3px',
              borderRadius: '50%',
            }}
          />
          {/* White gap ring */}
          <div
            className="absolute rounded-full bg-white"
            style={{ width: '186px', height: '186px' }}
          />
          {/* The actual photo */}
          <img
            src="/ahmed-photo.jpg"
            alt="Ahmed Badawy"
            className="relative z-10 rounded-full object-cover"
            style={{
              width: '176px',
              height: '176px',
              objectPosition: 'top center',
              boxShadow: '0 4px 24px rgba(59,130,246,0.25)',
            }}
          />
          {/* Verified checkmark */}
          <div
            className="absolute bottom-2 right-2 z-20 w-8 h-8 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#2563EB] flex items-center justify-center border-2 border-white shadow-md"
            title="Verified"
          >
            <CheckCircle2 className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* ===== NAME CARD ===== */}
        <div className="relative z-10 flex flex-col items-center gap-1.5 mt-2">
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-blue-100 shadow-md"
          >
            <Zap className="w-3.5 h-3.5 text-[#3B82F6] shrink-0" />
            <span className="text-[11px] font-bold text-[#0F2A5F] tracking-wide whitespace-nowrap">
              Ahmed Badawy — Aspiring Data Engineer | AI & Data Science
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-medium text-slate-400">Available for opportunities • Cairo, Egypt</span>
          </div>
        </div>

      </div>

      {/* ===== KEYFRAME STYLES ===== */}
      <style>{`
        @keyframes hv-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes hv-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-7px); }
        }
      `}</style>
    </div>
  );
};
