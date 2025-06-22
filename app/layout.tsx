import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "The Legal Index | Attorney Database by Practice Area",
  description:
    "The definitive database of 300K+ U.S. attorneys. Move beyond generic lists and target by specific practice areas. See why top agencies and legal tech companies choose The Legal Index. Download a sample.",
  keywords: "attorney database, lawyer leads, legal marketing, practice area targeting, attorney contact information",
  authors: [{ name: "The Legal Index" }],
  openGraph: {
    title: "The Legal Index | Attorney Database by Practice Area",
    description:
      "The definitive database of 300K+ U.S. attorneys. Move beyond generic lists and target by specific practice areas.",
    type: "website",
    url: "https://attorneyleads.store",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Legal Index | Attorney Database by Practice Area",
    description:
      "The definitive database of 300K+ U.S. attorneys. Move beyond generic lists and target by specific practice areas.",
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
