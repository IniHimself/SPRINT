/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A8FDC',
          light: '#E5F3FF',
          deep: '#005C99',
        },
        silver: {
          DEFAULT: '#E8ECF0',
          dark: '#B0B8C1',
        },
        black: {
          DEFAULT: '#0F1115',
          soft: '#1A1D24',
        },
        text: {
          DEFAULT: '#1E2025',
          secondary: '#5A5E66',
          muted: '#8A8F98',
        },
        border: '#DCE1E7',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4.8rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['2.8rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['2rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
      },
      boxShadow: {
        'sm': '0 1px 3px rgba(15, 17, 21, 0.04), 0 1px 2px rgba(15, 17, 21, 0.06)',
        'md': '0 4px 16px rgba(15, 17, 21, 0.06), 0 2px 6px rgba(15, 17, 21, 0.04)',
        'lg': '0 12px 36px rgba(15, 17, 21, 0.08), 0 4px 14px rgba(15, 17, 21, 0.04)',
        'xl': '0 20px 60px rgba(15, 17, 21, 0.12), 0 8px 24px rgba(15, 17, 21, 0.06)',
      },
      borderRadius: {
        'sm': '8px',
        'md': '14px',
        'lg': '20px',
        'xl': '28px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      transitionDuration: {
        '350': '350ms',
        '550': '550ms',
      },
    },
  },
  plugins: [],
};
