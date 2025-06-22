export default function TargetAudience() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Built for the Architects of the Legal Economy.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">For Marketing Agencies</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Imagine delivering a campaign so targeted, every email feels personal. That's how you build client trust
              and deliver results that make you indispensable.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">For Legal Tech & SaaS</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Your platform is powerful, but it's empty without data. Populate your software with a clean, comprehensive
              dataset of your entire addressable market.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
