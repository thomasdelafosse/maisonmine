import DescriptionBlock from "@/components/common/reusable-ui/text/DescriptionBlock";
import DescriptionBlockSkeleton from "@/components/common/reusable-ui/skeletons/DescriptionBlockSkeleton";
import MeubleCollectionContent from "@/components/features/meuble/components/MeubleCollectionContent";
import type { Metadata } from "next";
import { PAGE_CONTENT } from "@/components/features/meuble/constants/meuble-constants";

export const metadata: Metadata = {
  title: "Côté Meuble | Maison Mine",
  description:
    "Découvrez notre collection de meubles restaurés et nos services de restauration de mobilier ancien. Donnez une seconde vie à vos meubles.",
};

import { Suspense } from "react";
import { MeubleListSkeleton } from "@/components/features/meuble/components/MeubleCollection/MeubleListSkeleton";

export default async function CoteMeuble() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow relative z-0">
        <div className="flex flex-col gap-10 mx-4 md:mx-72">
          <div>
            <Suspense fallback={<DescriptionBlockSkeleton />}>
              <DescriptionBlock>{PAGE_CONTENT.DESCRIPTION_1}</DescriptionBlock>
              <DescriptionBlock className="mt-4" showContactLink>
                {PAGE_CONTENT.DESCRIPTION_2}
              </DescriptionBlock>
            </Suspense>
          </div>
        </div>
        <div className="relative -z-50 mt-8">
          <Suspense fallback={<MeubleListSkeleton />}>
            <MeubleCollectionContent />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
