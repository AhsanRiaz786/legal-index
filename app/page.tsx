import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import TargetAudience from "@/components/TargetAudience"
import SampleForm from "@/components/SampleForm"
import HowItWorks from "@/components/HowItWorks"
import Contact from "@/components/Contact"
import FAQ from "@/components/FAQ"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <TargetAudience />
      <SampleForm />
      <HowItWorks />
      <Contact />
      <FAQ />
    </main>
  )
}
