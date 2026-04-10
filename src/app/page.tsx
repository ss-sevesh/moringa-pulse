import { Hero } from "@/components/Hero";
import { BioactiveReference } from "@/components/BioactiveReference";
import { SpectralAnalyzer } from "@/components/SpectralAnalyzer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black font-sans">
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-900">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white font-black italic">M</div>
            <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white uppercase tracking-widest">MoringaPulse Labs</span>
          </div>
          <div className="hidden md:flex gap-8 text-xs font-black text-gray-400 uppercase tracking-widest">
            <a href="#" className="hover:text-green-600 transition-colors">Spectral Lab</a>
            <a href="#" className="hover:text-green-600 transition-colors">Bioactive Library</a>
            <a href="#" className="hover:text-green-600 transition-colors">Documentation</a>
          </div>
          <button className="px-5 py-2.5 bg-gray-900 dark:bg-white dark:text-gray-900 text-white rounded-full text-xs font-black uppercase tracking-widest">
            Connect Instrument
          </button>
        </div>
      </nav>

      <main className="pt-20">
        <Hero />
        
        <section className="px-6 py-12 max-w-7xl mx-auto">
          <SpectralAnalyzer />
        </section>

        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-sm font-black text-green-600 uppercase tracking-[0.3em] mb-4">Science & Methodology</h2>
            <p className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
              Bioactive Fingerprinting
            </p>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Moringa leaves are rich in bioactive compounds that absorb light in the visible region. 
              Our system evaluates spectral characteristics to assess quality.
            </p>
          </div>
          <BioactiveReference />
        </section>

        {/* Scientific Principle Section */}
        <section className="py-32 px-6 bg-gray-50 dark:bg-gray-950/50">
           <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                 <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Principle of UV–Visible Spectroscopy</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      Molecules absorb light at specific wavelengths. When visible light passes through a 
                      sample solution, part of the light is absorbed by the compounds present. 
                      The instrument measures this as absorbance (ABS).
                    </p>
                    <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 italic text-sm text-gray-500">
                      "According to Beer–Lambert’s law, absorbance is directly proportional to concentration."
                    </div>
                 </div>
                 <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Machine Learning Role</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      For machine learning, the absorbance values are treated as numerical input features. 
                      The trained model identifies patterns in spectral data to classify powder into quality categories.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                       <div className="p-4 bg-green-500/5 rounded-xl border border-green-500/10 text-center">
                          <div className="text-xs font-bold text-green-600 uppercase">Input X</div>
                          <div className="text-sm font-mono">[A450, A530, A660]</div>
                       </div>
                       <div className="p-4 bg-blue-500/5 rounded-xl border border-blue-500/10 text-center">
                          <div className="text-xs font-bold text-blue-600 uppercase">Output Y</div>
                          <div className="text-sm font-mono">Quality Category</div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <footer className="py-20 border-t border-gray-100 dark:border-gray-900 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500 text-xs font-bold tracking-widest uppercase">
          <div className="mb-8 text-gray-900 dark:text-white tracking-[0.5em]">MoringaPulse Labs &copy; 2026</div>
          <p className="max-w-md mx-auto leading-loose opacity-60">
            A scientific research platform for spectral quality analysis of Moringa Oleifera. 
            All data based on standard laboratory spectrophotometry baselines.
          </p>
        </div>
      </footer>
    </div>
  );
}
