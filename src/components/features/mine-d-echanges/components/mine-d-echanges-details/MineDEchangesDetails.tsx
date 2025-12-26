import { client } from "@/sanity/client";
import { SANITY_QUERIES } from "../../constants/mine-d-echanges-constants";
import { MinedechangesDocument } from "../../types/mine-d-echanges-type";
import MineDEchangesDetailsClient from "./MineDEchangesDetailsClient";
import { notFound } from "next/navigation";

export default async function MineDEchangesDetails({ slug }: { slug: string }) {
  const [minedechange, allMinedechanges] = await Promise.all([
    client.fetch<MinedechangesDocument>(SANITY_QUERIES.MINEDECHANGES_DETAILS, {
      slug,
    }),
    client.fetch<MinedechangesDocument[]>(
      SANITY_QUERIES.MINEDECHANGES_COLLECTION
    ),
  ]);

  if (!minedechange) {
    notFound();
  }

  return (
    <MineDEchangesDetailsClient
      minedechange={minedechange}
      allMinedechanges={allMinedechanges}
      activeSlug={slug}
    />
  );
}
