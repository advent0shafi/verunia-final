import { MetadataRoute } from 'next'
import { frontendPoint } from '@/lib/getData'
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${frontendPoint}/sitemap.xml`,
  }
}
