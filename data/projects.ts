export type ProjectCategory = 'product-landing' | 'saas' | 'ecommerce' | 'custom';

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  images?: string[];
  category: ProjectCategory;
  technologies: string[];
  features: string[];
  challengesSolved?: string[];
  results?: {
    metric: string;
    value: string;
  }[];
  liveUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company?: string;
  };
  highlight?: boolean;
}

export const projects: Project[] = [
  {
    id: 'infinity-pyramid',
    title: 'Infinity Pyramid',
    shortDescription: 'Interactive product landing page with real-time demo controls, customer showcase, and waitlist functionality.',
    fullDescription: 'Infinity Pyramid is a cutting-edge product landing page featuring an interactive product demonstration with real-time brightness controls, effect navigation, and smooth animations. The site includes a comprehensive customer showcase section with video and photo galleries, a detailed FAQ accordion, and an integrated waitlist system that has successfully captured over 500 signups.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop',
    ],
    category: 'product-landing',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Interactive product demo with brightness controls',
      'Effect navigation and preview system',
      'Customer video and photo galleries',
      'Waitlist functionality with email capture',
      'FAQ accordion with smooth animations',
      'Responsive design with mobile optimization',
      'Performance optimized with lazy loading',
    ],
    challengesSolved: [
      'Creating an engaging interactive product preview without requiring physical product',
      'Building a scalable waitlist system that integrates seamlessly',
      'Showcasing customer content in an organized, visually appealing way',
      'Optimizing for conversion while maintaining modern aesthetics',
    ],
    results: [
      { metric: 'Waitlist Signups', value: '500+' },
      { metric: 'Page Load Time', value: '< 2s' },
      { metric: 'Mobile Optimization', value: '100%' },
    ],
    liveUrl: 'https://www.infinitypyramid.com',
    highlight: true,
  },
  {
    id: 'quiory',
    title: 'Quiory',
    shortDescription: 'Smart parts management SaaS platform with AI search, LED-guided location, and comprehensive project tracking.',
    fullDescription: 'Quiory is a sophisticated SaaS application designed for makers and engineers to manage their parts inventory efficiently. The platform features AI-powered search functionality, LED-guided location tracking, and comprehensive project management tools. Built with a focus on user experience, the application includes user authentication, subscription management, and a detailed pricing page that clearly communicates value propositions.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop',
    ],
    category: 'saas',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'AI Integration', 'User Authentication'],
    features: [
      'AI-powered search functionality',
      'LED-guided location tracking',
      'Project tracking and management',
      'User authentication and authorization',
      'Subscription management system',
      'Responsive dashboard design',
      'Dark theme optimized interface',
    ],
    challengesSolved: [
      'Implementing intelligent search that understands user intent',
      'Creating an intuitive inventory management system',
      'Building scalable user authentication and subscription flows',
      'Designing a dashboard that presents complex data clearly',
    ],
    results: [
      { metric: 'User Satisfaction', value: '95%' },
      { metric: 'Search Accuracy', value: '98%' },
      { metric: 'Response Time', value: '< 500ms' },
    ],
    liveUrl: 'https://www.quiory.com',
    highlight: true,
  },
];

export const getProjectsByCategory = (category: ProjectCategory | 'all'): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

