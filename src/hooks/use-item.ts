import { fetchItemData } from "@/lib/fetch-item";
import { useEffect, useState } from "react";
import { CollectionType } from "@/types/collectionType";

export function useItem(collectionId: string, slug?: string) {
  const [item, setItem] = useState<CollectionType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!slug) {
          throw new Error("slug is required");
        }

        const itemData = await fetchItemData(collectionId, undefined, slug);
        setItem(itemData);
      } catch (error) {
        console.error("Error fetching item:", error);
        setItem(null);
      }
    };

    fetchData();
  }, [collectionId, slug]);

  return item;
}
