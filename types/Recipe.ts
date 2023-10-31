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
  content: PortableTextBlock[];
}