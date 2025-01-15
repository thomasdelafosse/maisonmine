// Function to fetch collection data with collectionId
export const fetchCollectionData = async (collectionId: string) => {
  if (!process.env.NEXT_PUBLIC_API_URL) {
    throw new Error('API URL is not configured');
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/collections/${collectionId}/items`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch collection data: ${response.status} ${response.statusText}`);
  }

  const items = await response.json();
  return items;
};
