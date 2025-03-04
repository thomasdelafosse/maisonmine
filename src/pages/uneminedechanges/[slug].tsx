import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { client } from "@/sanity/client";
import MinedechangesDetails from "@/components/features/minedechanges/components/MinedechangesDetails/MinedechangesDetails";
import { SANITY_QUERIES } from "@/components/features/minedechanges/constants/minedechangesConstants";
import { MinedechangesDocument } from "@/components/features/minedechanges/types/mineDechangesType";

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = await client.fetch<MinedechangesDocument[]>(
    SANITY_QUERIES.MINEDECHANGES_COLLECTION
  );

  const paths = blogs.map((blog) => ({
    params: { slug: blog.slug.current },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;

  if (!slug) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      slug,
    },
    revalidate: 60,
  };
};

export default function MinedechangePage({ slug }: { slug: string }) {
  return (
    <main className="flex-grow">
      <MinedechangesDetails slug={slug} />
    </main>
  );
}
