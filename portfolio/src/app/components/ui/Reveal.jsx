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

const EASE = [0.22, 1, 0.36, 1]; // slow-out, no bounce

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

/* Parent: fires once, then releases its children in sequence. */
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

/* Child of RevealGroup. Takes no timing props — the group owns that. */
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
