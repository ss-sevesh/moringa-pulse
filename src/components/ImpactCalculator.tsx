"use client";

import React, { useState, useMemo } from "react";
import { estimateSustainabilityImpact } from "@/lib/moringa-utils";

export const ImpactCalculator: React.FC = () => {
  const [treeCount, setTreeCount] = useState<number>(100);

  const impact = useMemo(() => estimateSustainabilityImpact(treeCount), [treeCount]);

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-950/50 rounded-[4rem] border border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Sustainability Calculator
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
              Estimate the environmental footprint of your Moringa project. 
              Moringa trees are carbon-sequestering powerhouses.
            </p>
            
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">
                  Number of Trees: <span className="text-green-600 ml-2">{treeCount.toLocaleString()}</span>
                </label>
                <input 
                  type="range"
                  min="1"
                  max="10000"
                  step="10"
                  value={treeCount}
                  onChange={(e) => setTreeCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-lg appearance-none cursor-pointer accent-green-500"
                />
              </div>
            </div>
          </div>
          
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <div className="p-8 bg-green-500/10 border border-green-500/20 rounded-3xl">
              <div className="text-xs font-bold text-green-600 uppercase mb-2">Annual CO2 Absorption</div>
              <div className="text-3xl font-extrabold text-green-900 dark:text-green-400">
                {impact.annualCO2Sequestration_kg.toLocaleString()} kg
              </div>
            </div>
            
            <div className="p-8 bg-blue-500/10 border border-blue-500/20 rounded-3xl">
              <div className="text-xs font-bold text-blue-600 uppercase mb-2">Cars Off Road Equivalent</div>
              <div className="text-3xl font-extrabold text-blue-900 dark:text-blue-400">
                {impact.equivalentCarsOffRoadPerYear.toFixed(2)}
              </div>
            </div>
            
            <div className="p-8 bg-orange-500/10 border border-orange-500/20 rounded-3xl sm:col-span-2">
              <div className="text-xs font-bold text-orange-600 uppercase mb-2">Potential Water Savings vs. Cattle Farming</div>
              <div className="text-3xl font-extrabold text-orange-900 dark:text-orange-400">
                {impact.approximateWaterSaved_vs_Beef_liters.toLocaleString()} Liters
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
