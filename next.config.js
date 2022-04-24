const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const process = require('process')

const { ANALYZE, INSTAGING, NODE_ENV } = process.env

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
    reactRemoveProperties: NODE_ENV == 'production' && !INSTAGING
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  publicRuntimeConfig: {
    BUILD_DATE: new Date().toISOString()
  },
  webpack(config, { isServer }) {
    if (ANALYZE != null) {
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
