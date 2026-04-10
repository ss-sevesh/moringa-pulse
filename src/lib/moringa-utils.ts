import { NutritionalData, ComparisonMetric, SustainabilityMetrics } from "@/types";

// Source: Food and Agriculture Organization (FAO) and various studies
export const MORINGA_NUTRITIONAL_DATA: NutritionalData = {
  protein_g: 9.4,
  vitaminA_mg: 1.6, // in RAE (approximate conversion)
  vitaminC_mg: 51.7,
  iron_mg: 4.0,
  calcium_mg: 185.0,
  potassium_mg: 337.0,
};

// Benchmarks for comparison (per 100g of the specific food)
export const NUTRITIONAL_BENCHMARKS = {
  carrot_vitaminA_mg: 0.8,
  orange_vitaminC_mg: 53.2,
  spinach_iron_mg: 2.7,
  milk_calcium_mg: 125.0,
  yogurt_protein_g: 3.5,
  banana_potassium_mg: 358.0,
};

export const SUSTAINABILITY_CONSTANTS: SustainabilityMetrics = {
  co2Sequestration_kgPerYear: 30.0, // A mature Moringa tree can absorb up to 30kg/year
  waterUsage_litersPerKg: 1500.0, // Extremely efficient vs. beef (~15,000L) or cotton (~10,000L)
  yieldPerAcre_kg: 5000.0,
};

/**
 * Calculates nutritional comparison ratios vs. common health foods.
 */
export function calculateNutritionalComparisons(): ComparisonMetric[] {
  return [
    {
      moringaValue: MORINGA_NUTRITIONAL_DATA.vitaminA_mg,
      standardValue: NUTRITIONAL_BENCHMARKS.carrot_vitaminA_mg,
      standardName: "Carrots",
      unit: "mg (Vit A)",
      ratio: MORINGA_NUTRITIONAL_DATA.vitaminA_mg / NUTRITIONAL_BENCHMARKS.carrot_vitaminA_mg,
    },
    {
      moringaValue: MORINGA_NUTRITIONAL_DATA.iron_mg,
      standardValue: NUTRITIONAL_BENCHMARKS.spinach_iron_mg,
      standardName: "Spinach",
      unit: "mg (Iron)",
      ratio: MORINGA_NUTRITIONAL_DATA.iron_mg / NUTRITIONAL_BENCHMARKS.spinach_iron_mg,
    },
    {
      moringaValue: MORINGA_NUTRITIONAL_DATA.calcium_mg,
      standardValue: NUTRITIONAL_BENCHMARKS.milk_calcium_mg,
      standardName: "Milk",
      unit: "mg (Calcium)",
      ratio: MORINGA_NUTRITIONAL_DATA.calcium_mg / NUTRITIONAL_BENCHMARKS.milk_calcium_mg,
    },
    {
      moringaValue: MORINGA_NUTRITIONAL_DATA.protein_g,
      standardValue: NUTRITIONAL_BENCHMARKS.yogurt_protein_g,
      standardName: "Yogurt",
      unit: "g (Protein)",
      ratio: MORINGA_NUTRITIONAL_DATA.protein_g / NUTRITIONAL_BENCHMARKS.yogurt_protein_g,
    },
  ];
}

/**
 * Estimates environmental impact of a Moringa farm.
 */
export function estimateSustainabilityImpact(treeCount: number) {
  return {
    annualCO2Sequestration_kg: treeCount * SUSTAINABILITY_CONSTANTS.co2Sequestration_kgPerYear,
    equivalentCarsOffRoadPerYear: (treeCount * SUSTAINABILITY_CONSTANTS.co2Sequestration_kgPerYear) / 4600.0, // Avg car: 4.6 metric tons/year
    approximateWaterSaved_vs_Beef_liters: treeCount * 5000 * (15000 - 1500), // Very rough estimation
  };
}
