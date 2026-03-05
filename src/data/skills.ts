export type SkillCategory = {
  title: string;
  items: string[];
  score: number;
};

export const skills: SkillCategory[] = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React'],
    score: 85,
  },
  {
    title: 'Backend',
    items: ['PHP', 'Node.js', 'Laravel', 'JavaScript', 'Java'],
    score: 78,
  },
  {
    title: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'MongoDB'],
    score: 80,
  },
  {
    title: 'Testing & QA',
    items: ['Cypress', 'Playwright', 'Selenium', 'JMeter', 'Postman', 'Burp Suite', 'Appium'],
    score: 92,
  },
  {
    title: 'Tools & DevOps',
    items: ['GitHub', 'ClickUp', 'Apidog', 'Docker', 'Linux', 'Magento2', 'REST APIs', 'Netsuite'],
    score: 82,
  },
];
