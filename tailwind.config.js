/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'tgc-green': '#A5B98E'
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar')
  ]
}
