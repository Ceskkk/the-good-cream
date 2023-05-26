import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'neue-montreal': ['NeueMontreal', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'tgc-green': '#A5B98E'
      },
      screens: {
        lg: { max: '1100px' }
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar')
  ]
}
