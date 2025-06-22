"use client"

import { Button } from "@/components/ui/button"

export default function Hero() {
  const scrollToForm = () => {
    const formElement = document.getElementById("sample-form")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="bg-gray-50 py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Buy Premium Attorney Leads Database - 300K+ Verified US Lawyers
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 mb-10 max-w-4xl mx-auto leading-relaxed">
            Get direct access to the most comprehensive lawyer contact database with verified emails, phone numbers, and practice areas. Perfect for marketing agencies, CRM companies, and legal tech startups seeking quality attorney leads for sale.
          </p>
          <Button
            onClick={scrollToForm}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold text-lg px-8 py-4 rounded-md transition-transform hover:scale-[1.03] shadow-md"
          >
            Download a Live Sample
          </Button>
        </div>
      </div>
    </section>
  )
}
