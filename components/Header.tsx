import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-slate-900">The Legal Index</h1>
          </div>
          <nav>
            <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md transition-transform hover:scale-[1.03]">
              Get Full Access
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
