'use client';

import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import type { Project } from '@/data/projects';

type Props = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: Props) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const gradient = useMemo(() => {
    const sets = [
      'from-neon/20 via-transparent to-lime/20',
      'from-coral/20 via-transparent to-neon/20',
      'from-lime/20 via-transparent to-coral/20',
    ];
    return sets[index % sets.length];
  }, [index]);

  return (
    <motion.a
      href={project.github}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ delay: index * 0.06, duration: 0.55 }}
      whileHover={{ y: -6, scale: 1.02 }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;
        setTilt({ x: (py - 0.5) * 8, y: (px - 0.5) * 12 });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(900px) rotateX(${-tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
    >
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
      <div className="relative space-y-4">
        <h3 className="font-display text-lg text-text">{project.title}</h3>
        <p className="text-sm leading-relaxed text-mute">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/15 bg-black/30 px-3 py-1 font-mono text-xs text-neon"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
