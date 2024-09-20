// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: "https",
//           hostname: "cdn.sanity.io",
//         },
//       ],
//     },
//     experimental: {
//       taint: true,
//       serverMinification: false,
//     },
//     compress: false,
//     webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
//       if (!dev) {
//         // Ensure that other optimization settings are preserved
//         config.optimization = {
//           ...config.optimization,
//           config.optimization.minimizer: [],
//         };
//       }
//       // Important: return the modified config
//       return config;
//     },
//     swcMinify: false,
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  compress: true, // Enable compression
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    // Remove custom webpack configuration that disables minification
    return config;
  },
};

export default nextConfig;