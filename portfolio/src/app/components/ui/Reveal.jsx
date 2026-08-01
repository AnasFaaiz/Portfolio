'use client';

import { motion, useReducedMotion } from 'framer-motion';

/* ============================================================
   REVEAL ON SCROLL
   framer-motion's `whileInView` uses IntersectionObserver under
   the hood, so this is the cheap version — no observer wiring.

   <Reveal>            fade + rise
   <Reveal x={-40}>    slide in from the left
   <Reveal delay={.2}> stagger it manually

   For lists, wrap in <RevealGroup> and use <RevealItem> for each
   child — the group staggers them automatically.
   ============================================================ */

const EASE = [0.22, 1, 0.36, 1]; /**
 * Reveals content when it enters the viewport with optional horizontal and vertical movement.
 * @param {number} [y=28] - The initial vertical offset in pixels.
 * @param {number} [x=0] - The initial horizontal offset in pixels.
 * @param {number} [amount=0.2] - The fraction of the element that must be visible to trigger the animation.
 * @param {boolean} [once=true] - Whether the animation should trigger only once.
 * @param {string} [as='div'] - The element type to render.
 * @return {JSX.Element} The animated content element.
 */

export default function Reveal({
  children,
  className = '',
  delay = 0,
  y = 28,
  x = 0,
  duration = 0.7,
  amount = 0.2, // how much of the element must be visible to fire
  once = true,
  as = 'div',
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: reduce ? 0.2 : duration, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Coordinates child reveal animations with a viewport-triggered stagger.
 * @param {number} stagger - The delay between successive child animations, in seconds.
 * @param {number} amount - The portion of the group that must enter the viewport to trigger the animation.
 * @param {boolean} once - Whether the animation should trigger only once.
 * @return {JSX.Element} The motion container wrapping the children.
 */
export function RevealGroup({
  children,
  className = '',
  stagger = 0.08,
  amount = 0.15,
  once = true,
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Render an item for a `RevealGroup` with opacity and optional vertical reveal animation.
 * @param {React.ReactNode} children - The content to render.
 * @param {string} className - Additional CSS class names.
 * @param {number} y - The initial vertical offset in pixels.
 * @param {string} as - The HTML element type to render.
 */
export function RevealItem({ children, className = '', y = 24, as = 'div' }) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      variants={{
        hidden: reduce ? { opacity: 0 } : { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: reduce ? 0.2 : 0.6, ease: EASE },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}
