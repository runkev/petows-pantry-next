import { Recipe } from "@/types/Recipe";
import { Page } from "@/types/Page";
import { TopRecipe } from "@/types/TopRecipe";
import { createClient, groq } from "next-sanity";
import clientConfig from './config/client.config'

export async function getRecipes(): Promise<Recipe[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "recipe"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      content
    }`
  )
}

export async function getRecipe(slug: string): Promise<Recipe> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "recipe" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      preptime,
      cooktime,
      totaltime,
      "slug": slug.current,
      "image": image.asset->url,
      content,
      ingredients[]{
        name,
        quantityEnglish,
        quantityMetric
      }
    }`,
    { slug }
  )
}

export async function getTopRecipes(): Promise<TopRecipe[]>{
  return createClient(clientConfig).fetch(
    groq`*[_type == "toprecipe"]{
      _id,
      "recipe": recipe->{
        _id,
        name,
        "slug": slug.current,
        "image": image.asset->url,
      }
    }`
  )
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`
  )
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    { slug }
  )
}
