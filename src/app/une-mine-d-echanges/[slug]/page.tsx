import MineDEchangesDetails from "@/components/features/mine-d-echanges/components/mine-d-echanges-details/MineDEchangesDetails";
import { SANITY_QUERIES } from "@/components/features/mine-d-echanges/constants/mine-d-echanges-constants";
import { generateSanityMetadata } from "@/lib/metadata";
import { MinedechangesDocument } from "@/components/features/mine-d-echanges/types/mine-d-echanges-type";
import { client } from "@/sanity/client";
import type { Metadata } from "next";
import { Suspense } from "react";
import { MineDEchangesDetailsSkeleton } from "@/components/features/mine-d-echanges/components/mine-d-echanges-details/MineDEchangesDetailsSkeleton";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const blogs = await client.fetch<MinedechangesDocument[]>(
    SANITY_QUERIES.MINEDECHANGES_COLLECTION
  );
  return blogs.map((b) => ({ slug: b.slug.current }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return generateSanityMetadata({
    slug,
    query: SANITY_QUERIES.MINEDECHANGES_DETAILS,
    makeDescription: (data) =>
      data.blogSummaryBody ||
      `Découvrez ${data.title} dans notre rubrique Une Mine d'Échanges.`,
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return (
    <Suspense fallback={<MineDEchangesDetailsSkeleton />}>
      <MineDEchangesDetails slug={slug} />
    </Suspense>
  );
}
