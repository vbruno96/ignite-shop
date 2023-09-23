import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      md: ['1.125rem', '160%'],
      lg: ['1.25rem', '160%'],
      xl: ['1.5rem', '160%'],
      '2xl': ['2rem', '160%'],
    },
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
      },
    },
    colors: {
      green: {
        300: '#00B37E',
        500: '#00875F',
      },
      gray: {
        100: '#E1E1E6',
        300: '#C4C4CC',
        800: '#202024',
        900: '#121214',
      },
      white: '#FFF',
    },
  },
  plugins: [],
}
export default config
