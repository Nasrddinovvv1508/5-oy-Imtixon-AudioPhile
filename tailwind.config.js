/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/home/desktop/image-speaker-zx7.jpg')",
      }
    },
  },
  plugins: [require('daisyui'),],
}