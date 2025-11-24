import dynamic from "next/dynamic";
import type { Metadata } from "next";
import DescriptionBlock from "@/components/common/reusable-ui/text/DescriptionBlock";
import LoadingSpinner from "@/components/common/reusable-ui/loaders/LoadingSpinner";
import { PAGE_CONTENT } from "@/components/features/mine-d-idees/constants/mine-d-idees-constants";

const MineDIdeesCollectionContent = dynamic(
  () =>
    import(
      "@/components/features/mine-d-idees/components/mine-d-idees-collection/MineDIdeesCollectionContent"
    ),
  {
    loading: () => <LoadingSpinner />,
  }
);

export const metadata: Metadata = {
  title: "Une Mine d'Idées | Maison Mine",
  description:
    "Découvrez nos sièges à rénover et personnaliser. Une mine d'idées pour créer des pièces uniques adaptées à votre intérieur.",
};

export default async function UneMineDIdees() {
  return (
    <main className="flex-grow relative z-0">
      <div className="mx-4 md:mx-36">
        <DescriptionBlock>{PAGE_CONTENT.DESCRIPTION_1}</DescriptionBlock>
        <DescriptionBlock className="mt-4" showContactLink>
          {PAGE_CONTENT.DESCRIPTION_2}
        </DescriptionBlock>
      </div>
      <div className="relative -z-50 mt-8">
        <MineDIdeesCollectionContent />
      </div>
    </main>
  );
}
