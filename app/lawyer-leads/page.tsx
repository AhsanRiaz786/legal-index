import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Target, Users, TrendingUp, Shield, Phone, Mail, ArrowRight, CheckCircle, Star, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Buy Lawyer Leads | Premium Attorney Leads Database | 300K+ Verified Legal Contacts",
  description: "Buy high-quality lawyer leads with verified contact information. 300K+ attorney email addresses, phone numbers & practice areas. Perfect for legal marketing agencies & CRM companies.",
  keywords: "buy lawyer leads, attorney leads, lawyer leads for sale, attorney leads database, legal leads, lawyer contact leads, attorney email leads, legal marketing leads, lawyer phone leads",
  openGraph: {
    title: "Buy Lawyer Leads | Premium Attorney Leads Database",
    description: "Buy high-quality lawyer leads with verified contact information. 300K+ attorney email addresses, phone numbers & practice areas.",
    type: "website",
    url: "https://attorneyleads.store/lawyer-leads",
  },
  alternates: {
    canonical: "https://attorneyleads.store/lawyer-leads",
  },
}

export default function LawyerLeadsPage() {
  const leadTypes = [
    {
      icon: Target,
      title: "Personal Injury Lawyer Leads",
      description: "High-converting personal injury attorney leads with verified contact information and case potential data.",
      count: "45K+",
      conversion: "12-15%"
    },
    {
      icon: Users,
      title: "Corporate Law Leads",
      description: "Business attorney leads focusing on corporate law, mergers, acquisitions, and business litigation.",
      count: "28K+", 
      conversion: "8-12%"
    },
    {
      icon: TrendingUp,
      title: "Family Law Attorney Leads",
      description: "Divorce and family law attorney leads with detailed practice area specialization and location data.",
      count: "32K+",
      conversion: "10-14%"
    },
    {
      icon: Shield,
      title: "Criminal Defense Leads",
      description: "Criminal defense attorney leads with verified bar numbers and specialization in criminal law practice.",
      count: "18K+",
      conversion: "15-20%"
    }
  ]

  const benefits = [
    "Verified email addresses with 98.5% deliverability",
    "Direct phone numbers for cold calling campaigns", 
    "Practice area specialization for targeted marketing",
    "Geographic filtering by state and city",
    "Bar numbers and law firm details included",
    "Regular data updates and verification",
    "GDPR compliant data collection methods",
    "Custom filtering options available"
  ]

  const industries = [
    {
      name: "Legal Marketing Agencies",
      description: "Marketing agencies running attorney lead generation campaigns for law firms",
      use: "Email marketing, cold calling, and targeted advertising campaigns"
    },
    {
      name: "CRM Companies", 
      description: "Legal CRM platforms needing attorney contact data for their systems",
      use: "Database population, contact management, and client onboarding"
    },
    {
      name: "Legal Tech Startups",
      description: "Legal technology companies building attorney-focused software solutions",
      use: "Product demos, user acquisition, and partnership development"
    },
    {
      name: "Business Development",
      description: "Companies seeking legal services partnerships and referral networks",
      use: "Partner outreach, referral programs, and business development"
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24 bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzlDOTJBQyIgZmlsbC1vcGFjaXR5PSIwLjA1Ij4KPHBhdGggZD0ibTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+CjwvZz4KPC9nPgo8L3N2Zz4=')] opacity-30"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Star className="h-4 w-4 text-emerald-600" />
                <span className="text-sm font-medium text-slate-700">Premium Lawyer Leads</span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-playfair font-bold mb-6 leading-tight">
              <span className="premium-text-gradient">Buy High-Quality Lawyer Leads</span>
              <br />
              <span className="text-slate-900">300K+ Verified Attorney Contacts</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Purchase premium lawyer leads with verified email addresses, phone numbers, and practice area specialization. Our attorney leads database delivers the highest conversion rates for legal marketing campaigns and business development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="premium-button text-white font-semibold px-8 py-4 rounded-xl border-0 group"
              >
                Buy Lawyer Leads Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/80 backdrop-blur-sm border-slate-200 text-slate-700 hover:bg-white font-semibold px-8 py-4 rounded-xl"
              >
                <Zap className="mr-2 h-5 w-5" />
                View Sample Leads
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-slate-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                <span>98.5% Email Deliverability</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                <span>Verified Phone Numbers</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                <span>Practice Area Filtering</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Types Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Premium Lawyer Leads by Practice Area
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Target specific attorney specializations with our filtered lawyer leads database for maximum conversion rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadTypes.map((lead, index) => (
              <div key={index} className="premium-card p-6 rounded-2xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <lead.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-slate-900">{lead.title}</h3>
                      <span className="text-lg font-bold premium-text-gradient">{lead.count}</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-3">{lead.description}</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-emerald-600 font-medium">Avg. Conversion: {lead.conversion}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Why Buy Lawyer Leads From Us?
            </h2>
            <p className="text-lg text-slate-600">
              Our lawyer leads deliver superior results for legal marketing campaigns and business development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg border border-slate-200">
                <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                <span className="text-slate-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Who Buys Our Lawyer Leads?
            </h2>
            <p className="text-lg text-slate-600">
              Industries and companies that rely on our premium lawyer leads for business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="premium-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{industry.name}</h3>
                <p className="text-slate-600 mb-4">{industry.description}</p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-800 font-medium">Common Use Cases:</p>
                  <p className="text-sm text-blue-700">{industry.use}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Lawyer Leads Database Statistics
            </h2>
            <p className="text-xl text-blue-100">
              Comprehensive coverage across all legal specializations and geographic regions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">300K+</div>
              <div className="text-blue-100 font-medium">Total Lawyer Leads</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">98.5%</div>
              <div className="text-blue-100 font-medium">Email Deliverability</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-100 font-medium">Practice Areas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">50</div>
              <div className="text-blue-100 font-medium">US States Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-emerald-900 via-blue-900 to-indigo-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Buy Premium Lawyer Leads?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Get instant access to high-converting lawyer leads with verified contact information and practice area filtering.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="premium-button text-white font-semibold px-8 py-4 rounded-xl border-0"
            >
              <a href="https://wa.me/923040949380" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                Buy Lawyer Leads - WhatsApp
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 font-semibold px-8 py-4 rounded-xl"
            >
              <a href="mailto:ariaz.bscs23seecs@seecs.edu.pk">
                <Mail className="mr-2 h-5 w-5" />
                Email for Custom Quote
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
} 