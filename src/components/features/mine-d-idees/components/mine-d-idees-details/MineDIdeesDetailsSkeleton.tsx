import CollectionGridSkeleton from "@/components/common/reusable-ui/skeletons/CollectionGridSkeleton";
import DescriptionBlockSkeleton from "@/components/common/reusable-ui/skeletons/DescriptionBlockSkeleton";
import { VARIANT_STYLES } from "@/components/features/mine-d-idees/constants/mine-d-idees-constants";

export function MineDIdeesDetailsSkeleton() {
  return (
    <>
      <div className="md:flex md:mx-44 animate-pulse">
        {/* Image Skeleton */}
        <div className="w-full md:w-1/3 p-4">
          <div className="h-[550px] w-full bg-gray-200 rounded-lg" />
        </div>

        {/* Info Skeleton */}
        <div className="w-full md:w-2/3 p-4">
          {/* Title */}
          <div className="h-10 w-3/4 bg-gray-200 rounded mb-8 mx-auto md:mx-0 md:ml-6" />

          <DescriptionBlockSkeleton
            containerClassName="md:border-l-2 md:border-gray-200 md:pl-6 h-full"
            lines={5}
          />

          {/* Button */}
          <div className="flex justify-center mt-10">
            <div className="h-12 w-48 bg-gray-200 rounded" />
          </div>
        </div>
      </div>

      <div className="my-10 border-t-2 border-gray-200 mx-20 md:my-20 md:mx-36" />

      {/* Footer List Skeleton (6 items) */}
      <CollectionGridSkeleton
        containerClassName={VARIANT_STYLES.footer.container}
        showPrice={false}
        imageClassName="aspect-square"
      />
    </>
  );
}
