'use client';

import { motion } from 'framer-motion';
import { RadarChart } from '@/components/RadarChart';
import { skills } from '@/data/skills';
import { sectionReveal } from '@/animations/motionVariants';

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 py-24">
      <motion.div
        className="mx-auto grid w-full max-w-6xl items-start gap-10 px-4 md:grid-cols-[1.05fr_0.95fr] md:px-8"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-neon">Skills</p>
          <h2 className="mt-2 font-display text-3xl text-text md:text-4xl">Interactive Skill Matrix</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {skills.map((category) => (
              <motion.article
                key={category.title}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
              >
                <h3 className="font-display text-base text-text">{category.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs text-mute">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <RadarChart data={skills} />
      </motion.div>
    </section>
  );
}
