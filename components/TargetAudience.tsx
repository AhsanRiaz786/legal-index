import { Building2, TrendingUp, Users, Target, Zap, Shield } from "lucide-react"

export default function TargetAudience() {
  const audiences = [
    {
      icon: TrendingUp,
      title: "Marketing Agencies & Lead Generation Companies",
      description: "Professional marketing agencies use our verified attorney database to execute high-converting legal marketing campaigns. Access targeted lawyer contact lists to deliver personalized outreach that builds stronger client relationships and delivers proven ROI for your agency clients.",
      stats: "95% Agency Success Rate",
      gradient: "from-blue-500 to-indigo-600",
      features: [
        "Targeted email campaigns",
        "Practice area segmentation", 
        "Geographic filtering",
        "High deliverability rates"
      ]
    },
    {
      icon: Building2,
      title: "Legal Tech & CRM Companies",
      description: "Legal technology startups and CRM companies leverage our comprehensive attorney contact database to populate their platforms with verified lawyer data. Our US attorney database provides the essential contact information needed to power innovative legal software solutions.",
      stats: "50+ Tech Companies Trust Us",
      gradient: "from-purple-500 to-pink-600",
      features: [
        "API integration ready",
        "Bulk data imports",
        "Real-time updates",
        "Custom data formats"
      ]
    },
    {
      icon: Users,
      title: "Sales Teams & Business Development",
      description: "B2B sales teams targeting the legal industry use our attorney leads database to identify and connect with decision-makers at law firms. Perfect for legal service providers, consultants, and software companies selling to attorneys.",
      stats: "3x Higher Conversion Rates",
      gradient: "from-emerald-500 to-teal-600",
      features: [
        "Decision-maker contacts",
        "Firm size filtering",
        "Revenue-based targeting",
        "Contact verification"
      ]
    }
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      {/* Premium background elements */}
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '3s'}}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Target className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-slate-700">Target Audience</span>
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-playfair font-bold mb-6 leading-tight">
            <span className="text-slate-900">Who Buys Our</span>
            <br />
            <span className="premium-text-gradient">Attorney Leads Database?</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by marketing professionals, legal technology companies, and sales teams worldwide for targeted attorney lead generation and legal marketing campaigns.
          </p>
        </div>

        <div className="space-y-8 lg:space-y-12">
          {audiences.map((audience, index) => (
            <div 
              key={index} 
              className={`group animate-slide-up ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              style={{animationDelay: `${index * 200}ms`}}
            >
              <div className="premium-card p-6 sm:p-8 lg:p-10 rounded-2xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-1">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
                  {/* Icon and Stats */}
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl bg-gradient-to-r ${audience.gradient} flex items-center justify-center shadow-lg mb-4`}>
                      <audience.icon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-white" />
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-2xl lg:text-3xl font-bold premium-text-gradient mb-1">
                        {audience.stats}
                      </div>
                      <div className="text-sm text-slate-600 font-medium">Performance Metric</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-4 font-poppins leading-tight">
                      {audience.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6 lg:text-lg">
                      {audience.description}
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {audience.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Shield className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-sm font-medium text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 lg:mt-20">
          <div className="premium-card p-6 sm:p-8 lg:p-10 rounded-2xl text-center">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-poppins">
              Trusted by Industry Leaders
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
              <div className="flex flex-col items-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold premium-text-gradient mb-2">
                  500+
                </div>
                <div className="text-slate-600 font-medium">Marketing Agencies</div>
                <div className="text-sm text-slate-500">Using our database</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold premium-text-gradient mb-2">
                  50+
                </div>
                <div className="text-slate-600 font-medium">Legal Tech Companies</div>
                <div className="text-sm text-slate-500">Powered by our data</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold premium-text-gradient mb-2">
                  98.5%
                </div>
                <div className="text-slate-600 font-medium">Client Satisfaction</div>
                <div className="text-sm text-slate-500">Verified results</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
