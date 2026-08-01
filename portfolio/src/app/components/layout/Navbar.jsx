'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import { navLinks, profile } from '../../data/site';

export default function Navbar() {
  const [active, setActive] = useState(navLinks[0].id);
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  /* Swap to the solid background once the hero is behind us */
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Scroll spy */
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      {
        /* Only count a section once it reaches the middle band of the screen */
        rootMargin: '-45% 0px -45% 0px',
        threshold: [0, 0.25, 0.5, 1],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[80] transition-all duration-500 ${
        solid ? 'border-b border-line/[0.06] bg-void/70 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4">
        {/* Wordmark */}
        <a
          href="/#top"
          className="font-mono text-[13px] tracking-[0.2em] text-white"
          aria-label="Back to top"
        >
          anas<span className="text-signal">.</span>faaiz
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id} className="relative">
              <a
                href={`/#${link.id}`}
                className={`relative z-10 block px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors ${
                  active === link.id ? 'text-void' : 'text-muted hover:text-white'
                }`}
              >
                {link.label}
              </a>

              {/* One pill, shared across links — framer-motion slides it */}
              {active === link.id && (
                <motion.span
                  layoutId="nav-pill"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-white"
                />
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.resume}
            download
            className="hidden rounded-full border border-line/15 px-5 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white transition-colors hover:border-ice/40 hover:text-ice sm:block"
          >
            Resume
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="rounded-full p-2 text-white md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="overflow-hidden border-t border-line/[0.06] bg-void/95 px-6 pb-6 pt-2 backdrop-blur-xl md:hidden"
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`/#${link.id}`}
                onClick={() => setOpen(false)}
                className={`block border-b border-line/[0.05] py-4 font-mono text-sm uppercase tracking-[0.16em] ${
                  active === link.id ? 'text-ice' : 'text-muted'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </header>
  );
}
