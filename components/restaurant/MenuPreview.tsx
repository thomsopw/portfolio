'use client';

import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Card } from '../ui/Card';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: string;
}

const menuItems: MenuItem[] = [
  { name: 'Signature Burger', description: 'Angus beef, special sauce, fresh veggies', price: '$16', category: 'Mains' },
  { name: 'Caesar Salad', description: 'Crisp romaine, parmesan, house dressing', price: '$12', category: 'Salads' },
  { name: 'Margherita Pizza', description: 'Fresh mozzarella, basil, tomato sauce', price: '$14', category: 'Mains' },
  { name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with vanilla ice cream', price: '$8', category: 'Desserts' },
];

export const MenuPreview: React.FC = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Popular Dishes
            </span>
          </h2>
          <p className="text-center text-white/70 text-sm md:text-base mb-8 max-w-xl mx-auto">
            A taste of what we offer
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {menuItems.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1} direction="up">
              <Card hover className="p-4 md:p-5">
                <div className="mb-2">
                  <span className="text-xs text-amber-400 font-semibold">{item.category}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.name}</h3>
                <p className="text-sm text-white/70 mb-3">{item.description}</p>
                <p className="text-lg font-bold text-amber-400">{item.price}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="text-center mt-8">
            <button className="px-6 py-2 border border-amber-400/50 text-amber-400 rounded-lg hover:bg-amber-400/10 transition-colors">
              View Full Menu
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
