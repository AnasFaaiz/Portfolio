
"use client"

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <SectionHeader
          eyebrow="say hello"
          title="Let's build"
          accent="something"
          note="I'm looking for an internship or a junior role, and my inbox is open either way."
        />
 
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Primary call to action */}
          <Reveal>
            <a
              href={`mailto:${profile.email}`}
              className="group glass relative flex h-full flex-col justify-between overflow-hidden rounded-3xl p-10 transition-colors duration-500 hover:border-ice/25"
            >
              {/* Glow that wakes up on hover */}
              <span className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-beam/15 blur-[90px] transition-opacity duration-700 opacity-60 group-hover:opacity-100" />
 
              <div className="relative">
                <p className="eyebrow">write to me</p>
                <h3 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
                  Got something you
                  <br />
                  need built?
                </h3>
                <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-muted">
                  Tell me what it does and who it's for. I'll tell you honestly
                  whether I'm the right person for it.
                </p>
              </div>
 
              <div className="relative mt-12 flex items-center gap-3">
                <span className="font-mono text-sm text-ice underline-offset-4 group-hover:underline">
                  {profile.email}
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-ice transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </div>
            </a>
          </Reveal>
 
          {/* Channel list */}
          <RevealGroup className="grid grid-cols-1 gap-3 sm:grid-cols-2" stagger={0.07}>
            {channels.map((c) => (
              <RevealItem key={c.name}>
                <a
                  href={c.href}
                  target={c.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="glass group flex h-full flex-col justify-between gap-6 rounded-3xl p-6 transition-colors duration-300 hover:border-ice/25"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/[0.04] text-muted transition-colors group-hover:bg-ice group-hover:text-void">
                    <c.icon size={18} strokeWidth={2.2} />
                  </span>
                  <span>
                    <span className="block font-display text-base font-semibold text-white">
                      {c.name}
                    </span>
                    <span className="mt-1 block truncate font-mono text-[11px] text-ice">
                      {c.handle}
                    </span>
                    <span className="mt-2 block text-xs text-muted">{c.note}</span>
                  </span>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
 
        {/* Footer line */}
        <Reveal className="mt-20 flex flex-col items-center justify-between gap-3 border-t border-line/[0.06] pt-8 sm:flex-row">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            Built with Next.js · three.js · Tailwind
          </p>
        </Reveal>
      </div>
    </section>
  );
}
