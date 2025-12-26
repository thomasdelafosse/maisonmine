type DescriptionBlockSkeletonProps = {
  lines?: number;
  className?: string;
  containerClassName?: string;
};

export default function DescriptionBlockSkeleton({
  lines = 3,
  className = "",
  containerClassName = "border-l-2 border-gray-200 pl-4 mb-4",
}: DescriptionBlockSkeletonProps) {
  return (
    <div
      className={`${containerClassName} py-1 flex flex-col gap-2 ${className}`}
    >
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`h-4 bg-gray-200 rounded animate-pulse ${
            i === lines - 1 ? "w-2/3" : "w-full"
          }`}
        />
      ))}
    </div>
  );
}
