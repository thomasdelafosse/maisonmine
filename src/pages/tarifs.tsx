import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import dynamic from "next/dynamic";

const TarifsContent = dynamic(() => import("../components/TarifsContent"), {
  loading: () => (
    <div className="mt-48 mx-4 md:mx-32 md:mt-64 flex justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  ),
});

export default function Tarifs() {
  return (
    <div>
      <Navbar />
      <TarifsContent />
      <Footer />
    </div>
  );
}
