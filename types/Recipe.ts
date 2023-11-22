import { PortableTextBlock } from "sanity";

export type Recipe = {
  _id: string;
  createdAt: Date;
  name: string;
  slug: string;
  image: string;
  cooktime: string;
  preptime: string;
  totaltime: string;
  ingredients: {
    name: string;
    quantityEnglish: string;
    quantityMetric: string;
  }[];
  contentenglish: PortableTextBlock[];
  contentmetric: PortableTextBlock[];
}