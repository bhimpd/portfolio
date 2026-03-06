'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { skills } from '@/data/skills';
import { sectionReveal } from '@/animations/motionVariants';
import skillImage from '@/app/skillimage.jpg';

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 py-24">
      <motion.div
        className="mx-auto w-full max-w-6xl px-4 md:px-8"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-neon">Skills</p>
        <h2 className="mt-2 font-display text-3xl text-text md:text-4xl">Skills</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

        <motion.div
          whileHover={{ y: -4 }}
          className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-glow backdrop-blur-xl"
        >
          <Image
            src={skillImage}
            alt="Skills visual"
            className="h-auto w-full object-contain"
            sizes="100vw"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
