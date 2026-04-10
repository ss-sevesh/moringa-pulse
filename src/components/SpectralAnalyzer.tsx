"use client";

import React, { useState, useMemo } from "react";
import { classifyMoringaQuality, REFERENCE_SPECTRAL_DATA } from "@/lib/moringa-utils";
import { SpectralReading, QualityCategory } from "@/types";

export const SpectralAnalyzer: React.FC = () => {
  const [reading, setReading] = useState<SpectralReading>({
    a450: 0.50,
    a530: 0.45,
    a660: 0.60,
  });

  const result = useMemo(() => classifyMoringaQuality(reading), [reading]);

  const setPreset = (category: QualityCategory) => {
    setReading(REFERENCE_SPECTRAL_DATA[category]);
  };

  return (
    <section className="py-20 px-6 bg-linear-to-br from-white to-gray-50 dark:from-black dark:to-gray-950 rounded-[4rem] border border-gray-100 dark:border-gray-800 shadow-2xl overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 blur-[120px] rounded-full -mr-48 -mt-48" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1 w-full">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
              Quality Assessment Lab
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
              Input laboratory absorbance data from UV–Visible spectrophotometry 
              to classify the moringa powder quality based on the spectral fingerprint.
            </p>
            
            <div className="space-y-10">
              {Object.entries(reading).map(([key, value]) => (
                <div key={key}>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-sm font-black text-gray-400 uppercase tracking-widest">
                      {key.toUpperCase()} (Absorbance)
                    </label>
                    <span className="text-xl font-bold text-green-600 font-mono">
                      {value.toFixed(3)}
                    </span>
                  </div>
                  <input 
                    type="range"
                    min="0"
                    max="1.5"
                    step="0.01"
                    value={value}
                    onChange={(e) => setReading({...reading, [key]: parseFloat(e.target.value)})}
                    className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-lg appearance-none cursor-pointer accent-green-500 hover:accent-green-600 transition-all"
                  />
                  <div className="flex justify-between text-[10px] mt-2 text-gray-400 font-bold uppercase tracking-tighter">
                     <span>Minimum (0.00)</span>
                     <span>Maximum (1.50)</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
               <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block w-full mb-2">Load Lab Baselines:</span>
               {(["Good", "Medium", "Poor"] as QualityCategory[]).map((cat) => (
                 <button 
                  key={cat}
                  onClick={() => setPreset(cat)}
                  className="px-6 py-2 rounded-full border border-gray-200 dark:border-gray-800 text-sm font-bold hover:bg-green-500 hover:text-white dark:hover:bg-green-600 transition-all"
                 >
                   {cat}
                 </button>
               ))}
            </div>
          </div>
          
          <div className="flex-1 w-full flex flex-col items-center">
            <div className={`p-10 rounded-[3rem] w-full text-center border transition-all duration-700 ${
              result.category === "Good" ? "bg-green-500/10 border-green-500/30" :
              result.category === "Medium" ? "bg-yellow-500/10 border-yellow-500/30" :
              "bg-red-500/10 border-red-500/30"
            }`}>
              <div className="text-sm font-black uppercase tracking-[0.2em] mb-4 opacity-60">Result Output</div>
              <div className={`text-7xl font-black mb-4 ${
                result.category === "Good" ? "text-green-600" :
                result.category === "Medium" ? "text-yellow-600" :
                "text-red-600"
              }`}>
                {result.category}
              </div>
              
              <div className="mb-8">
                 <div className="text-xs font-bold text-gray-400 uppercase mb-2">Algorithm Confidence</div>
                 <div className="text-2xl font-mono font-bold text-gray-900 dark:text-white">
                   {result.confidence}%
                 </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 font-medium leading-relaxed max-w-xs mx-auto italic">
                "{result.description}"
              </p>
            </div>
            
            <div className="mt-12 text-xs text-gray-400 text-center max-w-sm leading-loose uppercase font-bold tracking-widest opacity-50">
               Machine Learning Model based on Beer–Lambert Law <br /> & Spectral Feature Vectors [A450, A530, A660]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
