import { VARIANT_STYLES } from "@/components/features/siege/constants/siegeConstants";

export function SiegeListSkeleton() {
  const styles = VARIANT_STYLES.grid;

  // Create an array of 6 items for the skeleton loader
  const skeletons = Array.from({ length: 6 });

  return (
    <div className={styles.container}>
      {skeletons.map((_, index) => (
        <div key={index} className="collection-item relative">
          {/* Image Skeleton */}
          <div className="aspect-[4/5] w-full rounded-lg bg-gray-200 animate-pulse" />

          {/* Title Skeleton */}
          <div className="mt-2 flex justify-center">
            <div className="h-6 w-3/4 rounded bg-gray-200 animate-pulse" />
          </div>

          {/* Price Skeleton */}
          <div className="mt-2 flex justify-center">
            <div className="h-6 w-1/4 rounded bg-gray-200 animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  );
}
