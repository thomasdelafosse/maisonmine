import MineDeSavoirFaireContent from "@/components/features/minedesavoirfaire/MineDeSavoirFaireContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Une Mine de Savoir-Faire | Maison Mine",
  description:
    "Découvrez nos réalisations et notre savoir-faire en tapisserie d'ameublement. Une galerie de nos créations et restaurations.",
};

export default function UneMineDeSavoirFaire() {
  return <MineDeSavoirFaireContent />;
}
