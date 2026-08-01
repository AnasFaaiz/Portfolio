'use client';
import Navbar from '../components/layout/Navbar';
import Certifications from '../components/features/Homepage/Certifications';

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        <Certifications />
      </main>
    </>
  );
}
