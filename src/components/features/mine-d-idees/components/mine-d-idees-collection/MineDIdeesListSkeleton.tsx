import CollectionGridSkeleton from "@/components/common/reusable-ui/skeletons/CollectionGridSkeleton";
import { VARIANT_STYLES } from "@/components/features/mine-d-idees/constants/mine-d-idees-constants";

export function MineDIdeesListSkeleton() {
  return (
    <CollectionGridSkeleton
      containerClassName={VARIANT_STYLES.grid.container}
      showPrice={false}
    />
  );
}
