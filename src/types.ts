export interface ProblemCard {
  id: string;
  title: string;
  pain: string;
  outcome: string;
  iconName: string;
  impact: string;
}

export interface EcosystemNode {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface CaseStudy {
  id: string;
  hotelName: string;
  location: string; // City
  country: string; // State / Country in GCC
  category: string; // e.g., "منتجع فاخر 5 نجوم"
  stars: number;
  image: string;
  challenge: string; // التحدي
  solution: string; // الحل الرقمي
  implementation: string; // تفاصيل التنفيذ
  results: string; // النتائج التشغيلية والمالية
  quote: string;
  author: string;
  role: string;
  metrics: {
    label: string;
    value: string;
    before: string;
    after: string;
  }[];
}

export interface Feature {
  title: string;
  description: string;
  iconName: string;
}

export interface Package {
  name: string;
  tagline: string;
  badge?: string;
  features: string[];
  ctaText: string;
  outcome: string;
  isPopular?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "development" | "marketing" | "integration" | "consulting";
}
