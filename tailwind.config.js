/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            green: '#10B981',
            'green-light': '#34D399',
            'green-dark': '#059669',
          }
        },
        animation: {
          'fade-in': 'fadeIn 0.6s ease-in-out',
          'slide-up': 'slideUp 0.8s ease-out',
          'float': 'float 6s ease-in-out infinite',
          'pulse-slow': 'pulse 3s ease-in-out infinite',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideUp: {
            '0%': { transform: 'translateY(30px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
          float: {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-10px)' },
          }
        }
      },
    },
    plugins: [],
  }