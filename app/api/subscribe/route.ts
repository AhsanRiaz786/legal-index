import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 })
    }

    // Send sample to user
    await resend.emails.send({
      from: "The Legal Index <noreply@attorneyleads.store>",
      to: [email],
      subject: "Your Legal Index Sample - See the Quality Firsthand",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #0F172A; font-size: 24px; margin-bottom: 20px;">Your Sample is Ready</h1>
          
          <p style="color: #64748B; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Thank you for your interest in The Legal Index. As promised, here's your free sample of our attorney database.
          </p>
          
          <div style="background-color: #F9FAFB; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #0F172A; font-size: 18px; margin-bottom: 10px;">What's Included:</h2>
            <ul style="color: #64748B; font-size: 14px; line-height: 1.6;">
              <li>50 verified attorney contacts</li>
              <li>Complete contact information (name, email, phone, address)</li>
              <li>Practice area classifications</li>
              <li>Law firm details and bar numbers</li>
            </ul>
          </div>
          
          <a href="${process.env.SAMPLE_DOWNLOAD_LINK || "#"}" 
             style="display: inline-block; background-color: #16A34A; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; margin-bottom: 20px;">
            Download Your Sample
          </a>
          
          <p style="color: #64748B; font-size: 14px; line-height: 1.6; margin-bottom: 20px;">
            Questions? Reply to this email or contact us directly. We're here to help you find the perfect attorney list for your needs.
          </p>
          
          <div style="border-top: 1px solid #E2E8F0; padding-top: 20px; margin-top: 30px;">
            <p style="color: #64748B; font-size: 12px; line-height: 1.4;">
              Best regards,<br>
              The Legal Index Team<br>
              <a href="mailto:hello@attorneyleads.store" style="color: #16A34A;">hello@attorneyleads.store</a>
            </p>
          </div>
        </div>
      `,
    })

    // Notify owner
    if (process.env.OWNER_NOTIFICATION_EMAIL) {
      await resend.emails.send({
        from: "The Legal Index <noreply@attorneyleads.store>",
        to: [process.env.OWNER_NOTIFICATION_EMAIL],
        subject: "New Sample Request - The Legal Index",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #0F172A; font-size: 24px; margin-bottom: 20px;">New Sample Request</h1>
            
            <div style="background-color: #F9FAFB; padding: 20px; border-radius: 8px;">
              <p style="color: #0F172A; font-size: 16px; margin-bottom: 10px;">
                <strong>Email:</strong> ${email}
              </p>
              <p style="color: #64748B; font-size: 14px; margin-bottom: 0;">
                <strong>Timestamp:</strong> ${new Date().toLocaleString()}
              </p>
            </div>
            
            <p style="color: #64748B; font-size: 14px; line-height: 1.6; margin-top: 20px;">
              A sample has been automatically sent to the user. Consider following up within 24-48 hours to discuss their specific needs.
            </p>
          </div>
        `,
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending sample:", error)
    return NextResponse.json({ error: "Failed to send sample" }, { status: 500 })
  }
}
