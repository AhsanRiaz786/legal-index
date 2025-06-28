import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, Phone, Calendar, Clock } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 xl:py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Premium background elements */}
      <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-blue-300/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-purple-300/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '3s'}}></div>
      
      <div className="relative max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="flex justify-center mb-3 sm:mb-4 lg:mb-6">
            <div className="flex items-center space-x-1.5 sm:space-x-2 bg-white/80 backdrop-blur-sm px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-full border border-white/20">
              <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4 text-blue-600" />
              <span className="text-xs sm:text-sm font-medium text-slate-700">Personal Consultation</span>
            </div>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-playfair font-bold mb-3 sm:mb-4 lg:mb-6 px-3 sm:px-0">
            Let's Build Your
            <br />
            <span className="premium-text-gradient">Perfect Attorney List</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-600 mb-8 sm:mb-12 lg:mb-16 max-w-3xl mx-auto leading-relaxed font-light px-3 sm:px-0">
            Our data experts are ready to help you acquire the most targeted and effective attorney list for your specific needs. 
            <span className="font-medium text-slate-800"> Get personalized recommendations based on your campaign goals.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Contact Cards */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            <div className="premium-card p-4 sm:p-5 lg:p-6 rounded-2xl group hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-2.5 sm:mb-3 lg:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
                </div>
                <div className="ml-2.5 sm:ml-3 lg:ml-4">
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-slate-900 font-poppins">WhatsApp Consultation</h3>
                  <p className="text-xs sm:text-sm text-slate-600">Instant response • Available 24/7</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm lg:text-base text-slate-600 mb-2.5 sm:mb-3 lg:mb-4 font-light">Get immediate answers to your questions and discuss your specific requirements in real-time.</p>
              <Button
                asChild
                className="w-full premium-button text-white font-semibold rounded-xl border-0 text-xs sm:text-sm lg:text-base py-2 sm:py-2.5 lg:py-3"
              >
                <a href="https://wa.me/923040949380" target="_blank" rel="noopener noreferrer">
                  Start WhatsApp Chat
                </a>
              </Button>
            </div>

            <div className="premium-card p-4 sm:p-5 lg:p-6 rounded-2xl group hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-2.5 sm:mb-3 lg:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
                </div>
                <div className="ml-2.5 sm:ml-3 lg:ml-4">
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-slate-900 font-poppins">Email Discussion</h3>
                  <p className="text-xs sm:text-sm text-slate-600">Detailed proposals • Custom quotes</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm lg:text-base text-slate-600 mb-2.5 sm:mb-3 lg:mb-4 font-light">Send us your detailed requirements and receive a comprehensive proposal with pricing.</p>
              <Button
                asChild
                variant="outline"
                className="w-full bg-white/80 backdrop-blur-sm border-slate-200 text-slate-700 hover:bg-white font-semibold rounded-xl text-xs sm:text-sm lg:text-base py-2 sm:py-2.5 lg:py-3"
              >
                <a href="mailto:ariaz.bscs23seecs@seecs.edu.pk">
                  Send Email
                </a>
              </Button>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="premium-card p-4 sm:p-6 lg:p-8 rounded-2xl">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-900 mb-3 sm:mb-4 lg:mb-6 font-poppins">Why Choose Personal Consultation?</h3>
            <div className="space-y-2.5 sm:space-y-3 lg:space-y-4">
              <div className="flex items-start">
                <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-blue-500 rounded-full flex items-center justify-center mt-0.5 mr-2.5 sm:mr-3 flex-shrink-0">
                  <svg className="h-2 w-2 sm:h-2.5 sm:w-2.5 lg:h-3 lg:w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 text-xs sm:text-sm lg:text-base">Custom Filtering</h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-light">Get exactly the practice areas and geographic regions you need</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-blue-500 rounded-full flex items-center justify-center mt-0.5 mr-2.5 sm:mr-3 flex-shrink-0">
                  <svg className="h-2 w-2 sm:h-2.5 sm:w-2.5 lg:h-3 lg:w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 text-xs sm:text-sm lg:text-base">Volume Pricing</h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-light">Competitive rates based on your specific volume requirements</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-blue-500 rounded-full flex items-center justify-center mt-0.5 mr-2.5 sm:mr-3 flex-shrink-0">
                  <svg className="h-2 w-2 sm:h-2.5 sm:w-2.5 lg:h-3 lg:w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 text-xs sm:text-sm lg:text-base">Quality Guarantee</h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-light">We ensure data accuracy and provide replacements for invalid contacts</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-blue-500 rounded-full flex items-center justify-center mt-0.5 mr-2.5 sm:mr-3 flex-shrink-0">
                  <svg className="h-2 w-2 sm:h-2.5 sm:w-2.5 lg:h-3 lg:w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 text-xs sm:text-sm lg:text-base">Ongoing Support</h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-light">Continued assistance with your legal marketing campaigns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
