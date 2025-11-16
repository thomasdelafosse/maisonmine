import Link from "next/link";
import { routes } from "@/lib/routes";
import { formatDateToFrench } from "../../utils/dateFormatter";
import { MinedechangesDocument } from "../../types/mine-d-echanges-type";

export function BlogList({
  blogs,
  activeSlug,
  onItemClick,
  className,
}: {
  blogs: MinedechangesDocument[];
  activeSlug?: string;
  onItemClick?: () => void;
  className?: string;
}) {
  return (
    <div className={className}>
      {blogs.map((blog) => (
        <BlogListItem
          key={blog._id}
          title={blog.title}
          slug={blog.slug.current}
          date={blog.publishedAt}
          active={blog.slug.current === activeSlug}
          onClick={onItemClick}
        />
      ))}
    </div>
  );
}

function BlogListItem({
  title,
  slug,
  date,
  active,
  onClick,
}: {
  title: string;
  slug: string;
  date: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link href={routes.mineDEchanges(slug)} onClick={onClick}>
      <div className="flex flex-row cursor-pointer p-2 hover:text-red-900">
        <div className="font-medium">
          <h1
            className={
              active ? "underline underline-offset-2 decoration-1" : ""
            }
          >
            {title}
          </h1>
          <span className="text-sm font-light text-gray-400">
            {formatDateToFrench(date)}
          </span>
        </div>
      </div>
    </Link>
  );
}
