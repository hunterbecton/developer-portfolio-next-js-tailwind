const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Libre Franklin', ...fontFamily.sans],
        mono: ['Space Mono', ...fontFamily.mono],
      },
    },
    colors: {
      neutral: {
        one: '#F9FAFB',
        two: '#F3F4F6',
        three: '#E5E7EB',
        four: '#D1D5DB',
        five: '#9CA3AF',
        six: '#6B7280',
        seven: '#4B5563',
        eight: '#374151',
        nine: '#1F2937',
        ten: '#111827',
      },
      yellow: {
        one: '#FBBF24',
        two: '#F59E0B',
      },
      blue: {
        one: '#3B82F6',
        two: '#2563EB',
      },
      purple: {
        one: '#8B5CF6',
        two: '#7C3AED',
      },
      rose: {
        one: '#F43F5E',
        two: '#E11D48',
      },
    },
    fontSize: {
      'headline-base': ['1.875rem', '2.25rem'],
      'headline-lg': ['2.25rem', '2.5rem'],
      'headline-xl': ['3rem', '1'],
      'headline-2xl': ['3.75rem', '1'],
      'paragraph-sm': ['0.875rem', '1.25rem'],
      'paragraph-base': ['1rem', '1.5rem'],
      'subtitle-xs': [
        '0.75rem',
        {
          lineHeight: '1rem',
          fontWeight: '700',
          letterSpacing: '0.05em',
        },
      ],
      'subtitle-sm': [
        '0.875rem',
        {
          lineHeight: '1.25rem',
          fontWeight: '700',
          letterSpacing: '0.05em',
        },
      ],
      'subtitle-base': [
        '1rem',
        {
          lineHeight: '1.5rem',
          fontWeight: '700',
          letterSpacing: '0.05em',
        },
      ],
    },
  },
  plugins: [],
};
