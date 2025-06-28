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

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-32">
      {/* Premium background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzlDOTJBQyIgZmlsbC1vcGFjaXR5PSIwLjA1Ij4KPHBhdGggZD0ibTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+CjwvZz4KPC9nPgo8L3N2Zz4=')] opacity-30"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Premium badges - Mobile responsive */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 lg:space-x-6">
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-white/20">
                <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 fill-current" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">Premium Quality</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-white/20">
                <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-white/20">
                <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-purple-600" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">Real-time Updates</span>
              </div>
            </div>
          </div>

          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold mb-6 sm:mb-8 leading-tight">
              <span className="premium-text-gradient">Buy Premium</span>
              <br />
              <span className="text-slate-900">Attorney Leads Database</span>
              <br />
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-slate-600 font-poppins font-medium">
                300K+ Verified US Lawyers
              </span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-600 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-light px-4 sm:px-0">
              Get direct access to the most comprehensive lawyer contact database with verified emails, phone numbers, and practice areas. 
              <span className="font-medium text-slate-800"> Perfect for marketing agencies, CRM companies, and legal tech startups</span> seeking quality attorney leads for sale.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4 sm:px-0">
              <Button
                onClick={scrollToForm}
                size="lg"
                className="w-full sm:w-auto premium-button text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl border-0 group"
              >
                Download Live Sample
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto bg-white/80 backdrop-blur-sm border-slate-200 text-slate-700 hover:bg-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl premium-shadow"
              >
                <Database className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                View Database Details
              </Button>
            </div>

            {/* Trust indicators - Mobile responsive */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-8 text-xs sm:text-sm text-slate-600 px-4 sm:px-0">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>300,000+ Attorney Contacts</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>50+ Practice Areas</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span>All 50 US States</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
