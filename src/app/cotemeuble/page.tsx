"use client";
import dynamic from "next/dynamic";
import DescriptionBlock from "@/components/common/reusable-ui/text/DescriptionBlock";
import LoadingSpinner from "@/components/common/reusable-ui/loaders/LoadingSpinner";

const MeubleCollectionContent = dynamic(
  () =>
    import("@/components/features/meuble/components/MeubleCollectionContent"),
  {
    loading: () => <LoadingSpinner />,
    ssr: false,
  }
);

export default function CoteMeuble() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow relative z-0">
        <div className="flex flex-col gap-10 mx-4 md:mx-72">
          <div>
            <DescriptionBlock>
              L'atelier vous propose de sublimer vos meubles anciens grâce à
              notre expertise en restauration. Nous redonnons vie à vos pièces
              avec des patines soigneusement sélectionnées, respectant l'âme et
              l'histoire de chaque meuble. De la simple retouche à la
              transformation complète, nous mettons notre savoir-faire au
              service de vos trésors familiaux pour leur offrir une seconde
              jeunesse.
            </DescriptionBlock>
            <DescriptionBlock className="mt-4" showContactLink>
              Disponibles à la vente, des pièces uniques dont certaines
              n'attendent que de trouver leur place dans votre intérieur.
            </DescriptionBlock>
          </div>
        </div>
        <div className="relative -z-50 mt-8">
          <MeubleCollectionContent />
        </div>
      </main>
    </div>
  );
}
