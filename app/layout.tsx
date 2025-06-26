import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
})

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap"
})

export const metadata: Metadata = {
  title: "Buy Attorney Leads | US Lawyer Contact Database | 300K+ Verified Attorneys",
  description:
    "Buy premium attorney leads database with 300K+ verified US lawyer contacts. Email lists, phone numbers, practice areas by state. Perfect for legal marketing agencies, CRM companies & legal tech startups. Download free sample.",
  keywords: "buy attorney leads, lawyer contact database, attorney email list, US lawyer database, legal marketing leads, attorney phone numbers, lawyer leads for sale, attorney contact information by state, legal email database, attorney database for marketing",
  authors: [{ name: "The Legal Index" }],
  openGraph: {
    title: "Buy Attorney Leads | US Lawyer Contact Database | 300K+ Verified Attorneys",
    description:
      "Buy premium attorney leads database with 300K+ verified US lawyer contacts. Perfect for legal marketing agencies & CRM companies.",
    type: "website",
    url: "https://attorneyleads.store",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Attorney Leads | US Lawyer Contact Database | 300K+ Verified Attorneys",
    description:
      "Buy premium attorney leads database with 300K+ verified US lawyer contacts. Perfect for legal marketing agencies & CRM companies.",
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Product",
                  "@id": "#product",
                  name: "The Legal Index Attorney Database",
                  description: "Premium database of over 300,000 verified U.S. attorneys with advanced filtering by practice areas. Professional data intelligence for marketing agencies, CRM companies, and legal tech startups.",
                  brand: {
                    "@type": "Brand",
                    name: "The Legal Index"
                  },
                  category: "Business Intelligence Software",
                  offers: {
                    "@type": "Offer",
                    availability: "https://schema.org/InStock",
                    priceCurrency: "USD",
                    seller: {
                      "@type": "Organization",
                      name: "The Legal Index"
                    }
                  },
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "5",
                    reviewCount: "47",
                    bestRating: "5",
                    worstRating: "1"
                  },
                  audience: {
                    "@type": "BusinessAudience",
                    audienceType: "Marketing Agencies, CRM Companies, Legal Tech Startups"
                  }
                },
                {
                  "@type": "Organization",
                  "@id": "#organization",
                  name: "The Legal Index",
                  url: "https://attorneyleads.store",
                  description: "Premium attorney database provider specializing in verified lawyer contact information for marketing agencies and legal tech companies.",
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+92-304-094-9380",
                    contactType: "Customer Service",
                    availableLanguage: "English",
                    contactOption: "TollFree"
                  },
                  sameAs: [
                    "https://wa.me/923040949380"
                  ],
                  serviceArea: {
                    "@type": "Country",
                    name: "United States"
                  },
                  areaServed: "US"
                },
                {
                  "@type": "FAQPage",
                  "@id": "#faq",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "How much does your attorney leads database cost?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Our attorney database pricing varies based on the number of contacts and filtering requirements. We offer competitive rates for marketing agencies, CRM companies, and legal tech startups. Contact us for custom pricing based on your specific attorney leads needs and volume requirements."
                      }
                    },
                    {
                      "@type": "Question",
                      name: "Can I buy attorney leads by specific practice areas and states?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes! Our lawyer database allows filtering by practice areas (personal injury, corporate law, family law, etc.) and by state. You can purchase targeted attorney contact lists for specific jurisdictions and legal specialties to maximize your legal marketing campaign effectiveness."
                      }
                    },
                    {
                      "@type": "Question",
                      name: "Where is your attorney contact data sourced from?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Our lawyer database is compiled from authoritative sources including state bar associations, court records, professional directories, and verified public databases. We maintain strict quality standards and regularly update our attorney contact information to ensure accuracy and compliance."
                      }
                    },
                    {
                      "@type": "Question",
                      name: "Why contact you directly instead of instant online purchase?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "We provide personalized service to ensure you get exactly the attorney leads you need. Our team helps customize your lawyer database based on practice areas, geography, and firm size. This consultation approach ensures better ROI for your legal marketing campaigns and prevents waste on irrelevant contacts."
                      }
                    }
                  ]
                },
                {
                  "@type": "Dataset",
                  "@id": "#dataset",
                  name: "US Attorney Contact Database",
                  description: "Comprehensive database of over 300,000 verified U.S. attorney contacts with practice area classifications",
                  keywords: "attorney leads, lawyer database, legal marketing, attorney contact information",
                  creator: {
                    "@type": "Organization",
                    name: "The Legal Index"
                  },
                  distribution: {
                    "@type": "DataDownload",
                    encodingFormat: "XLSX",
                    contentSize: "300000+ records"
                  },
                  spatialCoverage: {
                    "@type": "Place",
                    name: "United States"
                  },
                  temporalCoverage: "2024"
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${poppins.variable} font-poppins bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-slate-900 antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
