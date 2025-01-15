import React from "react";
import Navbar from "@/components/navbar";
import { useCollection } from "@/hooks/use-collection";
import { CollectionType } from "@/types/collectionType";
import Link from "next/link";
import Footer from "@/components/footer";

//@TODO: Extract the formatted date into a function inside a utils folder

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

export default function UneminedeChangements() {
  const collection = useCollection(
    process.env.NEXT_PUBLIC_BLOG_COLLECTION_ID || ""
  );

  const filteredCollection = collection.filter(
    (item: CollectionType) => item.fieldData.name !== "NOUVEAU PROJET"
  );

  return (
    <div>
      <Navbar />
      <div className="mt-56 md:mt-64">
        <div className="flex flex-col gap-10 mx-4 md:mx-72">
          {filteredCollection.map((item: CollectionType) => {
            const formattedDate = formatDate(item.createdOn || "");

            return (
              <Link
                href={`/blogdetails/${item?.fieldData?.slug}`}
                key={item.id}
              >
                <div className="flex flex-col cursor-pointer text-gray-500 hover:text-gray-950 group md:flex-row">
                  <div className="w-full md:w-1/4 font-semibold">
                    <div className="flex justify-between md:block mb-4 md:mb-0">
                      <h1 className="font-semibold text-gray-600 group-hover:text-gray-950">
                        {item.fieldData.name}
                      </h1>
                      <span className="text-sm font-extralight text-gray-400">
                        {formattedDate}
                      </span>
                    </div>
                  </div>
                  <div className="border-l border-gray-300 mx-4 hidden md:block"></div>
                  <div className="w-full md:w-3/4">
                    <p>{item.fieldData["blog-post-summary"]}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
