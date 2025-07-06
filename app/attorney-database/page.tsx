import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Database, Shield, Download, Target, Star, CheckCircle, ArrowRight, Users, MapPin, Phone, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Attorney Database | 300K+ Verified US Lawyer Contacts | Email Lists & Phone Numbers",
  description: "Comprehensive attorney database with 300,000+ verified US lawyer contacts. Professional email addresses, phone numbers, practice areas & firm details. Perfect for legal marketing campaigns.",
  keywords: "attorney database, lawyer database, attorney contact database, lawyer email database, attorney phone numbers, legal contact database, US attorney database, lawyer contact information",
  openGraph: {
    title: "Attorney Database | 300K+ Verified US Lawyer Contacts",
    description: "Comprehensive attorney database with 300,000+ verified US lawyer contacts. Professional email addresses, phone numbers, practice areas & firm details.",
    type: "website",
    url: "https://attorneyleads.store/attorney-database",
  },
  alternates: {
    canonical: "https://attorneyleads.store/attorney-database",
  },
}

export default function AttorneyDatabasePage() {
  const scrollToContact = () => {
    const contactElement = document.getElementById("contact-form")
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  const features = [
    {
      icon: Database,
      title: "300,000+ Attorney Records",
      description: "Comprehensive database of verified US attorneys with complete contact information including email addresses, phone numbers, and firm details.",
      stats: "300K+ Records"
    },
    {
      icon: Target,
      title: "50+ Practice Areas",
      description: "Filter by specific legal specialties including personal injury, corporate law, family law, criminal defense, immigration, and more.",
      stats: "50+ Specialties"
    },
    {
      icon: MapPin,
      title: "All 50 US States",
      description: "Complete geographic coverage across all US states and territories with detailed location data for targeted marketing campaigns.",
      stats: "50 States"
    },
    {
      icon: Shield,
      title: "98.5% Data Accuracy",
      description: "Multi-step verification process ensures highest data quality with regular updates and validation from authoritative sources.",
      stats: "98.5% Accuracy"
    }
  ]

  const practiceAreas = [
    "Personal Injury Law", "Corporate Law", "Family Law", "Criminal Defense",
    "Real Estate Law", "Immigration Law", "Bankruptcy Law", "Employment Law",
    "Tax Law", "Intellectual Property", "Medical Malpractice", "Divorce Law",
    "Business Law", "Environmental Law", "Securities Law", "Insurance Law"
  ]

  const majorStates = [
    { name: "California", count: "45K+" },
    { name: "Texas", count: "38K+" },
    { name: "Florida", count: "28K+" },
    { name: "New York", count: "42K+" },
    { name: "Pennsylvania", count: "22K+" },
    { name: "Illinois", count: "25K+" },
    { name: "Ohio", count: "18K+" },
    { name: "Georgia", count: "16K+" }
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
                <Database className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-slate-700">Professional Attorney Database</span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-playfair font-bold mb-6 leading-tight">
              <span className="premium-text-gradient">Complete Attorney Database</span>
              <br />
              <span className="text-slate-900">300K+ Verified US Lawyer Contacts</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Access the most comprehensive attorney contact database with verified email addresses, direct phone numbers, practice areas, and firm details. Perfect for legal marketing agencies, CRM companies, and legal technology startups.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="premium-button text-white font-semibold px-8 py-4 rounded-xl border-0 group"
              >
                Get Attorney Database Access
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/80 backdrop-blur-sm border-slate-200 text-slate-700 hover:bg-white font-semibold px-8 py-4 rounded-xl"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Free Sample
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Our Attorney Database?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The most comprehensive and accurate attorney contact database available for professional legal marketing campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="premium-card p-6 rounded-2xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
                      <span className="text-2xl font-bold premium-text-gradient">{feature.stats}</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Attorney Database by Practice Areas
            </h2>
            <p className="text-lg text-slate-600">
              Filter our comprehensive attorney database by specific legal practice areas for targeted marketing campaigns.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {practiceAreas.map((area, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-slate-700">{area}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Coverage Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Attorney Database Coverage by State
            </h2>
            <p className="text-lg text-slate-600">
              Complete coverage across all 50 US states with verified attorney contact information.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {majorStates.map((state, index) => (
              <div key={index} className="premium-card p-6 rounded-xl text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{state.name}</h3>
                <p className="text-2xl font-bold premium-text-gradient">{state.count}</p>
                <p className="text-sm text-slate-600">Attorney Contacts</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-form" className="py-16 lg:py-20 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Access Our Attorney Database?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Get instant access to 300,000+ verified attorney contacts with our comprehensive database solution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="premium-button text-white font-semibold px-8 py-4 rounded-xl border-0"
            >
              <a href="https://wa.me/923040949380" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                WhatsApp Consultation
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
                Email Discussion
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
} 