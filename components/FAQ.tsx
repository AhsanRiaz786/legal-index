import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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
      question: "Why contact you directly instead of instant online purchase?",
      answer:
        "We provide personalized service to ensure you get exactly the attorney leads you need. Our team helps customize your lawyer database based on practice areas, geography, and firm size. This consultation approach ensures better ROI for your legal marketing campaigns and prevents waste on irrelevant contacts.",
    },
  ]

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4 px-4 sm:px-0">
            Attorney Leads Database - Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border border-slate-200 rounded-lg shadow-sm"
            >
              <AccordionTrigger className="px-4 sm:px-6 py-3 sm:py-4 text-left font-semibold text-slate-900 hover:no-underline text-sm sm:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 pb-3 sm:pb-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
