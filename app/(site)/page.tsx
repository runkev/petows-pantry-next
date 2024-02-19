"use client"

import Banner from "@/components/banner";
import { getTopRecipes } from "@/sanity/sanity-utils"
import { TopRecipe } from '@/types/TopRecipe';
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { FaInstagram } from 'react-icons/fa';

export default function Home() {
  const [topRecipes, setTopRecipes] = useState<TopRecipe[]>([]);

  useEffect(() => {
    async function fetchTopRecipes() {
      const topRecipes = await getTopRecipes();
      setTopRecipes(topRecipes);
    }
    fetchTopRecipes();
  }, []);

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
        {topRecipes.map((toprecipe) => (
          <div key={toprecipe._id} className='hover:scale-105'>
            <Link href={`/recipes/${toprecipe.recipe.slug}`} >
              <div className="h-64 w-80 overflow-hidden drop-shadow-2xl">
                <Image
                  src={toprecipe.recipe.image}
                  alt='Recipe'
                  width={80}
                  height={64}
                  className="w-full h-full object-cover"
                  unoptimized={true}
                  priority={true}
                />
              </div>
              <h1 className="text-center font-bold uppercase">{toprecipe.recipe.name}</h1>
            </Link>
          </div>
        ))}
      </div>
      
    </div>
  )

}