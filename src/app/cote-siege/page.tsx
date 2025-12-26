import type { Metadata } from "next";
import { SiegeList } from "@/components/features/siege/components/SiegeCollection/SiegeList";
import { Suspense } from "react";
import { SiegeListSkeleton } from "@/components/features/siege/components/SiegeCollection/SiegeListSkeleton";

export const metadata: Metadata = {
  title: "Côté Siège | Maison Mine",
  description:
    "Découvrez notre collection de sièges restaurés, prêts à embellir votre intérieur. Chaque pièce a été soigneusement retapissée selon les règles de l'art.",
};

export default function Cotesiege() {
  return (
    <Suspense fallback={<SiegeListSkeleton />}>
      <SiegeList />
    </Suspense>
  );
}
