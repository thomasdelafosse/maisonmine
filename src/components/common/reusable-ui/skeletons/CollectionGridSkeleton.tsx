type CollectionGridSkeletonProps = {
  itemCount?: number;
  showPrice?: boolean;
  imageClassName?: string;
  containerClassName?: string;
};

export default function CollectionGridSkeleton({
  itemCount = 6,
  showPrice = false,
  imageClassName = "aspect-[4/5]",
  containerClassName = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 md:mx-36 mb-12",
}: CollectionGridSkeletonProps) {
  return (
    <div className={containerClassName}>
      {Array.from({ length: itemCount }).map((_, index) => (
        <div key={index} className="flex flex-col relative h-full">
          {/* Image Skeleton */}
          <div
            className={`w-full rounded-lg bg-gray-200 animate-pulse ${imageClassName}`}
          />

          {/* Title Skeleton */}
          <div className="mt-2 flex justify-center">
            <div className="h-6 w-3/4 rounded bg-gray-200 animate-pulse" />
          </div>

          {/* Price Skeleton */}
          {showPrice && (
            <div className="mt-2 flex justify-center">
              <div className="h-6 w-1/4 rounded bg-gray-200 animate-pulse" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

