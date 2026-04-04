import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#25D366',
        'primary-dark': '#006D2F',
        background: '#FFFFFF',
        surface: '#F4F4F5',
        'surface-dark': '#E4E4E7',
        foreground: '#121212',
        muted: '#71717A',
        accent: '#000000',
        border: '#E4E4E7',
      },
      fontFamily: {
        heading: ['"DM Sans"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'page': '1200px',
        'reading': '680px',
      },
      letterSpacing: {
        'heading': '-0.04em',
        'subheading': '-0.02em',
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.04em', fontWeight: '700' }],
        'display-sm': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.04em', fontWeight: '700' }],
        'headline': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-sm': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.02em', fontWeight: '600' }],
      },
    },
  },
  plugins: [],
} satisfies Config
