import Banner from "@/components/banner";
import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

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
    </div>
  )
}
