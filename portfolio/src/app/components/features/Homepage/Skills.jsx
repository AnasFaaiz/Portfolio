'use client';

import SectionHeader from '../../ui/SectionHeader';
import Reveal from '../../ui/Reveal';
import { skills } from '../../../data/site';

/* ============================================================
   SKILLS — infinite marquee, three rails.

   The trick: render each row's list TWICE inside one flex track,
   then animate the track by -50%. When it finishes, the second
   copy is sitting exactly where the first started, so the loop
   is invisible. No JS, no measuring, no resize listeners.

   Speed is set per row via the --speed CSS variable.
   Hover anywhere on a row to pause it (see globals.css).
   ============================================================ */

export default function Skills() {
  return (
    <section id="stack" className="scroll-mt-28 overflow-hidden py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <SectionHeader
          eyebrow="the toolbox"
          title="What I build"
          accent="with"
          note="Languages first, then the frameworks I reach for, then the things that keep it all running. Hover to pause."
        />
      </div>

      <Reveal className="space-y-4">
        {skills.map((row, i) => (
          <Rail
            key={i}
            items={row}
            reverse={i % 2 === 1}   /* middle row travels the other way */
            speed={[38, 46, 42][i % 3]}
          />
        ))}
      </Reveal>
    </section>
  );
}

function Rail({ items, reverse = false, speed = 40 }) {
  return (
    <div className="marquee-wrap edge-fade w-full overflow-hidden">
      <div
        className={`marquee-track gap-4 ${reverse ? 'reverse' : ''}`}
        style={{ '--speed': `${speed}s` }}
      >
        {/* Two identical passes — required for the seamless loop */}
        {[0, 1].map((pass) => (
          <div key={pass} className="flex shrink-0 gap-4 pr-4" aria-hidden={pass === 1}>
            {items.map((skill) => (
              <Chip key={`${pass}-${skill}`} label={skill} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Chip({ label }) {
  return (
    <span className="glass group flex shrink-0 items-center gap-3 rounded-2xl px-6 py-4 transition-colors duration-300 hover:border-ice/30">
      <span className="h-1.5 w-1.5 rounded-full bg-beam transition-colors group-hover:bg-signal" />
      <span className="whitespace-nowrap font-mono text-sm tracking-tight text-white/85 transition-colors group-hover:text-white">
        {label}
      </span>
    </span>
  );
}
