'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '../ui/Button';

export const HeroRestaurant: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-orange-900/10 to-red-900/10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-white">Welcome to</span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Your Restaurant Name
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Authentic flavors, warm atmosphere, and exceptional service
          </motion.p>

          {/* Quick Info Bar */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-2 text-white/90">
              <Phone size={18} className="text-amber-400" />
              <span className="text-sm md:text-base">(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <MapPin size={18} className="text-amber-400" />
              <span className="text-sm md:text-base">123 Main St, City</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Clock size={18} className="text-amber-400" />
              <span className="text-sm md:text-base">Open Today: 11am - 10pm</span>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700">
              Reserve a Table
            </Button>
            <Button variant="outline" size="lg">
              View Menu
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
