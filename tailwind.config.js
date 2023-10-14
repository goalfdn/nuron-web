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
        'trusty-50': '#D5E6E3',
        'trusty-100': '#C9E3DE',
        'trusty-200': '#9ED1C8',
        'trusty-300': '#0C8074',
        'trusty-400': '#083D34',
        'trusty-500': '#02231E',
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
