import { useState, useEffect } from "react";
import { client } from "@/sanity/client";
import { SiegeData } from "@/components/features/siege/types/siegeType";
import { SANITY_QUERIES } from "@/components/features/siege/constants/siegeConstants";
import { sortSieges } from "../utils/sortSieges";

export function useSiegeDetails(slug: string | undefined) {
  const [siege, setSiege] = useState<SiegeData | null>(null);
  const [allSieges, setAllSieges] = useState<SiegeData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchSiege = async () => {
      if (!slug) return;

      try {
        const [details, all] = await Promise.all([
          client.fetch<SiegeData>(SANITY_QUERIES.SIEGE_DETAILS, { slug }),
          client.fetch<SiegeData[]>(SANITY_QUERIES.SIEGE_COLLECTION),
        ]);

        setSiege(details);
        setAllSieges(sortSieges(all) as SiegeData[]);
      } catch (err) {
        setError(
          err instanceof Error
            ? err
            : new Error("Failed to fetch siege details")
        );
      } finally {
        setLoading(false);
      }
    };

    fetchSiege();
  }, [slug]);

  return { siege, allSieges, loading, error };
}
