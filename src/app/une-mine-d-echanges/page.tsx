import MineDEchangesList from "@/components/features/mine-d-echanges/components/MineDEchangesList";
import { MineDEchangesListSkeleton } from "@/components/features/mine-d-echanges/components/MineDEchangesListSkeleton";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Une Mine d'Échanges | Maison Mine",
  description:
    "Retrouvez nos articles, conseils et actualités sur la tapisserie d'ameublement et la rénovation de sièges.",
};

export default function UneMineDEchanges() {
  return (
    <Suspense fallback={<MineDEchangesListSkeleton />}>
      <MineDEchangesList />
    </Suspense>
  );
}
