import MineDIdeesList from "./MineDIdeesList";
import { VARIANT_STYLES } from "@/components/features/mine-d-idees/constants/mine-d-idees-constants";
import InfoIcon from "@/components/common/icons/InfoIcon";
import { MinedideesDocument } from "../../types/mine-d-idees-type";

type MineDIdeesCollectionContentProps = {
  items: MinedideesDocument[];
  className?: string;
};

export default function MineDIdeesCollectionContent({
  items,
  className = "",
}: MineDIdeesCollectionContentProps) {
  return (
    <div className={`relative -z-50 ${className}`}>
      <MineDIdeesList
        items={items}
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
