import { Target, Database, Shield, Download, Sparkles } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Target,
      title: "Targeted Attorney Leads by Practice Area",
      description:
        "Filter our lawyer database by specific practice areas. Target personal injury attorneys, corporate lawyers, or family law specialists. Our attorney contact lists ensure your legal marketing campaigns reach the right audience every time.",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Database,
      title: "Complete Lawyer Contact Information",
      description:
        "Each attorney lead includes verified email addresses, direct phone numbers, law firm details, physical addresses, and bar numbers. Get the full contact profile you need for successful legal marketing outreach.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Premium Data Verification",
      description:
        "Our multi-step verification process means best-in-class deliverability. Protect your sender reputation, maximize your reach, and stop wasting money on bounced emails.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: Download,
      title: "Enterprise-Ready Delivery",
      description:
        "No complex setup. No messy files. Just a clean, structured .csv, ready to be imported into any CRM or marketing platform in minutes.",
      gradient: "from-orange-500 to-red-600"
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 relative overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-indigo-50"></div>
      <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
      <div className="absolute top-0 right-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="flex justify-center mb-3 sm:mb-4 lg:mb-6">
            <div className="flex items-center space-x-1.5 sm:space-x-2 bg-white/80 backdrop-blur-sm px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-full border border-white/20">
              <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4 text-blue-600" />
              <span className="text-xs sm:text-sm font-medium text-slate-700">Premium Features</span>
            </div>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-playfair font-bold mb-3 sm:mb-4 lg:mb-6 px-3 sm:px-0">
            Why Marketing Agencies Choose
            <br />
            <span className="premium-text-gradient">Our Attorney Email Database</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-600 max-w-3xl mx-auto font-light px-3 sm:px-0">
            Built for professionals who demand precision, reliability, and results in their legal marketing campaigns
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="group animate-slide-up" style={{animationDelay: `${index * 150}ms`}}>
              <div className="premium-card p-4 sm:p-6 lg:p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                <div className="flex items-start mb-3 sm:mb-4 lg:mb-6">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white" />
                  </div>
                  <div className="ml-2.5 sm:ml-3 lg:ml-4 flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-slate-900 mb-1.5 sm:mb-2 lg:mb-3 font-poppins leading-tight">{feature.title}</h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-light">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Premium stats section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
            <div className="premium-card p-3 sm:p-4 lg:p-6 rounded-xl">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold premium-text-gradient mb-1 sm:mb-2">300K+</div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium">Attorney Records</div>
            </div>
            <div className="premium-card p-3 sm:p-4 lg:p-6 rounded-xl">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold premium-text-gradient mb-1 sm:mb-2">98.5%</div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium">Data Accuracy</div>
            </div>
            <div className="premium-card p-3 sm:p-4 lg:p-6 rounded-xl">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold premium-text-gradient mb-1 sm:mb-2">50+</div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium">Practice Areas</div>
            </div>
            <div className="premium-card p-3 sm:p-4 lg:p-6 rounded-xl">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold premium-text-gradient mb-1 sm:mb-2">24/7</div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium">Data Updates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
