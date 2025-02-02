import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { GetStaticProps, GetStaticPaths } from "next";
import BlogDetailsContent from "@/components/blogdetails/BlogDetailsContent";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const BLOG_QUERY = `*[_type == "blogs" && slug.current == $slug][0]`;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await client.fetch(
    `*[_type == "blogs" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blog = await client.fetch(BLOG_QUERY, params);

  if (!blog) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blog,
    },
    revalidate: 30,
  };
};

export default function BlogDetailsPage({ blog }: { blog: SanityDocument }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <BlogDetailsContent slug={blog.slug.current} />
      </main>
      <Footer />
    </div>
  );
}
