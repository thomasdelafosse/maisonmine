import { useState, useEffect } from "react";
import { client } from "@/sanity/client";
import { MinedechangesDocument } from "../types/mineDechangesType";
import { SANITY_QUERIES } from "../constants/minedechangesConstants";

export function useMinedechangesCollection() {
  const [minedechanges, setMinedechanges] = useState<MinedechangesDocument[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const result = await client.fetch<MinedechangesDocument[]>(
          SANITY_QUERIES.MINEDECHANGES_COLLECTION
        );
        setMinedechanges(result);
      } catch (err) {
        setError(
          err instanceof Error
            ? err
            : new Error("Failed to fetch minedechanges")
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { minedechanges, loading, error };
}
