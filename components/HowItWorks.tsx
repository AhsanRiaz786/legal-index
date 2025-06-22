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
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            From Sample to Strategic Asset in 3 Simple Steps.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-white p-6 rounded-full w-20 h-20 mx-auto mb-6 shadow-md flex items-center justify-center">
                <step.icon className="h-10 w-10 text-green-600" />
              </div>
              <div className="bg-green-600 text-white rounded-full w-8 h-8 mx-auto mb-4 flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
