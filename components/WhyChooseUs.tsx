'use client';

import React from 'react';
import { Zap, Shield, Headphones, Award } from 'lucide-react';
import { Card } from './ui/Card';
import { AnimatedSection } from './ui/AnimatedSection';

const benefits = [
  {
    icon: <Zap size={32} className="text-purple-400" />,
    title: 'Fast Delivery',
    description: 'We work efficiently to deliver your project on time without compromising quality.',
  },
  {
    icon: <Shield size={32} className="text-purple-400" />,
    title: 'Modern Technology',
    description: 'Built with the latest technologies and best practices for optimal performance.',
  },
  {
    icon: <Headphones size={32} className="text-purple-400" />,
    title: 'Ongoing Support',
    description: 'We provide continuous support to ensure your website runs smoothly.',
  },
  {
    icon: <Award size={32} className="text-purple-400" />,
    title: 'Quality Guaranteed',
    description: "We're committed to delivering high-quality work that exceeds expectations.",
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Why Choose Us</span>
          </h2>
          <p className="text-center text-white/70 text-lg mb-12 max-w-2xl mx-auto">
            What sets us apart from the rest.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={benefit.title} delay={index * 0.1} direction="up">
              <Card hover className="text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-white/70">{benefit.description}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

