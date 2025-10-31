"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { PortableText } from "next-sanity";
import { MinedideesCollectionType } from "@/components/features/minedidees/types/mineDideesType";
import LoadingSpinner from "@/components/common/reusable-ui/loaders/LoadingSpinner";
import { useMinedideesCollection } from "@/components/features/minedidees/hooks/useMinedideesCollection";

export default function MinedideesCollection({
  className = "",
  nameClassName = "",
  innerDivClassName = "",
  imageClassName = "",
  showInnerText = true,
  svgElement,
}: MinedideesCollectionType) {
  const { minedidees, loading, error } = useMinedideesCollection();
  const [visibleTextIds, setVisibleTextIds] = useState<Record<string, boolean>>(
    {}
  );

  const toggleTextVisibility = (id: string) =>
    setVisibleTextIds((prevState) => ({ ...prevState, [id]: !prevState[id] }));

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={className}>
      {minedidees.map((minedidee) => (
        <div
          key={minedidee._id}
          className="collection-item relative cursor-pointer"
        >
          {svgElement && (
            <div
              className="absolute top-2 right-2 z-50 block md:hidden p-2 transition-colors"
              onClick={() => toggleTextVisibility(minedidee._id)}
            >
              {svgElement}
            </div>
          )}
          <Link href={`/uneminedidees/${minedidee.slug.current}`}>
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
                  visibleTextIds[minedidee._id]
                    ? "opacity-100 md:opacity-0"
                    : "opacity-0"
                } md:group-hover:opacity-100 transition-opacity`}
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
