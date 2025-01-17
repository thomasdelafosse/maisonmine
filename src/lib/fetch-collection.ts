export const fetchCollectionData = async (collectionId: string) => {
  try {
    const itemsResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/collections/${collectionId}/items`
    );

    const items = await itemsResponse.json();

    return items;
  } catch (error) {
    console.error("Failed to fetch collection data:", error);
  }
};
