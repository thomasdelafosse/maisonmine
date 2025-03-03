import { useState, useEffect } from "react";
import { client } from "@/sanity/client";
import { type SanityDocument } from "next-sanity";
import { PortableText } from "@portabletext/react";
import MinedideesCollection from "@/components/features/collections/mine-idees/MineIdeesCollection";
import Link from "next/link";
import Image from "next/image";

type MineDetailsContentProps = {
  slug: string;
};

export default function MineDetailsContent({ slug }: MineDetailsContentProps) {
  const [minedidee, setMinedidee] = useState<SanityDocument | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMinedidee = async () => {
      const query = `*[_type == "minedidees" && slug.current == $slug][0]{
        _id,
        title,
        slug,
        image {
          asset->{
            _id,
            url
          },
          alt
        },
        price,
        body,
        position
      }`;

      const result = await client.fetch(query, { slug });
      setMinedidee(result);
      setLoading(false);
    };

    if (slug) {
      fetchMinedidee();
    }
  }, [slug]);

  if (loading || !minedidee) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <>
      <div className="md:flex md:mx-44">
        <div className="w-full md:w-1/3">
          {minedidee.image && (
            <div className="flex justify-center items-center relative rounded-lg h-[550px]">
              <Image
                src={minedidee.image.asset.url}
                alt={minedidee.image.alt || minedidee.title}
                fill
                className="object-contain rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}
        </div>
        <div className="w-full md:w-2/3">
          <div className="flex flex-col mt-4 mx-4 md:ml-10 md:mr-36 md:mt-10">
            <div className="md:border-l-2 md:border-gray-300 md:pl-2">
              <div className="text-xl font-medium text-center md:text-left">
                {minedidee.title}
              </div>
              <div
                style={{ fontSize: "20px", lineHeight: "24px" }}
                className="text-base mt-4 text-gray-500 [&>p]:mb-4 last:[&>p]:mb-0"
              >
                <PortableText value={minedidee.body} />
              </div>
              <div className="flex justify-center md:justify-start">
                <Link href="/contact">
                  <button className="h-fit px-2 py-2 bg-white text-gray-500 rounded-lg text-base hover:bg-gray-200 border-2 border-gray-400 mt-4">
                    DEMANDER UN DEVIS
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 border-t-2 border-gray-300 mx-20 md:my-20 md:mx-36" />
      <MinedideesCollection
        slug="Minedidees"
        className=" grid grid-cols-2 gap-4 mx-4 md:grid-cols-6 md:mx-28"
        nameClassName="font-light text-xs text-center"
        imageClassName="w-full rounded-lg"
        innerDivClassName="hidden"
        showInnerText={false}
        priceClassName="hidden"
      />
    </>
  );
}
