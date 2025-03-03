import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { GetStaticProps, GetStaticPaths } from "next";
import MineDetailsContent from "@/components/features/details/mine-idees/MineDetailsContent";

const MINEDIDEE_QUERY = `*[_type == "minedidees" && slug.current == $slug][0]`;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await client.fetch(
    `*[_type == "minedidees" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const minedidee = await client.fetch(MINEDIDEE_QUERY, {
    slug: params?.slug,
  });

  if (!minedidee) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      minedidee,
    },
    revalidate: 60,
  };
};

export default function MinedideesDetailsPage({
  minedidee,
}: {
  minedidee: SanityDocument;
}) {
  return (
    <main className="flex-grow">
      <MineDetailsContent slug={minedidee.slug.current} />
    </main>
  );
}
