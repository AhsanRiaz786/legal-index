import { CheckCircle, MessageCircle, Shield } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: CheckCircle,
      title: "Validate the Quality",
      description: "Download your sample and run it through your toughest verification process.",
    },
    {
      icon: MessageCircle,
      title: "A Direct Conversation",
      description: "Contact our team. We'll answer your questions and ensure our data is a perfect fit for your goals.",
    },
    {
      icon: Shield,
      title: "Secure the Asset",
      description: "We provide a simple invoice and securely deliver the complete, up-to-the-minute database.",
    },
  ]

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4 px-4 sm:px-0">
            From Sample to Strategic Asset in 3 Simple Steps.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-white p-4 sm:p-6 rounded-full w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 shadow-md flex items-center justify-center">
                <step.icon className="h-8 w-8 sm:h-10 sm:w-10 text-green-600" />
              </div>
              <div className="bg-green-600 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 sm:mb-4 flex items-center justify-center font-bold text-sm sm:text-base">
                {index + 1}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2 sm:mb-3 px-4 sm:px-0">{step.title}</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed px-4 sm:px-0">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
