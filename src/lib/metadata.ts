import { client } from "@/sanity/client";
import type { Metadata } from "next";

export interface GenerateMetadataProps {
  slug: string;
  query: string;
  makeTitle?: (title: string) => string;
  makeDescription?: (data: any) => string;
}

export async function generateSanityMetadata({
  slug,
  query,
  makeTitle = (title) => `${title} | Maison Mine`,
  makeDescription,
}: GenerateMetadataProps): Promise<Metadata> {
  // Ensure the fetch is cached so generateMetadata doesn't cause dynamic bailout
  const data = await client.fetch(
    query,
    { slug },
    { next: { revalidate: 3600 } }
  );

  if (!data) {
    return {
      title: "Article non trouvé | Maison Mine",
    };
  }

  return {
    title: makeTitle(data.title),
    description: makeDescription ? makeDescription(data) : undefined,
  };
}
