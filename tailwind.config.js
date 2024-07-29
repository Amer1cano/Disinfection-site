/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'miniPhone':{'min': '280px', 'max' : '320px'},
      'phone':{'min': '320px', 'max' : '400px'},
      'bigPhone':{'min': '400px', 'max' : '576px'},
      'miniTablet':{'min': '576px', 'max' : '768px'},
      'tablet':{'min': '768px', 'max' : '992px'},
      'bigTablet':{'min': '992px', 'max' : '1024px'},
      'miniDesktop':{'min': '1024px', 'max' : '1200px'},
      'desktop':{'min': '1200px', 'max' : '1366px'}
    },
    extend: {
      backgroundImage:{
        
        'hero-disinfection':'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("/section2-image/image.png")',
        'gradient-image': 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("/head-images/person.png")'
      }
    },
  },
  plugins: [],
}