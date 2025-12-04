'use client';

import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Card } from '../ui/Card';

const hours = [
  { day: 'Monday - Thursday', time: '11:00 AM - 10:00 PM' },
  { day: 'Friday - Saturday', time: '11:00 AM - 11:00 PM' },
  { day: 'Sunday', time: '12:00 PM - 9:00 PM' },
];

export const HoursLocation: React.FC = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {/* Hours */}
          <AnimatedSection>
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock size={24} className="text-amber-400" />
                <h3 className="text-xl font-bold text-white">Hours</h3>
              </div>
              <div className="space-y-3">
                {hours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-white/80 text-sm md:text-base">{schedule.day}</span>
                    <span className="text-amber-400 font-semibold text-sm md:text-base">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </Card>
          </AnimatedSection>

          {/* Location & Contact */}
          <AnimatedSection delay={0.2}>
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin size={24} className="text-amber-400" />
                <h3 className="text-xl font-bold text-white">Location</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-white/90 mb-1">123 Main Street</p>
                  <p className="text-white/90">City, State 12345</p>
                </div>
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <div className="flex items-center gap-2 text-white/80">
                    <Phone size={18} className="text-amber-400" />
                    <a href="tel:+15551234567" className="hover:text-amber-400 transition-colors">
                      (555) 123-4567
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Mail size={18} className="text-amber-400" />
                    <a href="mailto:info@restaurant.com" className="hover:text-amber-400 transition-colors">
                      info@restaurant.com
                    </a>
                  </div>
                </div>
                <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-lg transition-all text-sm">
                  Get Directions
                </button>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
