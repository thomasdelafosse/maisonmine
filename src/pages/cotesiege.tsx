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
        <div className="container mx-auto px-4 py-8">
          <p className="text-lg text-gray-700 mb-4 max-w-3xl mx-auto border-l-2 border-gray-300 pl-4">
            Laissez-vous séduire par notre collection de sièges restaurés avec
            passion, des pièces uniques dont certaines n'attendent que de
            trouver leur place dans votre intérieur.
            <Link
              href="/contact"
              className="text-gray-900 hover:text-gray-600  transition-colors"
            >
              {" "}
              Contactez-moi !
            </Link>
          </p>
        </div>
        <SiegeCollectionContent />
      </main>
      <Footer />
    </div>
  );
}
