'use client';

import React from 'react';
import Link from 'next/link';
import { PricingCard } from '@/components/PricingCard';
import { ServicesAccordion } from '@/components/ServicesAccordion';
import { ProcessTimeline } from '@/components/ProcessTimeline';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { pricingTiers } from '@/data/pricing';

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="gradient-text">Let&apos;s Build</span>
                <br />
                <span className="text-white">Something Amazing</span>
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Choose the perfect package for your project, or let&apos;s discuss a custom solution.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-center text-white/70 text-lg mb-12 max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. All packages include responsive design and modern features.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <PricingCard key={tier.id} tier={tier} index={index} />
            ))}
          </div>
        </div>
      </section>

      <ServicesAccordion />
      <ProcessTimeline />
      <WhyChooseUs />
      <FAQ />
      <ContactForm />
    </div>
  );
}

