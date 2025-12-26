import type { Metadata } from "next";
import DescriptionBlock from "@/components/common/reusable-ui/text/DescriptionBlock";
import DescriptionBlockSkeleton from "@/components/common/reusable-ui/skeletons/DescriptionBlockSkeleton";
import { PAGE_CONTENT } from "@/components/features/mine-d-idees/constants/mine-d-idees-constants";
import MineDIdeesCollectionContent from "@/components/features/mine-d-idees/components/mine-d-idees-collection/MineDIdeesCollectionContent";
import { Suspense } from "react";
import { MineDIdeesListSkeleton } from "@/components/features/mine-d-idees/components/mine-d-idees-collection/MineDIdeesListSkeleton";

export const metadata: Metadata = {
  title: "Une Mine d'Idées | Maison Mine",
  description:
    "Découvrez nos sièges à rénover et personnaliser. Une mine d'idées pour créer des pièces uniques adaptées à votre intérieur.",
};

export default function UneMineDIdees() {
  return (
    <main className="flex-grow relative z-0">
      <div className="mx-4 md:mx-36">
        <Suspense fallback={<DescriptionBlockSkeleton />}>
          <DescriptionBlock>{PAGE_CONTENT.DESCRIPTION_1}</DescriptionBlock>
          <DescriptionBlock className="mt-4" showContactLink>
            {PAGE_CONTENT.DESCRIPTION_2}
          </DescriptionBlock>
        </Suspense>
      </div>
      <Suspense fallback={<MineDIdeesListSkeleton />}>
        <MineDIdeesCollectionContent className="mt-8" />
      </Suspense>
    </main>
  );
}
