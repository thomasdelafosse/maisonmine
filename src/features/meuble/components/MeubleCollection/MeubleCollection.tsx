import { useState } from "react";
import LoadingSpinner from "@/components/common/reusable-ui/loaders/LoadingSpinner";
import { MeubleItem } from "./MeubleItem";
import { MeubleCollectionProps } from "../../types/meubleType";
import { useMeubleCollection } from "../../hooks/useMeubleCollection";

export default function MeubleCollection({
  className = "",
  nameClassName = "",
  innerDivClassName = "",
  imageClassName = "",
  showInnerText = true,
  svgElement,
  priceClassName = "",
}: MeubleCollectionProps) {
  const { meubles, loading } = useMeubleCollection();
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());

  const toggleVisibility = (id: string) => {
    setVisibleItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className={className}>
      {meubles.map((meuble) => (
        <MeubleItem
          key={meuble._id}
          meuble={meuble}
          isVisible={visibleItems.has(meuble._id)}
          onToggleVisibility={() => toggleVisibility(meuble._id)}
          nameClassName={nameClassName}
          innerDivClassName={innerDivClassName}
          imageClassName={imageClassName}
          showInnerText={showInnerText}
          svgElement={svgElement}
          priceClassName={priceClassName}
        />
      ))}
    </div>
  );
}
