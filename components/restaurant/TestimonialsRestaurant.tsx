'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Card } from '../ui/Card';

interface Testimonial {
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    rating: 5,
    comment: 'Amazing food and great service! The atmosphere is perfect for a date night.',
    date: '2 weeks ago',
  },
  {
    name: 'Mike Chen',
    rating: 5,
    comment: 'Best restaurant in town. The signature burger is incredible!',
    date: '1 month ago',
  },
  {
    name: 'Emily Davis',
    rating: 5,
    comment: 'We come here every week. The staff is friendly and the food is consistently excellent.',
    date: '3 weeks ago',
  },
];

export const TestimonialsRestaurant: React.FC = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              What Our Customers Say
            </span>
          </h2>
          <p className="text-center text-white/70 text-sm md:text-base mb-8 max-w-xl mx-auto">
            Real reviews from real customers
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 0.1} direction="up">
              <Card className="p-5">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-white/90 text-sm mb-4 leading-relaxed">
                  &quot;{testimonial.comment}&quot;
                </p>
                <div className="pt-3 border-t border-white/10">
                  <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-white/60 text-xs">{testimonial.date}</p>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
