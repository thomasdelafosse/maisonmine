import MinedechangesCollectionContent from "@/components/features/minedechanges/components/MinedechangesCollection/MinedechangesCollectionContent";

export default async function UneminedeChangements() {
  "use cache";
  return (
    <main className="flex-grow">
      <MinedechangesCollectionContent />
    </main>
  );
}
