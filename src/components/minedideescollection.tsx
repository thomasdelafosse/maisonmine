import Link from "next/link";
import { useCollection } from "@/hooks/use-collection";
import { CollectionType } from "@/types/collectionType";
import { useState, ReactElement } from "react";
import DOMPurify from "dompurify";
import Image from "next/image";

type MinedideesCollectionProps = {
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

export default function MinedideesCollection({
  className,
  innerDivClassName,
  showInnerText = true,
  imageClassName,
  nameClassName,
  svgElement,
  priceClassName,
  collectionId,
}: MinedideesCollectionProps) {
  const collection = useCollection(
    collectionId || process.env.NEXT_PUBLIC_MINE_DIDEES_COLLECTION_ID || ""
  );
  const [visibleTextIds, setVisibleTextIds] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleTextVisibility = (id: string) =>
    setVisibleTextIds((prevState) => ({ ...prevState, [id]: !prevState[id] }));

  const sortedCollection = [...(collection as CollectionType[])].sort(
    (a, b) => {
      const rankingA = Number(a.fieldData.ranking) || Infinity;
      const rankingB = Number(b.fieldData.ranking) || Infinity;
      return rankingA - rankingB;
    }
  );

  return (
    <div className={className}>
      {sortedCollection.map((item: CollectionType) => (
        <div key={item.id} className="collection-item relative cursor-pointer">
          {svgElement && (
            <div
              className="absolute top-0 right-0 m-2 z-50 block md:hidden"
              onClick={() => toggleTextVisibility(item.id)}
            >
              {svgElement}
            </div>
          )}
          <Link href={`/minedideesdetails/${item?.fieldData?.slug}`}>
            <div className="relative group">
              {item.fieldData["thumbnail-image"] && (
                <Image
                  src={item.fieldData["thumbnail-image"].url}
                  alt={item.fieldData["thumbnail-image"].alt || "Image"}
                  width={1000}
                  height={1000}
                  className={` ${imageClassName} object-cover `}
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
                      __html: DOMPurify.sanitize(item.fieldData["texte"] || ""),
                    }}
                  />
                )}
              </div>
            </div>
            <p className={nameClassName}>{item.fieldData.name}</p>
            {item.fieldData.price && (
              <p className={priceClassName}>{item.fieldData.price}€</p>
            )}
          </Link>
        </div>
      ))}
    </div>
  );
}
