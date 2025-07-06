import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight, CheckCircle, MapPin, TrendingUp, DollarSign, Users, Target, Star, BarChart } from "lucide-react"

export const metadata: Metadata = {
  title: "State-by-State Guide to Attorney Lead Generation | 2024 Legal Marketing Analysis",
  description: "Comprehensive state-by-state analysis of attorney lead generation opportunities. Compare conversion rates, market saturation, and ROI across all US states for legal marketing success.",
  keywords: "attorney lead generation by state, lawyer leads by state, legal marketing by state, attorney database state analysis, law firm marketing state guide, state attorney conversion rates",
  openGraph: {
    title: "State-by-State Guide to Attorney Lead Generation | 2024 Legal Marketing Analysis",
    description: "Comprehensive state-by-state analysis of attorney lead generation opportunities and market insights.",
    type: "article",
    url: "https://attorneyleads.store/blog/state-by-state-guide-attorney-lead-generation",
    publishedTime: "2024-12-12T10:00:00Z",
  },
  alternates: {
    canonical: "https://attorneyleads.store/blog/state-by-state-guide-attorney-lead-generation",
  },
}

export default function StateGuide() {
  const topStates = [
    {
      name: "California",
      attorneys: "175,000+",
      population: "39.5M",
      conversionRate: "4.2%",
      avgCaseValue: "$85K",
      marketSaturation: "High",
      opportunity: "Premium Niches",
      color: "from-blue-500 to-blue-600",
      highlights: [
        "Largest attorney market in US",
        "High-value corporate & tech law",
        "Strong personal injury market",
        "Premium pricing tolerance"
      ]
    },
    {
      name: "Texas",
      attorneys: "95,000+",
      population: "30.5M",
      conversionRate: "5.1%",
      avgCaseValue: "$62K",
      marketSaturation: "Medium-High",
      opportunity: "Energy & Business Law",
      color: "from-red-500 to-red-600",
      highlights: [
        "Rapid market growth",
        "Strong energy law sector",
        "Business-friendly environment",
        "Competitive conversion rates"
      ]
    },
    {
      name: "Florida",
      attorneys: "110,000+",
      population: "22.6M",
      conversionRate: "4.8%",
      avgCaseValue: "$48K",
      marketSaturation: "Medium",
      opportunity: "Personal Injury & Real Estate",
      color: "from-orange-500 to-orange-600",
      highlights: [
        "Growing retiree population",
        "Strong real estate market",
        "High personal injury volume",
        "Tourism-related legal needs"
      ]
    },
    {
      name: "New York",
      attorneys: "180,000+",
      population: "19.3M",
      conversionRate: "3.9%",
      avgCaseValue: "$125K",
      marketSaturation: "Very High",
      opportunity: "Financial & Corporate",
      color: "from-purple-500 to-purple-600",
      highlights: [
        "Financial services hub",
        "Highest average case values",
        "International legal work",
        "Premium market segments"
      ]
    }
  ]

  const emergingStates = [
    {
      name: "Colorado",
      growth: "+8.2%",
      opportunity: "Tech & Cannabis Law",
      avgROI: "285%"
    },
    {
      name: "North Carolina",
      growth: "+7.1%",
      opportunity: "Banking & Healthcare",
      avgROI: "245%"
    },
    {
      name: "Arizona",
      growth: "+6.8%",
      opportunity: "Real Estate & Immigration",
      avgROI: "230%"
    },
    {
      name: "Tennessee",
      growth: "+6.2%",
      opportunity: "Healthcare & Music Law",
      avgROI: "220%"
    }
  ]

  const practiceAreasByState = [
    {
      state: "California",
      topPractices: ["Technology Law", "Entertainment", "Personal Injury", "Corporate"],
      avgFees: ["$650/hr", "$525/hr", "$450/hr", "$750/hr"]
    },
    {
      state: "Texas",
      topPractices: ["Energy Law", "Business Law", "Real Estate", "Family Law"],
      avgFees: ["$485/hr", "$425/hr", "$325/hr", "$285/hr"]
    },
    {
      state: "Florida",
      topPractices: ["Personal Injury", "Real Estate", "Criminal Defense", "Elder Law"],
      avgFees: ["$385/hr", "$295/hr", "$275/hr", "$225/hr"]
    },
    {
      state: "New York",
      topPractices: ["Securities Law", "M&A", "Real Estate", "Immigration"],
      avgFees: ["$850/hr", "$725/hr", "$525/hr", "$350/hr"]
    }
  ]

  const marketingStrategies = [
    {
      region: "Northeast",
      states: ["NY", "NJ", "MA", "CT", "PA"],
      approach: "Premium Positioning",
      tactics: [
        "LinkedIn targeting for corporate lawyers",
        "High-value case focus",
        "Professional association partnerships",
        "Thought leadership content"
      ],
      bestTimes: "Tuesday-Thursday, 9AM-11AM"
    },
    {
      region: "Southeast",
      states: ["FL", "GA", "NC", "SC", "VA"],
      approach: "Volume & Relationship Building",
      tactics: [
        "Personal injury focused campaigns",
        "Real estate attorney targeting",
        "Local bar association engagement",
        "Referral network development"
      ],
      bestTimes: "Monday-Wednesday, 10AM-2PM"
    },
    {
      region: "Southwest",
      states: ["TX", "AZ", "NM", "NV"],
      approach: "Business Growth Focus",
      tactics: [
        "Energy and business law emphasis",
        "Immigration attorney outreach",
        "Chamber of commerce partnerships",
        "Cross-border legal services"
      ],
      bestTimes: "Tuesday-Friday, 8AM-10AM"
    },
    {
      region: "West Coast",
      states: ["CA", "OR", "WA"],
      approach: "Innovation & Technology",
      tactics: [
        "Tech law specialization",
        "Environmental law focus",
        "Startup legal services",
        "Digital marketing emphasis"
      ],
      bestTimes: "Wednesday-Friday, 11AM-1PM"
    }
  ]

  return (
    <main className="min-h-screen">
      <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
              Geographic Targeting
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            State-by-State Guide to Attorney Lead Generation
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Comprehensive analysis of attorney lead generation opportunities across all US states. Compare conversion rates, market saturation, and ROI to optimize your legal marketing campaigns.
          </p>

          <div className="flex items-center justify-center space-x-6 text-sm text-slate-500 mb-8">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              December 12, 2024
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              Geographic Marketing Analyst
            </div>
            <div>15 min read</div>
          </div>
        </header>

        {/* Top Performing States */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Top Performing States for Attorney Marketing</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {topStates.map((state, index) => (
              <div key={index} className="premium-card p-6 rounded-xl">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${state.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-slate-900">{state.name}</h3>
                    <p className="text-slate-600">{state.attorneys} attorneys • {state.population} population</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600">{state.conversionRate}</div>
                    <div className="text-sm text-slate-600">Conversion Rate</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">{state.avgCaseValue}</div>
                    <div className="text-sm text-slate-600">Avg Case Value</div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-sm text-slate-600">Market Saturation: </span>
                    <span className="font-semibold text-slate-900">{state.marketSaturation}</span>
                  </div>
                  <div>
                    <span className="text-sm text-slate-600">Best Opportunity: </span>
                    <span className="font-semibold text-blue-600">{state.opportunity}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {state.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Emerging Markets */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Emerging High-Growth Markets</h2>
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl">
            <p className="text-lg text-slate-700 mb-6">
              These states are experiencing rapid legal market growth with lower competition and higher ROI potential:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {emergingStates.map((state, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{state.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Growth Rate:</span>
                      <span className="font-bold text-green-600">{state.growth}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Avg ROI:</span>
                      <span className="font-bold text-blue-600">{state.avgROI}</span>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <p className="text-sm text-slate-700 font-medium">{state.opportunity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Practice Area Analysis */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Practice Area Opportunities by State</h2>
          
          <div className="space-y-6">
            {practiceAreasByState.map((state, index) => (
              <div key={index} className="premium-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{state.state} - Top Practice Areas</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {state.topPractices.map((practice, idx) => (
                    <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-slate-900 mb-1">{practice}</h4>
                      <p className="text-sm text-slate-600">Avg Fee: <span className="font-bold text-green-600">{state.avgFees[idx]}</span></p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Regional Marketing Strategies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Regional Marketing Strategies</h2>
          
          <div className="space-y-8">
            {marketingStrategies.map((region, index) => (
              <div key={index} className="premium-card p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-slate-900">{region.region}</h3>
                    <p className="text-slate-600">States: {region.states.join(", ")}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Recommended Approach: {region.approach}</h4>
                    <ul className="space-y-2">
                      {region.tactics.map((tactic, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                          <span className="text-sm text-slate-700">{tactic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Optimal Contact Times</h4>
                    <p className="text-blue-800">{region.bestTimes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Data Insights */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Key Market Insights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="premium-card p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Highest Growth</h3>
              <p className="text-3xl font-bold text-green-600 mb-1">Colorado</p>
              <p className="text-sm text-slate-600">8.2% annual attorney growth rate</p>
            </div>

            <div className="premium-card p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Highest Value</h3>
              <p className="text-3xl font-bold text-blue-600 mb-1">New York</p>
              <p className="text-sm text-slate-600">$125K average case value</p>
            </div>

            <div className="premium-card p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BarChart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Best Conversion</h3>
              <p className="text-3xl font-bold text-purple-600 mb-1">Texas</p>
              <p className="text-sm text-slate-600">5.1% average conversion rate</p>
            </div>
          </div>
        </section>

        {/* Targeting Recommendations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">State-Specific Targeting Recommendations</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">High-Volume States</h3>
                <p className="text-slate-700 mb-4">
                  Focus on specialized niches and premium segments in saturated markets:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="text-sm">Target emerging practice areas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="text-sm">Focus on senior-level attorneys</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="text-sm">Emphasize premium value propositions</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Emerging Markets</h3>
                <p className="text-slate-700 mb-4">
                  Capture market share early in high-growth states:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm">Broad practice area coverage</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm">Volume-based strategies</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm">Long-term relationship building</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Area Cross-Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Target by Practice Area & State</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/practice-areas/personal-injury" className="group">
              <div className="premium-card p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-red-600">Personal Injury by State</h3>
                <p className="text-sm text-slate-600 mb-3">Top states: FL, CA, TX, NY</p>
                <p className="text-sm text-slate-600 mb-4">45,000+ verified PI attorney contacts with state-level targeting</p>
                <div className="flex items-center text-red-600 text-sm font-medium">
                  View PI Database <ArrowRight className="ml-1 h-3 w-3" />
                </div>
              </div>
            </Link>

            <Link href="/practice-areas/corporate-law" className="group">
              <div className="premium-card p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-blue-600">Corporate Law by State</h3>
                <p className="text-sm text-slate-600 mb-3">Top states: NY, CA, TX, IL</p>
                <p className="text-sm text-slate-600 mb-4">28,000+ business attorney contacts with geographic filtering</p>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  View Corporate Database <ArrowRight className="ml-1 h-3 w-3" />
                </div>
              </div>
            </Link>

            <Link href="/practice-areas/family-law" className="group">
              <div className="premium-card p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-pink-600">Family Law by State</h3>
                <p className="text-sm text-slate-600 mb-3">Top states: CA, TX, FL, PA</p>
                <p className="text-sm text-slate-600 mb-4">32,000+ family law attorney contacts by state and metro area</p>
                <div className="flex items-center text-pink-600 text-sm font-medium">
                  View Family Law Database <ArrowRight className="ml-1 h-3 w-3" />
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Conclusion & CTA */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Conclusion</h2>
          
          <p className="text-lg text-slate-600 mb-6">
            Geographic targeting is crucial for legal marketing success. By understanding state-specific opportunities, market saturation levels, and practice area concentrations, you can optimize your attorney database campaigns for maximum ROI.
          </p>
          
          <p className="text-lg text-slate-600 mb-8">
            Whether you're targeting high-value markets like New York and California or emerging opportunities in Colorado and North Carolina, the key is matching your approach to local market conditions and attorney demographics.
          </p>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-purple-900 mb-4">Ready to Target Specific States?</h3>
            <p className="text-purple-800 mb-6">
              Access our state-filtered attorney database with 300,000+ contacts across all US states and practice areas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="premium-button text-white font-semibold">
                <a href="/attorney-database">
                  Browse by State
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/practice-areas">
                  View Practice Areas
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="border-t border-slate-200 pt-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Related Articles</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/blog/how-to-choose-best-attorney-database-legal-marketing" className="group">
              <div className="flex items-center space-x-4 p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 group-hover:text-blue-600">How to Choose Attorney Database</h4>
                  <p className="text-sm text-slate-600">Complete selection guide for legal marketers</p>
                </div>
              </div>
            </Link>

            <Link href="/blog/practice-area-targeting-maximizing-legal-lead-conversion" className="group">
              <div className="flex items-center space-x-4 p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 group-hover:text-blue-600">Practice Area Targeting</h4>
                  <p className="text-sm text-slate-600">Maximize conversion with specialized targeting</p>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </article>
    </main>
  )
} 