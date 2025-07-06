import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://attorneyleads.store"
  const currentDate = new Date()

  // Practice areas for dynamic URLs
  const practiceAreas = [
    'personal-injury', 'corporate-law', 'family-law', 'criminal-defense',
    'real-estate', 'immigration', 'bankruptcy', 'employment-law',
    'tax-law', 'intellectual-property', 'medical-malpractice', 'divorce'
  ]

  // Major states for dynamic URLs  
  const majorStates = [
    'california', 'texas', 'florida', 'new-york', 'pennsylvania',
    'illinois', 'ohio', 'georgia', 'north-carolina', 'michigan'
  ]

  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/attorney-database`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/lawyer-leads`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/legal-marketing-database`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/attorney-email-list`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/practice-areas`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/states`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#features`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#how-it-works`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#target-audience`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#faq`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/Attorney%20Leads%20Sample.xlsx`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ]

  // Practice area pages
  const practiceAreaPages = practiceAreas.map(area => ({
    url: `${baseUrl}/practice-areas/${area}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // State pages  
  const statePages = majorStates.map(state => ({
    url: `${baseUrl}/states/${state}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  // Combined practice area + state pages for high-value long-tail keywords
  const combinedPages = practiceAreas.slice(0, 5).flatMap(area =>
    majorStates.slice(0, 5).map(state => ({
      url: `${baseUrl}/practice-areas/${area}/${state}`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }))
  )

  return [...staticPages, ...practiceAreaPages, ...statePages, ...combinedPages]
}
