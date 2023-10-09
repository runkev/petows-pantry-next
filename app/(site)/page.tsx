import { getRecipes } from "@/sanity/sanity-utils"
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const recipes = await getRecipes();

  return (
    <div>
      <h1 className="">Hello I&apos;m
        <span className=""> Kapehe!</span>
      </h1>
      <p className="">Aloha everyone! Check out my recipes!</p>
      <h2 className="">My recipes</h2>

      <div className="">
        {recipes.map((recipe) => (
        <Link href={`/recipes/${recipe.slug}`} key={recipe._id} className="">
          {recipe.image && (
            <Image
              src={recipe.image}
              alt={recipe.name}
              width={750}
              height={300}
              className=""
            />
          )}
          <div className="">
            {recipe.name}
          </div>
        </Link>
      ))}
      </div>
    </div>
  )

}