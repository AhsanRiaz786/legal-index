import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, MessageCircle, Check } from "lucide-react"

export default function FAQ() {
  const faqs = [
    {
      question: "How much does your attorney leads database cost?",
      answer:
        "Our attorney database pricing varies based on the number of contacts and filtering requirements. We offer competitive rates for marketing agencies, CRM companies, and legal tech startups. Contact us for custom pricing based on your specific attorney leads needs and volume requirements.",
    },
    {
      question: "Can I buy attorney leads by specific practice areas and states?",
      answer:
        "Yes! Our lawyer database allows filtering by practice areas (personal injury, corporate law, family law, etc.) and by state. You can purchase targeted attorney contact lists for specific jurisdictions and legal specialties to maximize your legal marketing campaign effectiveness.",
    },
    {
      question: "Where is your attorney contact data sourced from?",
      answer:
        "Our lawyer database is compiled from authoritative sources including state bar associations, court records, professional directories, and verified public databases. We maintain strict quality standards and regularly update our attorney contact information to ensure accuracy and compliance.",
    },
    {
      question: "How accurate is your attorney contact information?",
      answer:
        "We maintain 98.5% data accuracy through our multi-step verification process. Our attorney email addresses and phone numbers are continuously updated and validated. We provide data quality guarantees and offer replacements for any invalid contacts to ensure your legal marketing campaigns achieve maximum deliverability.",
    },
    {
      question: "What file formats do you provide for attorney databases?",
      answer:
        "We deliver attorney contact data in clean, structured CSV and Excel formats ready for immediate import into any CRM, email marketing platform, or database system. Custom formats available upon request for enterprise clients with specific integration requirements.",
    },
    {
      question: "Why contact you directly instead of instant online purchase?",
      answer:
        "We provide personalized service to ensure you get exactly the attorney leads you need. Our team helps customize your lawyer database based on practice areas, geography, and firm size. This consultation approach ensures better ROI for your legal marketing campaigns and prevents waste on irrelevant contacts.",
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-indigo-50">
      {/* Premium background elements */}
      <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <HelpCircle className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-slate-700">FAQ</span>
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-playfair font-bold mb-6 leading-tight">
            <span className="text-slate-900">Frequently Asked</span>
            <br />
            <span className="premium-text-gradient">Questions</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about our attorney leads database, pricing, and how to get started with your legal marketing campaigns.
          </p>
        </div>

        <div className="premium-card p-6 sm:p-8 lg:p-10 rounded-2xl mb-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-slate-200 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-5 text-left font-semibold text-slate-900 hover:no-underline group">
                  <div className="flex items-start space-x-4 text-left">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <MessageCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-base sm:text-lg leading-tight group-hover:text-blue-600 transition-colors">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="ml-12 text-slate-600 leading-relaxed text-base">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still have questions section */}
        <div className="premium-card p-6 sm:p-8 lg:p-10 rounded-2xl text-center bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="h-8 w-8 text-white" />
          </div>
          
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 font-poppins">
            Still Have Questions?
          </h3>
          
          <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
            Our team of data experts is ready to help you find the perfect attorney leads for your marketing campaigns.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/923040949380" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Chat
            </a>
            <a 
              href="mailto:ariaz.bscs23seecs@seecs.edu.pk"
              className="inline-flex items-center justify-center px-6 py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl transition-colors"
            >
              Get Custom Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
