import { Target, Database, Shield, Download } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Target,
      title: "Target with Surgical Precision",
      description:
        "Don't just market to lawyers. Connect with the right lawyers. Our 'Practice Area' filter lets you isolate personal injury attorneys from corporate litigators, ensuring your message is always relevant and never ignored.",
    },
    {
      icon: Database,
      title: "Data That Drives Decisions",
      description:
        "Go beyond a name and email. Arm your sales team with a complete profile: direct phone numbers, law firm details, physical addresses, and bar numbers.",
    },
    {
      icon: Shield,
      title: "A Foundation of Trust",
      description:
        "Our multi-step verification process means best-in-class deliverability. Protect your sender reputation, maximize your reach, and stop wasting money on bounced emails.",
    },
    {
      icon: Download,
      title: "Ready When You Are",
      description:
        "No complex setup. No messy files. Just a clean, structured .csv, ready to be imported into any CRM or marketing platform in minutes.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            The Unfair Advantage Your Competitors Wish They Had.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <feature.icon className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
