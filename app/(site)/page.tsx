
import { getRecipes } from "@/sanity/sanity-utils"
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const recipes = await getRecipes();

  return (
    <div>
      home page
    </div>
  )

}