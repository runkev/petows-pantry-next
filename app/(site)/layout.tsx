import '../globals.css'
import Link from "next/link"
import { getPages } from '@/sanity/sanity-utils';
import React, { useEffect, useState } from 'react';

export const metadata = {
  title: "Petow's Pantry",
  description: 'Generated by Next + Sanity',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pages = await getPages();

  return (
  //#region Navbar
  <nav className="bg-cream py-4 font-hk-grotesk uppercase font-bold mx-auto">
    <div className="mx-auto flex justify-between rounded-lg">
      <Link
        href={"/"}
        className=" text-gray-800 hover:drop-shadow-2xl"
      >
        {/* <img
          src={chef_icon}
          alt="home"
          className="h-6 w-5 mr-2 ml-4"
        /> */}
      </Link>

      {/* Nav Links */}
      <div className="flex items-center ml-0 mr-4 space-x-4">
        <Link
          href={"/recipes"}
          className="text-gray-800 hover:text-cookie hover:drop-shadow-2xl rounded-md"
        >
          Recipes
        </Link>
        <Link
          href={"/about"}
          className="text-gray-800 hover:text-cookie hover:drop-shadow-2xl rounded-md"
        >
          About
        </Link>
      </div>
    </div>
  </nav>
  //#endregion
  
  
  
  )
}