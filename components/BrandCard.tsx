import React from 'react';

interface BrandCardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
}

export const BrandCard = ({ 
  children, 
  className = '', 
  padding = 'md' 
}: BrandCardProps) => {
  const paddings = {
    sm: 'p-4',
    md: 'p-6 md:p-8',
    lg: 'p-8 md:p-12',
  };

  return (
    <div className={`bg-brand-white rounded-brand-lg shadow-brand-card border border-brand-border ${paddings[padding]} ${className}`}>
      {children}
    </div>
  );
};

