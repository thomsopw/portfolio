'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { AnimatedSection } from './ui/AnimatedSection';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background with Enhanced Glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-indigo-900/20 to-pink-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="absolute inset-0 backdrop-blur-[2px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <AnimatedSection direction="fade" delay={0.2}>
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="gradient-text">Crafting Digital</span>
            <br />
            <span className="text-white">Experiences That Convert</span>
          </motion.h1>
        </AnimatedSection>

        <AnimatedSection direction="fade" delay={0.4}>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
            From product launches to SaaS platforms, I build websites that drive results
          </p>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/pricing">
              <Button size="lg" className="text-lg px-8 py-4">
                Get Started
              </Button>
            </Link>
            <Link href="#projects">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                View My Work
              </Button>
            </Link>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.8}>
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/60">
            <div className="text-center glass px-6 py-4 rounded-xl backdrop-blur-md">
              <div className="text-3xl font-bold text-white mb-1">10+</div>
              <div className="text-sm">Projects Delivered</div>
            </div>
            <div className="text-center glass px-6 py-4 rounded-xl backdrop-blur-md">
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center glass px-6 py-4 rounded-xl backdrop-blur-md">
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm">Support Available</div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center glass backdrop-blur-sm">
          <div className="w-1 h-3 bg-white/30 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

