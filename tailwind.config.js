/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bg-primary': 'rgb(var(--color-bg-primary) / <alpha-value>)',
        'bg-secondary': 'rgb(var(--color-bg-secondary) / <alpha-value>)',
        'border': 'rgb(var(--color-border) / <alpha-value>)',
        'text-primary': 'rgb(var(--color-text-primary) / <alpha-value>)',
        'text-secondary': 'rgb(var(--color-text-secondary) / <alpha-value>)',
        'accent': 'rgb(var(--color-accent) / <alpha-value>)',
        'success': 'rgb(var(--color-success) / <alpha-value>)',
        'warning': 'rgb(var(--color-warning) / <alpha-value>)',
        'error': 'rgb(var(--color-error) / <alpha-value>)',
      },
      spacing: {
        '88': '22rem',
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'rgb(var(--color-text-primary))',
            a: {
              color: 'rgb(var(--color-accent))',
              '&:hover': {
                color: 'rgb(var(--color-accent) / 0.8)',
              },
            },
            h1: {
              color: 'rgb(var(--color-text-primary))',
            },
            h2: {
              color: 'rgb(var(--color-text-primary))',
            },
            h3: {
              color: 'rgb(var(--color-text-primary))',
            },
            h4: {
              color: 'rgb(var(--color-text-primary))',
            },
            strong: {
              color: 'rgb(var(--color-accent))',
            },
            code: {
              color: 'rgb(var(--color-text-primary))',
            },
            blockquote: {
              color: 'rgb(var(--color-text-secondary))',
              borderLeftColor: 'rgb(var(--color-border))',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};