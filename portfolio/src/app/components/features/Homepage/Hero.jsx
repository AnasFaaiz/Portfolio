'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDownRight, Download, Github, Linkedin, MessageSquare } from 'lucide-react';

import TypeLine from '../../ui/TypeLine';
import { profile } from '../../../data/site';

/* three.js can't render on the server, so the canvas is loaded in the
   browser only. The placeholder keeps the layout from jumping while
   the bundle arrives. */
const HeroScene = dynamic(() => import('./HeroScene'), {
  ssr: false,
  loading: () => (
    <div className="grid h-full w-full place-items-center">
      <div className="h-40 w-40 animate-pulse rounded-full bg-beam/10 blur-2xl" />
    </div>
  ),
});

const EASE = [0.22, 1, 0.36, 1];

/* Page-load sequence: everything in the hero rises in order.
   This is the one orchestrated moment on the site — the rest of
   the page reveals on scroll instead. */
const rise = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
});

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      {/* Faint engineering grid, masked to fade out before the next section */}
      <div className="grid-bg pointer-events-none absolute inset-0" />

      {/* Ambient glow behind the 3D object */}
      <div className="pointer-events-none absolute right-[-10%] top-[10%] h-[38rem] w-[38rem] rounded-full bg-beam/10 blur-[130px]" />

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-8 px-6 pb-20 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:pt-36">
        {/* ---------------- LEFT: the pitch ---------------- */}
        <div className="order-2 lg:order-1">
          <motion.div {...rise(0.05)} className="eyebrow flex items-center gap-3">
            <span className="h-px w-8 bg-line/25" />
            Hyderabad, India
          </motion.div>

          <motion.h1
            {...rise(0.15)}
            className="mt-6 font-display text-[clamp(2.6rem,7vw,4.75rem)] font-bold leading-[0.95] tracking-tight text-white"
          >
            {profile.name}
          </motion.h1>

          {/* The typing line. Fixed min-height so nothing below it shifts. */}
          <motion.div
            {...rise(0.25)}
            className="mt-4 flex min-h-[2.6rem] items-center font-mono text-lg text-ice md:text-2xl"
          >
            <span className="mr-2 text-muted">&gt;</span>
            <TypeLine words={profile.roles} />
          </motion.div>

          <motion.p
            {...rise(0.35)}
            className="mt-7 max-w-lg text-[15px] leading-relaxed text-muted md:text-base"
          >
            {profile.blurb}
          </motion.p>

          {/* Availability — avatar + pulsing dot. The one place orange appears above the fold. */}
          <motion.div
            {...rise(0.45)}
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-line/10 bg-white/[0.03] py-1.5 pl-1.5 pr-5 backdrop-blur"
          >
            <span className="relative block h-9 w-9 overflow-hidden rounded-full ring-1 ring-line/15">
              <Image
                src={profile.photo}
                alt=""
                fill
                sizes="36px"
                className="object-cover object-[50%_28%] scale-150"
                priority
              />
            </span>
            <span className="status-dot h-1.5 w-1.5 rounded-full bg-signal" />
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              {profile.status}
            </span>
          </motion.div>

          {/* Actions */}
          <motion.div {...rise(0.55)} className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={profile.resume}
              download
              className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 font-mono text-[12px] uppercase tracking-[0.14em] text-void transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download size={15} strokeWidth={2.5} />
              Resume
            </a>

            <a
              href="#work"
              className="group inline-flex items-center gap-2.5 rounded-full border border-line/15 px-7 py-3.5 font-mono text-[12px] uppercase tracking-[0.14em] text-white transition-colors hover:border-ice/40 hover:text-ice"
            >
              See the work
              <ArrowDownRight
                size={15}
                strokeWidth={2.5}
                className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </a>

            <span className="mx-1 hidden h-8 w-px bg-line/10 sm:block" />

            <div className="flex items-center gap-1">
              <IconLink href={profile.github} label="GitHub"><Github size={17} /></IconLink>
              <IconLink href={profile.linkedin} label="LinkedIn"><Linkedin size={17} /></IconLink>
              <IconLink href={profile.discord} label="Discord"><MessageSquare size={17} /></IconLink>
            </div>
          </motion.div>
        </div>

        {/* ---------------- RIGHT: the 3D object ---------------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: EASE }}
          className="order-1 h-[46vh] min-h-[320px] w-full lg:order-2 lg:h-[70vh]"
        >
          <HeroScene />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
          scroll
        </span>
      </motion.div>
    </section>
  );
}

function IconLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="rounded-full p-3 text-muted transition-colors hover:bg-white/5 hover:text-ice"
    >
      {children}
    </a>
  );
}
