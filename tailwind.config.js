/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        'be-vietnam-pro': ['"Be Vietnam Pro"'],
      },
      colors: {
        textColor: {
          80: '#09090BCC',
          40: '#09090B66',
        },
      },
    },
  },
  plugins: [],
}
