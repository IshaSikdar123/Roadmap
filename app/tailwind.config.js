/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        customblue: '#081016', // Ensure you include the '#' for color values
      },
      screens: {
        'm-sm': '320px',  // Mobile small
        'm-md': '375px',  // Mobile medium
        'm-lg': '425px',  // Mobile large
        'md': '768px',     // Tablet
        'lg': '1024px',    // Laptop
        '2xl': '1280px',   // Desktop
        '3xl': '1440px',     // Large desktops
      },
    },
  },
  plugins: [],
}
