import { useState, useEffect } from "react";
import { client } from "@/sanity/client";
import { SiegeData } from "../types/siegeType";
import { SANITY_QUERIES } from "../constants/siegeConstants";

export function useSiegeDetails(slug: string | undefined) {
  const [siege, setSiege] = useState<SiegeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchSiege = async () => {
      if (!slug) return;

      try {
        const result = await client.fetch<SiegeData>(
          SANITY_QUERIES.SIEGE_DETAILS,
          { slug }
        );
        setSiege(result);
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

  return { siege, loading, error };
}
