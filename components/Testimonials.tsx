'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Card } from './ui/Card';
import { AnimatedSection } from './ui/AnimatedSection';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
}

const testimonials: Testimonial[] = [
  {
    quote: 'The website exceeded our expectations. The interactive features and modern design perfectly captured our product&apos;s essence.',
    author: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'Infinity Pyramid',
  },
  {
    quote: 'Working with this developer was a pleasure. They delivered a high-quality SaaS platform on time and within budget.',
    author: 'Michael Chen',
    role: 'CTO',
    company: 'Quiory',
  },
  {
    quote: 'The attention to detail and user experience is outstanding. Our conversion rates improved significantly after launch.',
    author: 'Emily Rodriguez',
    role: 'Marketing Director',
  },
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">What Clients Say</span>
          </h2>
          <p className="text-center text-white/70 text-lg mb-12 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto relative h-64">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <Quote size={40} className="text-purple-400 mb-4" />
                <p className="text-xl text-white/90 mb-6 italic">
                  &ldquo;{testimonials[currentIndex].quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-semibold text-white text-lg">
                      {testimonials[currentIndex].author}
                    </div>
                    <div className="text-white/60">
                      {testimonials[currentIndex].role}
                      {testimonials[currentIndex].company && ` at ${testimonials[currentIndex].company}`}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-purple-500' : 'w-2 bg-white/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

