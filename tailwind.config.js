module.exports = {
  content: [
    'src/pages/**/*.{js,ts,jsx,tsx}',
    'src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0px 0px 26px 0px rgba(0, 64, 255, 1)',
        ring: 'inset -1px -1px 24px -9px rgb(101 130 255 / 50%),0px 0px 26px -2px rgb(0 64 255)'
      },
      colors: {
        primary: {
          DEFAULT: '#008ef1',
          50: 'rgba(0, 128, 255, 0.8)',
          100: '#0096ff'
        },
        accent: '#1295f3',
        'dark-blue': '#001031'
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
      }
    }
  },
  plugins: []
}