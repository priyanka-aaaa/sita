/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
}

module.exports = {
  eslint: {

    ignoreDuringBuilds: true,
  },
  env: {

    REACT_APP_SERVER_URL: 'https://sita-fawn.vercel.app/',

    REACT_APP_API_URL:  'https://sita-fawn.vercel.app/',
    // REACT_APP_API_URL: 'http://localhost:3000/',

    
    REACT_APP_KEY_ID: 'rzp_live_ALzPxuAS54iJhF',
    REACT_APP_GOOGLE_CLIENT_ID: '66848945093-imgsinq6clp7q571bd6udrp9k0qj33fh.apps.googleusercontent.com',
    GOOGLE_CLIENTS_ID: '66848945093-imgsinq6clp7q571bd6udrp9k0qj33fh.apps.googleusercontent.com',
    GOOGLE_SECRET_ID: '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',

    
    REACT_APP_RAZOR_KEY_ID: 'rzp_test_8nTvwz8mu6A6vn'


  },
  images: {
    loader: "custom"
  }
}