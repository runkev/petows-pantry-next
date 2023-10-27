"use client"

import recipe1 from '../../assets/recipe1.jpg'
import recipe2 from '../../assets/recipe2.jpg'
import recipe3 from '../../assets/recipe3.jpg'
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
        {topRecipes.map((recipe) => (
          <div key={recipe._id} className='hover:scale-105'>
            <Link href={`/recipes/${recipe.recipe.slug}`} >
              <div className="h-64 w-80 overflow-hidden drop-shadow-2xl">
                <Image
                  src={recipe.recipe.image}
                  alt='Recipe'
                  width={80}
                  height={64}
                  className="w-full h-full object-cover"
                  unoptimized={true}
                  priority={true}
                />
              </div>
            </Link>
          </div>
        ))}
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