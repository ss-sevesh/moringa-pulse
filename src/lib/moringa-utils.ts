import { QualityCategory, SpectralReading, QualityResult, BioactiveCompoundInfo } from "@/types";

// Reference data from moringa.docx.pdf
export const REFERENCE_SPECTRAL_DATA: Record<QualityCategory, SpectralReading> = {
  Good: { a450: 0.72, a530: 0.65, a660: 0.81 },
  Medium: { a450: 0.40, a530: 0.35, a660: 0.50 },
  Poor: { a450: 0.20, a530: 0.18, a660: 0.25 },
};

export const BIOACTIVE_COMPOUNDS: BioactiveCompoundInfo[] = [
  {
    name: "Chlorophyll",
    uvRange: "-",
    visibleRange: "430-435nm & 660-665nm",
    significance: "Indicates freshness of the moringa powder.",
    thresholds: { low: "<1.5%", medium: "1.5-2.5%", high: ">2.5%" },
  },
  {
    name: "Flavonoids",
    uvRange: "300-380nm",
    visibleRange: "410-420nm",
    significance: "Influence absorption in near UV and blue regions (400–450 nm).",
    thresholds: { low: "<0.7%", medium: "0.7-1.2%", high: ">1.2%" },
  },
  {
    name: "Polyphenols",
    uvRange: "250-280nm",
    visibleRange: "760-765nm (also 510-540nm)",
    significance: "Indicate antioxidant strength and health potency.",
    thresholds: { low: "<2%", medium: "2-4%", high: ">4%" },
  },
];

/**
 * Classifies Moringa quality using a closest-match (Euclidean distance) algorithm.
 * This simulates the "Machine Learning" pattern recognition requested in the research.
 */
export function classifyMoringaQuality(input: SpectralReading): QualityResult {
  let minDistance = Infinity;
  let category: QualityCategory = "Poor";

  Object.entries(REFERENCE_SPECTRAL_DATA).forEach(([cat, baseline]) => {
    // Euclidean distance calculation: sqrt((x1-x2)^2 + (y1-y2)^2 + (z1-z2)^2)
    const distance = Math.sqrt(
      Math.pow(input.a450 - baseline.a450, 2) +
      Math.pow(input.a530 - baseline.a530, 2) +
      Math.pow(input.a660 - baseline.a660, 2)
    );

    if (distance < minDistance) {
      minDistance = distance;
      category = cat as QualityCategory;
    }
  });

  // Simple confidence mapping based on distance
  const maxPossibleDist = 1.5; // Arbitrary normalization factor
  const confidence = Math.max(0, Math.min(100, (1 - minDistance / maxPossibleDist) * 100));

  const descriptions: Record<QualityCategory, string> = {
    Good: "Excellent bioactive concentration. High levels of chlorophyll and polyphenols detected.",
    Medium: "Standard quality. Suitable for common consumption but lacking peak antioxidant potency.",
    Poor: "Low spectral signature. Likely degraded or poorly processed powder.",
  };

  return {
    category,
    confidence: Math.round(confidence),
    description: descriptions[category],
  };
}
