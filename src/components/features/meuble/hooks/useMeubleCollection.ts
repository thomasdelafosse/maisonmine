import { useState, useEffect } from "react";
import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import { SANITY_QUERIES } from "../constants/meubleConstants";

const sortMeubles = (meubles: SanityDocument[]) => {
  return [...meubles].sort((a, b) => {
    const positionA = Number(a.position) || Infinity;
    const positionB = Number(b.position) || Infinity;
    return positionB - positionA;
  });
};

export function useMeubleCollection() {
  const [meubles, setMeubles] = useState<SanityDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMeubles = async () => {
      try {
        const result = await client.fetch<SanityDocument[]>(
          SANITY_QUERIES.MEUBLE_COLLECTION
        );
        setMeubles(sortMeubles(result));
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to fetch meubles")
        );
      } finally {
        setLoading(false);
      }
    };

    fetchMeubles();
  }, []);

  return { meubles, loading, error };
}
