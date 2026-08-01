'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';

import SectionHeader from '../../ui/SectionHeader';
import { RevealGroup, RevealItem } from '../../ui/Reveal';
import { certifications } from '../../../data/site';

/* ============================================================
   CERTIFICATIONS

   The glow: each card is a 1px-padded wrapper. A radial gradient
   sits in that padding and follows the cursor, so the border
   lights up under the pointer instead of the whole card turning
   blue. Click a card to open the full certificate.
   ============================================================ */

export default function Certifications() {
  const [active, setActive] = useState(null);

  return (
    <section id="credentials" className="scroll-mt-28 py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <SectionHeader
          eyebrow="verified"
          title="Certifications &"
          accent="coursework"
          note="Click any card to see the certificate, or jump straight to the credential."
        />

        <Group
          label="Industry certifications"
          items={certifications.professional}
          onSelect={setActive}
        />

        <Group
          label="Foundations & continued learning"
          items={certifications.learning}
          onSelect={setActive}
          className="mt-16"
        />
      </div>

      <AnimatePresence>
        {active && <CertModal cert={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}

function Group({ label, items, onSelect, className = '' }) {
  return (
    <div className={className}>
      <p className="eyebrow mb-6">{label}</p>
      <RevealGroup
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        stagger={0.06}
      >
        {items.map((cert) => (
          <RevealItem key={cert.title}>
            <GlowCard cert={cert} onSelect={onSelect} />
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}

function GlowCard({ cert, onSelect }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hot, setHot] = useState(false);

  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHot(true)}
      onMouseLeave={() => setHot(false)}
      className="relative h-full rounded-3xl p-px"
    >
      {/* The glowing border lives in the 1px padding */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl transition-opacity duration-300"
        style={{
          opacity: hot ? 1 : 0,
          background: `radial-gradient(180px circle at ${pos.x}px ${pos.y}px, var(--ice), transparent 62%)`,
        }}
      />

      <div className="glass relative flex h-full w-full items-start gap-4 rounded-[calc(1.5rem-1px)] bg-panel p-5">
        {/* Full-card click target. Sits under the credential link so the
            two never fight over the same pixels. */}
        <button
          type="button"
          onClick={() => onSelect(cert)}
          className="absolute inset-0 z-0 rounded-[calc(1.5rem-1px)]"
        >
          <span className="sr-only">View the {cert.title} certificate</span>
        </button>

        <span className="pointer-events-none grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/[0.04] p-2.5">
          <Image
            src={cert.imageUrl}
            alt=""
            width={40}
            height={40}
            className="h-full w-full object-contain"
          />
        </span>

        <span className="pointer-events-none min-w-0 flex-1">
          <span className="block font-display text-[15px] font-semibold leading-snug text-white">
            {cert.title}
          </span>
          <span className="mt-1.5 block font-mono text-[11px] uppercase tracking-wider text-muted">
            {cert.issuer} · {cert.date}
          </span>
        </span>

        {cert.credentialUrl !== '#' && (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open the ${cert.title} credential`}
            className="relative z-10 shrink-0 rounded-lg p-1.5 text-muted transition-colors hover:text-ice"
          >
            <ExternalLink size={15} />
          </a>
        )}
      </div>
    </div>
  );
}

function CertModal({ cert, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] grid place-items-center bg-void/85 px-4 backdrop-blur-xl"
    >
      <motion.div
        initial={{ scale: 0.94, y: 16, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.94, y: 16, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="glass relative w-full max-w-3xl rounded-3xl bg-panel p-6"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 rounded-full p-2 text-muted transition-colors hover:bg-white/5 hover:text-white"
        >
          <X size={18} />
        </button>

        <p className="eyebrow">{cert.issuer} · {cert.date}</p>
        <h3 className="mt-2 pr-10 font-display text-2xl font-bold text-white">
          {cert.title}
        </h3>

        <div className="relative mt-6 h-[min(52vh,420px)] w-full overflow-hidden rounded-2xl border border-line/10 bg-black">
          <Image src={cert.imageUrl} alt={cert.title} fill className="object-contain" />
        </div>

        {cert.credentialUrl !== '#' && (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-void transition-transform hover:-translate-y-0.5"
          >
            View credential
            <ExternalLink size={13} strokeWidth={2.5} />
          </a>
        )}
      </motion.div>
    </motion.div>
  );
}
