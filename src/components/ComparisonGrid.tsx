import React from "react";
import { calculateNutritionalComparisons } from "@/lib/moringa-utils";

export const ComparisonGrid: React.FC = () => {
  const comparisons = calculateNutritionalComparisons();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {comparisons.map((item) => (
        <div 
          key={item.standardName}
          className="group relative p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-green-500/50 shadow-xs hover:shadow-2xl transition-all duration-300 overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
             <span className="text-6xl font-black text-green-500">{item.ratio.toFixed(1)}x</span>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">
              Vs. {item.standardName}
            </h3>
            <div className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              {item.ratio.toFixed(1)}<span className="text-green-500 font-medium">x</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Moringa contains <span className="text-green-600 dark:text-green-400 font-semibold">{item.moringaValue} {item.unit}</span> per 100g, 
              surpassing the standard {item.standardName} benchmark.
            </p>
          </div>
          
          <div className="mt-6 h-1 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-green-500 transition-all duration-1000 ease-out"
              style={{ width: `${Math.min(item.ratio * 20, 100)}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
