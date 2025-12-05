"use client";

import { MineDetailsProps } from "@/components/features/mine-d-idees/types/mine-d-idees-type";
import MineDIdeesList from "@/components/features/mine-d-idees/components/mine-d-idees-collection/MineDIdeesList";
import LoadingSpinner from "@/components/common/reusable-ui/loaders/LoadingSpinner";
import { useMinedideeDetails } from "@/components/features/mine-d-idees/hooks/useMinedideeDetails";
import { VARIANT_STYLES } from "@/components/features/mine-d-idees/constants/mine-d-idees-constants";
import IdeeImage from "./media/IdeeImage";
import IdeeInfo from "./content/IdeeInfo";

export default function MineDIdeesDetails({ slug }: MineDetailsProps) {
  const { minedidee, allMinedidees, loading, error } =
    useMinedideeDetails(slug);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!minedidee) {
    return <div>No minedidee found</div>;
  }

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
        items={allMinedidees}
        className={VARIANT_STYLES.footer.container}
        nameClassName={VARIANT_STYLES.footer.title}
        imageClassName={VARIANT_STYLES.footer.image}
        innerDivClassName={VARIANT_STYLES.footer.hover}
        showInnerText={false}
      />
    </>
  );
}
