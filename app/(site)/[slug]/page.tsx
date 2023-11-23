import Banner from "@/components/banner";
import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { FaInstagram } from "react-icons/fa";

type Props = {
  params: { slug: string }
}

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <div className="bg-cream min-h-screen min-w-full font-hk-grotesk">
      <Banner 
          title={page.title}
      />
      <div className="prose container mx-auto px-4 py-4 max-w-5xl"><PortableText value={page.content} /></div>
      <div>
        <a
            href="https://www.instagram.com/kevinpetow"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-cookie flex justify-center my-8"
          >
            <FaInstagram className="inline-block w-6 h-6 mr-1" />
          </a>
      </div>
    </div>
  )
}
