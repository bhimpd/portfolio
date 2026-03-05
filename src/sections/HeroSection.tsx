'use client';

import { motion } from 'framer-motion';
import { GlobeScene } from '@/three/GlobeScene';
import { fadeUp, stagger } from '@/animations/motionVariants';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen scroll-mt-24 pt-28 md:pt-32">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:px-8">
        <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-6">
          <motion.p variants={fadeUp} className="font-mono text-sm uppercase tracking-[0.24em] text-neon">
            Software Engineer
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-display text-4xl leading-tight text-text sm:text-5xl md:text-6xl">
            Bhim Prasad
            <span className="bg-gradient-to-r from-neon via-lime to-coral bg-clip-text text-transparent"> Lamichhane</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="max-w-xl text-base leading-relaxed text-mute md:text-lg">
            Full Stack Engineer and QA Automation Engineer focused on high-reliability software, digital banking quality, and automation-first product delivery.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-xl bg-gradient-to-r from-neon to-lime px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.03]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-text transition hover:border-neon/70 hover:text-neon"
            >
              Contact
            </a>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }}>
          <div className="rounded-3xl border border-white/10 bg-panel/40 shadow-glow backdrop-blur-xl">
            <GlobeScene />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
