import { type NextRequest, NextResponse } from "next/server"
import { appendToSheet } from "@/lib/googleSheets"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 })
    }

    // Collect lead information
    const timestamp = new Date().toISOString()
    const userAgent = request.headers.get('user-agent') || undefined
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || undefined
    
    // Log to console for immediate feedback
    console.log('🎯 NEW LEAD:', { email, timestamp, ip })
    
    // Add to Google Sheet (async, won't block user experience)
    appendToSheet(email, timestamp, userAgent, ip).catch(error => {
      console.error('Failed to add to Google Sheet:', error)
    })

    return NextResponse.json({ 
      success: true, 
      message: "Email captured successfully" 
    })
  } catch (error) {
    console.error("Error capturing lead:", error)
    return NextResponse.json({ error: "Failed to capture email" }, { status: 500 })
  }
}
