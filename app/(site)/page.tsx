import { getRecipes } from "@/sanity/sanity-utils"
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const recipes = await getRecipes();

  return (
    <div>
      <h1 className="text-7xl font-extrabold">Hello I&apos;m
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent"> Kapehe!</span>
      </h1>
      <p className="mt-3 text-xl text-gray-600">Aloha everyone! Check out my recipes!</p>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My recipes</h2>

      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">{recipes.map((recipe) => (
        <Link href={`/recipes/${recipe.slug}`} key={recipe._id} className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition">
          {recipe.image && (
            <Image
              src={recipe.image}
              alt={recipe.name}
              width={750}
              height={300}
              className="object-cover rounded-lg border border-gray-500"
            />
          )}
          <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            {recipe.name}
          </div>
        </Link>
      ))}
      </div>
    </div>
  )

}