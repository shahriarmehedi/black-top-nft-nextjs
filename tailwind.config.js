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
    themes: [
      {
        mytheme: {
          primary: "#a991f7",
          secondary: "#00FF7F",
          accent: "#ffffff",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "light"
    ]
  }
}
