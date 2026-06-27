export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { lato: ['Lato', 'sans-serif'] },
      colors: {
        orange: { DEFAULT: '#FD6F00', dark: '#E46400' },
      },
      backgroundImage: {
        'orange-grad': 'linear-gradient(104deg, #FD6F00 3%, #E46400 95%)',
      },
    },
  },
  plugins: [],
}
