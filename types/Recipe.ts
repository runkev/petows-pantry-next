import { PortableTextBlock } from "sanity";

export type Recipe = {
  _id: string;
  createdAt: Date;
  name: string;
  slug: string;
  image: string;
  content: PortableTextBlock[];
}