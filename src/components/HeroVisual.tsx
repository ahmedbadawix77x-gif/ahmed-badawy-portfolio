import React, { useEffect, useMemo, useRef } from 'react';
import { CheckCircle2, Star, Award, Zap, Code2, Database, Cpu, Layers } from 'lucide-react';

interface PacketProps {
  delay: number;
  duration: number;
  orbit: 'inner' | 'outer';
  hue: number;
}

const OrbitPacket: React.FC<PacketProps> = ({ delay, duration, orbit, hue }) => {
  const size = orbit === 'inner' ? 6 : 5;
  const orbitPx = orbit === 'inner' ? 135 : 165;
  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: orbitPx,
        height: orbitPx,
        marginLeft: -orbitPx / 2,
        marginTop: -orbitPx / 2 - (orbit === 'inner' ? 8 : 4),
        transform: 'translate(-50%, -50%)',
        animation: `hv-orbit ${duration}s linear infinite`,
        animationDelay: `${delay}s`,
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: -size / 2,
          width: size,
          height: size,
          marginLeft: -size / 2,
          borderRadius: '50%',
          background: `hsla(${hue}, 95%, 62%, 1)`,
          boxShadow: `0 0 8px 2px hsla(${hue}, 100%, 70%, 0.75), 0 0 18px 4px hsla(${hue}, 100%, 65%, 0.35)`,
        }}
      />
    </div>
  );
};

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

  const packets = useMemo<PacketProps[]>(
    () => [
      { delay: 0, duration: 4.2, orbit: 'inner', hue: 215 },
      { delay: 1.05, duration: 4.2, orbit: 'inner', hue: 260 },
      { delay: 2.1, duration: 4.2, orbit: 'inner', hue: 170 },
      { delay: 3.15, duration: 4.2, orbit: 'inner', hue: 150 },

      { delay: 0.2, duration: 6.8, orbit: 'outer', hue: 200 },
      { delay: 1.7, duration: 6.8, orbit: 'outer', hue: 285 },
      { delay: 3.4, duration: 6.8, orbit: 'outer', hue: 155 },
      { delay: 5.1, duration: 6.8, orbit: 'outer', hue: 330 },
    ],
    []
  );

  return (
    <div
      id="hero-visual-card"
      ref={cardRef}
      className="w-full rounded-2xl border border-[#DCEEFF] bg-white shadow-xs overflow-hidden relative"
      style={{
        minHeight: '420px',
        transition: 'transform 0.15s ease-out',
        background:
          'radial-gradient(ellipse at 80% 0%, rgba(99,102,241,0.08) 0%, transparent 55%),' +
          'radial-gradient(ellipse at 10% 100%, rgba(6,182,212,0.07) 0%, transparent 55%),' +
          'linear-gradient(135deg, #f5faff 0%, #ffffff 45%, #f7f4ff 100%)',
      }}
    >
      {/* Grid backdrop — subtle technical feel */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px),' +
            'linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          maskImage:
            'radial-gradient(ellipse at center, black 25%, transparent 85%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, black 25%, transparent 85%)',
          pointerEvents: 'none',
        }}
      />

      {/* ====== INNER CONTENT ====== */}
      <div
        className="relative w-full h-full flex flex-col items-center justify-center py-10 px-4"
        style={{ minHeight: '420px' }}
      >
        {/* --- Thin orbit rings (clean, elegant, not heavy) --- */}
        <div
          className="absolute left-1/2 top-1/2 pointer-events-none"
          style={{
            width: '330px',
            height: '330px',
            transform: 'translate(-50%, -56%)',
            border: '1px dashed rgba(59,130,246,0.22)',
            borderRadius: '50%',
            animation: 'hv-spin-ring 26s linear infinite',
          }}
        />
        <div
          className="absolute left-1/2 top-1/2 pointer-events-none"
          style={{
            width: '270px',
            height: '270px',
            transform: 'translate(-50%, -56%)',
            border: '1px solid rgba(148,163,184,0.22)',
            borderRadius: '50%',
            animation: 'hv-spin-ring 16s linear infinite reverse',
          }}
        />
        <div
          className="absolute left-1/2 top-1/2 pointer-events-none"
          style={{
            width: '210px',
            height: '210px',
            transform: 'translate(-50%, -56%)',
            border: '1px dashed rgba(99,102,241,0.20)',
            borderRadius: '50%',
            animation: 'hv-spin 10s linear infinite',
          }}
        />

        {/* --- Light streak beams sweeping around the photo --- */}
        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
          <div
            key={deg}
            aria-hidden
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              width: '2px',
              height: '150px',
              transformOrigin: '50% 100%',
              transform: `translate(-50%, -100%) rotate(${deg}deg)`,
              animation: `hv-spin ${10 + i * 2}s linear infinite`,
              pointerEvents: 'none',
              opacity: 0.7,
            }}
          >
            <div
              style={{
                width: '100%',
                height: '45%',
                background: `linear-gradient(180deg, transparent 0%, hsla(${205 + i * 15}, 95%, 65%, 0.0) 10%, hsla(${205 + i * 15}, 95%, 65%, 0.55) 55%, hsla(${205 + i * 15}, 95%, 65%, 0.0) 100%)`,
                filter: 'blur(1px)',
                boxShadow: `0 0 10px hsla(${205 + i * 15}, 100%, 65%, 0.45)`,
                borderRadius: '2px',
              }}
            />
          </div>
        ))}

        {/* --- Corner floating icon badges --- */}
        <div
          className="absolute top-6 left-6 w-12 h-12 rounded-xl border border-blue-100 bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center"
          style={{ animation: 'hv-float 3s ease-in-out infinite' }}
        >
          <Code2 className="w-5 h-5 text-[#3B82F6]" />
        </div>
        <div
          className="absolute top-6 right-6 w-12 h-12 rounded-xl border border-indigo-100 bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center"
          style={{ animation: 'hv-float 3.5s ease-in-out infinite 0.5s' }}
        >
          <Database className="w-5 h-5 text-[#6366F1]" />
        </div>
        <div
          className="absolute bottom-20 left-6 w-12 h-12 rounded-xl border border-cyan-100 bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center"
          style={{ animation: 'hv-float 3.2s ease-in-out infinite 1s' }}
        >
          <Cpu className="w-5 h-5 text-[#06B6D4]" />
        </div>
        <div
          className="absolute bottom-20 right-6 w-12 h-12 rounded-xl border border-emerald-100 bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center"
          style={{ animation: 'hv-float 2.8s ease-in-out infinite 0.8s' }}
        >
          <Layers className="w-5 h-5 text-[#10B981]" />
        </div>

        {/* --- Floating DEPI badge --- */}
        <div
          className="absolute z-20"
          style={{
            top: '18%',
            right: '4%',
            animation: 'hv-float 3s ease-in-out infinite 0.3s',
          }}
        >
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white text-[10px] font-bold shadow-[0_6px_16px_rgba(59,130,246,0.38)] whitespace-nowrap ring-1 ring-white/70">
            <Star className="w-3 h-3 text-yellow-300 fill-yellow-300" />
            DEPI Team Leader
          </div>
        </div>

        {/* --- Floating Top Performer badge --- */}
        <div
          className="absolute z-20"
          style={{
            top: '18%',
            left: '4%',
            animation: 'hv-float 3.8s ease-in-out infinite 1.2s',
          }}
        >
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 text-white text-[10px] font-bold shadow-[0_6px_16px_rgba(245,158,11,0.38)] whitespace-nowrap ring-1 ring-white/70">
            <Award className="w-3 h-3" />
            Top Performer #1
          </div>
        </div>

        {/* ===== PHOTO — elegant frame with thin gradient ring + sonar pulse ===== */}
        <div
          className="relative z-10 flex items-center justify-center mb-4"
          style={{ marginTop: '-10px' }}
        >
          {/* Sonar pulses — expanding from the photo */}
          {[0, 1.2, 2.4].map((d, i) => (
            <div
              key={i}
              aria-hidden
              style={{
                position: 'absolute',
                inset: 0,
                margin: 'auto',
                width: '190px',
                height: '190px',
                borderRadius: '50%',
                border: '1.5px solid rgba(59,130,246,0.55)',
                animation: 'hv-sonar 3.6s ease-out infinite',
                animationDelay: `${d}s`,
                pointerEvents: 'none',
              }}
            />
          ))}

          {/* Minimal outer glow (soft, not heavy) */}
          <div
            aria-hidden
            className="absolute rounded-full pointer-events-none"
            style={{
              width: '230px',
              height: '230px',
              background:
                'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(99,102,241,0.06) 50%, transparent 80%)',
              filter: 'blur(10px)',
            }}
          />

          {/* Thin gradient frame — 2 pixels */}
          <div
            aria-hidden
            className="absolute rounded-full"
            style={{
              width: '194px',
              height: '194px',
              background:
                'conic-gradient(from 0deg, #3B82F6, #22D3EE, #34D399, #6366F1, #3B82F6)',
              padding: '2px',
              animation: 'hv-spin 7s linear infinite',
              boxShadow: '0 0 14px rgba(59,130,246,0.22)',
            }}
          >
            <div className="w-full h-full bg-white rounded-full" />
          </div>

          {/* Photo */}
          <div
            className="relative z-10 rounded-full overflow-hidden"
            style={{
              width: '184px',
              height: '184px',
              boxShadow: '0 8px 24px rgba(37,99,235,0.20)',
            }}
          >
            <img
              src="/ahmed-photo.jpg"
              alt="Ahmed Badawy"
              className="w-full h-full object-cover"
              style={{
                transform: 'scale(1.42)',
                transformOrigin: '50% 22%',
              }}
            />
          </div>

          {/* Verified checkmark */}
          <div
            className="absolute bottom-1 right-1 z-20 w-8 h-8 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] flex items-center justify-center border-[3px] border-white shadow-[0_3px_10px_rgba(59,130,246,0.45)]"
            title="Verified"
          >
            <CheckCircle2 className="w-4 h-4 text-white" />
          </div>

          {/* Packets circling the photo (inner + outer) */}
          {packets.map((p, i) => (
            <OrbitPacket key={i} {...p} />
          ))}
        </div>

        {/* ===== PREMIUM NAME CARD ===== */}
        <div className="relative z-10 flex flex-col items-center gap-1.5 mt-3 w-full">
          <div
            className="relative flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/85 backdrop-blur-sm border border-blue-100/90 shadow-[0_8px_22px_rgba(37,99,235,0.12)] overflow-hidden"
          >
            <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-[#3B82F6] via-[#06B6D4] to-[#10B981] rounded-l-2xl" />
            <Zap className="w-3.5 h-3.5 text-[#3B82F6] shrink-0" />
            <span className="text-[11.5px] font-extrabold text-[#0F2A5F] tracking-wide whitespace-nowrap">
              Ahmed Badawy — Data Engineer
            </span>
            <span className="inline-block w-px h-4 bg-gradient-to-b from-transparent via-slate-300 to-transparent mx-0.5" />
            <span className="text-[10.5px] font-bold bg-gradient-to-r from-[#2563EB] to-[#0891b2] bg-clip-text text-transparent whitespace-nowrap">
              Data Platform &amp; Pipelines
            </span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/70 backdrop-blur-sm px-3 py-1 rounded-full border border-emerald-100 shadow-sm">
            <span className="relative flex w-2 h-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-semibold text-slate-500">
              Available for opportunities • Cairo, Egypt
            </span>
          </div>
        </div>
      </div>

      {/* ===== KEYFRAMES ===== */}
      <style>{`
        @keyframes hv-spin-ring {
          from { transform: translate(-50%, -56%) rotate(0deg); }
          to   { transform: translate(-50%, -56%) rotate(360deg); }
        }
        @keyframes hv-spin-streak {
          from { transform: translate(-50%, -100%) rotate(0deg); }
          to   { transform: translate(-50%, -100%) rotate(360deg); }
        }
        @keyframes hv-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-7px); }
        }
        @keyframes hv-sonar {
          0% {
            transform: scale(0.92);
            opacity: 0.55;
          }
          100% {
            transform: scale(1.55);
            opacity: 0;
          }
        }
        @keyframes hv-orbit {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
