// Nutritional data per 100g of fresh Moringa leaves (approximate)
export interface NutritionalData {
  vitaminA_mg: number; // Beta-carotene
  vitaminC_mg: number;
  iron_mg: number;
  calcium_mg: number;
  protein_g: number;
  potassium_mg: number;
}

export interface SustainabilityMetrics {
  co2Sequestration_kgPerYear: number; // per mature tree
  waterUsage_litersPerKg: number;
  yieldPerAcre_kg: number;
}

export interface ComparisonMetric {
  moringaValue: number;
  standardValue: number;
  standardName: string;
  unit: string;
  ratio: number;
}
