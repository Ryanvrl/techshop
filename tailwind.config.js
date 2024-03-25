/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'afterPhone': '420px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'max-screen': '1440px',
      '2xl': '1536px',
      
    },
    extend: {
      keyframes: {
        showSideBar: {
          '0%': { opacity: '0', width: '0px' },
          '50%': { opacity: '0.5', width: '100px' },
          '100%': { opacity: '1', width: '200px' }
        },
      },
      animation: {
        'showSideBar': 'showSideBar .4s',
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif']
      },
      colors: {
        "primary-bg": 'hsl(0, 0%, 100%)',
        "secondary-bg": 'hsl(0, 0%, 89%)',
        "color-logo": '#1E40AF'
      }
    },
  },
  plugins: [],
}

