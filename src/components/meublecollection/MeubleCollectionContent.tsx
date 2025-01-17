import MeubleCollection from "@/components/meublecollection";
import { useCollection } from "@/hooks/use-collection";

export default function MeubleCollectionContent() {
  const collection = useCollection(
    process.env.NEXT_PUBLIC_MEUBLE_COLLECTION_ID || ""
  );

  if (!collection.length) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="relative -z-50">
      <MeubleCollection
        slug="CoteMeuble"
        collectionId={process.env.NEXT_PUBLIC_MEUBLE_COLLECTION_ID || ""}
        className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 mx-4 md:mx-36 mb-12"
        imageClassName="rounded-lg shadow-xl"
        nameClassName="text-1xl font-light text-gray-500 text-center mt-2"
        showInnerText={true}
        innerDivClassName="absolute inset-0 bg-black bg-opacity-50 text-white text-center text-sm md:text-2xl text-bold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"
        priceClassName="text-1xl font-light text-gray-500 text-center mt-2"
        svgElement={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 50 50"
          >
            <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z"></path>
          </svg>
        }
      />
    </div>
  );
}
