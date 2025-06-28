import { type NextRequest, NextResponse } from "next/server"
import { logEmailLead } from "@/lib/simpleEmailStorage"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 })
    }

    // Collect lead information
    const timestamp = new Date().toISOString()
    const userAgent = request.headers.get('user-agent') || 'unknown'
    const ip = request.headers.get('x-forwarded-for') || 
              request.headers.get('x-real-ip') || 
              request.ip || 
              'unknown'
    
    // Log to console for immediate feedback (visible in Vercel function logs)
    console.log('🎯 NEW LEAD CAPTURED:', { 
      email, 
      timestamp, 
      ip,
      userAgent: userAgent.substring(0, 100) // Truncate for cleaner logs
    })

    // Always log the lead (works on Vercel)
    logEmailLead({ email, timestamp, ip, userAgent })

    // Try Google Sheets integration if environment variables are available
    try {
      if (process.env.GOOGLE_SHEET_ID && process.env.GOOGLE_CLIENT_EMAIL) {
        const { appendToSheet } = await import("@/lib/googleSheets")
        await appendToSheet(email, timestamp, userAgent, ip)
        console.log('✅ Successfully added to Google Sheet')
      } else {
        console.log('⚠️ Google Sheets not configured - using console logging only')
      }
    } catch (sheetsError) {
      console.error('❌ Google Sheets error (non-blocking):', sheetsError)
      // Don't fail the request if sheets fail
    }

    return NextResponse.json({ 
      success: true, 
      message: "Email captured successfully",
      timestamp: timestamp
    })
  } catch (error) {
    console.error("❌ Error capturing lead:", error)
    return NextResponse.json({ 
      error: "Failed to capture email",
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }, { status: 500 })
  }
}
