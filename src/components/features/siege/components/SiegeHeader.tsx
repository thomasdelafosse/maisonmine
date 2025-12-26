import DescriptionBlock from "@/components/common/reusable-ui/text/DescriptionBlock";
import DescriptionBlockSkeleton from "@/components/common/reusable-ui/skeletons/DescriptionBlockSkeleton";
import { Suspense } from "react";

export function SiegeHeader() {
  return (
    <div className="flex flex-col gap-10 mx-4 md:mx-72">
      <div>
        <Suspense fallback={<DescriptionBlockSkeleton lines={4} />}>
          <DescriptionBlock showContactLink>
            Découvrez notre collection de sièges restaurés, prêts à embellir
            votre intérieur. Chaque pièce a été soigneusement retapissée selon
            les règles de l'art, en utilisant des matériaux nobles et des tissus
            sélectionnés avec soin. Ces sièges uniques n'attendent plus que de
            trouver leur place chez vous.
          </DescriptionBlock>
        </Suspense>
      </div>
    </div>
  );
}
