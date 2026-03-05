export type Project = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
};

const repo = 'https://github.com/bhimpd/';

export const projects: Project[] = [
  {
    title: 'Cypress Automation Framework',
    description: 'Scalable web automation framework with reusable commands, fixtures, and CI-ready reporting.',
    technologies: ['Cypress', 'JavaScript', 'Mocha'],
    github: repo,
  },
  {
    title: 'Playwright Automation Framework',
    description: 'Cross-browser E2E automation with robust locator strategy and modular test architecture.',
    technologies: ['Playwright', 'TypeScript', 'Node.js'],
    github: repo,
  },
  {
    title: 'Banking Portal Automation',
    description: 'Automated testing suite for digital banking flows including account actions and transaction journeys.',
    technologies: ['Playwright', 'API Testing', 'Postman'],
    github: repo,
  },
  {
    title: 'Payment Gateway Automation',
    description: 'Validation framework for payment lifecycle, callback states, and failure recovery scenarios.',
    technologies: ['Cypress', 'Burp Suite', 'JMeter'],
    github: repo,
  },
  {
    title: 'Playwright API Automation Framework',
    description: 'Contract-focused API automation with data-driven tests and reportable assertions.',
    technologies: ['Playwright', 'TypeScript', 'REST APIs'],
    github: repo,
  },
  {
    title: 'Mobile Automation (Appium + WebdriverIO)',
    description: 'Cross-device mobile test framework for regression and smoke validation.',
    technologies: ['Appium', 'WebdriverIO', 'JavaScript'],
    github: repo,
  },
  {
    title: 'Laravel E-commerce',
    description: 'Full-stack commerce application with product catalog, cart, and order flow.',
    technologies: ['Laravel', 'MySQL', 'Bootstrap'],
    github: repo,
  },
  {
    title: 'Online Voting System',
    description: 'Secure voting platform with role-based access and result aggregation.',
    technologies: ['PHP', 'MySQL', 'JavaScript'],
    github: repo,
  },
  {
    title: 'React E-commerce Platform',
    description: 'Modern storefront UI with responsive product browsing and reusable component system.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: repo,
  },
];
