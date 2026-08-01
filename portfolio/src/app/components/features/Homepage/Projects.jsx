'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Code2, GitBranch, Star } from 'lucide-react';

import TiltCard from '../../ui/TiltCard';
import SectionHeader from '../../ui/SectionHeader';
import { RevealGroup, RevealItem } from '../../ui/Reveal';
import { projects, profile } from '../../../data/site';


export default function Projects() {
  const [stats, setStats] = useState({}); // { repoName: { stars, forks } }

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${profile.githubUser}/repos?sort=pushed&per_page=100`
        );
        if (!res.ok) return;
        const repos = await res.json();

        const map = {};
        for (const r of repos) {
          map[r.name.toLowerCase()] = {
            stars: r.stargazers_count,
            forks: r.forks_count,
            updated: r.pushed_at,
          };
        }
        if (!cancelled) setStats(map);
      } catch {
        /* Offline or rate-limited. The cards don't need this to work. */
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="scroll-mt-28 py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <SectionHeader
          eyebrow="selected work"
          title="Things I've"
          accent="built"
          note="Side projects and hackathon builds. Every one of them solved a problem I actually had."
        />

        {/* Featured — two up, larger, with thumbnails */}
        <RevealGroup className="grid grid-cols-1 gap-6 lg:grid-cols-2" stagger={0.1}>
          {featured.map((p) => (
            <RevealItem key={p.title}>
              <ProjectCard project={p} stat={stats[p.repo?.toLowerCase()]} large />
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Everything else — three up, compact */}
        <RevealGroup
          className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {rest.map((p) => (
            <RevealItem key={p.title}>
              <ProjectCard project={p} stat={stats[p.repo?.toLowerCase()]} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------
   CARD
   ------------------------------------------------------------ */
function ProjectCard({ project, stat, large = false }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <TiltCard max={large ? 6 : 8} className="h-full rounded-3xl">
      <article className="glass flex h-full flex-col overflow-hidden rounded-3xl shadow-lift transition-colors duration-500 hover:border-ice/25">
        {/* Thumbnail. Falls back to a typographic plate if the file
            isn't there yet, so a missing image never looks broken. */}
        <div
          className={`relative w-full overflow-hidden border-b border-line/[0.06] ${
            large ? 'aspect-[16/9]' : 'aspect-[16/10]'
          }`}
        >
          {project.image && !imgFailed ? (
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              onError={() => setImgFailed(true)}
            />
          ) : (
            <div className="grid h-full w-full place-items-center bg-gradient-to-br from-panel2 to-void">
              <span className="font-display text-5xl font-bold tracking-tighter text-white/10">
                {project.title}
              </span>
            </div>
          )}

          {/* Floating tech stack tags, sitting on the image */}
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-black/55 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-white/85 backdrop-blur-md"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-xl font-bold tracking-tight text-white">
              {project.title}
            </h3>

            {stat && (
              <div className="flex shrink-0 items-center gap-3 pt-1 font-mono text-[11px] text-muted">
                <span className="flex items-center gap-1">
                  <Star size={12} className="text-ice" /> {stat.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitBranch size={12} className="text-ice" /> {stat.forks}
                </span>
              </div>
            )}
          </div>

          <p className="mt-3 text-sm leading-relaxed text-muted">{project.blurb}</p>

          {/* Two actions, always in the same order and always named
              the same thing across every card. */}
          <div className="mt-6 flex flex-wrap items-center gap-2 pt-4 border-t border-line/[0.06]">
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-signal/90 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-void transition-colors hover:bg-signal"
              >
                Live demo
                <ArrowUpRight
                  size={13}
                  strokeWidth={2.5}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-full border border-line/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-muted/60">
                Runs locally
              </span>
            )}

            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line/15 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-white transition-colors hover:border-ice/40 hover:text-ice"
            >
              <Code2 size={13} strokeWidth={2.5} />
              Code
            </a>
          </div>
        </div>
      </article>
    </TiltCard>
  );
}
