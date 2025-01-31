import Link from "next/link";
import { PortableText, type SanityDocument } from "next-sanity";
import { GetStaticProps } from "next";
import { client } from "@/sanity/client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id, 
  title, 
  slug, 
  publishedAt,
  body
}`;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY);

  return {
    props: {
      posts,
    },
    revalidate: 30,
  };
};

export default function TechniqueEtSavoirFaire({
  posts,
}: {
  posts: SanityDocument[];
}) {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto min-h-screen max-w-3xl p-8">
        <h1 className="text-4xl font-bold mb-8">Posts</h1>
        <ul className="flex flex-col gap-y-4">
          {posts.map((post) => (
            <li className="hover:underline" key={post._id}>
              <Link href={`/page/${post.slug.current}`}>
                <h2 className="text-xl font-semibold hover:underline">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-600 text-sm mb-2">
                {new Date(post.publishedAt).toISOString().split("T")[0]}
              </p>
              <div className="prose prose-sm">
                {Array.isArray(post.body) && <PortableText value={post.body} />}
              </div>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}
