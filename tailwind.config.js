/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      xs: '475px',
      sm: '640px',
      md: '768px',
      lg: '920px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#131424',
        secondary: '#393A47',
        accent: '#F13024'
      },
      backgroundImage: {
        'explosion': 'url("/bg-explosion.png")',
        'circles': 'url("/bg-circles.png")',
        'circleStar': 'url("/bg-circle-star.svg")',
        'site': 'url("/site-bg.svg")',
      },
      animation : {
        'spin-low': 'spin 6s linear infinite',
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
