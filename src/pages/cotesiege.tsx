import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import dynamic from "next/dynamic";
import Link from "next/link";

const SiegeCollectionContent = dynamic(
  () => import("@/components/siegecollection/SiegeCollectionContent"),
  {
    loading: () => (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    ),
    ssr: false,
  }
);

export default function Cotesiege() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow relative z-0">
        <div className="flex flex-col gap-10 mx-4 md:mx-72">
          <div>
            <p className="text-lg text-gray-700 border-l-2 border-gray-300 pl-4">
              Découvrez notre collection de sièges restaurés, prêts à embellir
              votre intérieur. Chaque pièce a été soigneusement retapissée selon
              les règles de l'art, en utilisant des matériaux nobles et des
              tissus sélectionnés avec soin. Ces sièges uniques n'attendent plus
              que de trouver leur place chez vous.
              <Link
                href="/contact"
                className="text-gray-900 hover:text-gray-600  transition-colors"
              >
                {" "}
                Contactez-moi !
              </Link>
            </p>
          </div>
        </div>
        <div className="relative -z-50 mt-8">
          <SiegeCollectionContent />
        </div>
      </main>
      <Footer />
    </div>
  );
}
