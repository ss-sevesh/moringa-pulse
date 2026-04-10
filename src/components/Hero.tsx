import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="relative py-20 px-6 text-center lg:py-32 bg-linear-to-b from-green-50/50 to-white dark:from-green-950/20 dark:to-black">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-green-900 dark:text-green-400 mb-6">
          Spectral Intelligence <br />
          <span className="text-gray-900 dark:text-white">for Bioactive Analysis.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Assessing Moringa quality through UV-Visible Spectroscopy and 
          Machine Learning based classification.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-green-500/30">
            Open Lab Dashboard
          </button>
          <button className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-green-500 font-bold rounded-full transition-all">
            View Spectral Baselines
          </button>
        </div>
      </div>
      <div className="mt-16 flex justify-center opacity-75 grayscale hover:grayscale-0 transition-all">
        <div className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase">
          UV–Visible Spectroscopy &bull; Bioactive Fingerprinting &bull; Quality Control
        </div>
      </div>
    </section>
  );
};
