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

type SiegeCollectionProps = {
  className?: string;
  nameClassName?: string;
  innerDivClassName?: string;
  imageClassName?: string;
  showInnerText?: boolean;
  svgElement?: ReactElement;
  priceClassName?: string;
  slug: string;
};

export default function SiegeCollection({
  className = "",
  nameClassName = "",
  innerDivClassName = "",
  imageClassName = "",
  showInnerText = true,
  svgElement,
  priceClassName = "",
  slug,
}: SiegeCollectionProps) {
  const [sieges, setSieges] = useState<SanityDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleTextIds, setVisibleTextIds] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    const fetchSieges = async () => {
      const query = `*[_type == "coteSiege" && defined(slug.current)]{
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
        bodyOnHover,
        position
      }`;

      const result = await client.fetch<SanityDocument[]>(query);
      
      const sortedSieges = [...result].sort((a, b) => {
        const positionA = Number(a.position) || Infinity;
        const positionB = Number(b.position) || Infinity;
        return positionB - positionA;  
      });
      setSieges(sortedSieges);
      setLoading(false);
    };

    fetchSieges();
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
      {sieges.map((siege) => (
        <div key={siege._id} className="collection-item relative cursor-pointer">
          {svgElement && (
            <div
              className="absolute top-0 right-0 m-2 z-50 block md:hidden"
              onClick={() => toggleTextVisibility(siege._id)}
            >
              {svgElement}
            </div>
          )}
          <Link href={`/siegedetails/${siege.slug.current}`}>
            <div className="relative group">
              {siege.image && (
                <Image
                  src={siege.image.asset.url}
                  alt={siege.image.alt || siege.title}
                  width={500}
                  height={500}
                  className={`${imageClassName} -z-10`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              )}
              <div
                className={`${innerDivClassName} ${
                  visibleTextIds[siege._id] ? "opacity-100" : "opacity-0"
                } transition-opacity`}
              >
                {showInnerText && (
                  <div className="mx-4">
                    <PortableText value={siege.bodyOnHover} />
                  </div>
                )}
              </div>
            </div>
            <p className={nameClassName}>{siege.title}</p>
            <p className={priceClassName}>
              {!siege.price || siege.price === 0 || siege.price === "0" ? (
                <i>NON DISPONIBLE</i>
              ) : (
                `${siege.price}€`
              )}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}
