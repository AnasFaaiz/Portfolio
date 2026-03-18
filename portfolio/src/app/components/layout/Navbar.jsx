"use client";

import Link from "next/link";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-blue-400 transition-all duration-300"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

const navItems = [
  { name: "Home", href: "/Homepage" },
  { name: "Projects", href: "/Projects" },
  // { name: "Blogs", href: "/Blogs" },
  { name: "Contact", href: "/Contact" },
  { name: "Certifications", href: "/Certifications" },
];

const Navbar = () => {
  const [pathname, setPathname] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-5 sm:px-0">
      <div className="relative">
        {/* Main Navbar Body */}
        <div className="relative z-20 h-14 flex items-center justify-between rounded-full bg-white/70 dark:bg-gray-950/70 backdrop-blur-lg border border-black/5 dark:border-white/10 px-4 sm:px-6 shadow-lg shadow-black/5 dark:shadow-black/20">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-500 transition-colors duration-300">
            <strong>AF</strong>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-2 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`relative px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 rounded-full`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-pill"
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/50 rounded-full"
                        style={{ borderRadius: 9999 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </a>
                </li>
              );
            })}
            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 dark:text-white p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10">
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
          </ul>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden absolute top-16 left-0 w-full"
            >
              <ul className="flex flex-col items-center gap-4 py-4 bg-white/95 dark:bg-gray-950/90 backdrop-blur-lg border border-black/5 dark:border-white/10 rounded-2xl shadow-xl">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg w-full text-center py-2 ${pathname === item.href ? 'text-blue-500 font-bold' : 'text-gray-600 dark:text-gray-300'}`}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
