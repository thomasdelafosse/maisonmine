import { SiegeDetailsSkeleton } from "@/components/features/siege/components/SiegeDetails/SiegeDetailsSkeleton";

export default function Loading() {
  return (
    <main className="flex-grow">
      <SiegeDetailsSkeleton />
    </main>
  );
}
