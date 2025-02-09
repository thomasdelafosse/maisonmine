import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import dynamic from "next/dynamic";
import Link from "next/link";

const MinedideesCollectionContent = dynamic(
  () => import("@/components/minedideescollection/MinedideesCollectionContent"),
  {
    loading: () => (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    ),
    ssr: false,
  }
);

export default function Uneminedidees() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow relative z-0">
        <div className="container mx-auto px-4 py-8">
          <p className="text-lg text-gray-700 mb-4  max-w-3xl mx-auto border-l-2 border-gray-300 pl-4">
            Nos sièges sont présentés dans leur jus ou avec leur structure mise
            à nue. Chaque carcasse peut être retapissée et personnalisée selon
            vos goûts pour correspondre parfaitement à vos préférences et à
            votre intérieur.
          </p>
          <p className="text-lg text-gray-700 mb-8 border-l-2 border-gray-300 pl-4  max-w-3xl mx-auto">
            D'autres sièges attendent leur rénovation selon mes inspirations...
            ou les vôtres. Un projet vous tente ?{" "}
            <Link href="/contact" className="text-gray-800 cursor-pointer">
              Contactez-moi !
            </Link>
          </p>
        </div>
        <MinedideesCollectionContent />
      </main>
      <Footer />
    </div>
  );
}
