'use client';

import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { sectionReveal } from '@/animations/motionVariants';

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 py-24">
      <motion.div
        className="mx-auto w-full max-w-6xl px-4 md:px-8"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-neon">Projects</p>
        <h2 className="mt-2 font-display text-3xl text-text md:text-4xl">Interactive Work Showcase</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
