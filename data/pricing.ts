export interface PricingTier {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$2,500',
    description: 'Perfect for small businesses and startups looking to establish their online presence.',
    features: [
      'Up to 5 pages',
      'Responsive design',
      'Contact form',
      'Basic SEO optimization',
      'Social media integration',
      '1 month of support',
      '2 rounds of revisions',
    ],
    cta: 'Get Started',
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '$5,000',
    description: 'Ideal for growing businesses that need a comprehensive web solution with advanced features.',
    features: [
      'Up to 10 pages',
      'Custom design',
      'Advanced animations',
      'Full SEO optimization',
      'Analytics integration',
      '3 months of support',
      'Unlimited revisions',
      'Performance optimization',
      'Content management system',
    ],
    popular: true,
    cta: 'Get Started',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large organizations with specific requirements and scale.',
    features: [
      'Unlimited pages',
      'Custom application development',
      'API integrations',
      'User authentication',
      'Database setup',
      '6 months of support',
      'Priority support',
      'Dedicated project manager',
      'Custom features',
      'Scalable architecture',
    ],
    cta: 'Contact Us',
  },
];

export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
}

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Modern, responsive websites built with the latest technologies.',
    details: [
      'Responsive design that works on all devices',
      'Performance optimization for fast loading times',
      'SEO best practices for better search rankings',
      'Accessibility compliance (WCAG 2.1)',
      'Cross-browser compatibility',
      'Mobile-first approach',
    ],
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Solutions',
    description: 'Complete online store solutions with payment integration and inventory management.',
    details: [
      'Shopping cart functionality',
      'Payment gateway integration',
      'Product catalog management',
      'Order tracking system',
      'Inventory management',
      'Customer account system',
    ],
  },
  {
    id: 'custom-applications',
    title: 'Custom Applications',
    description: 'Tailored web applications built to solve your specific business needs.',
    details: [
      'Custom functionality development',
      'API integrations',
      'Database design and implementation',
      'User authentication and authorization',
      'Real-time features',
      'Third-party service integration',
    ],
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    description: 'Ongoing support and maintenance to keep your website running smoothly.',
    details: [
      'Regular security updates',
      'Performance monitoring',
      'Content updates',
      'Bug fixes and troubleshooting',
      'Backup and recovery',
      'Technical support',
    ],
  },
];

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 'timeline',
    question: 'How long does it take to build a website?',
    answer: 'The timeline depends on the scope of your project. A simple website typically takes 2-4 weeks, while more complex projects can take 6-12 weeks. We\'ll provide a detailed timeline during our initial consultation.',
  },
  {
    id: 'revisions',
    question: 'How many revisions are included?',
    answer: 'The number of revisions depends on your package. Starter includes 2 rounds, Professional includes unlimited revisions, and Enterprise includes unlimited revisions with priority support.',
  },
  {
    id: 'hosting',
    question: 'Do you provide hosting?',
    answer: 'We can help you set up hosting and recommend reliable hosting providers. We typically recommend Vercel, Netlify, or AWS depending on your needs.',
  },
  {
    id: 'maintenance',
    question: 'What happens after the website is launched?',
    answer: 'All packages include a support period. We can also set up ongoing maintenance plans to keep your website updated, secure, and performing optimally.',
  },
  {
    id: 'payment',
    question: 'What is your payment structure?',
    answer: 'We typically require a 50% deposit to begin work, with the remaining 50% due upon completion. For larger projects, we can arrange milestone-based payments.',
  },
  {
    id: 'technologies',
    question: 'What technologies do you use?',
    answer: 'We use modern technologies including React, Next.js, TypeScript, and Tailwind CSS. We choose the best tools for each project to ensure optimal performance and maintainability.',
  },
];

