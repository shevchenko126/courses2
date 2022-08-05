/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  i18n:{
    locales:[
      'ru', 'en', 'uk'
    ],
    defaultLocale:'ru',
  },

  env:{
    SERVER_URL: 'https://swapi.dev/api/'
  }
}

module.exports = nextConfig
