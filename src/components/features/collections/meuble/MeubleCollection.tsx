import { useState, ReactElement, useEffect } from "react";
import Image from "next/image";
import { client } from "@/sanity/client";
import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";

const builder = imageUrlBuilder(client);

function urlFor(source: { asset: { _id: string; url: string } }) {
  return builder.image(source);
}

type MeubleCollectionProps = {
  className?: string;
  nameClassName?: string;
  innerDivClassName?: string;
  imageClassName?: string;
  showInnerText?: boolean;
  svgElement?: ReactElement;
  priceClassName?: string;
  slug?: string;
};

export default function MeubleCollection({
  className = "",
  nameClassName = "",
  innerDivClassName = "",
  imageClassName = "",
  showInnerText = true,
  svgElement,
  priceClassName = "",
  slug,
}: MeubleCollectionProps) {
  const [meubles, setMeubles] = useState<SanityDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleTextIds, setVisibleTextIds] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    const fetchMeubles = async () => {
      const query = `*[_type == "coteMeuble" && defined(slug.current)]{
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

      const sortedMeubles = [...result].sort((a, b) => {
        const positionA = Number(a.position) || Infinity;
        const positionB = Number(b.position) || Infinity;
        return positionB - positionA;
      });
      setMeubles(sortedMeubles);
      setLoading(false);
    };

    fetchMeubles();
  }, []);

  const toggleTextVisibility = (id: string) =>
    setVisibleTextIds((prevState) => ({ ...prevState, [id]: !prevState[id] }));

  return (
    <div className={className}>
      {meubles.map((meuble) => (
        <div key={meuble._id} className="collection-item relative">
          {svgElement && (
            <div
              className="absolute top-2 right-2 z-50 block md:hidden p-2 transition-colors"
              onClick={() => toggleTextVisibility(meuble._id)}
            >
              {svgElement}
            </div>
          )}
          <div className="relative group aspect-[3/4]">
            {meuble.image && (
              <Image
                src={meuble.image.asset.url}
                alt={meuble.image.alt || meuble.title}
                fill
                className={`${imageClassName} object-cover rounded-lg`}
                priority
              />
            )}
            <div
              className={`${innerDivClassName} ${
                visibleTextIds[meuble._id]
                  ? "opacity-100 md:opacity-0"
                  : "opacity-0"
              } md:group-hover:opacity-100 transition-opacity`}
            >
              {showInnerText && meuble.bodyOnHover && (
                <div className="mx-4 [&>p]:mb-4 last:[&>p]:mb-0">
                  <PortableText value={meuble.bodyOnHover} />
                </div>
              )}
            </div>
          </div>
          <p className={nameClassName}>{meuble.title}</p>
          <p className={priceClassName}>
            {!meuble.price ||
            Number(meuble.price) === 0 ||
            meuble.price === "0" ? (
              <i>NON DISPONIBLE</i>
            ) : (
              `${meuble.price}€`
            )}
          </p>
        </div>
      ))}
    </div>
  );
}
