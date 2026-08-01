'use client';

import { useRef, useState } from 'react';

/**
 * Renders content in a cursor-responsive 3D card with optional glare.
 * @param {React.ReactNode} children - The content displayed inside the card.
 * @param {string} [className=''] - Additional CSS classes for the card.
 * @param {number} [max=9] - Maximum tilt angle in degrees.
 * @param {number} [scale=1.02] - Hover scale applied to the card.
 * @param {boolean} [glare=true] - Whether to display the cursor-tracking glare.
 * @param {string} [glareColor='143, 184, 255'] - Glare color as comma-separated RGB values.
 * @returns {JSX.Element} The rendered tilt card.
 */

export default function TiltCard({
  children,
  className = '',
  max = 9,          // degrees of tilt at the edges
  scale = 1.02,     // slight pop on hover
  glare = true,
  glareColor = '143, 184, 255', // --ice as rgb
}) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const canTilt = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: hover)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const handleMove = (e) => {
    if (!canTilt() || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;  // 0 (left) → 1 (right)
    const py = (e.clientY - rect.top) / rect.height;  // 0 (top)  → 1 (bottom)

    setStyle({
      transform: `perspective(1000px) rotateX(${(0.5 - py) * max * 2}deg) rotateY(${
        (px - 0.5) * max * 2
      }deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: 'transform 80ms ease-out',
    });

    setGlarePos({ x: px * 100, y: py * 100, opacity: 1 });
  };

  const handleLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)',
      transition: 'transform 500ms cubic-bezier(0.22, 1, 0.36, 1)',
    });
    setGlarePos((p) => ({ ...p, opacity: 0 }));
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ ...style, transformStyle: 'preserve-3d', willChange: 'transform' }}
      className={`relative ${className}`}
    >
      {children}

      {/* Glare — sits above the content, ignores pointer events */}
      {glare && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
          style={{
            opacity: glarePos.opacity,
            background: `radial-gradient(420px circle at ${glarePos.x}% ${glarePos.y}%, rgba(${glareColor}, 0.14), transparent 55%)`,
          }}
        />
      )}
    </div>
  );
}
