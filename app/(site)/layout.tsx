import '../globals.css'
import Link from "next/link"
import { getPages } from '@/sanity/sanity-utils';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Petow's Pantry",
  description: 'Generated by Next + Sanity',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
  <html lang="en">
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-D5LVJY5PQY"></Script>
    <Script id="gtag-init" strategy="afterInteractive">
      {`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-D5LVJY5PQY');`}
    </Script>
    <body className='font-hk-grotesk'>
      <nav className="bg-cream py-4 uppercase font-bold mx-auto">
        <div className="mx-auto flex justify-between rounded-lg">
          <Link
            href="/"
            className=" text-gray-800 hover:drop-shadow-2xl"
          >
            <Image
              src={'/assets/chef_icon.png'}
              alt="home"
              className="h-6 w-5 mr-2 ml-4"
              width={24}
              height={24}
            ></Image>
          </Link>
          <Link
            href={"/"}
            className=" text-gray-800 hover:drop-shadow-2xl"
          >
          </Link>

          {/* Nav Links */}
          <div className="flex items-center ml-0 mr-4 space-x-4">
            <Link
              href={"/allrecipes"}
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
      <div>

      </div>
      <main>{children}</main>
      <Footer />
    </body>
  </html>


  
  
  
  )
}