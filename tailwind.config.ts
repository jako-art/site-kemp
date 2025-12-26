import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#232323',
          white: '#ffffff',
          grey: '#7a7f82',
          yellow: '#eeff5c',
          dark: '#363738',
          light: '#f5f8f9',
          border: '#f2f6f8',
          accent: '#005fcc',
        }
      },
      borderRadius: {
        'brand-sm': '12px',
        'brand-md': '20px',
        'brand-lg': '24px',
        'brand-xl': '32px',
        'brand-2xl': '40px',
        'brand-3xl': '48px',
        'brand-full': '64px',
      },
      boxShadow: {
        'brand-card': '0px 4px 12px 0px rgba(139, 139, 139, 0.08)',
        'brand-float': '0px 1px 2px 0px rgba(139, 139, 139, 0.14), 0px 0px 12px 0px rgba(201, 201, 201, 0.16)',
        'brand-border': '0px 0px 0px 1px rgb(228, 235, 239)',
        'brand-large': '0px 4px 20px 0px rgba(139, 139, 139, 0.08)',
      },
      fontFamily: {
        brand: ['Oceanic Grotesk', '-apple-system', 'system-ui', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
export default config

