import { client } from "@/sanity/client";
import { SANITY_QUERIES } from "@/components/features/mine-d-echanges/constants/mine-d-echanges-constants";
import { MinedechangesDocument } from "@/components/features/mine-d-echanges/types/mine-d-echanges-type";
import MineDEchangesPreview from "@/components/features/mine-d-echanges/components/mine-d-echanges-preview/MineDEchangesPreview";

export default async function UneMineDEchanges() {
  "use cache";

  const items = await client.fetch<MinedechangesDocument[]>(
    SANITY_QUERIES.MINEDECHANGES_COLLECTION,
    {},
    { next: { revalidate: 60, tags: ["une-mine-d-echanges"] } }
  );

  return <MineDEchangesPreview items={items} showSummary limit={5} />;
}
