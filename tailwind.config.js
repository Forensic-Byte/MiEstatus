/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F9FAFB',
        foreground: '#1F2328',
        card: '#FFFFFF',
        border: '#E5E7EB',
        muted: '#F3F4F6',
        primary: {
          DEFAULT: '#1E3A5F',
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#22C55E',
          foreground: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Source Serif 4"', 'serif'],
      },
    },
  },
  plugins: [],
};
