// Conditional env.js import
if (!process.env.SKIP_ENV_VALIDATION) {
  await import('./src/env.js');
}

/** @type {import("next").NextConfig} */
const config = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/**',
      },
    ],
  },
}

export default config;
