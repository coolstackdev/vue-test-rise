module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '1px': '1px',
        '2px': '2px',
      },
    },
    colors: {
      transparent: 'transparent',
      black: '#333333',
      white: '#fff',
      cyan: {
        DEFAULT: '#0084ac',
      },
      orange: {
        DEFAULT: '#ff6900',
      },
      green: {
        DEFAULT: '#7cb82f',
      },
      gray: {
        light: '#b2b2b2',
        DEFAULT: '#aaaaaa',
        dark: '#888888'
      },
    },
    fontFamily: {
      'sans': ['Open Sans'],
      'brandon': ['brandon-grotesque'],
    },
    fontSize: {
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.4rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
