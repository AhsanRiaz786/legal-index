"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"

export default function SampleForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
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
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setMessage("Success! Check your email for the sample download link.")
        setMessageType("success")
        setEmail("")
      } else {
        throw new Error("Failed to send sample")
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again or contact us directly.")
      setMessageType("error")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="sample-form" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Download Free Attorney Leads Sample</h2>
        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
          Test our attorney database quality before you buy. Download a free sample of verified lawyer contacts including emails, phone numbers, and practice areas. See why marketing agencies trust our legal leads database.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 text-lg border-slate-300 focus:border-green-500 focus:ring-green-500"
              disabled={isLoading}
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 text-lg rounded-md transition-transform hover:scale-[1.03] shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send My Free Sample"
              )}
            </Button>
          </div>

          {message && (
            <div
              className={`mt-4 p-3 rounded-md ${
                messageType === "success"
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {message}
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
