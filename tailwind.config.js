module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      syne: ['Syne', 'sans-serif']
    },
    extend: {
      colors: {
        'accent-1': '#333',
      },
    },
  },
  variants: {},
  plugins: [require('tailwindcss-font-inter')()]
}