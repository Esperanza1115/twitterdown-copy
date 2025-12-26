/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // TwitterDown theme colors - matching shadcn/ui default theme
        primary: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
          foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)',
        },
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        card: {
          DEFAULT: 'hsl(var(--card) / <alpha-value>)',
          foreground: 'hsl(var(--card-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
          foreground: 'hsl(var(--accent-foreground) / <alpha-value>)',
        },
        border: 'hsl(var(--border) / <alpha-value>)',
        input: 'hsl(var(--input) / <alpha-value>)',
        ring: 'hsl(var(--ring) / <alpha-value>)',
        // Fallback colors for components that don't use CSS vars
        'twitter-blue': '#1DA1F2',
        'twitter-dark': '#0c7f79',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    // Add size utilities plugin
    function({ addUtilities, matchUtilities }) {
      const sizeUtilities = {
        '.size-0': { width: '0', height: '0' },
        '.size-px': { width: '1px', height: '1px' },
        '.size-0\\.5': { width: '0.125rem', height: '0.125rem' },
        '.size-1': { width: '0.25rem', height: '0.25rem' },
        '.size-1\\.5': { width: '0.375rem', height: '0.375rem' },
        '.size-2': { width: '0.5rem', height: '0.5rem' },
        '.size-2\\.5': { width: '0.625rem', height: '0.625rem' },
        '.size-3': { width: '0.75rem', height: '0.75rem' },
        '.size-3\\.5': { width: '0.875rem', height: '0.875rem' },
        '.size-4': { width: '1rem', height: '1rem' },
        '.size-5': { width: '1.25rem', height: '1.25rem' },
        '.size-6': { width: '1.5rem', height: '1.5rem' },
        '.size-7': { width: '1.75rem', height: '1.75rem' },
        '.size-8': { width: '2rem', height: '2rem' },
        '.size-9': { width: '2.25rem', height: '2.25rem' },
        '.size-10': { width: '2.5rem', height: '2.5rem' },
        '.size-11': { width: '2.75rem', height: '2.75rem' },
        '.size-12': { width: '3rem', height: '3rem' },
        '.size-14': { width: '3.5rem', height: '3.5rem' },
        '.size-16': { width: '4rem', height: '4rem' },
        '.size-20': { width: '5rem', height: '5rem' },
        '.size-24': { width: '6rem', height: '6rem' },
        '.size-28': { width: '7rem', height: '7rem' },
        '.size-32': { width: '8rem', height: '8rem' },
        '.size-36': { width: '9rem', height: '9rem' },
        '.size-40': { width: '10rem', height: '10rem' },
        '.size-48': { width: '12rem', height: '12rem' },
        '.size-56': { width: '14rem', height: '14rem' },
        '.size-64': { width: '16rem', height: '16rem' },
        '.size-72': { width: '18rem', height: '18rem' },
        '.size-96': { width: '24rem', height: '24rem' },
      };

      addUtilities(sizeUtilities);
    },
  ],
};
