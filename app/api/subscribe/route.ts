import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 })
    }

    // Log the email for lead tracking
    const timestamp = new Date().toISOString()
    const leadInfo = {
      email,
      timestamp,
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    }
    
    // Log to console (you can later save to a file or database)
    console.log('🎯 NEW LEAD:', JSON.stringify(leadInfo, null, 2))
    
    // You could also append to a simple file for now:
    // const fs = require('fs')
    // fs.appendFileSync('leads.txt', `${timestamp}: ${email}\n`)

    return NextResponse.json({ 
      success: true, 
      message: "Email captured successfully" 
    })
  } catch (error) {
    console.error("Error capturing lead:", error)
    return NextResponse.json({ error: "Failed to capture email" }, { status: 500 })
  }
}
