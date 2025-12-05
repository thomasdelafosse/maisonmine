import type { Metadata } from "next";
import { client } from "@/sanity/client";
import DescriptionBlock from "@/components/common/reusable-ui/text/DescriptionBlock";
import {
  PAGE_CONTENT,
  SANITY_QUERIES,
} from "@/components/features/mine-d-idees/constants/mine-d-idees-constants";
import MineDIdeesCollectionContent from "@/components/features/mine-d-idees/components/mine-d-idees-collection/MineDIdeesCollectionContent";
import { MinedideesDocument } from "@/components/features/mine-d-idees/types/mine-d-idees-type";
import { sortMinedidees } from "@/components/features/mine-d-idees/utils/sortMinedidees";

export const metadata: Metadata = {
  title: "Une Mine d'Idées | Maison Mine",
  description:
    "Découvrez nos sièges à rénover et personnaliser. Une mine d'idées pour créer des pièces uniques adaptées à votre intérieur.",
};

export default async function UneMineDIdees() {
  "use cache";
  const items = await client.fetch<MinedideesDocument[]>(
    SANITY_QUERIES.MINEDIDEES_COLLECTION,
    {},
    { next: { revalidate: 60, tags: ["une-mine-d-idees"] } }
  );

  const sortedItems = sortMinedidees(items);

  return (
    <main className="flex-grow relative z-0">
      <div className="mx-4 md:mx-36">
        <DescriptionBlock>{PAGE_CONTENT.DESCRIPTION_1}</DescriptionBlock>
        <DescriptionBlock className="mt-4" showContactLink>
          {PAGE_CONTENT.DESCRIPTION_2}
        </DescriptionBlock>
      </div>
      <MineDIdeesCollectionContent items={sortedItems} className="mt-8" />
    </main>
  );
}
