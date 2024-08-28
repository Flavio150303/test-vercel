/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'metalico-plomo': '#404040',
        'verde-clarito': '#3BB77E',
        'barra-seleccion': '#B5DA38',
        'mensaje-fondo': '#9F9F9F',
        'contactenos': '#272D4E',
        'obten-info': '#2AA0DF',
        'btn-enviar': '#50BEC5',
        'blanco-humo': '#FAFBFD',
        'cian-claro': ' #E0FFFF',
       
        
      },
    },
  },
  plugins: [],
};
