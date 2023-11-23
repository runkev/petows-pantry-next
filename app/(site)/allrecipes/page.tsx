"use client"

import Banner from "@/components/banner";
import { getRecipes } from "@/sanity/sanity-utils";
import { Recipe } from "@/types/Recipe";
import Image from "next/image"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Recipes() {
    const [searchQuery, setSearchQuery] = useState("");
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    }

    useEffect(() => {
        async function fetchData() {
            const recipeContent = await getRecipes();
            setRecipes(recipeContent);
            console.log(recipeContent);
        }

        fetchData();
    }, []);

    const filteredRecipes = recipes.filter((recipe) => {
        return recipe.name.toLowerCase().includes(searchQuery.toLowerCase());
    });



    return (
        <div className="bg-cream min-h-screen min-w-full font-hk-grotesk">
            <Banner title="Recipes" />
            <div className="container mx-auto px-4 py-4 max-w-6xl">
                <div className="w-full mb-4">
                    <input
                        type="text"
                        placeholder="Search recipes"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="w-full border border-gray-300 rounded px-4 py-2"
                    />
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {filteredRecipes.map((recipe) => (
                    <div>
                        <li className="mb-4 flex justify-center hover:scale-105">
                            <Link href={`/recipes/${recipe.slug}`}>
                                <div className="bg-cookie border border-gray-300 rounded-lg overflow-hidden w-60 h-60 drop-shadow-lg flex flex-col">
                                <Image src={recipe.image} alt={recipe.name} width={1920} height={1080} className="object-cover h-5/6" />
                                <div className="flex-grow flex items-center justify-center">
                                    <h2 className="text-md font-semibold text-center whitespace-nowrap overflow-hidden overflow-ellipsis">
                                    {recipe.name}
                                    </h2>
                                </div>
                                </div>
                            </Link>
                        </li>
                    </div>
                ))}
                </ul>
            </div>
        </div>
    )
}