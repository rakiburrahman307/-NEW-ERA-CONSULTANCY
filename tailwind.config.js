/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        customBg: "#FCA843",
        customTextColor: "#FCA843",
        navBg: '#F3F3F3', 
        customText: '#333333', 
        customFooter: '#1a1a1a'
      },
    },
  },
  plugins: [],
}
