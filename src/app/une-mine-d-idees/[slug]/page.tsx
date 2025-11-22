import { client } from "@/sanity/client";
import { SANITY_QUERIES } from "@/components/features/mine-d-idees/constants/mine-d-idees-constants";
import MineDIdeesDetails from "@/components/features/mine-d-idees/components/mine-d-idees-details/MineDIdeesDetails";

export async function generateStaticParams() {
  const paths = await client.fetch<string[]>(SANITY_QUERIES.MINEDIDEES_SLUGS);
  return paths.map((slug) => ({ slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <main className="flex-grow relative z-0">
      <MineDIdeesDetails slug={slug} />
    </main>
  );
}
