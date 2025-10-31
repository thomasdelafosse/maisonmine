import { client } from "@/sanity/client";
import { SANITY_QUERIES } from "@/components/features/minedechanges/constants/minedechangesConstants";
import type { MinedechangesDocument } from "@/components/features/minedechanges/types/mineDechangesType";
import MinedechangesDetails from "@/components/features/minedechanges/components/MinedechangesDetails/MinedechangesDetails";

export async function generateStaticParams() {
  const blogs = await client.fetch<MinedechangesDocument[]>(
    SANITY_QUERIES.MINEDECHANGES_COLLECTION
  );
  return blogs.map((b) => ({ slug: b.slug.current }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  "use cache";
  const { slug } = await params;
  return (
    <main className="flex-grow">
      <MinedechangesDetails slug={slug} />
    </main>
  );
}
