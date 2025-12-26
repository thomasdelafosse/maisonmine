export function MineDEchangesListSkeleton() {
  return (
    <div className="flex flex-col gap-10 mx-4 md:mx-72">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="block group">
          <div className="flex flex-col text-gray-500 md:flex-row">
            <div className="w-full md:w-1/4 font-base">
              <div className="flex justify-between md:block mb-4 md:mb-0">
                {/* Title Skeleton */}
                <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse mb-2" />
                {/* Date Skeleton */}
                <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
            <div className="w-full md:w-3/4 md:border-l md:border-gray-300 md:pl-4">
              {/* Summary Skeleton */}
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-4/6 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

