'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-8">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-panel/65 px-4 py-3 backdrop-blur-xl">
        <Link href="#home" className="font-display text-sm uppercase tracking-[0.22em] text-text">
          Bhim PD
        </Link>

        <button
          className="rounded-md border border-white/20 px-3 py-2 text-xs text-text md:hidden"
          onClick={() => setOpen((v) => !v)}
          type="button"
          aria-label="Toggle menu"
        >
          Menu
        </button>

        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm text-mute transition-colors duration-300 hover:text-neon"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-2 flex w-full max-w-6xl flex-col gap-1 rounded-2xl border border-white/10 bg-panel/90 p-3 backdrop-blur-xl md:hidden"
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-lg px-3 py-2 text-sm text-mute transition hover:bg-white/5 hover:text-neon"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </header>
  );
}
