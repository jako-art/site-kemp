import React from 'react';

interface BrandButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  label: string;
}

export const BrandButton = ({ 
  variant = 'primary', 
  size = 'md', 
  label, 
  className = '', 
  ...props 
}: BrandButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed font-brand';
  
  const variants = {
    primary: 'bg-brand-yellow text-brand-black hover:opacity-90 focus:ring-brand-yellow',
    secondary: 'bg-brand-white text-brand-black border border-brand-border hover:bg-brand-light focus:ring-brand-border shadow-brand-border',
    accent: 'bg-brand-accent text-brand-white hover:opacity-90 focus:ring-brand-accent',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-brand-sm',
    md: 'px-6 py-3 text-base rounded-brand-sm',
    lg: 'px-8 py-4 text-lg rounded-brand-md',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};

