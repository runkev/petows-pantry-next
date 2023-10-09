import { getRecipe } from "@/sanity/sanity-utils";
import { PortableText } from '@portabletext/react';
import Image from "next/image"

type Props = {
  params: { recipe: string }
}

export default async function Recipe({ params }: Props) {
  const slug = params.recipe;
  const recipe = await getRecipe(slug);

  return <div>
    <header className="">
      <h1 className="">{recipe.name}</h1>
    </header>

    <div className="">
      <PortableText value={recipe.content} />
    </div>

    <Image src={recipe.image} alt={recipe.name} width={1920} height={1080} className="" />
  </div>
} 