/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Enhanced image optimization for SEO
  images: {
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 days
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['attorneyleads.store'],
  },

  // Performance optimizations
  experimental: {
    scrollRestoration: true,
  },

  // Enhanced headers for SEO and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
      {
        source: '/(.*)\\.(ico|png|jpg|jpeg|gif|webp|svg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*)\\.(css|js)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  // Redirects for SEO and fixing 404s
  async redirects() {
    return [
      // Original redirects
      {
        source: '/attorneys',
        destination: '/attorney-database',
        permanent: true,
      },
      {
        source: '/lawyers',
        destination: '/lawyer-leads',
        permanent: true,
      },
      {
        source: '/legal-leads',
        destination: '/lawyer-leads',
        permanent: true,
      },
      {
        source: '/attorney-leads',
        destination: '/lawyer-leads',
        permanent: true,
      },
      {
        source: '/attorney-contacts',
        destination: '/attorney-database',
        permanent: true,
      },
      {
        source: '/lawyer-database',
        destination: '/attorney-database',
        permanent: true,
      },
      // Fix 404 practice area pages
      {
        source: '/practice-areas/real-estate',
        destination: '/practice-areas/corporate-law',
        permanent: true,
      },
      {
        source: '/practice-areas/bankruptcy',
        destination: '/practice-areas/corporate-law',
        permanent: true,
      },
      {
        source: '/practice-areas/criminal-defense',
        destination: '/practice-areas/personal-injury',
        permanent: true,
      },
      {
        source: '/practice-areas/immigration',
        destination: '/practice-areas/family-law',
        permanent: true,
      },
      // Fix state pages that don't exist
      {
        source: '/states/:state*',
        destination: '/practice-areas',
        permanent: true,
      },
      // Fix other 404 URLs
      {
        source: '/legal-marketing-database',
        destination: '/attorney-database',
        permanent: true,
      },
      {
        source: '/attorney-email-list',
        destination: '/attorney-database',
        permanent: true,
      },

    ]
  },



  // Compression and performance
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  
  // Enhanced webpack config for better optimization
  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
          },
        },
      }
    }

    return config
  },
}

export default nextConfig
