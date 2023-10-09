import type { Config } from 'tailwindcss'

const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'xs': '280px',
        ...defaultTheme.screens,
      },
      
      backgroundColor: {
        'cream': '#FFFDF4',
        'brown': '#2F231D',
      },

      colors: {
        'cookie': '#DEA668',
      },

      fontFamily: {
        'hk-grotesk': ['HK Grotesk', 'sans-serif'],
      },

      gridTemplateColumns: {
        //more narrow 3 columns
        '3s': 'repeat(3, minmax(0, 100px))',
      },
    },
  },
  plugins: [],
}
export default config
