const { INSTAGING } = process.env

module.exports = (api) => {
  const INPRODUCTION = api.env('production')
  api.cache(() => process.env.NODE_ENV)

  return {
    presets: [
      [
        'next/babel',
        {
          'preset-react': {
            runtime: 'automatic'
          }
        }
      ]
    ],
    plugins: [
      INPRODUCTION &&
        !INSTAGING && [
          'react-remove-properties',
          { properties: ['data-testid'] }
        ]
    ].filter(Boolean)
  }
}
