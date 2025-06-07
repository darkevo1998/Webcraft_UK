/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tesco-blue': {
          primary: '#00539F',
          secondary: '#007EB9',
        },
        'tesco-red': '#EE171F',
        'tesco-white': '#FFFFFF',
        'tesco-gray': {
          dark: '#333333',
          light: '#F5F5F5',
        }
      },
      fontFamily: {
        'tesco': ['Tesco', 'Arial', 'sans-serif'],
        'tesco-display': ['Tesco Display', 'Arial', 'sans-serif'],
        'tesco-text': ['Tesco Text', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'tesco-xs': ['0.75rem', { lineHeight: '1.25rem' }],
        'tesco-sm': ['0.875rem', { lineHeight: '1.375rem' }],
        'tesco-base': ['1rem', { lineHeight: '1.5rem' }],
        'tesco-lg': ['1.125rem', { lineHeight: '1.625rem' }],
        'tesco-xl': ['1.25rem', { lineHeight: '1.75rem' }],
        'tesco-2xl': ['1.5rem', { lineHeight: '2rem' }],
        'tesco-3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        'tesco-4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
      fontWeight: {
        'tesco-normal': 400,
        'tesco-medium': 500,
        'tesco-semibold': 600,
        'tesco-bold': 700,
      },
      boxShadow: {
        'tesco': '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'tesco': '4px',
      }
    },
  },
  plugins: [],
}; 