import Link from "next/link";
import { useState, ReactElement, useEffect } from "react";
import DOMPurify from "dompurify";
import Image from "next/image";
import { client } from "@/sanity/client";
import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function urlFor(source: any) {
  return builder.image(source)
}

type MinedideesCollectionProps = {
  className?: string;
  nameClassName?: string;
  innerDivClassName?: string;
  imageClassName?: string;
  showInnerText?: boolean;
  svgElement?: ReactElement;
  priceClassName?: string;
  slug: string;
};

export default function MinedideesCollection({
  className = "",
  nameClassName = "",
  innerDivClassName = "",
  imageClassName = "",
  showInnerText = true,
  svgElement,
  priceClassName = "",
  slug,
}: MinedideesCollectionProps) {
  const [minedidees, setMinedidees] = useState<SanityDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleTextIds, setVisibleTextIds] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    const fetchMinedidees = async () => {
      const query = `*[_type == "minedidees" && defined(slug.current)] {
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
        bodyOnHover[],
        body[],
        position
      }`;

      const result = await client.fetch<SanityDocument[]>(query);
      console.log('Fetched minedidees:', result); // Debug log
      
      const sortedMinedidees = [...result].sort((a, b) => {
        const positionA = Number(a.position) || Infinity;
        const positionB = Number(b.position) || Infinity;
        return positionB - positionA;  
      });
      setMinedidees(sortedMinedidees);
      setLoading(false);
    };

    fetchMinedidees();
  }, []);

  const toggleTextVisibility = (id: string) =>
    setVisibleTextIds((prevState) => ({ ...prevState, [id]: !prevState[id] }));

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className={className}>
      {minedidees.map((minedidee) => (
        <div key={minedidee._id} className="collection-item relative cursor-pointer">
          {svgElement && (
            <div
              className="absolute top-0 right-0 m-2 z-50 block md:hidden"
              onClick={() => toggleTextVisibility(minedidee._id)}
            >
              {svgElement}
            </div>
          )}
          <Link href={`/minedideesdetails/${minedidee.slug.current}`}>
            <div className="relative group">
              {minedidee.image && (
                <Image
                  src={minedidee.image.asset.url}
                  alt={minedidee.image.alt || minedidee.title}
                  width={500}
                  height={500}
                  className={`${imageClassName} -z-10`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              )}
              <div
                className={`${innerDivClassName} ${
                  visibleTextIds[minedidee._id] ? "opacity-100" : "opacity-0"
                } transition-opacity`}
              >
                {showInnerText && minedidee.bodyOnHover && (
                  <div className="mx-4 [&>p]:mb-4 last:[&>p]:mb-0">
                    <PortableText value={minedidee.bodyOnHover} />
                  </div>
                )}
              </div>
            </div>
            <p className={nameClassName}>{minedidee.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
