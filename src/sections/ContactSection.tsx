'use client';

import { motion } from 'framer-motion';
import { sectionReveal } from '@/animations/motionVariants';

const contacts = [
  { label: 'Email', value: 'dreamypd73@gmail.com', href: 'mailto:dreamypd73@gmail.com' },
  { label: 'Phone', value: '+9779814495185', href: 'tel:+9779814495185' },
  { label: 'GitHub', value: 'github.com/bhimpd', href: 'https://github.com/bhimpd/' },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/bhim-pd-lamichhane-a8275819b',
    href: 'https://www.linkedin.com/in/bhim-pd-lamichhane-a8275819b/',
  },
  { label: 'Location', value: 'Kathmandu, Nepal', href: '#' },
];

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-24">
      <motion.div
        className="mx-auto grid w-full max-w-6xl gap-8 px-4 md:grid-cols-[1fr_1fr] md:px-8"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-neon">Contact</p>
          <h2 className="mt-2 font-display text-3xl text-text md:text-4xl">Let&apos;s Build Something Reliable</h2>
          <div className="mt-6 space-y-3">
            {contacts.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-mute transition hover:border-neon/50 hover:text-text"
              >
                <span className="mr-2 font-mono text-xs uppercase tracking-[0.14em] text-neon">{item.label}</span>
                {item.value}
              </a>
            ))}
          </div>
        </div>

        <motion.form
          className="rounded-2xl border border-neon/30 bg-panel/60 p-6 shadow-glow backdrop-blur-xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-white/20 bg-black/35 px-4 py-3 text-sm text-text outline-none transition focus:border-neon focus:shadow-[0_0_18px_rgba(34,211,238,0.3)]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-xl border border-white/20 bg-black/35 px-4 py-3 text-sm text-text outline-none transition focus:border-neon focus:shadow-[0_0_18px_rgba(34,211,238,0.3)]"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full rounded-xl border border-white/20 bg-black/35 px-4 py-3 text-sm text-text outline-none transition focus:border-neon focus:shadow-[0_0_18px_rgba(34,211,238,0.3)]"
            />
            <button
              type="button"
              className="w-full rounded-xl bg-gradient-to-r from-neon to-lime px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.01]"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
}
