import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "Where is your data sourced from?",
      answer:
        "Our data is compiled from multiple authoritative sources including state bar associations, court records, professional directories, and verified public databases. We maintain strict quality standards and regularly update our information to ensure accuracy and compliance.",
    },
    {
      question: "How do you ensure data accuracy?",
      answer:
        "We employ a multi-step verification process that includes automated validation, manual review, and regular data refreshes. Our team continuously monitors bounce rates, updates contact information, and removes invalid entries to maintain the highest data quality standards in the industry.",
    },
    {
      question: "Why a direct contact model instead of instant purchase?",
      answer:
        "We are a premium service, not a bulk commodity. This ensures we can provide personalized support, understand your specific targeting needs, and maintain the integrity of our data for serious clients. Our white-glove approach guarantees you receive exactly the data you need for maximum ROI.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Your Questions, Answered with Clarity.</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border border-slate-200 rounded-lg shadow-sm"
            >
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-slate-900 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-slate-600 leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
