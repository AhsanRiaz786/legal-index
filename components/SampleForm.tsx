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
    // For now, create a sample CSV content
    const sampleData = `Name,Email,Phone,Law Firm,Practice Area,State,Bar Number
John Smith,john.smith@lawfirm.com,(555) 123-4567,Smith & Associates,Personal Injury,CA,CA12345
Sarah Johnson,s.johnson@legal.com,(555) 234-5678,Johnson Law Group,Corporate Law,NY,NY67890
Michael Davis,mdavis@attorneys.com,(555) 345-6789,Davis Legal Services,Family Law,TX,TX54321
Emily Wilson,ewilson@legalaid.com,(555) 456-7890,Wilson & Partners,Criminal Defense,FL,FL98765
Robert Brown,rbrown@lawoffice.com,(555) 567-8901,Brown Legal Firm,Real Estate,IL,IL13579`

    const blob = new Blob([sampleData], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.style.display = 'none'
    a.href = url
    a.download = 'attorney-leads-sample.csv'
    document.body.appendChild(a)
    a.click()
    window.URL.revokeObjectURL(url)
    document.body.removeChild(a)
  }

  return (
    <section id="sample-form" className="py-24 relative overflow-hidden">
      {/* Premium background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iI0ZGRkZGRiIgZmlsbC1vcGFjaXR5PSIwLjEiPgo8cGF0aCBkPSJtMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz4KPC9nPgo8L2c+Cjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-white/90">Free Sample Available</span>
            </div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-white mb-6">
            Download Free Attorney Leads Sample
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Test our attorney database quality before you buy. Download a free sample of verified lawyer contacts including emails, phone numbers, and practice areas. 
            <span className="text-white font-medium"> See why marketing agencies trust our legal leads database.</span>
          </p>

          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="premium-card p-8 rounded-2xl">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Input
                  type="email"
                  placeholder="Enter your work email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 text-lg border-slate-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl bg-white"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="premium-button text-white font-semibold px-8 py-4 text-lg rounded-xl border-0 min-w-[200px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending Sample...
                    </>
                  ) : (
                    <>
                      <span>Get Free Sample</span>
                      <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </>
                  )}
                </Button>
              </div>

              {message && (
                <div
                  className={`p-4 rounded-xl border ${
                    messageType === "success"
                      ? "bg-green-50 text-green-800 border-green-200"
                      : "bg-red-50 text-red-800 border-red-200"
                  }`}
                >
                  {message}
                </div>
              )}

                             {showDownload && (
                 <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl">
                   <div className="text-center">
                     <div className="flex justify-center mb-4">
                       <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                         <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                         </svg>
                       </div>
                     </div>
                     <h3 className="text-lg font-semibold text-green-800 mb-2">Sample Ready!</h3>
                     <p className="text-green-700 mb-4 text-sm">Click below to download your free sample of 50 verified attorney contacts</p>
                     <Button
                       onClick={handleDownload}
                       className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl border-0"
                     >
                       <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                       </svg>
                       Download Sample CSV
                     </Button>
                   </div>
                 </div>
               )}

               <div className="text-sm text-slate-600 mt-4 flex items-center justify-center space-x-4">
                 <span className="flex items-center">
                   <svg className="h-4 w-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                   No spam, ever
                 </span>
                 <span className="flex items-center">
                   <svg className="h-4 w-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                   Instant download
                 </span>
                 <span className="flex items-center">
                   <svg className="h-4 w-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                   50 real attorney contacts
                 </span>
               </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
