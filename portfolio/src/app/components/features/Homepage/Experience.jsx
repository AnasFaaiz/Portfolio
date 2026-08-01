'use client';

import SectionHeader from '../../ui/SectionHeader';
import Reveal from '../../ui/Reveal';
import { experience } from '../../../data/site';

/**
 * Render the work-experience timeline section.
 */

export default function Experience() {
  return (
    <section id="path" className="scroll-mt-28 py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <SectionHeader
          eyebrow="the path so far"
          title="Where I've"
          accent="worked"
          note="Short list, honestly labelled. I'd rather show you the code."
        />

        <div className="relative max-w-3xl pl-8">
          {/* The rule the whole timeline hangs off */}
          <div className="absolute bottom-2 left-[3px] top-2 w-px bg-gradient-to-b from-ice/40 via-line/10 to-transparent" />

          {experience.map((item, i) => (
            <Reveal key={item.role} x={-24} y={12} delay={i * 0.08} className="relative pb-14 last:pb-0">
              {/* Node */}
              <span className="absolute -left-8 top-2 h-[7px] w-[7px] rounded-full bg-ice ring-4 ring-void" />

              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal">
                {item.period}
              </p>

              <h3 className="mt-2 font-display text-xl font-bold text-white md:text-2xl">
                {item.role}
              </h3>
              <p className="mt-1 text-sm text-ice">{item.org}</p>

              <ul className="mt-4 space-y-2">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                    <span className="mt-[9px] h-px w-3 shrink-0 bg-line/25" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
