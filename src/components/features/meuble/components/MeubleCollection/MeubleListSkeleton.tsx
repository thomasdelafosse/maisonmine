import CollectionGridSkeleton from "@/components/common/reusable-ui/skeletons/CollectionGridSkeleton";

export function MeubleListSkeleton() {
  const containerClass =
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 md:mx-36 mb-12";

  return (
    <CollectionGridSkeleton
      containerClassName={containerClass}
      showPrice={true}
      imageClassName="h-[400px]"
    />
  );
}
