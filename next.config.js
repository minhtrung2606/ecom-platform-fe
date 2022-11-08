/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // https://www.appsloveworld.com/reactjs/100/31/warning-prop-classname-did-not-match-in-next-js-site-with-styled-components
    styledComponents: process.env.NODE_ENV !== 'production',
  },
}

module.exports = nextConfig
