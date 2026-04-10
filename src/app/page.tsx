import { Hero } from "@/components/Hero";
import { ComparisonGrid } from "@/components/ComparisonGrid";
import { ImpactCalculator } from "@/components/ImpactCalculator";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black font-sans">
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-900">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white font-black italic">M</div>
            <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">MoringaPulse</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-500">
            <a href="#" className="hover:text-green-600 transition-colors">Dashboard</a>
            <a href="#" className="hover:text-green-600 transition-colors">Calculators</a>
            <a href="#" className="hover:text-green-600 transition-colors">Research</a>
          </div>
          <button className="px-5 py-2.5 bg-gray-900 dark:bg-white dark:text-gray-900 text-white rounded-full text-sm font-bold">
            Get Started
          </button>
        </div>
      </nav>

      <main className="pt-20">
        <Hero />
        
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-sm font-bold text-green-600 uppercase tracking-widest mb-4">Nutritional Excellence</h2>
            <p className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
              The Power of 100 Grams
            </p>
          </div>
          <ComparisonGrid />
        </section>

        <section className="px-6 py-12 max-w-7xl mx-auto">
          <ImpactCalculator />
        </section>

        {/* Informational Section */}
        <section className="py-24 px-6 max-w-5xl mx-auto text-center">
           <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Why Moringa?</h2>
           <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed italic">
             "Moringa oleifera is a fast-growing, drought-resistant tree of the family Moringaceae, 
             native to the Indian subcontinent. It is widely cultivated for its young seed pods and leaves, 
             used as vegetables and in traditional herbal medicine. It is also used for water purification."
           </p>
           <div className="mt-12 flex justify-center gap-12 grayscale opacity-50">
              <span className="font-bold">UN FAO Verified</span>
              <span className="font-bold">Organic Standards</span>
              <span className="font-bold">CO2 Optimized</span>
           </div>
        </section>
      </main>

      <footer className="py-20 border-t border-gray-100 dark:border-gray-900 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500 text-sm">
          <div className="mb-8 font-bold text-gray-900 dark:text-white">MoringaPulse &copy; 2026</div>
          <p className="max-w-md mx-auto leading-loose">
            An open-source initiative to promote sustainable agriculture and better nutrition 
            through data science and modern web technology.
          </p>
        </div>
      </footer>
    </div>
  );
}
