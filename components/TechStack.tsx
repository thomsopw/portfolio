'use client';

import React from 'react';
import { Card } from './ui/Card';
import { AnimatedSection } from './ui/AnimatedSection';

const technologies = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Framer Motion', category: 'Animations' },
  { name: 'Node.js', category: 'Backend' },
];

export const TechStack: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Technologies & Tools</span>
          </h2>
          <p className="text-center text-white/70 text-lg mb-12 max-w-2xl mx-auto">
            Built with modern technologies and best practices.
          </p>
        </AnimatedSection>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <AnimatedSection key={tech.name} delay={index * 0.1} direction="up">
              <Card className="px-6 py-3 hover:scale-110 transition-transform cursor-default">
                <span className="text-white font-medium">{tech.name}</span>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

