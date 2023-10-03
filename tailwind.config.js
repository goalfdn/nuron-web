/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'serif': ['var(--font-alice)', 'serif'],
      'sans': ['var(--font-zen)', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'checked-box': "url('/checked-box.svg')"
      },
      colors: {
        'trusty-100': '#D5E6E3',
        'trusty-200': '#C9E3DE',
        'trusty-300': '#9ED1C8',
        'trusty-400': '#0F7B69',
        'trusty-500': '#083D34',
        'text-black': '#090909',
        'serenity': '#CFB41B'
      },
      container: {
        screens: {
          'xl': '1024px',
          '2xl': '1024px'
        }
      }
    },
  },
  plugins: [],
}
