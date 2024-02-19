"use client"

import Banner from "@/components/banner";
import { getRecipe } from "@/sanity/sanity-utils";
import { PortableText } from '@portabletext/react';
import Image from "next/image"
import { useEffect, useState } from "react";
import { Recipe } from "@/types/Recipe";
import ScreenWakeLockToggle from "@/components/screenOnToggle";

type Props = {
  params: { recipe: string }
}

export default function Recipe({ params }: Props) {
  const [isMetric, setIsMetric] = useState(false)
  const [recipe, setRecipe] = useState<Recipe>()
  
  const slug = params.recipe;

  const handleUnitToggle = () => {
    setIsMetric(!isMetric);
  }

  useEffect(() => {
    async function fetchData() {
      const recipeContent = await getRecipe(slug);
      setRecipe(recipeContent);
    }

    fetchData();
  }, [slug]);

  if (!recipe) {
    return <div className="bg-cream min-h-screen min-w-full font-hk-grotesk">Loading...</div>;
  }

  return (
    <div className="bg-cream">
      <Banner 
          title={recipe.name}
          prepTime={recipe.preptime}
          bakeTime={recipe.cooktime}
          totalTime={recipe.totaltime}
      />

      <div className="mx-auto my-2 py-2 flex flex-col max-w-5xl ">
        <div className="flex flex-col md:flex-row gap-4 justify-between">

          <div className="overflow-hidden drop-shadow-2xl mx-16 md:max-w-md md:order-2 rounded-lg">
            <Image 
              src={recipe.image} 
              alt={recipe.name} 
              width={1920} 
              height={1080} 
            />
          </div>

          <div className="md:order-1 mx-2">
            <div className="">
              <h2 className="font-bold text-xl underline">INGREDIENTS</h2>
              <ScreenWakeLockToggle />
            </div>
              <div className="flex items-center mt-2">
                <p className="mr-2">Change units:</p>
                <label
                  className={`flex items-center ${
                    isMetric ? "text-green-500" : "text-blue-500"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isMetric}
                    onChange={handleUnitToggle}
                    className="hidden"
                  />
                  <span
                    className={`relative w-10 h-6 rounded-full transition-colors ease-in-out duration-200 ${
                      isMetric ? "bg-green-500" : "bg-blue-500"
                    }`}
                  >
                    <span
                      className={`inline-block w-4 h-4 transform translate-x-0.5 translate-y-0.5 rounded-full bg-white shadow ease-in-out duration-200 ${
                        isMetric ? "translate-x-5" : "translate-x-0"
                      }`}
                    ></span>
                  </span>
                  <span className="ml-2">
                    {isMetric ? "Metric" : "English"}
                  </span>
                </label>
              </div>
              <ul className="mt-2 list-disc list-inside">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="mb-1">
                    <strong>
                      {isMetric
                        ? ingredient.quantityMetric
                        : ingredient.quantityEnglish}
                    </strong>{" "}
                    {ingredient.name}
                  </li>
                ))}
              </ul>
            </div>
        </div>
        <div className="mx-2 mt-2 prose">
          <h2 className="font-bold text-xl underline">DIRECTIONS</h2>
          <PortableText value={isMetric ? recipe.contentmetric : recipe.contentenglish}/>
        </div>
      </div>

    </div>
  )
} 