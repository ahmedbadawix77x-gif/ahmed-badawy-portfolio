import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, [role="button"], input, textarea, select, label')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseover', handleOver);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', handleOver);
    };
  }, []);

  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        top: pos.y,
        left: pos.x,
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)',
        width: isHovering ? 60 : 40,
        height: isHovering ? 60 : 40,
        borderRadius: '50%',
        background: isHovering
          ? 'radial-gradient(circle, rgba(16,185,129,0.14) 0%, rgba(6,182,212,0.05) 60%, transparent 80%)'
          : 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(99,102,241,0.05) 60%, transparent 80%)',
        filter: 'blur(4px)',
        transition: 'width 0.2s, height 0.2s, background 0.2s ease',
      }}
    />
  );
};
