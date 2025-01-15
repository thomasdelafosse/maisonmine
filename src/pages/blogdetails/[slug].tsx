import Navbar from "@/components/navbar";
import { useCollection } from "@/hooks/use-collection";
import { useItem } from "@/hooks/use-item";
import { CollectionType } from "@/types/collectionType";
import Link from "next/link";
import { useRouter } from "next/router";
import DOMPurify from "dompurify";
import { useState, useEffect } from "react";
import Footer from "@/components/footer";

export default function Page() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return <div>Loading...</div>;

  return <BlogDetails slug={slug as string} />;
}

function BlogDetails({ slug }: { slug: string }) {
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

  if (!item) return <div>Loading...</div>;

  return (
    <div className={isTitleOpen ? "h-screen overflow-hidden z-50" : ""}>
      <Navbar />
      <button
        className="relative top-52 left-4 z-40 md:hidden p-2 mb-10 "
        onClick={() => setIsTitleOpen(!isTitleOpen)}
      >
        <div className="w-6 h-0.5 bg-black mb-1"></div>
        <div className="w-6 h-0.5 bg-black mb-1"></div>
        <div className="w-6 h-0.5 bg-black"></div>
      </button>

      <div className="mt-52 mx-4 md:mt-64 md:mx-64 flex flex-row">
        <div
          className={`fixed flex justify-center inset-0 bg-white z-20 transform ${
            isTitleOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden overflow-y-auto`}
        >
          <div className="pt-24 px-4 h-full ">
            <div className="flex flex-col gap-6 mt-32 ">
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
                      <div className="font-semibold ">
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
                        <span className="text-sm font-extralight text-gray-400 ">
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

        <div className="hidden md:flex flex-col gap-6 w-1/5  ">
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
                <div className="flex flex-row cursor-pointer hover:text-red-900  ">
                  <div className="font-semibold ">
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
                    <span className="text-sm font-extralight text-gray-400 ">
                      {formattedDate}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block md:border-r-2 md:border-gray-300 md:mx-2"></div>
        <div className="flex flex-col items-start gap-4 flex-1 ">
          <h1 className="text-3xl font-light ">{item.fieldData.name}</h1>
          <div
            className="text-gray-500"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(item.fieldData["blog-content"] || ""),
            }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
