import CollectionGridSkeleton from "@/components/common/reusable-ui/skeletons/CollectionGridSkeleton";
import DescriptionBlockSkeleton from "@/components/common/reusable-ui/skeletons/DescriptionBlockSkeleton";
import { VARIANT_STYLES } from "@/components/features/siege/constants/siegeConstants";

export function SiegeDetailsSkeleton() {
  const footerStyles = VARIANT_STYLES.footer;

  return (
    <div>
      <div className="md:flex md:mx-44 mx-4">
        {/* Image Gallery Skeleton (Left) */}
        <div className="w-full md:w-1/3">
          <div className="flex flex-col h-[450px]">
            <div className="bg-gray-200 rounded-2xl h-full w-full animate-pulse" />
          </div>
          <div className="mt-4 flex justify-center">
            <div className="h-4 w-64 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>

        {/* Info Skeleton (Right) */}
        <div className="w-full md:w-2/3 mt-8 md:mt-0 md:pl-10">
          <div className="h-10 w-3/4 bg-gray-200 rounded animate-pulse mb-6" />

          <DescriptionBlockSkeleton
            containerClassName="md:border-l-2 md:border-gray-300 md:pl-6"
            lines={5}
          />

          <div className="mt-6 h-12 w-40 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>

      {/* 3D Model Viewer Skeleton */}
      <div className="mt-16 mx-4 md:mx-44 h-[600px] bg-gray-100 rounded-lg animate-pulse flex items-center justify-center">
        <div className="text-gray-300 font-medium">Chargement 3D...</div>
      </div>

      <div className="my-10 border-t-2 border-gray-300 mx-20 md:my-20 md:mx-36" />

      {/* Footer List Skeleton */}
      <CollectionGridSkeleton
        containerClassName={footerStyles.container}
        showPrice={false}
      />
    </div>
  );
}
