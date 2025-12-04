'use client';

import React from 'react';
import { Search, Palette, Code, Rocket } from 'lucide-react';
import { AnimatedSection } from './ui/AnimatedSection';

const steps = [
  {
    icon: <Search size={32} className="text-purple-400" />,
    title: 'Discovery & Planning',
    description: 'We start by understanding your goals, target audience, and requirements.',
  },
  {
    icon: <Palette size={32} className="text-purple-400" />,
    title: 'Design & Prototyping',
    description: 'Creating wireframes and designs that align with your vision and brand.',
  },
  {
    icon: <Code size={32} className="text-purple-400" />,
    title: 'Development',
    description: 'Building your website with modern technologies and best practices.',
  },
  {
    icon: <Rocket size={32} className="text-purple-400" />,
    title: 'Testing & Launch',
    description: 'Thorough testing and smooth deployment to get you online.',
  },
];

export const ProcessTimeline: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Our Process</span>
          </h2>
          <p className="text-center text-white/70 text-lg mb-12 max-w-2xl mx-auto">
            A streamlined approach to delivering exceptional results.
          </p>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 transform -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {steps.map((step, index) => (
                <AnimatedSection key={step.title} delay={index * 0.2} direction="up">
                  <div className="text-center relative">
                    {/* Timeline Dot */}
                    <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-purple-600 rounded-full z-10" />
                    
                    <div className="flex flex-col items-center">
                      <div className="glass-strong p-4 rounded-full mb-4 w-20 h-20 flex items-center justify-center">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-white/70 text-sm">{step.description}</p>
                      <div className="mt-4 text-purple-400 font-bold text-2xl">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

