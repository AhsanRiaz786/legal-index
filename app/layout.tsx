import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

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
              "@type": "Product",
              name: "The Legal Index",
              description:
                "The definitive database of over 300,000 U.S. attorneys with advanced filtering by practice areas. Premium data intelligence for marketing agencies and legal tech companies.",
              brand: {
                "@type": "Brand",
                name: "The Legal Index",
              },
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/InStock",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "47",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-gray-50 text-slate-900`}>{children}</body>
    </html>
  )
}
