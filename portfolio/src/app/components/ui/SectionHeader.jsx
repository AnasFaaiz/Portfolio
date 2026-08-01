'use client';

import Reveal from './Reveal';

/**
 * Renders an animated section heading with an eyebrow label, title, optional accent, note, and divider.
 * @param {string} eyebrow - The label displayed above the title.
 * @param {string} title - The main section title.
 * @param {string} [accent] - Optional emphasized text appended to the title.
 * @param {string} [note] - Optional descriptive text displayed below the title.
 */

export default function SectionHeader({ eyebrow, title, accent, note }) {
  return (
    <header className="mb-14 max-w-2xl">
      <Reveal>
        <span className="eyebrow flex items-center gap-3">
          <span className="h-px w-8 bg-line/25" />
          {eyebrow}
        </span>
      </Reveal>

      <Reveal delay={0.06}>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
          {title}{' '}
          {accent && <span className="text-ice italic">{accent}</span>}
        </h2>
      </Reveal>

      {note && (
        <Reveal delay={0.12}>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">{note}</p>
        </Reveal>
      )}

      <Reveal delay={0.18}>
        <div className="mt-8 h-px w-full bg-gradient-to-r from-line/25 via-line/10 to-transparent" />
      </Reveal>
    </header>
  );
}
