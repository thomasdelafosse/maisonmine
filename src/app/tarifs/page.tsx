import TarifsContent from "@/components/features/tarifs/TarifsContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs | Maison Mine",
  description:
    "Consultez nos tarifs pour la restauration de sièges : chaises, fauteuils, canapés. Estimation coût couverture et réfection.",
};

export default async function Tarifs() {
  return <TarifsContent />;
}
