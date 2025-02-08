import Link from "next/link";
import { PortableText, type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { useState, useEffect } from "react";
import Image from "next/image";

type BlogDetailsContentProps = {
  slug: string;
};

export default function BlogDetailsContent({ slug }: BlogDetailsContentProps) {
  const [isTitleOpen, setIsTitleOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState<SanityDocument | null>(null);
  const [allBlogs, setAllBlogs] = useState<SanityDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const blogQuery = `*[_type == "blogs" && slug.current == $slug][0]{
        _id,
        title,
        slug,
        publishedAt,
        body,
        position,

      }`;

      const allBlogsQuery = `*[_type == "blogs" && defined(slug.current)]|order(publishedAt desc){
        _id,
        title,
        slug,
        publishedAt,
        position
      }`;

      const [blog, blogs] = await Promise.all([
        client.fetch(blogQuery, { slug }),
        client.fetch<SanityDocument[]>(allBlogsQuery),
      ]);

      setCurrentBlog(blog);
      setAllBlogs(blogs);
      setLoading(false);
    };

    fetchData();
  }, [slug]);

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

  if (loading || !currentBlog) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
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
  };

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
          className=""
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
              {allBlogs.map((blog) => (
                <Link
                  href={`/blogdetails/${blog.slug.current}`}
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
                        {formatDate(blog.publishedAt)}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden md:flex flex-col gap-6 w-1/5">
          {allBlogs.map((blog) => (
            <Link href={`/blogdetails/${blog.slug.current}`} key={blog._id}>
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
                    {formatDate(blog.publishedAt)}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="hidden md:block md:border-r-2 md:border-gray-300 md:mx-2"></div>

        <div className="flex flex-col items-start gap-4 flex-1">
          <h1 className="text-3xl font-light">{currentBlog.title}</h1>
          <div className="text-gray-500 font-base [&>p]:mb-4 last:[&>p]:mb-0">
            <PortableText value={currentBlog.body} />
          </div>
        </div>
      </div>
    </div>
  );
}
