/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXT_PUBLIC_CLIENT,
  trailingSlash: true,
  generateRobotsTxt: true
}

module.exports = config
