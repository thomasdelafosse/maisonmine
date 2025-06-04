import Link from "next/link";
import { MinedechangesCollectionType } from "@/components/features/minedechanges/types/mineDechangesType";
import LoadingSpinner from "@/components/common/reusable-ui/loaders/LoadingSpinner";
import { useMinedechangesCollection } from "@/components/features/minedechanges/hooks/useMinedechangesCollection";
import { formatDateToFrench } from "@/components/features/minedechanges/utils/dateFormatter";

export default function MinedechangesCollection({
  className = "flex flex-col gap-10 mx-4 md:mx-72",
  nameClassName = "font-medium text-gray-600 group-hover:text-gray-950 transition-colors duration-200",
  showInnerText = true,
}: MinedechangesCollectionType) {
  const { minedechanges, loading, error } = useMinedechangesCollection();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={className}>
      {minedechanges.map((minedechange) => (
        <Link
          href={`/uneminedechanges/${minedechange.slug.current}`}
          key={minedechange._id}
          className="block group cursor-pointer transition-colors duration-200 ease-in-out hover:text-gray-950"
        >
          <div className="flex flex-col text-gray-500 md:flex-row">
            <div className="w-full md:w-1/4 font-base">
              <div className="flex justify-between md:block mb-4 md:mb-0">
                <h1 className={nameClassName}>{minedechange.title}</h1>
                <span className="text-sm font-extralight text-gray-400 transition-colors duration-200 group-hover:text-gray-600">
                  {formatDateToFrench(minedechange.publishedAt)}
                </span>
              </div>
            </div>
            <div className="border-l border-gray-300 mx-4 hidden md:block"></div>
            <div className="w-full md:w-3/4">
              {showInnerText && minedechange.blogSummaryBody && (
                <p className="transition-colors duration-200">
                  {minedechange.blogSummaryBody}
                </p>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
