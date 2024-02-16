/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
    extend: {},
  },
  plugins: [
    // function ({ addUtilities }) {
    //   const newUtilities = {
    //     '.btn': {
    //       padding: '0.5rem 1rem',
    //       fontWeight: '700',
    //       borderRadius: '0.25rem',
    //       backgroundColor: '#1D4ED8',
    //       color: '#fff',
    //       '&:hover': {
    //         backgroundColor: '#1E40AF',
    //       },
    //     },
    //   }
    //   addUtilities(newUtilities)
    // },
  ],
}
