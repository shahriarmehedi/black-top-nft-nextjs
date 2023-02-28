/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },

  // REQUIRED FOR DAISYUI
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light"]
  }
}
