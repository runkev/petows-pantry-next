import recipe1 from '../../assets/recipe1.jpg'
import recipe2 from '../../assets/recipe2.jpg'
import recipe3 from '../../assets/recipe3.jpg'
import Banner from "@/components/banner";
import { getRecipes } from "@/sanity/sanity-utils"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';

export default async function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  return (
    <div className="bg-cream min-h-screen">
      <Banner 
        title="Welcome to Petow's Pantry"
        subtitle="Simple, easy recipes (without the mile-long life stories...)"
      />

      <div className="text-center text-2xl font-bold my-6 ">
        <h1>MOST POPULAR</h1>
      </div>

      
      <div className="flex flex-wrap justify-center gap-4 mt-2">
          <Link href={`/recipes/${recipe.slug}`}>
            <Image              
              src={recipe1}
              alt='Recipe 1'
              className=''
            />          
          </Link>
        </div>

        <a
          href="https://www.instagram.com/kevinpetow"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-cookie flex justify-center my-8"
        >
          <FaInstagram className="inline-block w-6 h-6 mr-1" />
        </a>
    </div>
  )

}