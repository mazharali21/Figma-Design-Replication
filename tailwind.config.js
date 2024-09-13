/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily:{
      'open-sans' : ['Open Sans', 'sans-serif']
    },
    fontSize:{
      pg : '13px' // Text Size for paragraph
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        expandContract: {
          '0%, 100%': { width: '0px' },
          '50%': { width: '535px' },
        },
        expandContractGreen: {
          '0%, 100%': { width: '0px' },
          '50%': { width: '650px' },
        },
        expandContractSmall: {
          '0%, 100%': { width: '0px' },
          '50%': { width: '200px' },
        },
        expandContractBlue: {
          '0%, 100%': { width: '0px' },
          '50%': { width: '200px' },
        }
      },
      animation: {
        expandContract: 'expandContract 4s infinite',
        expandContractGreen: 'expandContract 4s infinite',
      },
    },
  },
  plugins: [],
}
