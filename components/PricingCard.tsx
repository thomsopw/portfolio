'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { PricingTier } from '@/data/pricing';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { cn } from '@/lib/utils';

interface PricingCardProps {
  tier: PricingTier;
  index: number;
}

export const PricingCard: React.FC<PricingCardProps> = ({ tier, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn('h-full', tier.popular && 'md:-mt-4')}
    >
      <Card
        hover
        className={cn(
          'h-full flex flex-col relative',
          tier.popular && 'border-2 border-purple-500/50'
        )}
      >
        {tier.popular && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-white text-sm font-semibold">
            Most Popular
          </div>
        )}

        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
          <div className="mb-4">
            <span className="text-4xl font-bold gradient-text">{tier.price}</span>
            {tier.price !== 'Custom' && (
              <span className="text-white/60 text-sm ml-2">one-time</span>
            )}
          </div>
          <p className="text-white/70 mb-6">{tier.description}</p>

          <ul className="space-y-3 mb-8">
            {tier.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Check size={20} className="text-purple-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/80">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link href="/pricing#contact" className="mt-auto">
          <Button
            variant={tier.popular ? 'primary' : 'secondary'}
            className="w-full"
            size="lg"
          >
            {tier.cta}
          </Button>
        </Link>
      </Card>
    </motion.div>
  );
};

