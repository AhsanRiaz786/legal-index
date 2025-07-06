import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight, Shield, CheckCircle, AlertTriangle, Globe, Mail, FileText, Lock } from "lucide-react"

export const metadata: Metadata = {
  title: "GDPR Compliance for Attorney Email Marketing | Legal Marketing Protection Guide",
  description: "Essential guide to GDPR compliance when marketing to attorneys and law firms. Protect your business while maintaining effective legal marketing campaigns with proper data protection.",
  keywords: "GDPR compliance attorney marketing, lawyer email marketing compliance, legal marketing data protection, attorney database GDPR, law firm marketing privacy",
  openGraph: {
    title: "GDPR Compliance for Attorney Email Marketing",
    description: "Essential guide to GDPR compliance for attorney email marketing campaigns and legal data protection requirements.",
    type: "article",
    url: "https://attorneyleads.store/blog/gdpr-compliance-attorney-email-marketing",
    publishedTime: "2024-12-08T10:00:00Z",
  },
  alternates: {
    canonical: "https://attorneyleads.store/blog/gdpr-compliance-attorney-email-marketing",
  },
}

export default function GDPRCompliancePage() {
  const complianceChecklist = [
    {
      category: "Data Collection",
      items: [
        "Explicit consent for email collection",
        "Clear purpose statement for data use",
        "Opt-in confirmation process",
        "Records of consent timestamps"
      ]
    },
    {
      category: "Data Storage",
      items: [
        "Secure encrypted databases",
        "Limited access controls",
        "Regular security audits",
        "Data retention policies"
      ]
    },
    {
      category: "Email Marketing",
      items: [
        "Clear unsubscribe options",
        "Sender identification",
        "Purpose-limited communications",
        "Opt-out processing within 72 hours"
      ]
    },
    {
      category: "Data Rights",
      items: [
        "Data access request procedures",
        "Right to rectification process",
        "Data portability options",
        "Right to erasure compliance"
      ]
    }
  ]

  const penalties = [
    {
      violation: "Minor Violations",
      fine: "Up to €10 million or 2% of global revenue",
      examples: ["Inadequate records", "Failure to notify breaches", "Minor consent issues"]
    },
    {
      violation: "Major Violations",
      fine: "Up to €20 million or 4% of global revenue",
      examples: ["No legal basis for processing", "Violating core privacy principles", "Major consent violations"]
    }
  ]

  return (
    <main className="min-h-screen">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
              Compliance
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            GDPR Compliance for Attorney Email Marketing
          </h1>
          
          <div className="flex items-center justify-center space-x-6 text-sm text-slate-600 mb-8">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              Dec 8, 2024
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              Legal Compliance Team
            </div>
            <div className="flex items-center">
              <Shield className="h-4 w-4 mr-2" />
              8 min read
            </div>
          </div>
          
          <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Comprehensive guide to GDPR compliance for attorney email marketing. Learn how to protect 
            your business while maintaining effective legal marketing campaigns through proper data protection practices.
          </p>
        </header>

        <div className="prose prose-lg prose-slate max-w-none">
          {/* Warning Alert */}
          <div className="mb-8 p-6 bg-red-50 border border-red-200 rounded-xl">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-red-900 mb-2">Critical Compliance Warning</h3>
                <p className="text-red-800">
                  GDPR violations can result in fines up to €20 million or 4% of global annual revenue. 
                  This guide provides general information but should not replace legal counsel. 
                  Consult with GDPR compliance attorneys for your specific situation.
                </p>
              </div>
            </div>
          </div>

          {/* GDPR Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Globe className="h-6 w-6 mr-2" />
              Understanding GDPR for Legal Marketing
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">What is GDPR?</h3>
                <p className="text-blue-800 mb-4">
                  The General Data Protection Regulation (GDPR) is EU legislation that governs 
                  how personal data of EU residents is collected, processed, and stored.
                </p>
                <ul className="text-sm text-blue-700 space-y-2">
                  <li>• Applies to all EU residents' data</li>
                  <li>• Enforceable globally for EU data</li>
                  <li>• Requires explicit consent</li>
                  <li>• Grants extensive data subject rights</li>
                </ul>
              </div>

              <div className="p-6 bg-green-50 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Impact on Legal Marketing</h3>
                <p className="text-green-800 mb-4">
                  Attorney email marketing must comply with GDPR when targeting EU-based 
                  lawyers or using databases containing EU personal data.
                </p>
                <ul className="text-sm text-green-700 space-y-2">
                  <li>• Consent-based email marketing only</li>
                  <li>• Enhanced data security requirements</li>
                  <li>• Mandatory breach notifications</li>
                  <li>• Data subject request handling</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Compliance Checklist */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">GDPR Compliance Checklist</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {complianceChecklist.map((section, index) => (
                <div key={index} className="p-6 border border-slate-200 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    {section.category}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-sm text-slate-600">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Legal Basis for Processing */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Legal Basis for Processing Attorney Data</h2>
            
            <div className="space-y-6">
              <div className="p-6 bg-green-50 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-900 mb-3 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Consent (Recommended)
                </h3>
                <p className="text-green-800 mb-3">
                  Most compliant approach for attorney email marketing campaigns.
                </p>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Must be freely given, specific, and informed</li>
                  <li>• Easily withdrawable at any time</li>
                  <li>• Documented with timestamp and method</li>
                  <li>• Cannot be bundled with other consents</li>
                </ul>
              </div>

              <div className="p-6 bg-yellow-50 rounded-lg border border-yellow-200">
                <h3 className="text-lg font-semibold text-yellow-900 mb-3 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Legitimate Interest (High Risk)
                </h3>
                <p className="text-yellow-800 mb-3">
                  Possible but requires careful legal assessment and balancing test.
                </p>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Must pass three-part balancing test</li>
                  <li>• Requires legitimate interest assessment</li>
                  <li>• Must consider data subject expectations</li>
                  <li>• Higher risk of regulatory challenge</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Penalties */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">GDPR Penalty Structure</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-200 rounded-lg">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="border border-slate-200 p-4 text-left font-semibold">Violation Type</th>
                    <th className="border border-slate-200 p-4 text-left font-semibold">Maximum Fine</th>
                    <th className="border border-slate-200 p-4 text-left font-semibold">Common Examples</th>
                  </tr>
                </thead>
                <tbody>
                  {penalties.map((penalty, index) => (
                    <tr key={index} className="hover:bg-slate-50">
                      <td className="border border-slate-200 p-4 font-medium">{penalty.violation}</td>
                      <td className="border border-slate-200 p-4 text-red-600 font-semibold">{penalty.fine}</td>
                      <td className="border border-slate-200 p-4">
                        <ul className="text-sm space-y-1">
                          {penalty.examples.map((example, exampleIndex) => (
                            <li key={exampleIndex}>• {example}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Implementation Guide */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Implementation Best Practices</h2>
            
            <div className="space-y-8">
              <div className="p-6 border border-slate-200 rounded-lg">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-2" />
                  Email Marketing Compliance
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-green-900 mb-2">✅ DO</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Use double opt-in confirmation</li>
                      <li>• Include clear unsubscribe links</li>
                      <li>• Honor opt-out requests within 72 hours</li>
                      <li>• Maintain consent records</li>
                      <li>• Use encryption for data transmission</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-900 mb-2">❌ DON'T</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Use pre-checked consent boxes</li>
                      <li>• Bundle marketing consent with services</li>
                      <li>• Ignore unsubscribe requests</li>
                      <li>• Share data without explicit consent</li>
                      <li>• Use unclear or deceptive language</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 border border-slate-200 rounded-lg">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <Lock className="h-5 w-5 text-purple-600 mr-2" />
                  Data Security Requirements
                </h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span><strong>Encryption:</strong> Use AES-256 encryption for data at rest and TLS 1.3 for data in transit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span><strong>Access Controls:</strong> Implement role-based access with multi-factor authentication</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span><strong>Audit Trails:</strong> Log all data access and modification activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span><strong>Breach Detection:</strong> Implement monitoring systems for unauthorized access</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Subject Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Handling Data Subject Rights Requests</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Common Requests</h3>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-center">
                    <FileText className="h-4 w-4 mr-2" />
                    Right of Access (Data Copy)
                  </li>
                  <li className="flex items-center">
                    <FileText className="h-4 w-4 mr-2" />
                    Right to Rectification
                  </li>
                  <li className="flex items-center">
                    <FileText className="h-4 w-4 mr-2" />
                    Right to Erasure
                  </li>
                  <li className="flex items-center">
                    <FileText className="h-4 w-4 mr-2" />
                    Right to Portability
                  </li>
                </ul>
              </div>
              
              <div className="p-6 bg-green-50 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Response Requirements</h3>
                <ul className="space-y-2 text-green-800">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Respond within 30 days
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Verify identity first
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    No charge for first request
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Document all actions taken
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Vendor Assessment */}
          <section className="mb-12 p-6 bg-slate-50 rounded-xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Vendor GDPR Assessment</h2>
            <p className="text-slate-700 mb-4">
              When selecting attorney database vendors, ensure they meet GDPR requirements:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-slate-600">
                <li>• GDPR-compliant data collection methods</li>
                <li>• Valid legal basis for each data point</li>
                <li>• Data Processing Agreements (DPAs)</li>
                <li>• EU data residency options</li>
              </ul>
              <ul className="space-y-2 text-slate-600">
                <li>• Regular compliance audits</li>
                <li>• Breach notification procedures</li>
                <li>• Data subject rights handling</li>
                <li>• Security certifications (ISO 27001)</li>
              </ul>
            </div>
          </section>

          {/* Action Steps */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Next Steps for Compliance</h2>
            
            <div className="space-y-4">
              <div className="flex items-start p-4 border border-slate-200 rounded-lg">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">1</span>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Audit Current Practices</h3>
                  <p className="text-slate-600 text-sm">Review existing email marketing practices and data collection methods</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 border border-slate-200 rounded-lg">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">2</span>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Implement Consent Systems</h3>
                  <p className="text-slate-600 text-sm">Deploy double opt-in and consent management tools</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 border border-slate-200 rounded-lg">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">3</span>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Update Privacy Policies</h3>
                  <p className="text-slate-600 text-sm">Ensure privacy policies meet GDPR transparency requirements</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 border border-slate-200 rounded-lg">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">4</span>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Train Your Team</h3>
                  <p className="text-slate-600 text-sm">Educate staff on GDPR requirements and response procedures</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
  )
} 