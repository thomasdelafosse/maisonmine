import { VARIANT_STYLES } from "@/components/features/siege/constants/siegeConstants";

export function SiegeDetailsSkeleton() {
  const footerStyles = VARIANT_STYLES.footer;
  const footerSkeletons = Array.from({ length: 6 });

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
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-2" />
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-2" />
          <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse mb-6" />
          <div className="h-12 w-40 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>

      {/* 3D Model Viewer Skeleton */}
      <div className="mt-16 mx-4 md:mx-44 h-[600px] bg-gray-100 rounded-lg animate-pulse flex items-center justify-center">
        <div className="text-gray-300 font-medium">Chargement 3D...</div>
      </div>

      <div className="my-10 border-t-2 border-gray-300 mx-20 md:my-20 md:mx-36" />

      {/* Footer List Skeleton */}
      <div className={footerStyles.container}>
        {footerSkeletons.map((_, index) => (
          <div key={index} className="collection-item relative">
            <div className="aspect-[4/5] w-full rounded-lg bg-gray-200 animate-pulse" />
            <div className="mt-1 flex justify-center">
              <div className="h-3 w-3/4 rounded bg-gray-200 animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
