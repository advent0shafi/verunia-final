/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Enable Next.js Image Optimization (responsive srcset, modern formats, caching)
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.veruniagroup.com',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'digital.ihg.com',
        pathname: '/is/content/ihg/**',
      },
      {
        protocol: 'https',
        hostname: 'jw-marriott.marriott.com',
      },
      {
        protocol: 'https',
        hostname: 'jw-marriott.marriott.com',
      },

    ],
    
    qualities: [75, 100],

    // Allow SVG usage with next/image (we still mark SVGs unoptimized at call sites).
    dangerouslyAllowSVG: true,
  },
  turbo: false,
}

export default nextConfig
