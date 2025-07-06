import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Building2, Briefcase, Phone, Mail, ArrowRight, CheckCircle, Star, TrendingUp, DollarSign, Scale, FileText, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Corporate Law Attorney Database | 28K+ Business Lawyer Contacts | Email Lists & Phone Numbers",
  description: "Buy corporate law attorney database with 28,000+ verified business lawyer contacts. Email addresses, phone numbers, firm specializations. Perfect for legal marketing agencies targeting corporate law firms.",
  keywords: "corporate law attorney database, business lawyer database, corporate attorney leads, business law firm contacts, corporate lawyer email list, M&A attorney database, securities lawyer contacts, corporate counsel database",
  openGraph: {
    title: "Corporate Law Attorney Database | 28K+ Business Lawyer Contacts",
    description: "Buy corporate law attorney database with 28,000+ verified business lawyer contacts. Email addresses, phone numbers, firm specializations.",
    type: "website",
    url: "https://attorneyleads.store/practice-areas/corporate-law",
  },
  alternates: {
    canonical: "https://attorneyleads.store/practice-areas/corporate-law",
  },
}

export default function CorporateLawPage() {
  const specializations = [
    {
      icon: Building2,
      title: "Mergers & Acquisitions",
      description: "M&A attorneys specializing in corporate transactions, due diligence, deal structuring, and business acquisitions.",
      count: "8K+",
      avgDealSize: "$50M"
    },
    {
      icon: DollarSign,
      title: "Securities & Finance",
      description: "Securities lawyers handling IPOs, private placements, corporate finance, and regulatory compliance matters.",
      count: "6K+",
      avgDealSize: "$25M"
    },
    {
      icon: Scale,
      title: "Corporate Governance",
      description: "Corporate governance attorneys managing board matters, compliance, executive compensation, and shareholder issues.",
      count: "9K+",
      avgDealSize: "$5M"
    },
    {
      icon: FileText,
      title: "Contract & Commercial Law",
      description: "Business contract attorneys handling commercial agreements, vendor contracts, and corporate legal operations.",
      count: "5K+",
      avgDealSize: "$2M"
    }
  ]

  const firmTypes = [
    { type: "Big Law Firms (AmLaw 100)", count: "3,200+", avgBillable: "$850/hr" },
    { type: "Mid-Size Corporate Firms", count: "8,500+", avgBillable: "$450/hr" },
    { type: "Boutique Business Law Firms", count: "12,400+", avgBillable: "$325/hr" },
    { type: "In-House Corporate Counsel", count: "3,900+", avgBillable: "N/A" }
  ]

  const industries = [
    { name: "Technology & Software", lawyers: "4,200+", focus: "SaaS, AI, Fintech" },
    { name: "Healthcare & Pharma", lawyers: "3,800+", focus: "Biotech, Medical Devices" },
    { name: "Financial Services", lawyers: "3,500+", focus: "Banking, Insurance, Investment" },
    { name: "Real Estate & REIT", lawyers: "2,900+", focus: "Commercial, Development" },
    { name: "Energy & Utilities", lawyers: "2,100+", focus: "Oil, Gas, Renewables" },
    { name: "Manufacturing", lawyers: "1,800+", focus: "Automotive, Industrial" }
  ]

  const marketingMetrics = [
    { metric: "Average Retainer", value: "$75K", trend: "+12% YoY" },
    { metric: "Email Response Rate", value: "28.4%", trend: "Above Average" },
    { metric: "Partnership Conversion", value: "15.2%", trend: "High-Value Leads" },
    { metric: "Annual Revenue per Client", value: "$485K", trend: "Premium Segment" }
  ]

  const benefits = [
    "28,000+ verified corporate attorney contacts",
    "Practice area specialization (M&A, securities, governance, etc.)",
    "Law firm tier classification (Big Law, mid-size, boutique)",
    "Industry focus and client portfolio insights",
    "Average billing rates and retainer information",
    "In-house counsel and general counsel contacts",
    "Partnership status and seniority level data",
    "Geographic filtering by financial centers and markets"
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzlDOTJBQyIgZmlsbC1vcGFjaXR5PSIwLjA1Ij4KPHBhdGggZD0ibTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+CjwvZz4KPC9nPgo8L3N2Zz4=')] opacity-30"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Building2 className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-slate-700">Corporate Law Specialists</span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-playfair font-bold mb-6 leading-tight">
              <span className="premium-text-gradient">Corporate Law Attorney Database</span>
              <br />
              <span className="text-slate-900">28K+ Verified Business Lawyer Contacts</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Access the most comprehensive corporate law attorney database with verified business lawyer contacts specializing in M&A, securities, corporate governance, and commercial law. Perfect for legal marketing agencies targeting high-value corporate law firms and in-house counsel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="premium-button text-white font-semibold px-8 py-4 rounded-xl border-0 group"
              >
                Get Corporate Attorney Leads
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/80 backdrop-blur-sm border-slate-200 text-slate-700 hover:bg-white font-semibold px-8 py-4 rounded-xl"
              >
                <Briefcase className="mr-2 h-5 w-5" />
                Download Business Lawyer Sample
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-slate-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-blue-600" />
                <span>28,000+ Corporate Attorney Contacts</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-blue-600" />
                <span>Big Law & Boutique Firms</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-blue-600" />
                <span>In-House Counsel Included</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Corporate Law Practice Specializations
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Target specific corporate law practice areas with our specialized business attorney database for premium client acquisition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specializations.map((spec, index) => (
              <div key={index} className="premium-card p-6 rounded-2xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <spec.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-slate-900">{spec.title}</h3>
                      <span className="text-lg font-bold premium-text-gradient">{spec.count}</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-3">{spec.description}</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-green-600 font-medium">Avg. Deal Size: {spec.avgDealSize}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Firm Types Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Corporate Law Firm Coverage by Type
            </h2>
            <p className="text-lg text-slate-600">
              Comprehensive coverage across all tiers of corporate law firms and in-house legal departments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {firmTypes.map((firm, index) => (
              <div key={index} className="premium-card p-6 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-slate-900">{firm.type}</h3>
                  <span className="text-2xl font-bold premium-text-gradient">{firm.count}</span>
                </div>
                <p className="text-sm text-slate-600 mb-2">Average Billing Rate:</p>
                <p className="text-lg text-green-600 font-bold">{firm.avgBillable}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Corporate Attorneys by Industry Focus
            </h2>
            <p className="text-lg text-slate-600">
              Target corporate lawyers based on their industry specialization and client portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="premium-card p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{industry.name}</h3>
                <p className="text-2xl font-bold premium-text-gradient mb-2">{industry.lawyers}</p>
                <p className="text-sm text-slate-600 mb-1">Primary Focus:</p>
                <p className="text-sm text-slate-700 font-medium">{industry.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Metrics */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Corporate Law Marketing Performance
            </h2>
            <p className="text-xl text-blue-100">
              Key metrics for marketing to corporate attorneys and business law firms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketingMetrics.map((metric, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
                <h3 className="text-sm font-medium text-blue-100 mb-2">{metric.metric}</h3>
                <p className="text-3xl font-bold text-white mb-1">{metric.value}</p>
                <p className="text-sm text-blue-200 font-medium">{metric.trend}</p>
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
              Why Choose Our Corporate Law Attorney Database?
            </h2>
            <p className="text-lg text-slate-600">
              Specialized data points designed for high-value corporate law firm marketing and business development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg border border-slate-200">
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
            Ready to Target Corporate Law Firms?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Get instant access to 28,000+ verified corporate attorney contacts with practice specialization data and premium targeting options.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="premium-button text-white font-semibold px-8 py-4 rounded-xl border-0"
            >
              <a href="https://wa.me/923040949380" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                Get Corporate Attorney Database
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
                Email for Custom Business Lawyer List
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Hidden SEO Content */}
      <div className="sr-only">
        <h2>Complete Corporate Law Attorney Database for Business Marketing</h2>
        <p>Our corporate law attorney database includes comprehensive contact information for business lawyers specializing in mergers and acquisitions, securities law, corporate finance, corporate governance, commercial contracts, business litigation, and regulatory compliance. Perfect for legal marketing agencies, CRM companies, and business development services targeting corporate law firms, Big Law practices, boutique business law firms, and in-house corporate counsel across major financial centers including New York, California, Illinois, Texas, and Connecticut.</p>
        
        <h3>Business Law Firm Marketing Solutions</h3>
        <p>Target corporate attorneys with verified email addresses, direct phone numbers, law firm details, practice specialization data, billing rates, and industry focus information. Our business lawyer database delivers superior conversion rates for legal marketing campaigns focused on M&A attorneys, securities lawyers, corporate governance specialists, and commercial law practitioners.</p>
        
        <h3>High-Value Corporate Attorney Leads</h3>
        <p>Buy corporate law attorney leads with firm tier classification, practice area filtering, industry specialization data, and billing rate insights. Our comprehensive corporate attorney database includes Big Law partners, mid-size firm associates, boutique business lawyers, and in-house corporate counsel across technology, healthcare, financial services, real estate, energy, and manufacturing sectors.</p>
      </div>
    </main>
  )
} 