import { useState, useEffect } from "react";
import { client } from "@/sanity/client";
import {
  MinedideesData,
  MinedideesDocument,
} from "@/components/features/mine-d-idees/types/mine-d-idees-type";
import { SANITY_QUERIES } from "@/components/features/mine-d-idees/constants/mine-d-idees-constants";
import { sortMinedidees } from "../utils/sortMinedidees";

export function useMinedideeDetails(slug: string | undefined) {
  const [minedidee, setMinedidee] = useState<MinedideesData | null>(null);
  const [allMinedidees, setAllMinedidees] = useState<MinedideesDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!slug) return;

      try {
        const [details, all] = await Promise.all([
          client.fetch<MinedideesData>(SANITY_QUERIES.MINEDIDEES_DETAILS, {
            slug,
          }),
          client.fetch<MinedideesDocument[]>(
            SANITY_QUERIES.MINEDIDEES_COLLECTION
          ),
        ]);

        setMinedidee(details);
        setAllMinedidees(sortMinedidees(all));
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

    fetchData();
  }, [slug]);

  return { minedidee, allMinedidees, loading, error };
}
