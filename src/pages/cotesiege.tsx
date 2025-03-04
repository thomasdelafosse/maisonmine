import React from "react";
import DescriptionBlock from "@/components/common/reusable-ui/text/DescriptionBlock";
import SiegeCollection from "@/features/siege/components/SiegeCollection/SiegeCollection";
import LoadingSpinner from "@/components/common/reusable-ui/loaders/LoadingSpinner";

export default function Cotesiege() {
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
          <React.Suspense fallback={<LoadingSpinner />}>
            <SiegeCollection />
          </React.Suspense>
        </div>
      </main>
    </div>
  );
}
