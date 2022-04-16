const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ]
      }
    ]
  },
  compiler: {
    reactRemoveProperties:
      process.env.NODE_ENV == 'production' && !process.env.INSTAGING
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  webpack(config, { isServer }) {
    if (process.env.ANALYZE != null) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: isServer
            ? '../analyze/server.html'
            : './analyze/client.html'
        })
      )
    }

    return config
  }
}
