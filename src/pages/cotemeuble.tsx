import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import dynamic from "next/dynamic";

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
      <main className="flex-grow mt-48 md:mt-64 relative z-0">
        <MeubleCollectionContent />
      </main>
      <Footer />
    </div>
  );
}
