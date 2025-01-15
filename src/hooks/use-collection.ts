import { useState, useEffect } from "react";
import { fetchCollectionData } from "@/lib/fetch-collection";

export function useCollection(collectionId: string) {
  const [collections, setCollections] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const collectionData = await fetchCollectionData(collectionId);
        setCollections(Array.isArray(collectionData) ? collectionData : []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch collection');
        setCollections([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [collectionId]);

  return { collections, isLoading, error };
}
