'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeUp, stagger } from '@/animations/motionVariants';
import heroImage from '@/app/heroimage.jpg';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen scroll-mt-24 pt-28 md:pt-32">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 md:grid-cols-[0.85fr_1.15fr] md:px-8">
        <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-6 md:max-w-lg">
          <motion.p variants={fadeUp} className="font-mono text-sm uppercase tracking-[0.24em] text-neon">
            QA Automation Engineer
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-display text-4xl leading-tight text-text sm:text-5xl md:text-6xl">
            Bhim Prasad
            <span className="bg-gradient-to-r from-neon via-lime to-coral bg-clip-text text-transparent"> Lamichhane</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="max-w-xl text-base leading-relaxed text-mute md:text-lg">
           Hi, I&apos;m Bhim Prasad Lamichhane — QA Automation Engineer <br /><br />

  • Manual Testing • Playwright • Cypress • Selenium <br />
   • JMeter • Burp Suite • Automation Frameworks  <br /> • Jenkins • Git/GitLab <br /><br />

  Mentoring junior engineers and interns while ensuring high-quality software delivery.
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
          <div className="rounded-3xl border border-white/10 bg-panel/40 p-3 shadow-glow backdrop-blur-xl">
            <Image
              src={heroImage}
              alt="Bhim Prasad Lamichhane hero portrait"
              className="h-[380px] w-full object-contain md:h-[540px]"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
