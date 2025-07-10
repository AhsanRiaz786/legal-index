import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://attorneyleads.store"
  const currentDate = new Date()

  // Only include practice areas that actually have page files
  const existingPracticeAreas = [
    'personal-injury', 'corporate-law', 'family-law'
  ]

  // Only include blog posts that actually exist
  const existingBlogPosts = [
    'how-to-choose-best-attorney-database-legal-marketing',
    'state-by-state-guide-attorney-lead-generation', 
    'roi-analysis-email-marketing-vs-cold-calling-lawyers',
    'gdpr-compliance-attorney-email-marketing',
    'practice-area-targeting-maximizing-legal-lead-conversion'
  ]

  // Only include pages that actually exist
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
      url: `${baseUrl}/blog`,
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
  ]

  // Blog post pages that actually exist
  const blogPostPages = existingBlogPosts.map(post => ({
    url: `${baseUrl}/blog/${post}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Practice area pages that actually exist
  const practiceAreaPages = existingPracticeAreas.map(area => ({
    url: `${baseUrl}/practice-areas/${area}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticPages, ...blogPostPages, ...practiceAreaPages]
}
