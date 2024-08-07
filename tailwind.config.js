/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  // "#FCA843"
  theme: {
    extend: {
      colors: {
        customBg: "#FCA843",
        customTextColor: "#FFA500",
        navBg: '#F3F3F3', 
        customText: '#333333', 
        customFooter: '#1a1a1a'
      },
      animation: {
        blink: 'blink 1s step-start infinite',
      },
      keyframes: {
        blink: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
