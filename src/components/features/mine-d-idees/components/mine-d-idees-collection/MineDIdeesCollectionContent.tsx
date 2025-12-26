import MineDIdeesList from "./MineDIdeesList";
import {
  SANITY_QUERIES,
  VARIANT_STYLES,
} from "@/components/features/mine-d-idees/constants/mine-d-idees-constants";
import InfoIcon from "@/components/common/icons/InfoIcon";
import { MinedideesDocument } from "../../types/mine-d-idees-type";
import { client } from "@/sanity/client";
import { sortMinedidees } from "../../utils/sortMinedidees";

type MineDIdeesCollectionContentProps = {
  className?: string;
};

export default async function MineDIdeesCollectionContent({
  className = "",
}: MineDIdeesCollectionContentProps) {
  const items = await client.fetch<MinedideesDocument[]>(
    SANITY_QUERIES.MINEDIDEES_COLLECTION,
    {},
    { next: { revalidate: 60, tags: ["une-mine-d-idees"] } }
  );

  const sortedItems = sortMinedidees(items);

  return (
    <div className={`relative -z-50 ${className}`}>
      <MineDIdeesList
        items={sortedItems}
        className={VARIANT_STYLES.grid.container}
        imageClassName={VARIANT_STYLES.grid.image}
        nameClassName={VARIANT_STYLES.grid.title}
        showInnerText={true}
        innerDivClassName={VARIANT_STYLES.grid.hover}
        svgElement={<InfoIcon />}
      />
    </div>
  );
}
