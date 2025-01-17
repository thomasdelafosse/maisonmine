import Link from "next/link";
import { useCollection } from "@/hooks/use-collection";
import { CollectionType } from "@/types/collectionType";
import { useState, ReactElement } from "react";
import DOMPurify from "dompurify";
import Image from "next/image";

type SiegeCollectionProps = {
  className: string;
  innerDivClassName: string;
  showInnerText: boolean;
  imageClassName: string;
  nameClassName: string;
  collectionId: string;
  slug?: string;
  svgElement?: ReactElement;
  priceClassName?: string;
};

export default function SiegeCollection({
  className,
  innerDivClassName,
  showInnerText = true,
  imageClassName,
  nameClassName,
  svgElement,
  priceClassName,
}: SiegeCollectionProps) {
  const collection = useCollection(
    process.env.NEXT_PUBLIC_SIEGE_COLLECTION_ID || ""
  );
  const [visibleTextIds, setVisibleTextIds] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleTextVisibility = (id: string) =>
    setVisibleTextIds((prevState) => ({ ...prevState, [id]: !prevState[id] }));

  return (
    <div className={className}>
      {collection.map((item: CollectionType) => (
        <div key={item.id} className="collection-item relative cursor-pointer">
          {svgElement && (
            <div
              className="absolute top-0 right-0 m-2 z-50 block md:hidden"
              onClick={() => toggleTextVisibility(item.id)}
            >
              {svgElement}
            </div>
          )}
          <Link href={`/siegedetails/${item?.fieldData?.slug}`}>
            <div className="relative group">
              {item.fieldData["thumbnail-image"] && (
                <Image
                  src={item.fieldData["thumbnail-image"].url}
                  alt={item.fieldData["thumbnail-image"].alt || "Image"}
                  width={500}
                  height={500}
                  className={` ${imageClassName}  -z-10`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              )}
              <div
                className={`${innerDivClassName} ${
                  visibleTextIds[item.id] ? "opacity-100" : "opacity-0"
                } transition-opacity`}
              >
                {showInnerText && (
                  <div
                    className="mx-4"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        item.fieldData["text-on-hover"] || ""
                      ),
                    }}
                  />
                )}
              </div>
            </div>
            <p className={nameClassName}>{item.fieldData.name}</p>
            {item.fieldData.price && (
              <p className={priceClassName}>
                {Number(item.fieldData.price) === 1 ? (
                  <i>NON DISPONIBLE</i>
                ) : (
                  `${item.fieldData.price}€`
                )}
              </p>
            )}
          </Link>
        </div>
      ))}
    </div>
  );
}
