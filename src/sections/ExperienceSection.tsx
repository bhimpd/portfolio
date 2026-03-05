'use client';

import { motion } from 'framer-motion';
import { experience } from '@/data/experience';
import { sectionReveal } from '@/animations/motionVariants';

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 py-24">
      <motion.div
        className="mx-auto w-full max-w-6xl px-4 md:px-8"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-neon">Experience</p>
        <h2 className="mt-2 font-display text-3xl text-text md:text-4xl">Professional Timeline</h2>

        <div className="relative mt-10 space-y-8 before:absolute before:left-[9px] before:top-2 before:h-[calc(100%-10px)] before:w-px before:bg-white/15 md:before:left-1/2">
          {experience.map((item, index) => (
            <motion.article
              key={item.company + item.duration}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              className="relative ml-8 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl md:ml-0 md:w-[47%] md:odd:mr-auto md:even:ml-auto"
            >
              <div className="absolute -left-[24px] top-6 h-4 w-4 rounded-full border-2 border-neon bg-bg md:left-auto md:right-[-35px] md:odd:right-[-35px] md:even:left-[-35px]" />
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-lime">{item.duration}</p>
              <h3 className="mt-2 font-display text-xl text-text">{item.role}</h3>
              <p className="text-sm text-neon">{item.company}</p>
              <ul className="mt-4 space-y-2 text-sm text-mute">
                {item.responsibilities.map((resp) => (
                  <li key={resp}>- {resp}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-mute">Tech: {item.technologies.join(', ')}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
