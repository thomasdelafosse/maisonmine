import { useState, useEffect } from "react";
import { client } from "@/sanity/client";
import { MinedideesData } from "../types/mineDideesType";
import { SANITY_QUERIES } from "../constants/minedideesConstants";

export function useMinedideeDetails(slug: string | undefined) {
  const [minedidee, setMinedidee] = useState<MinedideesData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMinedidee = async () => {
      if (!slug) return;

      try {
        const result = await client.fetch<MinedideesData>(
          SANITY_QUERIES.MINEDIDEES_DETAILS,
          { slug }
        );
        setMinedidee(result);
      } catch (err) {
        setError(
          err instanceof Error
            ? err
            : new Error("Failed to fetch minedidee details")
        );
      } finally {
        setLoading(false);
      }
    };

    fetchMinedidee();
  }, [slug]);

  return { minedidee, loading, error };
}
