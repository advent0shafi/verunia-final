/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Enable Next.js Image Optimization (responsive srcset, modern formats, caching)
    formats: ["image/avif", "image/webp"],
    // Allow SVG usage with next/image (we still mark SVGs unoptimized at call sites).
    dangerouslyAllowSVG: true,
  },
}

export default nextConfig
