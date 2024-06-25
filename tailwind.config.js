/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#09223B',
        secondary: '#FFC531',
        tertiary: '#FFB400',
        quaternary: '#737373',
      },
      backgroundImage: {
        hero: "linear-gradient(262.09deg, rgba(255, 197, 49, 0.35) 17.36%, rgba(9, 34, 59, 0.35) 58.81%), url('./src/assets/header.png')",
        'call-us':
          "linear-gradient(90deg,  rgba(9, 34, 59, 0.9) 0%, rgba(17, 64, 111, 0.9) 53.88%, rgba(30, 30, 30, 0.9) 100%), url('./src/assets/call-us.png')",
        navbar: 'linear-gradient(to right, #FFC531 50%, #09223B 50%)',
        'testimonials-list':
          'linear-gradient(90deg, rgba(217, 217, 217, 0) 78%, rgba(115, 115, 115, 0.5) 100%)',
      },
      dropShadow: {
        custom: '0 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
