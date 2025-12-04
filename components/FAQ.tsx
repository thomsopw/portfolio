'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/data/pricing';
import { Card } from './ui/Card';
import { AnimatedSection } from './ui/AnimatedSection';
import { cn } from '@/lib/utils';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Frequently Asked Questions</span>
          </h2>
          <p className="text-center text-white/70 text-lg mb-12 max-w-2xl mx-auto">
            Have questions? We&apos;ve got answers.
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedSection key={faq.id} delay={index * 0.1}>
              <Card className="overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="text-lg font-semibold text-white pr-8">{faq.question}</h3>
                  <ChevronDown
                    size={24}
                    className={cn(
                      'text-white/60 flex-shrink-0 transition-transform duration-300',
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
                      <div className="px-6 pb-6 text-white/70">{faq.answer}</div>
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

