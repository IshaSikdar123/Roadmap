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
        'sm': '640px',   // Small screens
        'md': '768px',   // Medium screens
        'lg': '1024px',  // Large screens
        'xl': '1280px',  // Extra large screens
        '2xl': '1536px', // 2x Extra large screens
        'xs': '475px',   // Custom extra small screens (optional)
        '3xl': '1600px', // Custom extra-large screens (optional)
      },
    },
  },
  plugins: [],
}
