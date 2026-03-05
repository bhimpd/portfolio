export type Experience = {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
  technologies: string[];
};

export const experience: Experience[] = [
  {
    company: 'InfoDevelopers Pvt Ltd',
    role: 'QA Automation Engineer',
    duration: 'July 2025 - Present',
    responsibilities: [
      'Web and mobile banking application testing',
      'Payment gateway testing and transaction validation',
      'API automation and cross-device quality checks',
      'Security testing with Burp Suite and automation in Playwright',
    ],
    technologies: ['Playwright', 'Burp Suite', 'Postman', 'API Testing', 'Mobile Testing', 'Appium', 'Azure DevOps'],
  },
  {
    company: 'Intuji Pvt Ltd',
    role: 'Trainee Software Engineer & QA Automation Engineer',
    duration: 'May 2024 - July 2025',
    responsibilities: [
      'Magento 2 feature development and REST API integration',
      'Cypress automation for e-commerce workflows',
      'CMS automation and reusable test framework development',
    ],
    technologies: ['Magento 2', 'Cypress', 'REST APIs', 'JavaScript'],
  },
  {
    company: 'Intuji Pvt Ltd',
    role: 'Intern',
    duration: 'Jan 2024 - Apr 2024',
    responsibilities: ['API development support', 'Magento backend contributions', 'Manual testing and QA process support'],
    technologies: ['Magento', 'PHP', 'MySQL', 'Manual Testing'],
  },
  {
    company: 'SAIT',
    role: 'Frontend Developer',
    duration: 'Feb 2023 - Dec 2023',
    responsibilities: ['Responsive web development', 'SEO optimization and performance tuning'],
    technologies: ['React', 'JavaScript', 'CSS', 'SEO'],
  },
];