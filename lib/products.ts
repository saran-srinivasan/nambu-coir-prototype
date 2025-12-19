export interface Product {
  id: string;
  name: string;
  category: "Grow Bags" | "Blocks" | "Chips" | "Fiber" | "Loose";
  description: string;
  features: string[];
  specifications: Record<string, string>;
  image: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "grow-bags",
    name: "Coco Grow Bags",
    category: "Grow Bags",
    description:
      "Compressed coir slabs in UV-treated bags. Perfect for hydroponics and greenhouses.",
    features: [
      "Excellent Aeration",
      "Ready to use",
      "UV Treated for longevity",
    ],
    specifications: {
      Material: "100% Coco Peat",
      "pH Level": "6.0 - 6.5",
      Weight: "1 KG (standard)",
      Expansion: "High volume after hydration",
    },
    image: "https://nambucoir.com/img/5_kg_Coco_block.jpg", // Placeholder
  },
  {
    id: "coco-chips-5kg",
    name: "Coco Chips (5kg Block)",
    category: "Chips",
    description:
      "Versatile substrate made from coconut husks, ideal for orchids and mixing with soil.",
    features: [
      "High vertical drainage",
      "Stable structure",
      "Promotes root growth",
    ],
    specifications: {
      Form: "Compressed 5kg Block",
      Material: "100% Coconut Husk Chips",
      Use: "Potting mix, Hydroponics",
      "EC Level": "Low (< 0.5 mS/cm washed)",
    },
    image: "https://nambucoir.com/img/5_kg_Coco_block.jpg",
  },
  {
    id: "coco-block-5kg",
    name: "5kg Coco Peat Block",
    category: "Blocks",
    description:
      "The industry standard for bulk coir applications. Expands to 75 liters of premium cocopeat.",
    features: ["High expansion ratio", "Triple washed", "Low EC"],
    specifications: {
      Weight: "5 kg +/- 0.3kg",
      Expansion: "70-75 Liters",
      pH: "5.8 - 6.8",
      EC: "Below 0.6 mS/cm",
    },
    image: "https://nambucoir.com/img/5_kg_Coco_block.jpg",
  },
  {
    id: "coco-block-650g",
    name: "650g Coco Briquette",
    category: "Blocks",
    description: "Compact bricks perfect for home gardening and retail.",
    features: ["Easy to handle", "Retail ready", "Uniform shape"],
    specifications: {
      Weight: "650 gm",
      Size: "20 x 10 x 5 cm",
      Expansion: "9-11 Liters",
      pH: "5.8 - 6.8",
    },
    image: "https://nambucoir.com/img/5_kg_Coco_block.jpg",
  },
  {
    id: "fibre-bale",
    name: "125kg Coir Fibre Bale",
    category: "Fiber",
    description:
      "Raw coir fiber bales for industrial applications like erosion control mats and mattresses.",
    features: ["High tensile strength", "Biodegradable", "Clean golden fiber"],
    specifications: {
      Weight: "100-125 kg",
      Color: "Golden / Brown",
      Impurity: "< 3%",
      Moisture: "< 15%",
    },
    image: "https://nambucoir.com/img/5_kg_Coco_block.jpg",
  },
  {
    id: "loose-bags",
    name: "Coco Peat Loose Bags",
    category: "Loose",
    description: "Ready-to-use loose coco peat in convenient bag sizes.",
    features: [
      "No rehydration needed",
      "Consistent quality",
      "Easy application",
    ],
    specifications: {
      Sizes: "2L, 5L, 50L, 70L",
      Moisture: "35-45%",
      pH: "5.8 - 6.8",
      Mix: "Customizable (with perlite/chips)",
    },
    image: "https://nambucoir.com/img/5_kg_Coco_block.jpg", // Placeholder
  },
];
