"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Database, Shield, Zap, Star } from "lucide-react"

export default function Hero() {
  const scrollToForm = () => {
    const formElement = document.getElementById("sample-form")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToFeatures = () => {
    const featuresElement = document.getElementById("features")
    if (featuresElement) {
      featuresElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-24 xl:py-32">
      {/* Premium background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzlDOTJBQyIgZmlsbC1vcGFjaXR5PSIwLjA1Ij4KPHBhdGggZD0ibTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+CjwvZz4KPC9nPgo8L3N2Zz4=')] opacity-30"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="text-center">
          {/* Premium badges - More mobile responsive */}
          <div className="flex justify-center mb-4 sm:mb-6 lg:mb-8">
            <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 lg:space-x-4 items-center">
              <div className="flex items-center space-x-1.5 sm:space-x-2 bg-white/80 backdrop-blur-sm px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-full border border-white/20">
                <Star className="h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4 text-yellow-500 fill-current" />
                <span className="text-xs sm:text-xs lg:text-sm font-medium text-slate-700">Premium Quality Data</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2 bg-white/80 backdrop-blur-sm px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-full border border-white/20">
                <Shield className="h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4 text-blue-600" />
                <span className="text-xs sm:text-xs lg:text-sm font-medium text-slate-700">GDPR Compliant Database</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2 bg-white/80 backdrop-blur-sm px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-full border border-white/20">
                <Zap className="h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4 text-purple-600" />
                <span className="text-xs sm:text-xs lg:text-sm font-medium text-slate-700">Real-time Updates</span>
              </div>
            </div>
          </div>

          <div className="animate-fade-in">
            {/* Enhanced H1 with more comprehensive keywords */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-playfair font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight px-2 sm:px-0">
              <span className="premium-text-gradient">Buy Attorney Leads Database</span>
              <br />
              <span className="text-slate-900">300K+ Verified US Lawyer Contacts</span>
              <br />
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-slate-600 font-poppins font-medium">
                Email Lists, Phone Numbers & Practice Areas
              </span>
            </h1>
            
            {/* Enhanced meta description with more keywords */}
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-slate-600 mb-6 sm:mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed font-light px-3 sm:px-4 lg:px-0">
              Purchase the most comprehensive attorney database with verified lawyer email addresses, direct phone numbers, law firm details, and specialized practice areas. 
              <span className="font-medium text-slate-800"> Perfect for legal marketing agencies, CRM companies, and legal tech startups</span> seeking high-quality attorney leads for targeted marketing campaigns and business development.
            </p>

            <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3 lg:space-x-4 justify-center items-center mb-6 sm:mb-8 lg:mb-12 px-3 sm:px-0">
              <Button
                onClick={scrollToForm}
                size="lg"
                className="w-full sm:w-auto premium-button text-white font-semibold text-sm sm:text-base lg:text-lg px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-xl border-0 group"
              >
                Download Free Sample Database
                <ArrowRight className="ml-2 h-4 w-4 sm:h-4 sm:w-4 lg:h-5 lg:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={scrollToFeatures}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto bg-white/80 backdrop-blur-sm border-slate-200 text-slate-700 hover:bg-white font-semibold text-sm sm:text-base lg:text-lg px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-xl premium-shadow"
              >
                <Database className="mr-2 h-4 w-4 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
                <span className="hidden sm:inline">View Attorney Database Features</span>
                <span className="sm:hidden">View Details</span>
              </Button>
            </div>

            {/* Enhanced trust indicators with more keywords */}
            <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3 lg:space-x-6 justify-center items-center text-xs sm:text-sm text-slate-600 px-3 sm:px-0">
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>300,000+ Verified Attorney Email Addresses</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>50+ Legal Practice Areas Covered</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span>All 50 US States & Territories</span>
              </div>
            </div>

            {/* Hidden keyword-rich content for SEO */}
            <div className="sr-only">
              <h2>Complete US Attorney Contact Database for Legal Marketing</h2>
              <p>Buy attorney leads database with lawyer email lists, phone numbers, and contact information for legal marketing campaigns. Our comprehensive attorney database includes personal injury lawyers, corporate attorneys, family law specialists, criminal defense lawyers, and immigration attorneys across all US states including California, Texas, Florida, New York, and Pennsylvania.</p>
              <h3>Attorney Database Features for Marketing Agencies</h3>
              <p>Professional attorney contact database with verified lawyer email addresses, direct phone numbers, law firm names, practice areas, bar numbers, and geographic locations. Perfect for legal marketing agencies, CRM companies, and legal technology startups seeking high-quality attorney leads for targeted email marketing campaigns.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
