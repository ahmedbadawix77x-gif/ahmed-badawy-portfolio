import React, { useEffect, useRef, useState } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  id: number;
  life: number;
}

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const trailIdRef = useRef(0);
  const frameRef = useRef<number>(0);
  const lastPosRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleDown = () => setIsClicking(true);
    const handleUp = () => setIsClicking(false);

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, [role="button"], input, textarea, select, label')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('mouseover', handleOver);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('mouseover', handleOver);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      const dx = pos.x - lastPosRef.current.x;
      const dy = pos.y - lastPosRef.current.y;
      const moved = Math.sqrt(dx * dx + dy * dy);
      if (moved > 5) {
        lastPosRef.current = { x: pos.x, y: pos.y };
        setTrail((prev) => {
          const newPoint: TrailPoint = {
            x: pos.x,
            y: pos.y,
            id: trailIdRef.current++,
            life: 1,
          };
          const next = [...prev, newPoint].slice(-14);
          return next;
        });
      }

      setTrail((prev) =>
        prev
          .map((p) => ({ ...p, life: p.life - 0.075 }))
          .filter((p) => p.life > 0)
      );

      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [pos.x, pos.y]);

  const dotSize = isClicking ? 6 : isHovering ? 5 : 4;
  const bracketGap = isHovering ? 14 : isClicking ? 10 : 18;
  const bracketSize = isHovering ? 22 : isClicking ? 19 : 20;

  return (
    <>
      {/* ================= HIDE DEFAULT CURSOR GLOBALLY ================ */}
      <style>{`
        @media (pointer: fine) {
          * { cursor: none !important; }
        }
        @keyframes cc-bracket-in {
          from { opacity: 0; transform: translateY(-50%) scale(0.7); }
          to   { opacity: 1; transform: translateY(-50%) scale(1); }
        }
        @keyframes cc-dot-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(59,130,246,0.55), 0 0 10px 2px rgba(59,130,246,0.25); }
          50%      { box-shadow: 0 0 0 4px rgba(59,130,246,0.0),  0 0 14px 4px rgba(99,102,241,0.30); }
        }
      `}</style>

      {/* ================= TRAIL (moving particles) ================ */}
      {trail.map((p, i) => {
        const hue = 210 + (i % 6) * 12;
        const size = 3 + i * 0.25;
        return (
          <div
            key={p.id}
            aria-hidden
            style={{
              position: 'fixed',
              top: p.y - size / 2,
              left: p.x - size / 2,
              width: size,
              height: size,
              borderRadius: '50%',
              pointerEvents: 'none',
              zIndex: 9998,
              opacity: p.life * 0.7,
              background: `hsla(${hue}, 90%, 60%, ${p.life})`,
              boxShadow: `0 0 ${6 * p.life}px 1px hsla(${hue}, 100%, 70%, ${p.life * 0.55})`,
              transform: `scale(${0.5 + p.life * 0.6})`,
              transition: 'background 0.1s',
            }}
          />
        );
      })}

      {/* ================= MAIN CURSOR: Dot + Brackets ================ */}
      <div
        aria-hidden
        style={{
          position: 'fixed',
          top: pos.y,
          left: pos.x,
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Outer soft aura */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 60,
            height: 60,
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            background: isHovering
              ? 'radial-gradient(circle, rgba(16,185,129,0.20) 0%, rgba(6,182,212,0.08) 55%, transparent 75%)'
              : 'radial-gradient(circle, rgba(59,130,246,0.22) 0%, rgba(99,102,241,0.08) 55%, transparent 75%)',
            filter: 'blur(2px)',
            transition: 'background 0.22s ease',
          }}
        />

        {/* LEFT BRACKET: { */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: -bracketGap - 2,
            transform: 'translateY(-50%)',
            animation: 'cc-bracket-in 0.2s ease-out',
          }}
        >
          <svg
            width={bracketSize}
            height={bracketSize * 1.55}
            viewBox="0 0 16 24"
            fill="none"
            style={{
              filter: isHovering
                ? 'drop-shadow(0 0 6px rgba(16,185,129,0.80)) drop-shadow(0 0 12px rgba(6,182,212,0.40))'
                : 'drop-shadow(0 0 6px rgba(59,130,246,0.85)) drop-shadow(0 0 10px rgba(99,102,241,0.45))',
              transition: 'filter 0.2s ease',
            }}
          >
            <path
              d="M13 2C9 2 5 5 5 12C5 19 9 22 13 22"
              stroke={isHovering ? '#10B981' : '#3B82F6'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* CENTER DOT */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: dotSize,
            height: dotSize,
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            background: isHovering
              ? 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)'
              : 'linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)',
            animation: 'cc-dot-pulse 1.8s ease-in-out infinite',
            transition: 'width 0.12s, height 0.12s, background 0.2s',
          }}
        />

        {/* TINY CODE DOT LINE — evokes a cursor in an editor */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: `calc(50% + ${bracketGap - 2}px)`,
            transform: 'translateY(-50%)',
            width: 2,
            height: isClicking ? 10 : 12,
            borderRadius: 2,
            background: isHovering
              ? 'linear-gradient(180deg, #34D399 0%, #22D3EE 100%)'
              : 'linear-gradient(180deg, #60A5FA 0%, #A78BFA 100%)',
            boxShadow: isHovering
              ? '0 0 8px rgba(16,185,129,0.80)'
              : '0 0 8px rgba(99,102,241,0.75)',
            transition: 'height 0.1s, background 0.2s',
          }}
        />

        {/* RIGHT BRACKET: } */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: bracketGap + 2,
            transform: 'translateY(-50%)',
            animation: 'cc-bracket-in 0.2s ease-out',
          }}
        >
          <svg
            width={bracketSize}
            height={bracketSize * 1.55}
            viewBox="0 0 16 24"
            fill="none"
            style={{
              filter: isHovering
                ? 'drop-shadow(0 0 6px rgba(16,185,129,0.80)) drop-shadow(0 0 12px rgba(6,182,212,0.40))'
                : 'drop-shadow(0 0 6px rgba(59,130,246,0.85)) drop-shadow(0 0 10px rgba(99,102,241,0.45))',
              transition: 'filter 0.2s ease',
            }}
          >
            <path
              d="M3 2C7 2 11 5 11 12C11 19 7 22 3 22"
              stroke={isHovering ? '#06B6D4' : '#8B5CF6'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
};
