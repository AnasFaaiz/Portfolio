'use client';

import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

/* ============================================================
   TYPE LINE
   Types a phrase out, holds it, deletes it, moves to the next.
   Pass a single string to type it once and stop.

   <TypeLine words={['Full-Stack Engineer', 'Automation Builder']} />

   Speeds are in ms. Tweak them at the call site if you want a
   snappier or lazier feel.
   ============================================================ */

export default function TypeLine({
  words = [],
  typeSpeed = 65,
  deleteSpeed = 32,
  holdTime = 1800,
  className = '',
  loop = true,
}) {
  const reduce = useReducedMotion();
  const list = Array.isArray(words) ? words : [words];

  const [index, setIndex] = useState(0);   // which word
  const [text, setText] = useState('');    // what's on screen
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    // Someone asked for less motion — show the first phrase, done.
    if (reduce) {
      setText(list[0] || '');
      return;
    }

    const word = list[index % list.length];
    const done = text === word;
    const empty = text === '';

    let delay = deleting ? deleteSpeed : typeSpeed;
    if (done && !deleting) delay = holdTime;           // pause on a full word
    if (empty && deleting) delay = 400;                // pause before retyping

    const timer = setTimeout(() => {
      if (!deleting && done) {
        if (!loop && index === list.length - 1) return; // finished, stay put
        setDeleting(true);
      } else if (deleting && empty) {
        setDeleting(false);
        setIndex((i) => (i + 1) % list.length);
      } else {
        setText(
          deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, deleting, index, reduce]);

  return (
    <span className={className}>
      {/* Reserves the line height so the layout never jumps between words */}
      <span aria-hidden="true">{text}</span>
      <span className="caret ml-1 inline-block h-[0.9em] w-[3px] translate-y-[2px] bg-signal align-baseline" />
      {/* Screen readers get the full list, not the half-typed string */}
      <span className="sr-only">{list.join(', ')}</span>
    </span>
  );
}
