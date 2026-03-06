'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import skillImage from '@/app/skillimage.jpg';

type Props = {
  data: unknown[];
};

export function RadarChart({ data }: Props) {
  void data;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-glow backdrop-blur-xl"
    >
      <Image
        src={skillImage}
        alt="Skills overview"
        className="mx-auto h-auto w-full object-contain"
        sizes="(min-width: 768px) 45vw, 100vw"
        priority={false}
      />
    </motion.div>
  );
}
