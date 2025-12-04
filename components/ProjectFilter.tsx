'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCategory } from '@/data/projects';
import { cn } from '@/lib/utils';

interface ProjectFilterProps {
  activeCategory: ProjectCategory | 'all';
  onCategoryChange: (category: ProjectCategory | 'all') => void;
  projectCounts: Record<string, number>;
}

const categories: { value: ProjectCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'product-landing', label: 'Product Landing' },
  { value: 'saas', label: 'SaaS Applications' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'custom', label: 'Custom' },
];

export const ProjectFilter: React.FC<ProjectFilterProps> = ({
  activeCategory,
  onCategoryChange,
  projectCounts,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => {
        const count = projectCounts[category.value] || 0;
        const isActive = activeCategory === category.value;

        return (
          <motion.button
            key={category.value}
            onClick={() => onCategoryChange(category.value)}
            className={cn(
              'px-6 py-2 rounded-lg font-medium transition-all duration-300 relative',
              isActive
                ? 'text-white'
                : 'text-white/60 hover:text-white'
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isActive && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 glass-strong backdrop-blur-xl rounded-lg border border-white/20"
                initial={false}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            {!isActive && (
              <div className="absolute inset-0 glass backdrop-blur-sm rounded-lg opacity-0 hover:opacity-100 transition-opacity" />
            )}
            <span className="relative z-10">
              {category.label} ({count})
            </span>
          </motion.button>
        );
      })}
    </div>
  );
};

