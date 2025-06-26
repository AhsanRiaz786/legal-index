import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, Phone, Calendar, Clock } from "lucide-react"

export default function Contact() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Premium background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '3s'}}></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Clock className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-slate-700">Personal Consultation</span>
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Let's Build Your
            <br />
            <span className="premium-text-gradient">Perfect Attorney List</span>
          </h2>
          <p className="text-xl text-slate-600 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
            Our data experts are ready to help you acquire the most targeted and effective attorney list for your specific needs. 
            <span className="font-medium text-slate-800"> Get personalized recommendations based on your campaign goals.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Cards */}
          <div className="space-y-6">
            <div className="premium-card p-6 rounded-2xl group hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-slate-900 font-poppins">WhatsApp Consultation</h3>
                  <p className="text-sm text-slate-600">Instant response • Available 24/7</p>
                </div>
              </div>
              <p className="text-slate-600 mb-4 font-light">Get immediate answers to your questions and discuss your specific requirements in real-time.</p>
          <Button
            asChild
                className="w-full premium-button text-white font-semibold rounded-xl border-0"
          >
                                 <a href="https://wa.me/923040949380" target="_blank" rel="noopener noreferrer">
                  Start WhatsApp Chat
            </a>
          </Button>
            </div>

            <div className="premium-card p-6 rounded-2xl group hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-slate-900 font-poppins">Email Discussion</h3>
                  <p className="text-sm text-slate-600">Detailed proposals • Custom quotes</p>
                </div>
              </div>
              <p className="text-slate-600 mb-4 font-light">Send us your detailed requirements and receive a comprehensive proposal with pricing.</p>
          <Button
            asChild
            variant="outline"
                className="w-full bg-white/80 backdrop-blur-sm border-slate-200 text-slate-700 hover:bg-white font-semibold rounded-xl"
          >
                                 <a href="mailto:ariaz.bscs23seecs@seecs.edu.pk">
                  Send Email
            </a>
          </Button>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="premium-card p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6 font-poppins">Why Choose Personal Consultation?</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1 mr-3">
                  <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">Custom Filtering</h4>
                  <p className="text-sm text-slate-600 font-light">Get exactly the practice areas and geographic regions you need</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1 mr-3">
                  <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">Volume Pricing</h4>
                  <p className="text-sm text-slate-600 font-light">Competitive rates based on your specific volume requirements</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1 mr-3">
                  <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">Quality Guarantee</h4>
                  <p className="text-sm text-slate-600 font-light">We ensure data accuracy and provide replacements for invalid contacts</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1 mr-3">
                  <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">Ongoing Support</h4>
                  <p className="text-sm text-slate-600 font-light">Continued assistance with your legal marketing campaigns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
