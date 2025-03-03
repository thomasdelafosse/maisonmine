import React from "react";
import Navbar from "@/components/common/layout/navigation/Navbar";
import Footer from "@/components/common/layout/footer/Footer";
import dynamic from "next/dynamic";

const UneminedeChangesContent = dynamic(
  () =>
    import("@/components/features/uneminedechanges/UneminedeChangesContent"),
  {
    loading: () => (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    ),
    ssr: false,
  }
);

export default function UneminedeChangements() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <UneminedeChangesContent />
      </main>
      <Footer />
    </div>
  );
}
