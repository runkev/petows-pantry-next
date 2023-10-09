import '../globals.css'
import Link from "next/link"
import { getPages } from '@/sanity/sanity-utils';
import React, { useEffect, useState } from 'react';
// import { FiHome } from 'react-icons/fi';


export const metadata = {
  title: 'Petow@apos;s Pantry',
  description: 'Generated by Next + Sanity',
}

// const [isMobile, setIsMobile] = useState(false);
// const [isOpen, setIsOpen] = useState(false);

// useEffect(() => {
//   const checkScreenWidth = () => {
//     setIsMobile(window.innerWidth <= 768);
//   };

//   window.addEventListener('resize', checkScreenWidth);
//   checkScreenWidth();

//   return () => {
//     window.removeEventListener('resize', checkScreenWidth);
//   };
// }, []);





export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pages = await getPages();

  return (
    // <html lang="en">
    //   <body className="max-w-3xl mx-auto py-10">
    //     <header className="flex items-center justify-between">
    //       <Link href="/" className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold">KP</Link>
    //       <div className="flex items-center gap-5 text-sm text-gray-600">
    //         {pages.map((page) => (
    //           <Link key={page._id} href={`/${page.slug}`} className="hover:underline">{page.title}</Link>
    //         ))}

    //       </div>

    //     </header>
    //     <main className="py-20">{children}</main>
    //   </body>
    // </html>

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