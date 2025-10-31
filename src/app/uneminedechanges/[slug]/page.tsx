import dynamic from "next/dynamic";
import { client } from "@/sanity/client";
import { SANITY_QUERIES } from "@/components/features/minedechanges/constants/minedechangesConstants";
import type { MinedechangesDocument } from "@/components/features/minedechanges/types/mineDechangesType";

export const revalidate = 60;
export const dynamicParams = false;

export async function generateStaticParams() {
  const blogs = await client.fetch<MinedechangesDocument[]>(
    SANITY_QUERIES.MINEDECHANGES_COLLECTION
  );
  return blogs.map((b) => ({ slug: b.slug.current }));
}

const MinedechangesDetails = dynamic(
  () =>
    import(
      "@/components/features/minedechanges/components/MinedechangesDetails/MinedechangesDetails"
    ),
  {
    loading: () => (
      <div className="flex justify-center items-center min-h-[50vh]">
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
    <main className="flex-grow">
      <MinedechangesDetails slug={slug} />
    </main>
  );
}
