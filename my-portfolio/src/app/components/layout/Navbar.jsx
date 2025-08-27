"use client";

import Link from "next/link";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';


const navItems = [
  { name: "Projects", href: "/Projects" },
  { name: "Blogs", href: "/Blogs" },
  { name: "Contact", href: "/Contact" },
  { name: "Certificates", href: "/Certificates"},
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
        <div className="relative z-20 h-14 flex items-center justify-between rounded-full bg-gray-950/70 backdrop-blur-lg border border-white/10 px-6 shadow-lg shadow-black/20">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300">
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
                    className={`relative px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 rounded-full`}
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
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 rounded-full hover:bg-white/10">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
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
              <ul className="flex flex-col items-center gap-4 py-4 bg-gray-950/90 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg w-full text-center py-2 ${pathname === item.href ? 'text-blue-400' : 'text-gray-300'}`}
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
