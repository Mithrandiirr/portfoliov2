module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'medium' : 'Futura Medium',
        'light' : 'Futura Light',

        'italic' : 'Futura Light Italic'
      },
      lineHeight : {
        'initial' : 'initial'
      }
    },
  },
  plugins: [],
}