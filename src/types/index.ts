export type QualityCategory = "Good" | "Medium" | "Poor";

export interface SpectralReading {
  a450: number; // Pigment and flavonoid-related absorption
  a530: number; // Polyphenol-related absorption
  a660: number; // Chlorophyll absorption
}

export interface QualityResult {
  category: QualityCategory;
  confidence: number; // Mock confidence for the simulation
  description: string;
}

export interface BioactiveCompoundInfo {
  name: string;
  uvRange: string;
  visibleRange: string;
  significance: string;
  thresholds: {
    low: string;
    medium: string;
    high: string;
  };
}

export interface SpectralComparison {
  reading: SpectralReading;
  baseline: SpectralReading;
  category: QualityCategory;
}
