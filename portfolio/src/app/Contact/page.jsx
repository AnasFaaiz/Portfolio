"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail, MessageSquare } from 'lucide-react';

import SectionHeader from '../components/ui/SectionHeader';
import Reveal, { RevealGroup, RevealItem } from '../components/ui/Reveal';
import { profile } from '../data/site';

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
  );
}

