export type Project = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
};

export const projects: Project[] = [
  {
    title: 'Cypress Automation Framework',
    description: 'Developed a complete E2E automation suite covering authentication, CRUD flows, CMS modules, and regression scenarios using reusable page objects, custom commands, and fixtures.',
    technologies: ['Cypress', 'JavaScript', 'Mocha'],
    github: 'https://github.com/bhimpd/sauce_demo',
  },
  {
    title: 'Playwright Automation Framework',
    description: 'Built scalable automation scripts using Page Object Model (POM) to test login flows, admin modules, form validations, and multi-page navigation. Implemented waits, reporting, retries, and test hooks for reliable cross-browser testing.Integrated CI/CD pipelines using Jenkins to automate build, test, and report generation, ensuring end-to-end automation and improved release efficiency.',
    technologies: ['Playwright', 'TypeScript', 'Node.js'],
    github: 'https://github.com/bhimpd/playwright_automation',
  },
  {
    title: 'Banking Portal Automation',
    description: 'Automated core modules of a digital banking portal including login (positive & negative), global setup parameters (add/edit/update flows), error validation, and transaction processing. Implemented POM, fixtures, reusable actions, and data-driven testing for robust test coverage.',
    technologies: ['Playwright', 'API Testing', 'Postman'],
    github: 'https://github.com/bhimpd/Banking-Portal',
  },
  {
    title: 'Payment Gateway Automation',
    description: 'Designed automation for PG (middleware between CBS and mobile banking) covering secure login module, credentials setup for new banks, CRUD operations, and error handling with positive and negative scenarios. Implemented POM, fixtures, reusable actions, and data-driven testing.',
    technologies: ['Cypress', 'Burp Suite', 'JMeter'],
    github: 'https://github.com/bhimpd/Payment-Gateway',
  },
  {
    title: 'Playwright API Automation Framework',
    description: 'Developed a complete API automation framework using Playwright, focusing on contract validation, data-driven tests, and reportable assertions.',
    technologies: ['Playwright', 'TypeScript', 'REST APIs'],
    github: 'https://github.com/bhimpd/playwright_api_automation',
  },
  {
    title: 'Mobile Automation (Appium + WebdriverIO)',
    description: 'Developed a full mobile automation suite for an Android ToDo application using Appium and WebdriverIO. Automated app launch, UI interactions, functional validations, and parallel execution across multiple devices. Integrated Allure reporting for detailed test execution analysis and dashboards.',
    technologies: ['Appium', 'WebdriverIO', 'JavaScript'],
    github: 'https://github.com/bhimpd/mble_automation_to_do_app',
  },
  {
    title: 'Laravel E-commerce',
    description: 'Developed a dynamic full-stack e-commerce system with product catalog, cart, order flow, and admin-controlled product management.',
    technologies: ['Laravel', 'MySQL', 'Bootstrap'],
    github: 'https://github.com/bhimpd/laravel_2ndecommerce',
  },
  {
    title: 'Online Voting System',
    description: 'Created a secure online voting platform with role-based access, group voting, CRUD operations for voters & groups, and result aggregation.',
    technologies: ['PHP', 'MySQL', 'JavaScript'],
    github: 'https://github.com/bhimpd/Online-Voting-System',
  },
  {
    title: 'React E-commerce Platform',
    description: 'Developed a modern e-commerce storefront with responsive product browsing, filtering, add-to-cart functionality, and reusable component system.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: 'https://bhimassignment.netlify.app/',
  },
];
