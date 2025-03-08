module.exports = {
   darkMode: 'class',
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html"
      
    ],
    theme: {
      extend: {
        
        colors: {
          primary: '#004AAD',
          secondary: '#FFCC00',
          accent: '#F4F4F4',
          'text-dark': '#1a1a1a',
          'text-light': '#ffffff',
          'bg-light': '#f8f9fa'
        },
        fontFamily: {
          montserrat: ['Montserrat', 'sans-serif'],
          sans: ['Open Sans', 'sans-serif']
        },
        animation: {
          slideDown: 'slideDown 0.3s ease-out',
          fadeIn: 'fadeIn 0.2s ease-out'
        }
      }
      
    },
    plugins: []
  }