export const personal = {
  name: 'Malek Ferjani',
  role: 'Full-Stack Engineer | IBM Maximo Technical Consultant | Cloud-Native Microservices Engineer',
  location: 'Tunis, Tunisia',
  timezone: 'UTC+1',
  email: 'ferjenimelek42@gmail.com',
  phone: '+216 50 532 972',
  languages: ['Arabic (native)', 'French (professional)', 'English (professional)'],
  summary:
    'Backend-leaning full-stack engineer with 3+ years building scalable enterprise applications. Java specialist with strong Angular/React frontend chops. Deep IBM Maximo expertise — MBO customizations, automation scripts, OSLC/REST integrations.',
} as const;

export const experience = [
  {
    company: 'Sinorfi',
    title: 'Full-Stack Engineer · IBM Maximo Technical Consultant',
    period: { start: '2023', end: 'present' },
    bullets: [
      'Built Java-based Maximo customizations — MBO extensions, business logic, UI layers, and automation scripts for workflows and validations.',
      'Designed OSLC and REST APIs connecting IBM Maximo with Angular web apps, Flutter mobile apps, and Java/Node.js backend services.',
      'Administered IBM WebSphere environments — deployments, performance tuning, server configuration for Maximo production systems.',
      'Created continuous deployment pipelines to WebSphere via Azure DevOps, automating builds, testing, and release cycles.',
      'Worked as technico-functional Maximo consultant — gathering requirements, aligning technical implementations with business needs.',
      'Architected end-to-end Java backend services for real-time synchronization of assets, work orders, and events.',
      'Optimized integration workflows and data pipelines, improving system reliability and response times.',
    ],
  },
] as const;

export const skills = [
  {
    id: '01',
    label: 'Frontend',
    file: '.frontend',
    items: ['Angular', 'React.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Material UI', 'Bootstrap', 'NgRx / Redux', 'Jest', 'Cypress'],
  },
  {
    id: '02',
    label: 'Backend',
    file: '.backend',
    items: ['Java (Spring Boot)', 'Node.js', 'PHP (Symfony)', 'Python (Django/Flask)', 'RESTful APIs', 'OSLC', 'Microservices', 'Event-Driven', 'Serverless (AWS Lambda)'],
  },
  {
    id: '03',
    label: 'Data',
    file: '.data',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'ORM / JPA', 'Data Modeling', 'Performance Tuning'],
  },
  {
    id: '04',
    label: 'IBM Maximo',
    file: '.maximo',
    items: ['Automation Scripts', 'MBO Customization', 'API Integrations', 'Workflow Customization', 'UI Customization', 'Maximo App Suite'],
  },
  {
    id: '05',
    label: 'Cloud & DevOps',
    file: '.devops',
    items: ['AWS (Lambda, ECS, S3, API Gateway, RDS, CloudWatch)', 'Terraform', 'Docker', 'GitLab CI/CD', 'GitHub Actions', 'Azure DevOps', 'Agile / Scrum'],
  },
  {
    id: '06',
    label: 'Tools',
    file: '.tools',
    items: ['IBM Maximo', 'WebSphere', 'IT4US', 'n8n', 'Git'],
  },
] as const;

export const projects = [
  {
    num: '01',
    slug: 'gitlab-cicd-pipeline',
    title: 'GitLab CI/CD Pipeline Automation',
    blurb: 'Multi-stage pipelines covering unit tests, integration tests, Docker builds, and blue/green deployments to AWS ECS.',
    tags: ['GitLab CI', 'Docker', 'AWS ECS', 'Blue/Green'],
    accent: 'accent',
  },
  {
    num: '02',
    slug: 'banking-web-app',
    title: 'Banking Web App',
    blurb: 'Secure full-stack banking application with JWT authentication, role-based access, and a PostgreSQL backend.',
    tags: ['Angular', 'Node.js', 'JWT', 'PostgreSQL'],
    accent: 'accent',
  },
  {
    num: '03',
    slug: 'ai-sign-detection',
    title: 'AI Sign Detection System',
    blurb: 'Deep learning application for medical image classification using TensorFlow and computer vision pipelines.',
    tags: ['Python', 'TensorFlow', 'Computer Vision', 'Medical Imaging'],
    accent: 'accent-2',
  },
  {
    num: '04',
    slug: 'cloud-networking',
    title: 'Cloud & Networking Solutions',
    blurb: 'Full infrastructure provisioning and monitoring — AWS + Docker + DevOps pipelines end to end.',
    tags: ['AWS', 'Docker', 'Terraform', 'Monitoring'],
    accent: 'accent',
  },
  {
    num: '05',
    slug: 'fullstack-product-suite',
    title: 'Full-Stack Product Suite',
    blurb: 'Symfony-based tracking app, Angular + Node.js banking system, and e-commerce platform across JS, PHP, SQL.',
    tags: ['Symfony', 'Angular', 'Node.js', 'MySQL'],
    accent: 'accent-2',
  },
] as const;

export const education = [
  {
    id: 'EDU_01',
    degree: 'Engineering Degree',
    field: 'Cloud & Cybersecurity',
    school: 'ESPRIT',
    years: '2023 – Present',
    status: 'in_progress',
  },
  {
    id: 'EDU_02',
    degree: 'Licence',
    field: 'Computer Systems Networking & Telecommunications',
    school: 'ISITCOM Hammam Sousse',
    years: '2020 – 2023',
    status: 'completed',
  },
  {
    id: 'EDU_03',
    degree: 'Mathematics Baccalaureate',
    field: '',
    school: 'BouFicha Secondary School',
    years: '2019 – 2020',
    status: 'completed',
  },
] as const;
