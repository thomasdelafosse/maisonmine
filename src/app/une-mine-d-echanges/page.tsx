import { client } from "@/sanity/client";
import { SANITY_QUERIES } from "@/components/features/mine-d-echanges/constants/mine-d-echanges-constants";
import { MinedechangesDocument } from "@/components/features/mine-d-echanges/types/mine-d-echanges-type";
import MineDEchangesPreview from "@/components/features/mine-d-echanges/components/mine-d-echanges-preview/MineDEchangesPreview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Une Mine d'Échanges | Maison Mine",
  description:
    "Retrouvez nos articles, conseils et actualités sur la tapisserie d'ameublement et la rénovation de sièges.",
};

export default async function UneMineDEchanges() {
  "use cache";

  const items = await client.fetch<MinedechangesDocument[]>(
    SANITY_QUERIES.MINEDECHANGES_COLLECTION,
    {},
    { next: { revalidate: 60, tags: ["une-mine-d-echanges"] } }
  );

  return <MineDEchangesPreview items={items} showSummary limit={5} />;
}
