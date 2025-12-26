import CollectionGridSkeleton from "@/components/common/reusable-ui/skeletons/CollectionGridSkeleton";
import { VARIANT_STYLES } from "@/components/features/siege/constants/siegeConstants";

export function SiegeListSkeleton() {
  return (
    <CollectionGridSkeleton
      containerClassName={VARIANT_STYLES.grid.container}
      showPrice={true}
    />
  );
}
