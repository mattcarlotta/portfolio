module.exports = {
  content: [
    'src/pages/**/*.{js,ts,jsx,tsx}',
    'src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0px 0px 26px 0px rgba(0, 64, 255, 1)',
        ring: 'inset -1px -1px 24px -9px rgb(101 130 255 / 50%), 0px 0px 26px -2px rgb(0 64 255)'
      },
      colors: {
        primary: {
          DEFAULT: '#008ef1',
          25: '#0088ff',
          50: 'rgba(0, 128, 255, 0.8)',
          100: '#0096ff',
          800: '#00264d',
          900: '#001031'
        },
        gray: {
          DEFAULT: '#4a4a4a',
          100: '#d2d2d2',
          200: 'ccc'
        },
        fire: {
          DEFAULT: '#f5222d'
        },
        accent: '#1295f3',
        'light-blue': '#63bfff',
        'off-black': '#1f1f1f'
      },
      fontFamily: {
        plain: [
          'Mukta',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif'
        ],
        stylized: [
          'Elemental',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif'
        ]
      },
      fontSize: {
        xxs: '0.55rem',
        xs: '0.6rem',
        sm: '0.7rem',
        tiny: '0.8rem',
        base: '0.9rem',
        md: '0.925rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem'
      },
      height: {
        preview: '4rem'
      },
      minHeight: {
        body: '40.625rem'
      },
      minWidth: {
        preview: '4rem'
      }
    }
  },
  plugins: []
}
