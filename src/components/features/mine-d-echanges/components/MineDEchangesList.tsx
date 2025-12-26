import { client } from "@/sanity/client";
import { SANITY_QUERIES } from "../constants/mine-d-echanges-constants";
import { MinedechangesDocument } from "../types/mine-d-echanges-type";
import MineDEchangesPreview from "./mine-d-echanges-preview/MineDEchangesPreview";

export default async function MineDEchangesList() {
  const items = await client.fetch<MinedechangesDocument[]>(
    SANITY_QUERIES.MINEDECHANGES_COLLECTION,
    {},
    { next: { revalidate: 60, tags: ["une-mine-d-echanges"] } }
  );

  return <MineDEchangesPreview items={items} showSummary limit={5} />;
}

