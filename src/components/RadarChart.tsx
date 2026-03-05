'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';
import type { SkillCategory } from '@/data/skills';

type Props = {
  data: SkillCategory[];
};

const size = 340;
const center = size / 2;
const maxRadius = 120;

export function RadarChart({ data }: Props) {
  const points = useMemo(() => {
    return data.map((item, index) => {
      const angle = (Math.PI * 2 * index) / data.length - Math.PI / 2;
      const radius = (item.score / 100) * maxRadius;
      const x = center + Math.cos(angle) * radius;
      const y = center + Math.sin(angle) * radius;
      return { x, y, angle, label: item.title };
    });
  }, [data]);

  const polygon = points.map((p) => `${p.x},${p.y}`).join(' ');

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-glow backdrop-blur-xl"
    >
      <svg viewBox={`0 0 ${size} ${size}`} className="mx-auto h-[300px] w-full max-w-[340px]">
        {[0.25, 0.5, 0.75, 1].map((level) => (
          <circle
            key={level}
            cx={center}
            cy={center}
            r={maxRadius * level}
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth={1}
          />
        ))}

        {points.map((point, index) => {
          const axisX = center + Math.cos(point.angle) * maxRadius;
          const axisY = center + Math.sin(point.angle) * maxRadius;
          return (
            <g key={point.label}>
              <line x1={center} y1={center} x2={axisX} y2={axisY} stroke="rgba(255,255,255,0.12)" strokeWidth={1} />
              <text
                x={center + Math.cos(point.angle) * (maxRadius + 24)}
                y={center + Math.sin(point.angle) * (maxRadius + 24)}
                fill="rgba(232,237,245,0.95)"
                textAnchor="middle"
                fontSize="10"
              >
                {data[index].title}
              </text>
            </g>
          );
        })}

        <motion.polygon
          points={polygon}
          fill="rgba(34,211,238,0.22)"
          stroke="rgba(34,211,238,0.9)"
          strokeWidth={2}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        />

        {points.map((point) => (
          <circle key={`${point.x}-${point.y}`} cx={point.x} cy={point.y} r={3.5} fill="#22d3ee" />
        ))}
      </svg>
    </motion.div>
  );
}
