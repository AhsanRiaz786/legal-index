import { Button } from "@/components/ui/button"
import { Shield, CheckCircle } from "lucide-react"

export default function Header() {
  return (
    <header className="glass-effect sticky top-0 z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-20">
          <div className="flex-shrink-0 flex items-center min-w-0">
            <div className="flex items-center space-x-1.5 sm:space-x-2 lg:space-x-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 premium-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-6 lg:w-6 text-white" />
              </div>
              <div className="min-w-0">
                <h1 className="text-base sm:text-lg lg:text-2xl font-playfair font-bold premium-text-gradient truncate">The Legal Index</h1>
                <p className="text-xs text-slate-600 font-medium hidden sm:block">Premium Attorney Database</p>
              </div>
            </div>
          </div>
          
          <nav className="flex items-center space-x-1 sm:space-x-2 lg:space-x-6">
            <div className="hidden xl:flex items-center space-x-2 text-sm text-slate-600">
              <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
              <span className="font-medium whitespace-nowrap">300K+ Verified Attorneys</span>
            </div>
            <div className="hidden sm:flex xl:hidden items-center space-x-1.5 text-xs text-slate-600">
              <CheckCircle className="h-3.5 w-3.5 text-blue-600 flex-shrink-0" />
              <span className="font-medium">300K+ Verified</span>
            </div>
            <div className="flex sm:hidden items-center space-x-1 text-xs text-slate-600">
              <CheckCircle className="h-3 w-3 text-blue-600 flex-shrink-0" />
              <span className="font-medium">300K+</span>
            </div>
            <Button className="premium-button text-white font-semibold px-2.5 sm:px-3 lg:px-6 py-1.5 sm:py-2 lg:py-2.5 rounded-lg border-0 text-xs sm:text-sm">
              <span className="hidden lg:inline">Get Full Access</span>
              <span className="hidden sm:inline lg:hidden">Get Access</span>
              <span className="sm:hidden">Access</span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
