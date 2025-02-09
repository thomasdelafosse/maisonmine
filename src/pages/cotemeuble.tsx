import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import dynamic from "next/dynamic";
import Link from "next/link";

const MeubleCollectionContent = dynamic(
  () => import("@/components/meublecollection/MeubleCollectionContent"),
  {
    loading: () => (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    ),
    ssr: false,
  }
);

export default function CoteMeuble() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow relative z-0">
        <div className="flex flex-col gap-10 mx-4 md:mx-72">
          <div>
            <p className="text-lg text-gray-700 border-l-2 border-gray-300 pl-4">
              L'atelier vous propose de sublimer vos meubles anciens grâce à
              notre expertise en restauration. Nous redonnons vie à vos pièces
              avec des patines soigneusement sélectionnées, respectant l'âme et
              l'histoire de chaque meuble. De la simple retouche à la
              transformation complète, nous mettons notre savoir-faire au
              service de vos trésors familiaux pour leur offrir une seconde
              jeunesse.
            </p>
            <p className="text-lg text-gray-700 mt-4 border-l-2 border-gray-300 pl-4">
              Disponibles à la vente, des pièces uniques dont certaines
              n'attendent que de trouver leur place dans votre intérieur.{" "}
              <Link
                href="/contact"
                className="text-gray-900 hover:text-gray-600 transition-colors"
              >
                Contactez-moi !
              </Link>
            </p>
          </div>
        </div>
        <div className="relative -z-50 mt-8">
          <MeubleCollectionContent />
        </div>
      </main>
      <Footer />
    </div>
  );
}
