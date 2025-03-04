import { useState } from "react";
import LoadingSpinner from "@/components/common/reusable-ui/loaders/LoadingSpinner";
import { SiegeItem } from "./SiegeItem";
import { SiegeCollectionProps } from "@/components/features/siege/types/siegeType";
import { VARIANT_STYLES } from "@/components/features/siege/constants/siegeConstants";
import { useSiegeCollection } from "@/components/features/siege/hooks/useSiegeCollection";

export default function SiegeCollection({
  variant = "grid",
  className = "",
}: SiegeCollectionProps) {
  const { sieges, loading } = useSiegeCollection();
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

  const baseClassName = VARIANT_STYLES[variant].container;
  const finalClassName = className
    ? `${baseClassName} ${className}`
    : baseClassName;

  return (
    <div className={finalClassName}>
      {sieges.map((siege) => (
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
