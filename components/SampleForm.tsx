"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"

export default function SampleForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showDownload, setShowDownload] = useState(false)
  const [message, setMessage] = useState("")
  const [messageType, setMessageType] = useState<"success" | "error" | "">("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      setMessage("Please enter a valid email address.")
      setMessageType("error")
      return
    }

    setIsLoading(true)
    setMessage("")

    try {
      // Send email to API for lead tracking
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setShowDownload(true)
        setMessage("Success! Your sample download is ready below.")
        setMessageType("success")
      } else {
        throw new Error("Failed to process request")
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.")
      setMessageType("error")
    } finally {
      setIsLoading(false)
    }
  }

  const handleDownload = () => {
    // Download the real sample file from public folder
    const link = document.createElement('a')
    link.href = '/Attorney Leads Sample.xlsx'
    link.download = 'Attorney Leads Sample.xlsx'
    link.style.display = 'none'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="sample-form" className="py-12 sm:py-16 lg:py-20 xl:py-24 relative overflow-hidden">
      {/* Premium background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iI0ZGRkZGRiIgZmlsbC1vcGFjaXR5PSIwLjEiPgo8cGF0aCBkPSJtMzYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz4KPC9nPgo8L2c+Cjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="relative max-w-5xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 text-center">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-4 sm:mb-6 lg:mb-8">
            <div className="flex items-center space-x-1.5 sm:space-x-2 bg-white/10 backdrop-blur-sm px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-full border border-white/20">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm font-medium text-white/90">Free Sample Available</span>
            </div>
          </div>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-playfair font-bold text-white mb-3 sm:mb-4 lg:mb-6 px-2 sm:px-0">
            Download Free Attorney Leads Sample
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white/80 mb-6 sm:mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed font-light px-3 sm:px-0">
            Test our attorney database quality before you buy. Download a free sample of verified lawyer contacts including emails, phone numbers, and practice areas. 
            <span className="text-white font-medium"> See why marketing agencies trust our legal leads database.</span>
          </p>

          <div className="max-w-2xl mx-auto px-2 sm:px-0">
            <form onSubmit={handleSubmit} className="premium-card p-4 sm:p-6 lg:p-8 rounded-2xl">
              <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3 lg:space-x-4 mb-3 sm:mb-4 lg:mb-6">
                <Input
                  type="email"
                  placeholder="Enter your work email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg border-slate-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl bg-white"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full sm:w-auto premium-button text-white font-semibold px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg rounded-xl border-0 min-w-[140px] sm:min-w-[160px] lg:min-w-[200px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 animate-spin" />
                      <span className="hidden sm:inline">Sending...</span>
                      <span className="sm:hidden">Wait...</span>
                    </>
                  ) : (
                    <>
                      <span className="hidden sm:inline">Get Free Sample</span>
                      <span className="sm:hidden">Get Sample</span>
                      <svg className="ml-2 h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </>
                  )}
                </Button>
              </div>

              {message && (
                <div
                  className={`p-2.5 sm:p-3 lg:p-4 rounded-xl border text-xs sm:text-sm lg:text-base ${
                    messageType === "success"
                      ? "bg-green-50 text-green-800 border-green-200"
                      : "bg-red-50 text-red-800 border-red-200"
                  }`}
                >
                  {message}
                </div>
              )}

              {showDownload && (
                <div className="mt-3 sm:mt-4 lg:mt-6 p-3 sm:p-4 lg:p-6 bg-green-50 border border-green-200 rounded-xl">
                  <div className="text-center">
                    <div className="flex justify-center mb-2 sm:mb-3 lg:mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-green-800 mb-1 sm:mb-2">Sample Ready!</h3>
                    <p className="text-green-700 mb-2 sm:mb-3 lg:mb-4 text-xs sm:text-sm">Click below to download your free sample of verified attorney contacts</p>
                    <Button
                      onClick={handleDownload}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-xl border-0 text-xs sm:text-sm lg:text-base"
                    >
                      <svg className="mr-2 h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="hidden sm:inline">Download Sample Excel</span>
                      <span className="sm:hidden">Download</span>
                    </Button>
                  </div>
                </div>
              )}

              {/* Trust indicators - More compact on mobile */}
              <div className="text-xs sm:text-sm text-slate-600 mt-2 sm:mt-3 lg:mt-4 flex flex-col space-y-1 sm:flex-row sm:space-y-0 sm:space-x-3 lg:space-x-4 items-center justify-center">
                <span className="flex items-center">
                  <svg className="h-2.5 w-2.5 sm:h-3 sm:w-3 lg:h-4 lg:w-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  No spam, ever
                </span>
                <span className="flex items-center">
                  <svg className="h-2.5 w-2.5 sm:h-3 sm:w-3 lg:h-4 lg:w-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Instant download
                </span>
                <span className="flex items-center">
                  <svg className="h-2.5 w-2.5 sm:h-3 sm:w-3 lg:h-4 lg:w-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Real contacts
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
