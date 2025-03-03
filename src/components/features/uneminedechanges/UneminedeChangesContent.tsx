import Link from "next/link";
import { PortableText, type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { useEffect, useState } from "react";

export default function UneminedeChangesContent() {
  const [blogs, setBlogs] = useState<SanityDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const query = `*[_type == "blogs" && defined(slug.current)]|order(publishedAt desc){
        _id, 
        title, 
        slug, 
        publishedAt,
        blogSummaryBody,
        body,
        position
      }`;

      const result = await client.fetch<SanityDocument[]>(query);
      setBlogs(result);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10 mx-4 md:mx-72">
      {blogs.map((blog) => (
        <Link href={`/uneminedechanges/${blog.slug.current}`} key={blog._id}>
          <div className="flex flex-col cursor-pointer text-gray-500 hover:text-gray-950 group md:flex-row">
            <div className="w-full md:w-1/4 font-base">
              <div className="flex justify-between md:block mb-4 md:mb-0">
                <h1 className="font-medium text-gray-600 group-hover:text-gray-950">
                  {blog.title}
                </h1>
                <span className="text-sm font-extralight text-gray-400">
                  {new Date(blog.publishedAt).toISOString().split("T")[0]}
                </span>
              </div>
            </div>
            <div className="border-l border-gray-300 mx-4 hidden md:block"></div>
            <div className="w-full md:w-3/4">
              <p>{blog.blogSummaryBody}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
