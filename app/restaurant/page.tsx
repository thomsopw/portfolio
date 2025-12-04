'use client';

import React from 'react';
import { NavigationRestaurant } from '@/components/restaurant/NavigationRestaurant';
import { HeroRestaurant } from '@/components/restaurant/HeroRestaurant';
import { MenuPreview } from '@/components/restaurant/MenuPreview';
import { HoursLocation } from '@/components/restaurant/HoursLocation';
import { ReservationSection } from '@/components/restaurant/ReservationSection';
import { TestimonialsRestaurant } from '@/components/restaurant/TestimonialsRestaurant';
import { FooterRestaurant } from '@/components/restaurant/FooterRestaurant';

export default function RestaurantPage() {
  return (
    <div className="min-h-screen">
      <NavigationRestaurant />
      
      <main className="pt-16">
        <HeroRestaurant />
        
        <section id="menu">
          <MenuPreview />
        </section>

        <section id="hours">
          <HoursLocation />
        </section>

        <section id="reservations">
          <ReservationSection />
        </section>

        <TestimonialsRestaurant />

        <section id="contact" className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Get in Touch
                </span>
              </h2>
              <p className="text-white/70 text-sm md:text-base mb-6">
                Have questions or special requests? We&apos;d love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+15551234567"
                  className="px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-lg transition-all text-sm md:text-base"
                >
                  Call Us Now
                </a>
                <a
                  href="mailto:info@restaurant.com"
                  className="px-6 py-3 border border-amber-400/50 text-amber-400 rounded-lg hover:bg-amber-400/10 transition-colors text-sm md:text-base"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterRestaurant />
    </div>
  );
}
