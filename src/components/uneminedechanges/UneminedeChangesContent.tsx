import { useCollection } from "@/hooks/use-collection";
import { CollectionType } from "@/types/collectionType";
import Link from "next/link";

function formatDate(dateString: string): string {
  const date = new Date(dateString || "");
  const monthNames = [
    "JANVIER",
    "FÉVRIER",
    "MARS",
    "AVRIL",
    "MAI",
    "JUIN",
    "JUILLET",
    "AOÛT",
    "SEPTEMBRE",
    "OCTOBRE",
    "NOVEMBRE",
    "DÉCEMBRE",
  ];
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

export default function UneminedeChangesContent() {
  const collection = useCollection(
    process.env.NEXT_PUBLIC_BLOG_COLLECTION_ID || ""
  );

  const filteredCollection = collection.filter(
    (item: CollectionType) => item.fieldData.name !== "NOUVEAU PROJET"
  );

  if (!collection.length) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10 mx-4 md:mx-72">
      {filteredCollection.map((item: CollectionType) => {
        const formattedDate = formatDate(item.createdOn || "");

        return (
          <Link href={`/blogdetails/${item?.fieldData?.slug}`} key={item.id}>
            <div className="flex flex-col cursor-pointer text-gray-500 hover:text-gray-950 group md:flex-row">
              <div className="w-full md:w-1/4 font-medium">
                <div className="flex justify-between md:block mb-4 md:mb-0">
                  <h1 className="font-medium text-gray-600 group-hover:text-gray-950">
                    {item.fieldData.name}
                  </h1>
                  <span className="text-sm font-extralight text-gray-400">
                    {formattedDate}
                  </span>
                </div>
              </div>
              <div className="border-l border-gray-300 mx-4 hidden md:block"></div>
              <div className="w-full md:w-3/4 lowercase">
                <p>{item.fieldData["blog-post-summary"]}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
