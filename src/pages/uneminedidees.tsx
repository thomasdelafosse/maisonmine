import React from "react";
import dynamic from "next/dynamic";
import DescriptionBlock from "@/components/common/reusable-ui/text/DescriptionBlock";
import LoadingSpinner from "@/components/common/reusable-ui/loaders/LoadingSpinner";

const MinedideesCollectionContent = dynamic(
  () =>
    import(
      "@/components/features/minedidees/components/MinedideesCollection/MinedideesCollectionContent"
    ),
  {
    loading: () => <LoadingSpinner />,
    ssr: false,
  }
);

export default function Uneminedidees() {
  return (
    <main className="flex-grow relative z-0">
      <div className="flex flex-col gap-10 mx-4 md:mx-72">
        <div>
          <DescriptionBlock>
            Nos sièges sont présentés dans leur jus ou avec leur structure mise
            à nue. Chaque carcasse peut être retapissée et personnalisée selon
            vos goûts pour correspondre parfaitement à vos préférences et à
            votre intérieur.
          </DescriptionBlock>
          <DescriptionBlock className="mt-4" showContactLink>
            D'autres sièges attendent leur rénovation selon mes inspirations...
            ou les vôtres. Un projet vous tente ?
          </DescriptionBlock>
        </div>
      </div>
      <div className="relative -z-50 mt-8">
        <MinedideesCollectionContent />
      </div>
    </main>
  );
}
