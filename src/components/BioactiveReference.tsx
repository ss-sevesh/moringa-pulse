import React from "react";
import { BIOACTIVE_COMPOUNDS } from "@/lib/moringa-utils";

export const BioactiveReference: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      {BIOACTIVE_COMPOUNDS.map((compound) => (
        <div 
          key={compound.name}
          className="p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-4">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
             <h3 className="text-lg font-bold text-gray-900 dark:text-white">{compound.name}</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Spectral Range</span>
              <p className="text-sm text-green-600 font-mono mt-1">{compound.visibleRange}</p>
            </div>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed italic">
              "{compound.significance}"
            </p>
            
            <div className="pt-4 border-t border-gray-50 dark:border-gray-800">
               <span className="text-xs font-bold text-gray-400 uppercase">Quality Thresholds (%)</span>
               <div className="flex justify-between mt-2 text-xs">
                  <span className="text-red-500 font-bold">Low: {compound.thresholds.low}</span>
                  <span className="text-yellow-500 font-bold">Med: {compound.thresholds.medium}</span>
                  <span className="text-green-500 font-bold">High: {compound.thresholds.high}</span>
               </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
