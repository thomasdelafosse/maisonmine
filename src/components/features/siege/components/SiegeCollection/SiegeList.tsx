"use client";

import { useState } from "react";
import { SiegeItem } from "./SiegeItem";
import { SiegeListProps } from "@/components/features/siege/types/siegeType";
import { VARIANT_STYLES } from "@/components/features/siege/constants/siegeConstants";

export default function SiegeList({
  items,
  variant = "grid",
  className = "",
}: SiegeListProps) {
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

  const baseClassName = VARIANT_STYLES[variant].container;
  const finalClassName = className
    ? `${baseClassName} ${className}`
    : baseClassName;

  return (
    <div className={finalClassName}>
      {items.map((siege) => (
        <SiegeItem
          key={siege._id}
          siege={siege}
          isVisible={visibleItems.has(siege._id)}
          onToggleVisibility={() => toggleVisibility(siege._id)}
          variant={variant}
        />
      ))}
    </div>
  );
}
