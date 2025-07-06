import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Users, MapPin, Phone, Mail, ArrowRight, CheckCircle, Star, TrendingUp, DollarSign, Scale, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Personal Injury Lawyer Database | 45K+ PI Attorney Contacts | Email Lists & Phone Numbers",
  description: "Buy personal injury lawyer database with 45,000+ verified PI attorney contacts. Email addresses, phone numbers, case specializations. Perfect for legal marketing agencies targeting personal injury law firms.",
  keywords: "personal injury lawyer database, personal injury attorney leads, PI lawyer contacts, personal injury attorney email list, personal injury lawyer phone numbers, personal injury law firm database, accident lawyer leads",
  openGraph: {
    title: "Personal Injury Lawyer Database | 45K+ PI Attorney Contacts",
    description: "Buy personal injury lawyer database with 45,000+ verified PI attorney contacts. Email addresses, phone numbers, case specializations.",
    type: "website",
    url: "https://attorneyleads.store/practice-areas/personal-injury",
  },
  alternates: {
    canonical: "https://attorneyleads.store/practice-areas/personal-injury",
  },
}

export default function PersonalInjuryLawyerPage() {
  const specializations = [
    {
      icon: TrendingUp,
      title: "Motor Vehicle Accidents",
      description: "Car accident lawyers, truck accident attorneys, motorcycle injury lawyers specializing in vehicular personal injury cases.",
      count: "18K+",
      avgSettlement: "$85K"
    },
    {
      icon: DollarSign,
      title: "Medical Malpractice",
      description: "Medical malpractice attorneys specializing in hospital negligence, surgical errors, and healthcare professional liability.",
      count: "8K+",
      avgSettlement: "$425K"
    },
    {
      icon: Scale,
      title: "Slip and Fall Lawyers",
      description: "Premises liability attorneys handling slip and fall accidents, property negligence, and public space injury cases.",
      count: "12K+",
      avgSettlement: "$45K"
    },
    {
      icon: FileText,
      title: "Product Liability",
      description: "Defective product lawyers, pharmaceutical litigation attorneys, and consumer protection specialists.",
      count: "7K+",
      avgSettlement: "$275K"
    }
  ]

  const topStates = [
    { name: "California", count: "8,500+", cities: "Los Angeles, San Francisco, San Diego" },
    { name: "Texas", count: "6,200+", cities: "Houston, Dallas, Austin" },
    { name: "Florida", count: "5,800+", cities: "Miami, Tampa, Orlando" },
    { name: "New York", count: "4,900+", cities: "NYC, Buffalo, Albany" },
    { name: "Pennsylvania", count: "3,400+", cities: "Philadelphia, Pittsburgh" },
    { name: "Illinois", count: "3,100+", cities: "Chicago, Rockford" }
  ]

  const marketingStats = [
    { metric: "Average Case Value", value: "$125K", trend: "+15% YoY" },
    { metric: "Email Open Rate", value: "24.3%", trend: "Above Industry Avg" },
    { metric: "Phone Response Rate", value: "18.7%", trend: "+8% vs General Practice" },
    { metric: "Lead Conversion", value: "12.4%", trend: "High ROI Potential" }
  ]

  const benefits = [
    "45,000+ verified personal injury attorney contacts",
    "Case specialization data (auto accidents, medical malpractice, etc.)",
    "Average case value and settlement history insights",
    "Law firm size and partnership structure details",
    "Bar admission dates and disciplinary history",
    "Direct phone numbers with decision maker identification",
    "Email addresses with 97.8% deliverability rate",
    "Geographic filtering by state, city, and metro area"
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzlDOTJBQyIgZmlsbC1vcGFjaXR5PSIwLjA1Ij4KPHBhdGggZD0ibTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+CjwvZz4KPC9nPgo8L3N2Zz4=')] opacity-30"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Scale className="h-4 w-4 text-red-600" />
                <span className="text-sm font-medium text-slate-700">Personal Injury Law Specialists</span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-playfair font-bold mb-6 leading-tight">
              <span className="premium-text-gradient">Personal Injury Lawyer Database</span>
              <br />
              <span className="text-slate-900">45K+ Verified PI Attorney Contacts</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Access the most comprehensive personal injury lawyer database with verified attorney contacts specializing in auto accidents, medical malpractice, slip and fall, and product liability cases. Perfect for legal marketing agencies targeting high-value personal injury law firms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="premium-button text-white font-semibold px-8 py-4 rounded-xl border-0 group"
              >
                Get Personal Injury Lawyer Leads
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/80 backdrop-blur-sm border-slate-200 text-slate-700 hover:bg-white font-semibold px-8 py-4 rounded-xl"
              >
                <FileText className="mr-2 h-5 w-5" />
                Download PI Lawyer Sample
              </Button>
            </div>

            {/* Trust indicators for PI lawyers */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-slate-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-red-600" />
                <span>45,000+ PI Attorney Contacts</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-red-600" />
                <span>Case Specialization Data</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-red-600" />
                <span>97.8% Email Deliverability</span>
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
              Personal Injury Attorney Specializations
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Target specific personal injury practice areas with our specialized attorney database for maximum conversion rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specializations.map((spec, index) => (
              <div key={index} className="premium-card p-6 rounded-2xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <spec.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-slate-900">{spec.title}</h3>
                      <span className="text-lg font-bold premium-text-gradient">{spec.count}</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-3">{spec.description}</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-green-600 font-medium">Avg. Settlement: {spec.avgSettlement}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Coverage */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Personal Injury Lawyer Coverage by State
            </h2>
            <p className="text-lg text-slate-600">
              Comprehensive coverage of personal injury attorneys across major US markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topStates.map((state, index) => (
              <div key={index} className="premium-card p-6 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-slate-900">{state.name}</h3>
                  <span className="text-2xl font-bold premium-text-gradient">{state.count}</span>
                </div>
                <p className="text-sm text-slate-600 mb-2">Major Markets:</p>
                <p className="text-sm text-slate-700 font-medium">{state.cities}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Statistics */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Personal Injury Marketing Performance
            </h2>
            <p className="text-lg text-slate-600">
              Key metrics for marketing to personal injury attorneys and law firms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketingStats.map((stat, index) => (
              <div key={index} className="premium-card p-6 rounded-xl text-center">
                <h3 className="text-sm font-medium text-slate-600 mb-2">{stat.metric}</h3>
                <p className="text-3xl font-bold premium-text-gradient mb-1">{stat.value}</p>
                <p className="text-sm text-green-600 font-medium">{stat.trend}</p>
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
              Why Choose Our Personal Injury Lawyer Database?
            </h2>
            <p className="text-lg text-slate-600">
              Specialized data points designed for personal injury law firm marketing success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg border border-slate-200">
                <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <span className="text-slate-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Target Personal Injury Law Firms?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Get instant access to 45,000+ verified personal injury attorney contacts with case specialization data and high-value targeting options.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="premium-button text-white font-semibold px-8 py-4 rounded-xl border-0"
            >
              <a href="https://wa.me/923040949380" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                Get PI Lawyer Database - WhatsApp
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
                Email for Custom PI Attorney List
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Hidden SEO Content */}
      <div className="sr-only">
        <h2>Complete Personal Injury Attorney Database for Legal Marketing</h2>
        <p>Our personal injury lawyer database includes comprehensive contact information for attorneys specializing in car accidents, truck accidents, motorcycle injuries, medical malpractice, hospital negligence, slip and fall accidents, premises liability, product liability, defective products, pharmaceutical litigation, and wrongful death cases. Perfect for legal marketing agencies, CRM companies, and lead generation services targeting personal injury law firms across California, Texas, Florida, New York, Pennsylvania, Illinois, Ohio, Georgia, North Carolina, and Michigan.</p>
        
        <h3>Personal Injury Law Firm Marketing Solutions</h3>
        <p>Target personal injury attorneys with verified email addresses, direct phone numbers, law firm details, case specialization data, average settlement values, and geographic targeting options. Our PI lawyer database delivers superior conversion rates for legal marketing campaigns focused on auto accident lawyers, medical malpractice attorneys, slip and fall lawyers, and product liability specialists.</p>
        
        <h3>High-Converting Personal Injury Attorney Leads</h3>
        <p>Buy personal injury lawyer leads with practice area filtering, case value insights, firm size data, and specialization details. Our comprehensive personal injury attorney database includes motor vehicle accident lawyers, medical malpractice attorneys, premises liability lawyers, product liability specialists, and wrongful death attorneys across all major US markets.</p>
      </div>
    </main>
  )
} 