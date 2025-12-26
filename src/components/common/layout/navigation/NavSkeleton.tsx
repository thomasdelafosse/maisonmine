export const NavSkeleton = () => {
  return (
    <div className="hidden md:flex md:items-center md:justify-center md:gap-x-8 md:mt-6">
      {Array.from({ length: 7 }).map((_, i) => (
        <div key={i} className="h-6 w-24 bg-gray-200 rounded animate-pulse" />
      ))}
    </div>
  );
};
