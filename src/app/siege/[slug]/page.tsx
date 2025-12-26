import SiegeDetailsContent from "@/components/features/siege/components/SiegeDetails/siegeDetails";
import { client } from "@/sanity/client";
import { SANITY_QUERIES } from "@/components/features/siege/constants/siegeConstants";
import { SiegeData } from "@/components/features/siege/types/siegeType";
import { sortSieges } from "@/components/features/siege/utils/sortSieges";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [siege, allSieges] = await Promise.all([
    client.fetch<SiegeData>(SANITY_QUERIES.SIEGE_DETAILS, { slug }),
    client.fetch<SiegeData[]>(
      SANITY_QUERIES.SIEGE_COLLECTION,
      {},
      { next: { revalidate: 60, tags: ["cotesiege"] } }
    ),
  ]);

  if (!siege) {
    notFound();
  }

  const sortedSieges = sortSieges(allSieges) as SiegeData[];

  return (
    <main className="flex-grow">
      <SiegeDetailsContent siege={siege} allSieges={sortedSieges} />
    </main>
  );
}
