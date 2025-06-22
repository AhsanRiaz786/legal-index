import { Button } from "@/components/ui/button"
import { MessageCircle, Mail } from "lucide-react"

export default function Contact() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Let's Build Your Perfect List.</h2>
        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
          Our data experts are ready to help you acquire the most targeted and effective attorney list for your specific
          needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-md transition-transform hover:scale-[1.03] shadow-md"
          >
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Discuss on WhatsApp
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold px-8 py-4 rounded-md transition-transform hover:scale-[1.03] shadow-md bg-white"
          >
            <a href="mailto:hello@attorneyleads.store">
              <Mail className="mr-2 h-5 w-5" />
              Connect via Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
