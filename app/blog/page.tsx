import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight, BookOpen, TrendingUp, Users, Shield, Target, BarChart } from "lucide-react"

export const metadata: Metadata = {
  title: "Legal Marketing Blog | Attorney Database & Lawyer Lead Generation Strategies",
  description: "Expert insights on legal marketing, attorney databases, lawyer lead generation, and law firm marketing strategies. Learn how to maximize ROI with targeted attorney leads and email marketing.",
  keywords: "legal marketing blog, attorney database tips, lawyer lead generation, law firm marketing strategies, attorney email marketing, legal marketing ROI, lawyer leads blog, attorney marketing insights",
  openGraph: {
    title: "Legal Marketing Blog | Attorney Database & Lawyer Lead Generation Strategies",
    description: "Expert insights on legal marketing, attorney databases, and lawyer lead generation strategies.",
    type: "website",
    url: "https://attorneyleads.store/blog",
  },
  alternates: {
    canonical: "https://attorneyleads.store/blog",
  },
}

export default function BlogPage() {
  const featuredPosts = [
    {
      title: "How to Choose the Best Attorney Database for Legal Marketing",
      excerpt: "Complete guide to selecting attorney databases that maximize your legal marketing ROI. Compare features, pricing, and conversion rates across different attorney database providers.",
      slug: "how-to-choose-best-attorney-database-legal-marketing",
      category: "Database Selection",
      readTime: "12 min read",
      publishDate: "Dec 15, 2024",
      icon: Target,
      featured: true
    },
    {
      title: "State-by-State Guide to Attorney Lead Generation",
      excerpt: "Comprehensive analysis of attorney lead generation strategies across all US states. Learn which states offer the highest conversion rates for legal marketing campaigns.",
      slug: "state-by-state-guide-attorney-lead-generation",
      category: "Geographic Targeting",
      readTime: "15 min read",
      publishDate: "Dec 12, 2024",
      icon: Users,
      featured: true
    }
  ]

  const recentPosts = [
    {
      title: "ROI Analysis: Email Marketing vs Cold Calling for Lawyers",
      excerpt: "Data-driven comparison of email marketing and cold calling effectiveness for attorney lead generation. Includes conversion rates, cost analysis, and best practices.",
      slug: "roi-analysis-email-marketing-vs-cold-calling-lawyers",
      category: "Marketing Strategy",
      readTime: "10 min read",
      publishDate: "Dec 10, 2024",
      icon: BarChart
    },
    {
      title: "GDPR Compliance for Attorney Email Marketing",
      excerpt: "Essential guide to GDPR compliance when marketing to attorneys and law firms. Protect your business while maintaining effective legal marketing campaigns.",
      slug: "gdpr-compliance-attorney-email-marketing",
      category: "Compliance",
      readTime: "8 min read",
      publishDate: "Dec 8, 2024",
      icon: Shield
    },
    {
      title: "Practice Area Targeting: Maximizing Legal Lead Conversion",
      excerpt: "Advanced strategies for targeting specific legal practice areas. Learn how to segment attorney databases for maximum conversion rates and ROI.",
      slug: "practice-area-targeting-maximizing-legal-lead-conversion",
      category: "Targeting Strategy",
      readTime: "11 min read",
      publishDate: "Dec 5, 2024",
      icon: TrendingUp
    }
  ]

  const categories = [
    { name: "Database Selection", count: 8, color: "bg-blue-100 text-blue-800" },
    { name: "Marketing Strategy", count: 12, color: "bg-green-100 text-green-800" },
    { name: "Geographic Targeting", count: 6, color: "bg-purple-100 text-purple-800" },
    { name: "Compliance", count: 4, color: "bg-red-100 text-red-800" },
    { name: "ROI Optimization", count: 9, color: "bg-yellow-100 text-yellow-800" },
    { name: "Targeting Strategy", count: 7, color: "bg-indigo-100 text-indigo-800" }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzlDOTJBQyIgZmlsbC1vcGFjaXR5PSIwLjA1Ij4KPHBhdGggZD0ibTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+CjwvZz4KPC9nPgo8L3N2Zz4+')] opacity-30"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <BookOpen className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-slate-700">Legal Marketing Insights</span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-playfair font-bold mb-6 leading-tight">
              <span className="premium-text-gradient">Legal Marketing Blog</span>
              <br />
              <span className="text-slate-900">Expert Attorney Lead Generation Strategies</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover proven strategies for attorney database marketing, lawyer lead generation, and law firm growth. Get expert insights on maximizing ROI with targeted legal marketing campaigns.
            </p>


          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Featured Articles
            </h2>
            <p className="text-lg text-slate-600">
              Our most popular legal marketing insights and attorney database strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <Link key={index} href={`/blog/${post.slug}`} className="group">
                <article className="premium-card p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <post.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <span className="text-sm font-medium text-blue-600">{post.category}</span>
                      <div className="flex items-center space-x-4 text-sm text-slate-500 mt-1">
                        <span className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {post.publishDate}
                        </span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Posts Grid */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Recent Articles</h2>
              
              <div className="space-y-8">
                {recentPosts.map((post, index) => (
                  <Link key={index} href={`/blog/${post.slug}`} className="group">
                    <article className="premium-card p-6 rounded-xl hover:shadow-lg transition-all duration-300 flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <post.icon className="h-5 w-5 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                            {post.category}
                          </span>
                          <span className="text-xs text-slate-500">{post.readTime}</span>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-slate-600 text-sm leading-relaxed mb-3">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center text-sm text-slate-500">
                          <Calendar className="h-3 w-3 mr-1" />
                          {post.publishDate}
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="premium-card p-6 rounded-xl mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-slate-700">{category.name}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${category.color}`}>
                        {category.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="premium-card p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Get Attorney Database</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Access our comprehensive attorney database with 300K+ verified lawyer contacts for your marketing campaigns.
                </p>
                <Button 
                  asChild 
                  className="w-full premium-button text-white font-semibold"
                >
                  <a href="/attorney-database">
                    Browse Database
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Implement These Strategies?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Get started with our attorney database and put these legal marketing insights into action.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="premium-button text-white font-semibold px-8 py-4 rounded-xl border-0"
            >
              <a href="/attorney-database">
                Browse Attorney Database
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 font-semibold px-8 py-4 rounded-xl"
            >
              <a href="/practice-areas">
                View Practice Areas
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Hidden SEO Content */}
      <div className="sr-only">
        <h2>Legal Marketing Blog and Attorney Database Insights</h2>
        <p>Our legal marketing blog provides comprehensive insights on attorney database selection, lawyer lead generation strategies, law firm marketing tactics, and legal industry best practices. Learn how to maximize ROI with targeted attorney email marketing, optimize conversion rates with practice area targeting, and implement effective lead generation campaigns for law firms across all legal specializations including personal injury, corporate law, family law, criminal defense, and real estate.</p>
        
        <h3>Attorney Database Marketing Strategies</h3>
        <p>Discover proven strategies for attorney database marketing including email marketing best practices, cold calling techniques, GDPR compliance for legal marketing, practice area targeting optimization, and geographic segmentation for maximum conversion rates. Our blog covers attorney lead generation across all US states with detailed analysis of market opportunities and conversion potential.</p>
        
        <h3>Legal Marketing ROI and Performance Analysis</h3>
        <p>Get data-driven insights on legal marketing performance including email marketing vs cold calling ROI analysis, practice area conversion rates, geographic targeting effectiveness, and attorney database selection criteria. Learn how to measure and optimize legal marketing campaigns for maximum return on investment and sustainable law firm growth.</p>
      </div>
    </main>
  )
} 