import dynamic from "next/dynamic";
import { client } from "@/sanity/client";
import { SANITY_QUERIES } from "@/components/features/minedidees/constants/minedideesConstants";

export const dynamicParams = false;

export async function generateStaticParams() {
  const paths = await client.fetch<string[]>(SANITY_QUERIES.MINEDIDEES_SLUGS);
  return paths.map((slug) => ({ slug }));
}

const MinedideesDetails = dynamic(
  () =>
    import(
      "@/components/features/minedidees/components/MinedideesDetails/MinedideesDetails"
    ),
  {
    loading: () => (
      <div className="mt-48 mx-4 md:mx-32 md:mt-64 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    ),
  }
);

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <main className="flex-grow relative z-0">
      <MinedideesDetails slug={slug} />
    </main>
  );
}
