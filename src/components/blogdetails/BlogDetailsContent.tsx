import { useCollection } from "@/hooks/use-collection";
import { useItem } from "@/hooks/use-item";
import { CollectionType } from "@/types/collectionType";
import Link from "next/link";
import DOMPurify from "dompurify";
import { useState, useEffect } from "react";
import Image from "next/image";

type BlogDetailsContentProps = {
  slug: string;
};

export default function BlogDetailsContent({ slug }: BlogDetailsContentProps) {
  const [isTitleOpen, setIsTitleOpen] = useState(false);
  const item = useItem(process.env.NEXT_PUBLIC_BLOG_COLLECTION_ID || "", slug);
  const collection = useCollection(
    process.env.NEXT_PUBLIC_BLOG_COLLECTION_ID || ""
  );

  useEffect(() => {
    if (isTitleOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isTitleOpen]);

  const filteredCollection = collection.filter(
    (item: CollectionType) => item.fieldData.name !== "NOUVEAU PROJET"
  );

  if (!item) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className={isTitleOpen ? "h-screen overflow-hidden z-50" : ""}>
      <button
        className="relative left-4 z-40 md:hidden p-2 "
        onClick={() => setIsTitleOpen(!isTitleOpen)}
      >
        <Image
          src={isTitleOpen ? "/svg/rarrow4.svg" : "/svg/larrow.svg"}
          alt="Menu"
          width={40}
          height={40}
          className={`transition-transform duration-700 ${
            isTitleOpen ? "rotate-180" : "-rotate-180"
          }`}
        />
      </button>

      <div className="mx-4 md:mx-64 flex flex-row">
        <div
          className={`fixed flex justify-center inset-0 bg-white z-20 transform ${
            isTitleOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-700 ease-in-out md:hidden overflow-y-auto`}
        >
          <div className="pt-24 px-4 h-full">
            <div className="flex flex-col gap-6 mt-32">
              {filteredCollection.map((item: CollectionType) => {
                const date = new Date(item.createdOn || "");
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
                const formattedDate = `${day} ${month} ${year}`;

                return (
                  <Link
                    href={`/blogdetails/${item.fieldData.slug}`}
                    key={item.id}
                    onClick={() => setIsTitleOpen(false)}
                  >
                    <div className="flex flex-row cursor-pointer p-2">
                      <div className="font-semibold">
                        <h1
                          className={
                            item.fieldData.slug === slug ? "underline" : ""
                          }
                          style={{
                            textDecorationThickness: "1px",
                            textUnderlineOffset: "2px",
                          }}
                        >
                          {item.fieldData.name}
                        </h1>
                        <span className="text-sm font-extralight text-gray-400">
                          {formattedDate}
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="hidden md:flex flex-col gap-6 w-1/5">
          {filteredCollection.map((item: CollectionType) => {
            const date = new Date(item.createdOn || "");
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
            const formattedDate = `${day} ${month} ${year}`;

            return (
              <Link href={`/blogdetails/${item.fieldData.slug}`} key={item.id}>
                <div className="flex flex-row cursor-pointer hover:text-red-900">
                  <div className="font-semibold">
                    <h1
                      className={
                        item.fieldData.slug === slug ? "underline" : ""
                      }
                      style={{
                        textDecorationThickness: "1px",
                        textUnderlineOffset: "2px",
                      }}
                    >
                      {item.fieldData.name}
                    </h1>
                    <span className="text-sm font-extralight text-gray-400">
                      {formattedDate}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block md:border-r-2 md:border-gray-300 md:mx-2"></div>
        <div className="flex flex-col items-start gap-4 flex-1">
          <h1 className="text-3xl font-light">{item.fieldData.name}</h1>
          <div
            className="text-gray-500"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(item.fieldData["blog-content"] || ""),
            }}
          />
        </div>
      </div>
    </div>
  );
}
