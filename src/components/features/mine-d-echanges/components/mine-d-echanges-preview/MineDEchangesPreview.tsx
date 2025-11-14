import Link from "next/link";
import { formatDateToFrench } from "../../utils/dateFormatter";
import {
  MinedechangesDocument,
  MineDEchangesListProps,
} from "../../types/mine-d-echanges-type";

export default function MineDEchangesPreview({
  items,
  className,
  showSummary = true,
  limit,
}: MineDEchangesListProps) {
  const visibleItems: MinedechangesDocument[] = Array.isArray(items)
    ? limit
      ? items.slice(0, limit)
      : items
    : [];

  if (!visibleItems.length) {
    return (
      <div
        className={`flex justify-center items-center mx-4 md:mx-72 text-gray-500 ${className ?? ""}`}
      >
        Aucun article pour le moment.
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-10 mx-4 md:mx-72 ${className ?? ""}`}>
      {visibleItems.map((minedechange) => {
        const parsed = new Date(minedechange.publishedAt);
        const iso = Number.isNaN(parsed.getTime())
          ? minedechange.publishedAt
          : parsed.toISOString();

        return (
          <Link
            href={`/une-mine-d-echanges/${minedechange.slug.current}`}
            key={minedechange._id}
            aria-label={`Lire l’article : ${minedechange.title}`}
            className="block group cursor-pointer transition-colors duration-200 ease-in-out hover:text-gray-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 rounded-sm"
          >
            <article className="flex flex-col text-gray-500 md:flex-row">
              <div className="w-full md:w-1/4 font-base">
                <div className="flex justify-between md:block mb-4 md:mb-0">
                  <h2 className="font-medium text-gray-600 group-hover:text-gray-950 transition-colors duration-200">
                    {minedechange.title}
                  </h2>
                  <time
                    className="text-sm font-extralight text-gray-400 transition-colors duration-200 group-hover:text-gray-600"
                    dateTime={iso}
                  >
                    {formatDateToFrench(minedechange.publishedAt)}
                  </time>
                </div>
              </div>
              <div className="w-full md:w-3/4 md:border-l md:border-gray-300 md:pl-4">
                {showSummary && minedechange.blogSummaryBody && (
                  <p className="transition-colors duration-200 line-clamp-3">
                    {minedechange.blogSummaryBody}
                  </p>
                )}
              </div>
            </article>
          </Link>
        );
      })}
    </div>
  );
}
