// tailwind.config.js
const { colors, spacing, radii } = require('./src/styles/tokens.ts');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        'primary-hover': colors.primaryHover,
        secondary: colors.secondary,
        'secondary-hover': colors.secondaryHover,
      },
      spacing: spacing,
      borderRadius: radii,
    },
  },
  plugins: [],
};