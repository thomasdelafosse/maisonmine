import React from "react";
import DescriptionBlock from "@/components/common/reusable-ui/text/DescriptionBlock";
import SiegeList from "@/components/features/siege/components/SiegeCollection/SiegeList";
import { client } from "@/sanity/client";
import { SANITY_QUERIES } from "@/components/features/siege/constants/siegeConstants";
import { sortSieges } from "@/components/features/siege/utils/sortSieges";
import { SiegeData } from "@/components/features/siege/types/siegeType";

export default async function Cotesiege() {
  "use cache";
  const items = await client.fetch<SiegeData[]>(
    SANITY_QUERIES.SIEGE_COLLECTION,
    {},
    { next: { revalidate: 60, tags: ["cotesiege"] } }
  );

  const sortedItems = sortSieges(items) as SiegeData[];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow relative z-0">
        <div className="flex flex-col gap-10 mx-4 md:mx-72">
          <div>
            <DescriptionBlock showContactLink>
              Découvrez notre collection de sièges restaurés, prêts à embellir
              votre intérieur. Chaque pièce a été soigneusement retapissée selon
              les règles de l'art, en utilisant des matériaux nobles et des
              tissus sélectionnés avec soin. Ces sièges uniques n'attendent plus
              que de trouver leur place chez vous.
            </DescriptionBlock>
          </div>
        </div>
        <div className="relative -z-50 mt-8">
          <SiegeList items={sortedItems} />
        </div>
      </main>
    </div>
  );
}
