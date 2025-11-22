"use client";

import { useState, useEffect } from "react";
import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import { SANITY_QUERIES } from "@/components/features/mine-d-idees/constants/mine-d-idees-constants";

const sortMinedidees = (minedidees: SanityDocument[]) => {
  return [...minedidees].sort((a, b) => {
    const positionA = Number(a.position) || Infinity;
    const positionB = Number(b.position) || Infinity;
    return positionB - positionA;
  });
};

export function useMinedideesCollection() {
  const [minedidees, setMinedidees] = useState<SanityDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMinedidees = async () => {
      try {
        const result = await client.fetch<SanityDocument[]>(
          SANITY_QUERIES.MINEDIDEES_COLLECTION
        );
        setMinedidees(sortMinedidees(result));
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to fetch minedidees")
        );
      } finally {
        setLoading(false);
      }
    };

    fetchMinedidees();
  }, []);

  return { minedidees, loading, error };
}
