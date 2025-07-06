import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Scale, Building2, Heart, Shield, Home, Briefcase, ArrowRight, CheckCircle, Star, Users, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Attorney Database by Practice Areas | Lawyer Contacts by Legal Specialization",
  description: "Browse attorney database by practice areas. Find lawyers by specialization: personal injury, corporate law, family law, criminal defense, real estate, and more. 300K+ verified attorney contacts.",
  keywords: "attorney database by practice area, lawyer contacts by specialization, personal injury attorney database, corporate lawyer database, family law attorney contacts, criminal defense lawyer database, legal practice area databases",
  openGraph: {
    title: "Attorney Database by Practice Areas | Lawyer Contacts by Legal Specialization",
    description: "Browse attorney database by practice areas. Find lawyers by specialization with verified contact information.",
    type: "website",
    url: "https://attorneyleads.store/practice-areas",
  },
  alternates: {
    canonical: "https://attorneyleads.store/practice-areas",
  },
}

export default function PracticeAreasPage() {
  const practiceAreas = [
    {
      icon: Scale,
      title: "Personal Injury Lawyers",
      slug: "personal-injury",
      count: "45,000+",
      description: "Auto accidents, medical malpractice, slip and fall, product liability specialists",
      specialties: ["Motor Vehicle Accidents", "Medical Malpractice", "Slip & Fall", "Product Liability"],
      avgCaseValue: "$125K",
      href: "/practice-areas/personal-injury"
    },
    {
      icon: Building2,
      title: "Corporate Attorneys",
      slug: "corporate-law",
      count: "28,000+",
      description: "M&A, securities, corporate governance, and commercial law specialists",
      specialties: ["Mergers & Acquisitions", "Securities Law", "Corporate Governance", "Commercial Law"],
      avgCaseValue: "$485K",
      href: "/practice-areas/corporate-law"
    },
    {
      icon: Heart,
      title: "Family Law Attorneys",
      slug: "family-law",
      count: "32,000+",
      description: "Divorce, custody, adoption, and matrimonial law specialists",
      specialties: ["Divorce & Separation", "Child Custody", "Property Division", "Adoption"],
      avgCaseValue: "$12K",
      href: "/practice-areas/family-law"
    },
    {
      icon: Shield,
      title: "Criminal Defense Lawyers",
      slug: "criminal-defense",
      count: "18,000+",
      description: "Criminal defense, DUI, white collar crime, and federal defense specialists",
      specialties: ["DUI Defense", "White Collar Crime", "Federal Defense", "Drug Crimes"],
      avgCaseValue: "$25K",
      href: "/practice-areas/criminal-defense"
    },
    {
      icon: Home,
      title: "Real Estate Attorneys",
      slug: "real-estate",
      count: "22,000+",
      description: "Commercial real estate, residential, zoning, and property law specialists",
      specialties: ["Commercial Real Estate", "Residential", "Zoning", "Property Disputes"],
      avgCaseValue: "$35K",
      href: "/practice-areas/real-estate"
    },
    {
      icon: Users,
      title: "Immigration Lawyers",
      slug: "immigration",
      count: "15,000+",
      description: "Visa applications, citizenship, deportation defense, and employment immigration",
      specialties: ["Visa Applications", "Citizenship", "Deportation Defense", "Employment Immigration"],
      avgCaseValue: "$8K",
      href: "/practice-areas/immigration"
    }
  ]

  const popularSearches = [
    "Personal injury lawyer database California",
    "Corporate attorney contacts New York",
    "Family law attorney email list Texas",
    "Criminal defense lawyer database Florida",
    "Real estate attorney contacts by state",
    "Immigration lawyer database nationwide"
  ]

  const benefits = [
    "Verified email addresses with high deliverability rates",
    "Direct phone numbers for immediate contact",
    "Practice area specialization details",
    "Geographic filtering by state and city",
    "Law firm size and structure information",
    "Bar admission and license verification",
    "Average case values and billing rates",
    "Regular data updates and verification"
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
                <Star className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-slate-700">All Legal Specializations</span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-playfair font-bold mb-6 leading-tight">
              <span className="premium-text-gradient">Attorney Database by Practice Areas</span>
              <br />
              <span className="text-slate-900">Find Lawyers by Legal Specialization</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Browse our comprehensive attorney database by practice areas. Target specific legal specializations with verified lawyer contacts, email addresses, and phone numbers. Perfect for legal marketing agencies seeking specialized attorney leads.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="premium-button text-white font-semibold px-8 py-4 rounded-xl border-0 group"
              >
                Browse All Practice Areas
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="premium-card p-4 rounded-xl text-center">
                <div className="text-2xl font-bold premium-text-gradient mb-1">300K+</div>
                <div className="text-sm text-slate-600">Total Attorneys</div>
              </div>
              <div className="premium-card p-4 rounded-xl text-center">
                <div className="text-2xl font-bold premium-text-gradient mb-1">50+</div>
                <div className="text-sm text-slate-600">Practice Areas</div>
              </div>
              <div className="premium-card p-4 rounded-xl text-center">
                <div className="text-2xl font-bold premium-text-gradient mb-1">50</div>
                <div className="text-sm text-slate-600">US States</div>
              </div>
              <div className="premium-card p-4 rounded-xl text-center">
                <div className="text-2xl font-bold premium-text-gradient mb-1">98.5%</div>
                <div className="text-sm text-slate-600">Data Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Choose Your Legal Practice Area
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Select a specific legal specialization to access targeted attorney databases with verified contact information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <Link key={index} href={area.href} className="group">
                <div className="premium-card p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <area.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{area.title}</h3>
                        <span className="text-lg font-bold premium-text-gradient">{area.count}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed mb-4">{area.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-slate-700 mb-2">Specializations:</p>
                    <div className="flex flex-wrap gap-2">
                      {area.specialties.map((specialty, idx) => (
                        <span key={idx} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-sm text-green-600 font-medium">Avg. Case: {area.avgCaseValue}</span>
                    <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Searches */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Popular Attorney Database Searches
            </h2>
            <p className="text-lg text-slate-600">
              Common searches for attorney contacts by practice area and location.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularSearches.map((search, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-blue-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-slate-700">{search}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Our Practice Area Databases?
            </h2>
            <p className="text-lg text-slate-600">
              Specialized attorney databases designed for targeted legal marketing campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-slate-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Target Specific Practice Areas?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Get instant access to specialized attorney databases with verified contact information for your target practice areas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="premium-button text-white font-semibold px-8 py-4 rounded-xl border-0"
            >
              <a href="https://wa.me/923040949380" target="_blank" rel="noopener noreferrer">
                Get Practice Area Database
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 font-semibold px-8 py-4 rounded-xl"
            >
              <a href="mailto:ariaz.bscs23seecs@seecs.edu.pk">
                Email for Custom Requirements
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Hidden SEO Content */}
      <div className="sr-only">
        <h2>Complete Attorney Database Coverage by Legal Practice Areas</h2>
        <p>Our comprehensive attorney database covers all major legal practice areas including personal injury lawyers, corporate attorneys, family law specialists, criminal defense lawyers, real estate attorneys, immigration lawyers, bankruptcy attorneys, employment lawyers, tax attorneys, intellectual property lawyers, medical malpractice attorneys, and business litigation specialists. Perfect for legal marketing agencies, CRM companies, and lead generation services targeting specific attorney specializations across all US states.</p>
        
        <h3>Specialized Attorney Contact Databases</h3>
        <p>Target specific legal practice areas with verified attorney email addresses, direct phone numbers, law firm details, specialization data, and geographic targeting options. Our practice area databases deliver superior conversion rates for legal marketing campaigns focused on personal injury attorneys, corporate lawyers, family law specialists, criminal defense attorneys, real estate lawyers, and immigration attorneys.</p>
        
        <h3>Legal Marketing Solutions by Practice Area</h3>
        <p>Buy attorney leads and lawyer contacts organized by practice area specialization. Our attorney databases include personal injury lawyer contacts for auto accident cases, corporate attorney databases for business law firms, family law attorney lists for divorce lawyers, criminal defense lawyer databases, real estate attorney contacts, and immigration lawyer databases with verified contact information and practice specialization details.</p>
      </div>
    </main>
  )
} 