import Banner from "@/components/banner";
import { getRecipe } from "@/sanity/sanity-utils";
import { PortableText } from '@portabletext/react';
import Image from "next/image"

type Props = {
  params: { recipe: string }
}



export default async function Recipe({ params }: Props) {
  const slug = params.recipe;
  const recipe = await getRecipe(slug);

  return (
    <div>
      <Banner 
          title={recipe.name}
          prepTime={recipe.preptime}
          bakeTime={recipe.cooktime}
          totalTime={recipe.totaltime}
      />

      <div className="">
        <PortableText value={recipe.content} />
      </div>

      <Image src={recipe.image} alt={recipe.name} width={1920} height={1080} className="" />
    </div>
  )
} 