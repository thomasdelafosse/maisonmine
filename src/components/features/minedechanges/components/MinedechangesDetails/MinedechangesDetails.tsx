"use client";
import Link from "next/link";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { useState, useEffect } from "react";
import { MinedechangesDetailsType } from "@/components/features/minedechanges/types/mineDechangesType";
import LoadingSpinner from "@/components/common/reusable-ui/loaders/LoadingSpinner";
import { useMinedechangesDetails } from "@/components/features/minedechanges/hooks/useMinedechangesDetails";
import { formatDateToFrench } from "@/components/features/minedechanges/utils/dateFormatter";

export default function MinedechangesDetails({
  slug,
}: MinedechangesDetailsType) {
  const [isTitleOpen, setIsTitleOpen] = useState(false);
  const { minedechange, allMinedechanges, loading, error } =
    useMinedechangesDetails(slug);

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

  if (loading || !minedechange) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={isTitleOpen ? "h-screen overflow-hidden z-50" : ""}>
      <button
        className="relative left-4 z-40 md:hidden p-2"
        onClick={() => setIsTitleOpen(!isTitleOpen)}
      >
        <Image
          src={isTitleOpen ? "/svg/larrow.svg" : "/svg/rarrow4.svg"}
          alt="Menu"
          width={40}
          height={40}
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
              {allMinedechanges.map((blog) => (
                <Link
                  href={`/uneminedechanges/${blog.slug.current}`}
                  key={blog._id}
                  onClick={() => setIsTitleOpen(false)}
                >
                  <div className="flex flex-row cursor-pointer p-2">
                    <div className="font-medium">
                      <h1
                        className={
                          blog.slug.current === slug ? "underline" : ""
                        }
                        style={{
                          textDecorationThickness: "1px",
                          textUnderlineOffset: "2px",
                        }}
                      >
                        {blog.title}
                      </h1>
                      <span className="text-sm font-light text-gray-400">
                        {formatDateToFrench(blog.publishedAt)}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden md:flex flex-col gap-6 w-1/5">
          {allMinedechanges.map((blog) => (
            <Link
              href={`/uneminedechanges/${blog.slug.current}`}
              key={blog._id}
            >
              <div className="flex flex-row cursor-pointer hover:text-red-900">
                <div className="font-medium">
                  <h1
                    className={blog.slug.current === slug ? "underline" : ""}
                    style={{
                      textDecorationThickness: "1px",
                      textUnderlineOffset: "2px",
                    }}
                  >
                    {blog.title}
                  </h1>
                  <span className="text-sm font-light text-gray-400">
                    {formatDateToFrench(blog.publishedAt)}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="hidden md:block md:border-r-2 md:border-gray-300 md:mx-2" />

        <div className="flex flex-col items-start gap-4 flex-1">
          <h1 className="text-3xl font-light">{minedechange.title}</h1>
          <div className="text-gray-500 font-base [&>p]:mb-4 last:[&>p]:mb-0">
            {minedechange.body && <PortableText value={minedechange.body} />}
          </div>
        </div>
      </div>
    </div>
  );
}
