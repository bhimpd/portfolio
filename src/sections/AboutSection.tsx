'use client';

import { motion } from 'framer-motion';
import { sectionReveal, stagger } from '@/animations/motionVariants';

const milestones = [
  { year: 'Feb 2023 - Dec 2023', label: 'Frontend Developer at SAIT' },
  { year: 'Jan 2024 - July 2025', label: 'Intern to Trainee at Intuji' },
  { year: 'July 2025 - Now', label: 'QA Automation Engineer at InfoDevelopers' },
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
            QA Automation Engineer with strong experience in testing complex web, mobile, and digital banking systems. 
Skilled in manual testing, automation framework development, API validation, performance testing, 
and security testing to ensure high-reliability software delivery across banking platforms. <br /><br />

Experienced in testing both **web applications and mobile banking applications**, performing end-to-end validation 
of critical financial workflows such as authentication, transactions, wallet operations, and payment services. 
Built and maintained automation suites using Playwright, Cypress, and Selenium, performed load testing with 
JMeter, and conducted security validation using Burp Suite. <br /><br />

Comfortable working across the full software testing lifecycle including requirement analysis, test case design, 
defect tracking, regression testing, and release validation. Also experienced in **mobile test automation using 
Appium** and validating applications across multiple devices and environments. <br /><br />

Passionate about improving software quality through automation-first testing practices, mentoring junior engineers 
and interns, and collaborating with cross-functional teams using tools like ClickUp and Azure DevOps.
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
