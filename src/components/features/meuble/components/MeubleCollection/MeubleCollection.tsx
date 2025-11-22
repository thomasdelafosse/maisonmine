"use client";

import { useState } from "react";
import { MeubleItem } from "./MeubleItem";
import { MeubleCollectionProps } from "@/components/features/meuble/types/meuble-types";
import { InfoIcon } from "./Components/InfoIcon";

export default function MeubleCollection({
  meubles,
  className,
  nameClassName,
  innerDivClassName,
  imageClassName,
  showInnerText = true,
  svgElement,
  priceClassName,
}: MeubleCollectionProps) {
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
          svgElement={svgElement || <InfoIcon />}
          priceClassName={priceClassName}
        />
      ))}
    </div>
  );
}
