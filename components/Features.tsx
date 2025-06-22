import { Target, Database, Shield, Download } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Target,
      title: "Targeted Attorney Leads by Practice Area",
      description:
        "Filter our lawyer database by specific practice areas. Target personal injury attorneys, corporate lawyers, or family law specialists. Our attorney contact lists ensure your legal marketing campaigns reach the right audience every time.",
    },
    {
      icon: Database,
      title: "Complete Lawyer Contact Information",
      description:
        "Each attorney lead includes verified email addresses, direct phone numbers, law firm details, physical addresses, and bar numbers. Get the full contact profile you need for successful legal marketing outreach.",
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
            Why Marketing Agencies Choose Our Attorney Email Database
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
