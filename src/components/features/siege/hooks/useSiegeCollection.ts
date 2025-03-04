import { useState, useEffect } from "react";
import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import { SANITY_QUERIES } from "@/components/features/siege/constants/siegeConstants";

const sortSieges = (sieges: SanityDocument[]) => {
  return [...sieges].sort((a, b) => {
    const positionA = Number(a.position) || Infinity;
    const positionB = Number(b.position) || Infinity;
    return positionB - positionA;
  });
};

export function useSiegeCollection() {
  const [sieges, setSieges] = useState<SanityDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchSieges = async () => {
      try {
        const result = await client.fetch<SanityDocument[]>(
          SANITY_QUERIES.SIEGE_COLLECTION
        );
        setSieges(sortSieges(result));
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to fetch sieges")
        );
      } finally {
        setLoading(false);
      }
    };

    fetchSieges();
  }, []);

  return { sieges, loading, error };
}
