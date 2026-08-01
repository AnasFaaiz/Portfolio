'use client';
import Navbar from '../components/layout/Navbar';
import Projects from '../components/features/Homepage/Projects';

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        <Projects />
      </main>
    </>
  );
}
