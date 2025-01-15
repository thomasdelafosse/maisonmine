import { useState, useEffect } from "react";
import { fetchCollectionData } from "@/lib/fetch-collection";

export function useCollection(collectionId: string) {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const collectionData = await fetchCollectionData(collectionId);
      setCollections(collectionData);
    };

    fetchData();
  }, []);

  return collections;
}
