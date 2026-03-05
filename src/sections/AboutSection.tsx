'use client';

import { motion } from 'framer-motion';
import { sectionReveal, stagger } from '@/animations/motionVariants';

const milestones = [
  { year: '2023', label: 'Frontend Developer at SAIT' },
  { year: '2024', label: 'Intern to Trainee at Intuji' },
  { year: '2025', label: 'QA Automation Engineer at InfoDevelopers' },
  { year: 'Now', label: 'Building scalable full stack + QA systems' },
];

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-24">
      <motion.div
        className="mx-auto w-full max-w-6xl px-4 md:px-8"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="mb-10">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-neon">About</p>
          <h2 className="mt-2 font-display text-3xl text-text md:text-4xl">Story and Professional Summary</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-mute">
            Motivated Full Stack Engineer with hands-on experience in web development, backend systems, QA automation, and digital banking applications. Skilled in building scalable solutions using modern frameworks, end-to-end testing, API validation, automation scripting, and quality-focused software delivery.
          </p>
        </div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-4 md:grid-cols-2">
          {milestones.map((item) => (
            <motion.article
              key={item.label}
              variants={sectionReveal}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
            >
              <p className="font-mono text-sm text-lime">{item.year}</p>
              <p className="mt-2 text-sm text-text">{item.label}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
