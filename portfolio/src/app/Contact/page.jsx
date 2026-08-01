"use client";

import Navbar from '../components/layout/Navbar';
import Contact from '../components/features/Homepage/Contact';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        <Contact />
      </main>
    </>
  );
}

