"use client";
import { useState, useEffect } from "react";
import { client } from "@/sanity/client";
import { MinedechangesDocument } from "@/components/features/minedechanges/types/mineDechangesType";
import { SANITY_QUERIES } from "@/components/features/minedechanges/constants/minedechangesConstants";

export function useMinedechangesDetails(slug: string | undefined) {
  const [minedechange, setMinedechange] =
    useState<MinedechangesDocument | null>(null);
  const [allMinedechanges, setAllMinedechanges] = useState<
    MinedechangesDocument[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!slug) return;

      try {
        const [details, all] = await Promise.all([
          client.fetch<MinedechangesDocument>(
            SANITY_QUERIES.MINEDECHANGES_DETAILS,
            { slug }
          ),
          client.fetch<MinedechangesDocument[]>(
            SANITY_QUERIES.MINEDECHANGES_COLLECTION
          ),
        ]);

        setMinedechange(details);
        setAllMinedechanges(all);
      } catch (err) {
        setError(
          err instanceof Error
            ? err
            : new Error("Failed to fetch minedechange details")
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  return { minedechange, allMinedechanges, loading, error };
}
