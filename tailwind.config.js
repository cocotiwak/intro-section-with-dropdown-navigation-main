module.exports = {
  mode: 'jit',
  purge: [
    './**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'display': ['Epilogue','serif']
      },
      colors:{
        'Almost-White': 'hsl(0, 0%, 98%)',
        'Medium-Gray': 'hsl(0, 0%, 41%)',
        'Almost-Black': 'hsl(0, 0%, 8%)',
        'Gray-transparent': 'hsla(0, 0%, 41%,0.5)',
      },
      fontSize: {
        basis : ['18px','24px']
      },
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
}
