import { MineDetailsProps } from "@/components/features/mine-d-idees/types/mine-d-idees-type";
import MineDIdeesList from "@/components/features/mine-d-idees/components/mine-d-idees-collection/MineDIdeesList";
import { VARIANT_STYLES } from "@/components/features/mine-d-idees/constants/mine-d-idees-constants";
import IdeeImage from "./media/IdeeImage";
import IdeeInfo from "./content/IdeeInfo";
import { client } from "@/sanity/client";
import {
  MinedideesData,
  MinedideesDocument,
} from "@/components/features/mine-d-idees/types/mine-d-idees-type";
import { SANITY_QUERIES } from "@/components/features/mine-d-idees/constants/mine-d-idees-constants";
import { sortMinedidees } from "../../utils/sortMinedidees";
import { notFound } from "next/navigation";

export default async function MineDIdeesDetails({ slug }: MineDetailsProps) {
  const [minedidee, allMinedidees] = await Promise.all([
    client.fetch<MinedideesData>(SANITY_QUERIES.MINEDIDEES_DETAILS, {
      slug,
    }),
    client.fetch<MinedideesDocument[]>(SANITY_QUERIES.MINEDIDEES_COLLECTION),
  ]);

  if (!minedidee) {
    notFound();
  }

  const sortedMinedidees = sortMinedidees(allMinedidees);

  return (
    <>
      <div className="md:flex md:mx-44">
        <div className="w-full md:w-1/3">
          <IdeeImage minedidee={minedidee} />
        </div>
        <div className="w-full md:w-2/3">
          <IdeeInfo minedidee={minedidee} />
        </div>
      </div>
      <div className="my-10 border-t-2 border-gray-300 mx-20 md:my-20 md:mx-36" />
      <MineDIdeesList
        items={sortedMinedidees}
        className={VARIANT_STYLES.footer.container}
        nameClassName={VARIANT_STYLES.footer.title}
        imageClassName={VARIANT_STYLES.footer.image}
        innerDivClassName={VARIANT_STYLES.footer.hover}
        showInnerText={false}
      />
    </>
  );
}
