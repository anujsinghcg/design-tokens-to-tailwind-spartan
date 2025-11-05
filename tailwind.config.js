// /** @type {import('tailwindcss').Config} */
// const tokens = require('./tokens.json');
// module.exports = {
//   presets: [require('@spartan-ng/ui-core/hlm-tailwind-preset')],
//   content: [
//     './src/**/*.{html,ts}',
//     './libs/ui/**/*.{html,ts}',
//   ],
//   theme: {
//     extend: {
//       colors: tokens["tw/colors"],
//       fontSize: tokens["tw/font"]?.size,
//       borderRadius: tokens["tw/border-radius"],
//       spacing: tokens["tw/padding"], // but better to map manually
//       opacity: tokens["tw/opacity"],
//       accent: 'var(--accent)',
//     },
//   },
//   plugins: [],
// }

const tokens = require('./tokens/tokens.json');

module.exports = {
  content: ['./src/**/*.{html,ts}','./libs/**/*.{html,ts}'],
  
  darkMode: 'class',
  theme: {
    
    extend: {
      ...(tokens?.theme?.extend || {}),
      
colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)'
      },

      spacing: tokens.spacing
    }
  },
  plugins: [],
};