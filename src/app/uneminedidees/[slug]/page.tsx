import { client } from "@/sanity/client";
import { SANITY_QUERIES } from "@/components/features/minedidees/constants/minedideesConstants";
import MinedideesDetails from "@/components/features/minedidees/components/MinedideesDetails/MinedideesDetails";

export async function generateStaticParams() {
  const paths = await client.fetch<string[]>(SANITY_QUERIES.MINEDIDEES_SLUGS);
  return paths.map((slug) => ({ slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  "use cache";
  const { slug } = await params;
  return (
    <main className="flex-grow relative z-0">
      <MinedideesDetails slug={slug} />
    </main>
  );
}
