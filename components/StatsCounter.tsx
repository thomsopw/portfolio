'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface StatsCounterProps {
  value: string;
  label: string;
  suffix?: string;
  prefix?: string;
}

export const StatsCounter: React.FC<StatsCounterProps> = ({ value, label, suffix = '', prefix = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric value
    const numericValue = parseInt(value.replace(/\D/g, ''));
    if (isNaN(numericValue) || numericValue === 0) {
      // If not a number or zero, just show the original value
      return;
    }

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  // Check if value is numeric
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const isNumeric = !isNaN(numericValue) && numericValue > 0;

  const displayValue = isNumeric && count > 0
    ? (value.includes('+') 
        ? `${count}+` 
        : value.includes('%') 
        ? `${count}%` 
        : `${count}`)
    : value;

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
        {displayValue}
      </div>
      <div className="text-white/70 text-sm md:text-base">{label}</div>
    </div>
  );
};

