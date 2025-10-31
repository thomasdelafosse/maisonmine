"use client";
import dynamic from "next/dynamic";
import LoadingSpinner from "@/components/common/reusable-ui/loaders/LoadingSpinner";

const MinedechangesCollectionContent = dynamic(
  () =>
    import(
      "@/components/features/minedechanges/components/MinedechangesCollection/MinedechangesCollectionContent"
    ),
  {
    loading: () => <LoadingSpinner />,
    ssr: false,
  }
);

export default function UneminedeChangements() {
  return (
    <main className="flex-grow">
      <MinedechangesCollectionContent />
    </main>
  );
}
