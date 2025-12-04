'use client';

import React from 'react';
import { Zap, Palette, Rocket, Code, Video, TrendingUp } from 'lucide-react';
import { Card } from './ui/Card';
import { AnimatedSection } from './ui/AnimatedSection';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Zap size={32} className="text-purple-400" />,
    title: 'Interactive Web Experiences',
    description: 'Custom controls, animations, and micro-interactions that engage users.',
  },
  {
    icon: <Palette size={32} className="text-purple-400" />,
    title: 'Modern UI/UX Design',
    description: 'Glassmorphism, dark themes, and responsive design that looks stunning on all devices.',
  },
  {
    icon: <Rocket size={32} className="text-purple-400" />,
    title: 'Performance Optimization',
    description: 'Fast loading times, SEO optimization, and accessibility compliance.',
  },
  {
    icon: <Code size={32} className="text-purple-400" />,
    title: 'Full-Stack Development',
    description: 'Frontend and backend integration with modern technologies and best practices.',
  },
  {
    icon: <Video size={32} className="text-purple-400" />,
    title: 'Video & Media Integration',
    description: 'Video galleries, interactive media, and seamless content delivery.',
  },
  {
    icon: <TrendingUp size={32} className="text-purple-400" />,
    title: 'Conversion Optimization',
    description: 'Landing pages designed to convert visitors into customers.',
  },
];

export const Features: React.FC = () => {
  return (
    <section className="py-20" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-center text-white/70 text-lg mb-12 max-w-2xl mx-auto">
            Comprehensive web development services to bring your vision to life.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 0.1} direction="up">
              <Card hover className="text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

