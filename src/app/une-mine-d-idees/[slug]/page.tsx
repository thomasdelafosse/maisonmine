import { client } from "@/sanity/client";
import { SANITY_QUERIES } from "@/components/features/mine-d-idees/constants/mine-d-idees-constants";
import MineDIdeesDetails from "@/components/features/mine-d-idees/components/mine-d-idees-details/MineDIdeesDetails";
import { generateSanityMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const paths = await client.fetch<string[]>(SANITY_QUERIES.MINEDIDEES_SLUGS);
  return paths.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return generateSanityMetadata({
    slug,
    query: SANITY_QUERIES.MINEDIDEES_DETAILS,
    makeDescription: (data) =>
      `Découvrez ${data.title} dans notre collection Une Mine d'Idées.`,
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return (
    <main className="flex-grow relative z-0">
      <MineDIdeesDetails slug={slug} />
    </main>
  );
}
