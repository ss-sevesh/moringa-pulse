# MoringaPulse Labs 🧪🌿

[![CI](https://github.com/ss-sevesh/moringa-pulse/actions/workflows/ci.yml/badge.svg)](https://github.com/ss-sevesh/moringa-pulse/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**MoringaPulse Labs** is a specialized scientific application for assessing the quality of Moringa powder using **UV-Visible Spectroscopy** data and Machine Learning.

## 🔬 Scientific Context

This project implements the methodology described in the research: **"Analysing the spectral fingerprint of bioactive compounds in Moringa powder."**

Instead of measuring individual nutrients, this system evaluates the spectral signature of:
- **Chlorophyll (660nm):** Indicates freshness and photosynthetic integrity.
- **Polyphenols (530nm):** Indicates antioxidant strength.
- **Flavonoids (450nm):** Influences blue-region absorption.

## ✨ Key Features

- **Spectral Analyzer Dashboard:** Input A450, A530, and A660 absorbance values from lab data.
- **Quality Classification Engine:** Automated classification (Good, Medium, Poor) using spectral feature vectors.
- **Bioactive Compound Library:** Reference thresholds for Chlorophyll, Flavonoids, and Polyphenols.
- **Physics-First Logic:** Based on the **Beer–Lambert Law**, where absorbance is directly proportional to concentration.

## 🛠 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (Strict typing for spectral vectors)
- **Styling:** Tailwind CSS 4
- **CI/CD:** GitHub Actions

## 🚀 Getting Started

1. Clone & Install: `npm install`
2. Run Dev: `npm run dev`
3. Enter lab data in the **Quality Assessment Lab** section.

## 📊 Reference Baselines

| Quality | A450 | A530 | A660 |
| :--- | :--- | :--- | :--- |
| **Good** | 0.72 | 0.65 | 0.81 |
| **Medium** | 0.40 | 0.35 | 0.50 |
| **Poor** | 0.20 | 0.18 | 0.25 |

---

Built with scientific rigor to standardize Moringa quality assessment globally.
