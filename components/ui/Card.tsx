import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, hover = false }) => {
  return (
    <div
      className={cn(
        'glass rounded-xl p-6 backdrop-blur-md',
        hover && 'transition-all duration-300 hover:glass-strong hover:scale-[1.02] hover:shadow-2xl hover:backdrop-blur-xl',
        className
      )}
    >
      {children}
    </div>
  );
};

