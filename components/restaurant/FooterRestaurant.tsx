import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

export const FooterRestaurant: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/80 border-t border-white/10 mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-3">
              Restaurant Name
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Serving authentic flavors with a warm atmosphere. We&apos;re committed to providing exceptional dining experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="text-white/60 hover:text-amber-400 transition-colors text-sm">
                  Menu
                </a>
              </li>
              <li>
                <a href="#hours" className="text-white/60 hover:text-amber-400 transition-colors text-sm">
                  Hours & Location
                </a>
              </li>
              <li>
                <a href="#reservations" className="text-white/60 hover:text-amber-400 transition-colors text-sm">
                  Reservations
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/60 hover:text-amber-400 transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2 text-white/60">
                <MapPin size={16} className="text-amber-400 mt-0.5 flex-shrink-0" />
                <span>123 Main Street, City, State 12345</span>
              </li>
              <li className="flex items-center gap-2 text-white/60">
                <Phone size={16} className="text-amber-400 flex-shrink-0" />
                <a href="tel:+15551234567" className="hover:text-amber-400 transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/60">
                <Mail size={16} className="text-amber-400 flex-shrink-0" />
                <a href="mailto:info@restaurant.com" className="hover:text-amber-400 transition-colors">
                  info@restaurant.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/60">
                <Clock size={16} className="text-amber-400 flex-shrink-0" />
                <span>Mon-Thu: 11am-10pm, Fri-Sat: 11am-11pm, Sun: 12pm-9pm</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-amber-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-amber-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/10 text-center text-white/60 text-xs">
          <p>&copy; {currentYear} Restaurant Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
