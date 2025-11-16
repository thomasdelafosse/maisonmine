import MineDEchangesDetails from "@/components/features/mine-d-echanges/components/mine-d-echanges-details/MineDEchangesDetails";
import { SANITY_QUERIES } from "@/components/features/mine-d-echanges/constants/mine-d-echanges-constants";
import { MinedechangesDocument } from "@/components/features/mine-d-echanges/types/mine-d-echanges-type";
import { client } from "@/sanity/client";

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
  const { slug } = await params;
  return <MineDEchangesDetails slug={slug} />;
}
