import { CheckCircle, MessageCircle, Shield, ArrowRight, Download, Users, FileText } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: Download,
      title: "Download & Validate Sample",
      description: "Get your free attorney leads sample and test data quality through your verification process. Ensure our attorney database meets your exact standards before purchase.",
      gradient: "from-blue-500 to-indigo-600",
      features: ["Free sample download", "Quality verification", "No commitment required"]
    },
    {
      icon: MessageCircle,
      title: "Consultation & Customization",
      description: "Speak directly with our data experts. We'll customize your attorney database based on practice areas, geographic regions, and specific marketing requirements.",
      gradient: "from-purple-500 to-pink-600",
      features: ["Expert consultation", "Custom filtering", "Personalized recommendations"]
    },
    {
      icon: Shield,
      title: "Secure Delivery & Support",
      description: "Receive your complete attorney contact database via secure delivery. Get ongoing support and data quality guarantees for successful legal marketing campaigns.",
      gradient: "from-emerald-500 to-teal-600",
      features: ["Secure delivery", "Quality guarantee", "Ongoing support"]
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Premium background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iI0ZGRkZGRiIgZmlsbC1vcGFjaXR5PSIwLjA1Ij4KPHBhdGggZD0ibTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+CjwvZz4KPC9nPgo8L3N2Zz4=')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Users className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white/90">Simple Process</span>
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-playfair font-bold text-white mb-6 leading-tight">
            From Sample to Strategic Asset
            <br />
            <span className="text-blue-300">in 3 Simple Steps</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Our streamlined process ensures you get exactly the attorney leads you need for successful legal marketing campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="group animate-slide-up" style={{animationDelay: `${index * 200}ms`}}>
              <div className="premium-card p-6 sm:p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 h-full">
                <div className="text-center mb-6">
                  {/* Step number */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative">
                      <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-r ${step.gradient} flex items-center justify-center shadow-lg`}>
                        <step.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-blue-600">{index + 1}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 font-poppins leading-tight">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm text-slate-700">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Connection arrow (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-blue-300" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="premium-card p-6 sm:p-8 lg:p-10 rounded-2xl bg-gradient-to-r from-white/90 to-blue-50/90 backdrop-blur-sm border border-white/20">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 font-poppins">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of marketing agencies and legal tech companies who trust our attorney database for their campaigns.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#sample-form"
                className="inline-flex items-center justify-center px-8 py-4 premium-button text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Free Sample
              </a>
              <a 
                href="https://wa.me/923040949380"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl transition-all duration-300"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
