'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { services } from '@/data/pricing';
import { Card } from './ui/Card';
import { AnimatedSection } from './ui/AnimatedSection';
import { cn } from '@/lib/utils';

export const ServicesAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleService = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Detailed Services</span>
          </h2>
          <p className="text-center text-white/70 text-lg mb-12 max-w-2xl mx-auto">
            Comprehensive services tailored to your needs.
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-4">
          {services.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 0.1}>
              <Card className="overflow-hidden">
                <button
                  onClick={() => toggleService(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-white/70">{service.description}</p>
                  </div>
                  <ChevronDown
                    size={24}
                    className={cn(
                      'text-white/60 flex-shrink-0 ml-4 transition-transform duration-300',
                      openIndex === index && 'transform rotate-180'
                    )}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <ul className="space-y-2">
                          {service.details.map((detail, idx) => (
                            <li key={idx} className="text-white/70 flex items-start gap-3">
                              <span className="text-purple-400 mt-1">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

