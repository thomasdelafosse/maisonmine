import { GetStaticPaths, GetStaticProps } from "next";
import { client } from "@/sanity/client";
import dynamic from "next/dynamic";
import LoadingSpinner from "@/components/common/reusable-ui/loading/LoadingSpinner";
import { SANITY_QUERIES } from "@/features/minedidees/constants/minedideesConstants";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await client.fetch(SANITY_QUERIES.MINEDIDEES_SLUGS);

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;

  return {
    props: {
      slug,
    },
  };
};

const MinedideesDetails = dynamic(
  () =>
    import(
      "@/features/minedidees/components/MinedideesDetails/MinedideesDetails"
    ),
  {
    loading: () => <LoadingSpinner />,
    ssr: false,
  }
);

export default function MinedideesDetailsPage({ slug }: { slug: string }) {
  return (
    <main className="flex-grow relative z-0">
      <MinedideesDetails slug={slug} />
    </main>
  );
}
