import { useCollection } from "@/hooks/use-collection";
import { CollectionType } from "@/types/collectionType";
import DOMPurify from "dompurify";
import { useState, ReactElement } from "react";
import Image from "next/image";

type MeubleCollectionProps = {
  className: string;
  nameClassName: string;
  innerDivClassName: string;
  imageClassName: string;
  collectionId: string;
  slug: string;
  showInnerText: boolean;
  svgElement?: ReactElement;
  priceClassName?: string;
};

export default function MeubleCollection({
  className,
  nameClassName,
  innerDivClassName,
  imageClassName,
  collectionId,
  showInnerText = true,
  svgElement,
  priceClassName,
}: MeubleCollectionProps) {
  const collection = useCollection(collectionId);
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
          {item.fieldData["floorplan"] && (
            <div className="relative group aspect-[3/4]">
              <Image
                src={item.fieldData["floorplan"].url}
                alt={item.fieldData["floorplan"].alt || "Floorplan"}
                fill
                className={`${imageClassName} object-cover rounded-lg`}
                priority
              />
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
                        item.fieldData["property-description"] || ""
                      ),
                    }}
                  />
                )}
              </div>
            </div>
          )}
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
        </div>
      ))}
    </div>
  );
}
