"use client";

import Navbar from '../components/layout/Navbar';
import Contact from '../components/features/Homepage/Contact';

const channels = [
  {
    name: 'Email',
    handle: profile.email,
    note: 'Fastest way to reach me',
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    name: 'LinkedIn',
    handle: '/in/anasfaaiz',
    note: 'Roles and introductions',
    href: profile.linkedin,
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    handle: `@${profile.githubUser}`,
    note: 'Everything I build lives here',
    href: profile.github,
    icon: Github,
  },
  {
    name: 'Discord',
    handle: 'anasfaaiz',
    note: 'For anything quicker',
    href: profile.discord,
    icon: MessageSquare,
  },
];

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

