// Simple email capture for Vercel deployment
// This is a basic solution that logs emails to console and could be enhanced

export interface EmailLead {
  email: string
  timestamp: string
  ip?: string
  userAgent?: string
}

export const logEmailLead = (lead: EmailLead) => {
  // Enhanced console logging for Vercel function logs
  console.log('📧 EMAIL LEAD CAPTURED:')
  console.log('='.repeat(50))
  console.log(`📧 Email: ${lead.email}`)
  console.log(`⏰ Time: ${lead.timestamp}`)
  console.log(`🌍 IP: ${lead.ip || 'unknown'}`)
  console.log(`🖥️ Agent: ${lead.userAgent?.substring(0, 100) || 'unknown'}`)
  console.log('='.repeat(50))
  
  // You can view these logs in:
  // 1. Vercel Dashboard → Functions → View Function Logs
  // 2. Vercel CLI: `vercel logs`
  
  return true
}

// Optional: Send email notification (requires email service setup)
export const sendEmailNotification = async (lead: EmailLead) => {
  // TODO: Integrate with your preferred email service
  // Examples: SendGrid, Resend, AWS SES, etc.
  
  console.log('📬 Email notification would be sent here for:', lead.email)
  return true
}

// Example webhook integration for external services
export const sendToWebhook = async (lead: EmailLead, webhookUrl?: string) => {
  if (!webhookUrl) return false
  
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(lead),
    })
    
    if (response.ok) {
      console.log('✅ Successfully sent to webhook:', webhookUrl)
      return true
    } else {
      console.error('❌ Webhook failed:', response.status)
      return false
    }
  } catch (error) {
    console.error('❌ Webhook error:', error)
    return false
  }
} 