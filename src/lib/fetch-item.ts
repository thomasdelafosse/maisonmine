// Function to fetch item data with collectionId and itemId
export const fetchItemData = async (
  collectionId: string,
  itemId?: string,
  slug?: string
) => {
  try {
    let url = `${process.env.NEXT_PUBLIC_API_URL}/api/collections/${collectionId}`;

    if (slug) {
      url += `/items/by-slug/${slug}`;
    } else if (itemId) {
      url += `/items/${itemId}`;
    } else {
      url += "/items";
    }

    const itemResponse = await fetch(url);
    if (!itemResponse.ok) {
      const error = await itemResponse.json();
      throw new Error(error.message || "Failed to fetch item");
    }

    const items = await itemResponse.json();
    if (!items) {
      throw new Error("No item found");
    }

    return items;
  } catch (error) {
    console.error("FETCH ITEM ERROR:", error);
    throw error;
  }
};
