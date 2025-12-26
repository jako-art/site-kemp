import React from 'react';

interface BrandInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  as?: 'input' | 'textarea';
}

export const BrandInput = ({ 
  label, 
  error, 
  as = 'input', 
  className = '', 
  id,
  ...props 
}: BrandInputProps) => {
  const Component = as;
  
  return (
    <div className="w-full">
      <label 
        htmlFor={id} 
        className="mb-2 block text-sm font-medium text-brand-grey font-brand"
      >
        {label}
      </label>
      <Component
        id={id}
        className={`w-full rounded-brand-sm border px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 font-brand ${
          error
            ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
            : 'border-brand-border focus:border-brand-accent focus:ring-brand-accent/20 bg-brand-light focus:bg-brand-white'
        } ${className}`}
        {...props as any}
      />
      {error && (
        <p className="mt-1 text-xs text-red-600 font-brand">{error}</p>
      )}
    </div>
  );
};

