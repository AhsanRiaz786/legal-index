import { Button } from "@/components/ui/button"
import { Shield, CheckCircle } from "lucide-react"

export default function Header() {
  return (
    <header className="glass-effect sticky top-0 z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 premium-gradient rounded-lg flex items-center justify-center">
                <Shield className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg sm:text-2xl font-playfair font-bold premium-text-gradient">The Legal Index</h1>
                <p className="text-xs text-slate-600 font-medium hidden sm:block">Premium Attorney Database</p>
              </div>
            </div>
          </div>
          
          <nav className="flex items-center space-x-2 sm:space-x-6">
            <div className="hidden lg:flex items-center space-x-2 text-sm text-slate-600">
              <CheckCircle className="h-4 w-4 text-blue-600" />
              <span className="font-medium">300K+ Verified Attorneys</span>
            </div>
            <div className="flex sm:hidden items-center space-x-1 text-xs text-slate-600">
              <CheckCircle className="h-3 w-3 text-blue-600" />
              <span className="font-medium">300K+</span>
            </div>
            <Button className="premium-button text-white font-semibold px-3 sm:px-6 py-2 sm:py-2.5 rounded-lg border-0 text-xs sm:text-sm">
              <span className="hidden sm:inline">Get Full Access</span>
              <span className="sm:hidden">Access</span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
