interface CommandContent {
  title: string
  sections: ContentSection[]
}

interface ContentSection {
  type: 'text' | 'list' | 'grid' | 'contact'
  title?: string
  content: string | string[] | ContactItem[] | GridItem[]
}

interface ContactItem {
  label: string
  value: string
  link?: string
}

interface GridItem {
  title: string
  subtitle?: string
  description: string
  tech?: string
}

export const commandContent: Record<string, CommandContent> = {
  whoami: {
    title: 'Who Am I',
    sections: [
      {
        type: 'text',
        content: 'Sean Davis - Software Engineer, Guitarist, Dad',
      },
    ],
  },

  experience: {
    title: 'Work Experience',
    sections: [
      {
        type: 'grid',
        content: [
          {
            title: 'Legends',
            subtitle: 'Senior Software Engineer (2022 - Present)',
            description:
              'Led technical operations for $100M+ annual revenue e-commerce platform. Architected multi-tenant Next.js theme system reducing maintenance costs by 90%. Implemented regression testing frameworks cutting production issues by 95%. Managed team of 10 offshore developers. Served global sports brands including Real Madrid, Borussia Dortmund.',
            tech: 'Next.js, TypeScript, E-commerce, Team Leadership',
          },
          {
            title: 'Reynolds and Reynolds',
            subtitle: 'Software Engineer (2020 - 2022)',
            description:
              'Built high-performance APIs and responsive interfaces. Developed accessibility-compliant systems for 10K+ users. Implemented modern React patterns and TypeScript best practices. Collaborated on automotive industry solutions.',
            tech: 'React, TypeScript, APIs, Accessibility',
          },
        ],
      },
    ],
  },

  skills: {
    title: 'Technical Skills',
    sections: [
      {
        type: 'grid',
        title: 'Frontend Mastery',
        content: [
          {
            title: 'Next.js',
            description: '15+ production apps, 95+ Lighthouse scores',
            tech: 'React Framework',
          },
          {
            title: 'TypeScript',
            description: '100% type coverage, zero runtime errors',
            tech: 'Type Safety',
          },
          {
            title: 'React',
            description: '5+ years, component libraries',
            tech: 'Frontend Library',
          },
          {
            title: 'Tailwind CSS',
            description: 'Utility-first styling',
            tech: 'CSS Framework',
          },
        ],
      },
      {
        type: 'grid',
        title: 'Backend & Database',
        content: [
          {
            title: 'Node.js',
            description: 'RESTful & GraphQL APIs',
            tech: 'Runtime Environment',
          },
          {
            title: 'PostgreSQL',
            description: 'Optimized queries, migrations',
            tech: 'Database',
          },
          {
            title: 'Supabase',
            description: 'Real-time, auth, storage',
            tech: 'Backend as a Service',
          },
          {
            title: 'Java',
            description: 'Enterprise applications',
            tech: 'Programming Language',
          },
        ],
      },
      {
        type: 'grid',
        title: 'E-commerce & Payments',
        content: [
          {
            title: 'Payment Integration',
            description: 'Stripe, PayPal, Apple Pay integration',
            tech: 'Payment Gateways',
          },
          {
            title: 'Global Commerce',
            description: '15+ languages, RTL support',
            tech: 'Internationalization',
          },
          {
            title: 'Performance',
            description: 'Sub-2s load times, optimization',
            tech: 'Web Performance',
          },
          {
            title: 'Uptime',
            description: '99.9% uptime maintenance',
            tech: 'Reliability',
          },
        ],
      },
      {
        type: 'grid',
        title: 'DevOps & Tools',
        content: [
          {
            title: 'CI/CD',
            description: 'Vercel, AWS pipelines',
            tech: 'Deployment',
          },
          {
            title: 'Docker',
            description: 'Containerization',
            tech: 'DevOps',
          },
          {
            title: 'Git',
            description: 'Version control',
            tech: 'Source Control',
          },
          {
            title: 'Testing',
            description: 'Jest, Cypress frameworks',
            tech: 'Quality Assurance',
          },
        ],
      },
    ],
  },

  projects: {
    title: 'Featured Projects',
    sections: [
      {
        type: 'grid',
        content: [
          {
            title: 'Real Madrid Official Store',
            subtitle: 'E-commerce platform for global sports brand',
            description:
              'Led frontend development handling millions of global fans with seamless checkout flows and multilingual support.',
            tech: 'Next.js, TypeScript, Stripe, Contentful',
          },
          {
            title: 'QueryBase',
            subtitle: 'AI-powered knowledge base',
            description:
              'AI-powered knowledge base for creating developer documentation and FAQs with intelligent search and content generation.',
            tech: 'AI, Next.js, Supabase, Tailwind',
          },
          {
            title: 'Worklog',
            subtitle: 'Rust-based AI KPI tracking CLI',
            description:
              'Command-line tool for tracking productivity metrics with AI insights and performance analytics.',
            tech: 'Rust, AI, CLI, Performance',
          },
          {
            title: 'Dusty Trails Tres Dias',
            subtitle: 'Full-stack nonprofit management portal',
            description:
              'Complete management system for nonprofit organization with user management, events, and donations.',
            tech: 'Full-stack, Database, Auth, Management',
          },
        ],
      },
    ],
  },

  about: {
    title: 'About Me',
    sections: [
      {
        type: 'text',
        content: [
          "I'm a software engineer passionate about building scalable, efficient, and human-centered applications. With over 4 years of experience, I've worked on everything from high-traffic e-commerce platforms to personal projects that solve real-world problems.",
          "My approach focuses on clarity, efficiency, and human-centered design. I believe in writing clean, maintainable code and creating experiences that users love. Whether it's optimizing a checkout flow for millions of users or building a simple CLI tool, I bring the same attention to detail and commitment to quality.",
          "When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or working on personal initiatives that combine my technical skills with my interests in AI, productivity tools, and community impact.",
        ],
      },
      {
        type: 'text',
        title: 'Philosophy',
        content: '"Let\'s build something amazing together!"',
      },
    ],
  },

  contact: {
    title: 'Contact Information',
    sections: [
      {
        type: 'contact',
        title: 'Get In Touch',
        content: [
          {
            label: 'Email',
            value: 'sdavisde@gmail.com',
            link: 'mailto:sdavisde@gmail.com',
          },
          {
            label: 'LinkedIn',
            value: 'linkedin.com/in/sean-davis-dan/',
            link: 'https://linkedin.com/in/sean-davis-dan/',
          },
          {
            label: 'GitHub',
            value: 'github.com/sdavisde',
            link: 'https://github.com/sdavisde',
          },
          {
            label: 'Location',
            value: 'Remote - Based out of College Station, TX',
          },
        ],
      },
    ],
  },

  help: {
    title: 'Available Commands',
    sections: [
      {
        type: 'list',
        title: 'Navigation Commands',
        content: [
          'whoami - Display user information',
          'experience - Show work experience and career history',
          'skills - Display technical skills and expertise',
          'projects - List featured projects and applications',
          'about - Learn more about my background and philosophy',
          'contact - Get contact information and social links',
          'clear - Clear the terminal',
          'help - Show this help menu',
        ],
      },
      {
        type: 'text',
        title: 'How to Use',
        content:
          'Type any command in the terminal below or click the corresponding icon. Each command will open a detailed view with comprehensive information about that topic.',
      },
    ],
  },
}

export type { CommandContent, ContentSection, ContactItem, GridItem }
