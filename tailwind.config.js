module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',       // looks inside all .ts/.tsx files in /pages
    './components/**/*.{js,ts,jsx,tsx}', // looks inside all files in /components
  ],
  theme: {
    extend: {}, // lets you extend default Tailwind theme (colors, fonts, spacing, etc.)
  },
  plugins: [], // you can add Tailwind plugins (like typography, forms)
}