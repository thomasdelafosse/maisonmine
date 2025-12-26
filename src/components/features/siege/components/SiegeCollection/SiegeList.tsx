import {
  SiegeListProps,
  SiegeData,
} from "@/components/features/siege/types/siegeType";
import { SANITY_QUERIES } from "@/components/features/siege/constants/siegeConstants";
import { client } from "@/sanity/client";
import { sortSieges } from "@/components/features/siege/utils/sortSieges";
import { SiegeListClient } from "./SiegeListClient";

export async function SiegeList({
  variant = "grid",
  className = "",
}: Omit<SiegeListProps, "items">) {
  const items = await client.fetch<SiegeData[]>(
    SANITY_QUERIES.SIEGE_COLLECTION,
    {},
    { next: { revalidate: 60, tags: ["cotesiege"] } }
  );

  const sortedItems = sortSieges(items) as SiegeData[];

  return (
    <SiegeListClient
      items={sortedItems}
      variant={variant}
      className={className}
    />
  );
}
