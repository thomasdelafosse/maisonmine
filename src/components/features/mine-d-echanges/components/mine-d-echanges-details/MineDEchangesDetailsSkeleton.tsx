export function MineDEchangesDetailsSkeleton() {
  return (
    <div className="mx-4 md:mx-64 flex flex-row mt-8">
      {/* Sidebar Skeleton - hidden on mobile, visible on md */}
      <div className="hidden md:block w-1/4 pr-4">
        <div className="h-full border-r-2 border-gray-300">
          <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse mb-6" />
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="h-4 w-full bg-gray-200 rounded animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:block md:mx-2" />

      {/* Article Content Skeleton */}
      <div className="w-full md:w-3/4">
        {/* Title */}
        <div className="h-10 w-3/4 bg-gray-200 rounded animate-pulse mb-8" />

        {/* Body paragraphs */}
        <div className="space-y-4">
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-4/6 bg-gray-200 rounded animate-pulse" />

          <div className="h-64 w-full bg-gray-200 rounded animate-pulse my-8" />

          <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}
