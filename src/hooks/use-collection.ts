import { useState, useEffect } from "react";
import { fetchCollectionData } from "@/lib/fetch-collection";

export function useCollection(collectionId: string) {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionData = await fetchCollectionData(collectionId);
        setCollections(collectionData);
      } catch (error) {
        console.error("Error loading collection:", error);
      }
    };

    fetchData();
  }, [collectionId]);

  return collections;
}
