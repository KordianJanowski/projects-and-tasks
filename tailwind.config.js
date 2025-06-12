/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter_400Regular'],
        InterMedium: ['Inter_500Medium'],
        InterBold: ['Inter_700Bold'],
      }
    },
  },
  plugins: [],
}