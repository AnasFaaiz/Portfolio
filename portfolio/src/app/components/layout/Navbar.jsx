"use client";

import Link from "next/link";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2.5 rounded-full bg-white/5 border border-black/5 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300 shadow-sm"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? <Sun size={18} strokeWidth={2.5} /> : <Moon size={18} strokeWidth={2.5} />}
    </button>
  );
};

const navItems = [
  { name: "Home", href: "/Homepage" },
  { name: "Projects", href: "/Projects" },
  { name: "Certifications", href: "/Certifications" },
  { name: "Contact", href: "/Homepage#contact" },
];

const Navbar = () => {
  const [pathname, setPathname] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setPathname(window.location.pathname);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-full max-w-4xl px-4 transition-all duration-500 ${scrolled ? 'top-4' : 'top-6'}`}>
      <div className="relative">
        <div className="relative z-20 h-16 flex items-center justify-between rounded-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 px-6 sm:px-8 shadow-[0_8px_32px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-300">
          {/* Logo */}
          <Link href="/Homepage" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-xs shadow-lg shadow-blue-500/50 group-hover:scale-110 transition-transform">AF</div>
            <span className="text-xl font-black tracking-tighter text-slate-800 dark:text-white group-hover:text-blue-600 transition-colors">SYED.</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            <ul className="flex items-center gap-1 text-[11px] font-black uppercase tracking-widest">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (typeof window !== 'undefined' && window.location.hash === item.href.split('#')[1]);
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={`relative px-4 py-2 flex items-center gap-1.5 transition-colors duration-300 rounded-full group ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="active-pill"
                          className="absolute inset-0 bg-blue-500/10 dark:bg-blue-400/10 border border-blue-500/20 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.1)]"
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{item.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
            
            <div className="w-px h-6 bg-slate-200 dark:bg-white/10 mx-4" />
            <ThemeToggle />
          </div>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center gap-3">
            <ThemeToggle />
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2.5 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-white hover:text-blue-600 transition-all duration-300"
            >
              {isOpen ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="lg:hidden absolute top-[4.5rem] left-0 right-0 z-10"
            >
              <div className="bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border border-slate-200/50 dark:border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden p-3">
                <ul className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between px-6 py-4 rounded-3xl bg-slate-50/50 dark:bg-white/5 hover:bg-blue-500/10 dark:hover:bg-blue-400/10 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-black uppercase tracking-widest transition-all"
                      >
                        {item.name}
                        <ArrowUpRight size={16} className="opacity-30" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
