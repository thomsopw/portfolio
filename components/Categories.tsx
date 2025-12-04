'use client';

import React from 'react';
import { ShoppingBag, Layout, Code, Package } from 'lucide-react';
import { Card } from './ui/Card';
import { AnimatedSection } from './ui/AnimatedSection';

const categories = [
  {
    icon: <Layout size={32} className="text-purple-400" />,
    title: 'Product Landing Pages',
    description: 'Interactive demos, waitlist management, conversion optimization',
    count: 1,
  },
  {
    icon: <Code size={32} className="text-purple-400" />,
    title: 'SaaS Platforms',
    description: 'Dashboard design, user authentication, subscription management',
    count: 1,
  },
  {
    icon: <ShoppingBag size={32} className="text-purple-400" />,
    title: 'E-commerce Solutions',
    description: 'Shopping experiences, payment integration',
    count: 0,
  },
  {
    icon: <Package size={32} className="text-purple-400" />,
    title: 'Custom Web Applications',
    description: 'Tailored solutions for unique needs',
    count: 0,
  },
];

export const Categories: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Project Categories</span>
          </h2>
          <p className="text-center text-white/70 text-lg mb-12 max-w-2xl mx-auto">
            Expertise across different types of web projects.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <AnimatedSection key={category.title} delay={index * 0.1} direction="up">
              <Card hover className="text-center">
                <div className="flex justify-center mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
                <p className="text-white/70 text-sm mb-3">{category.description}</p>
                <div className="text-purple-400 font-semibold">{category.count} Projects</div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

