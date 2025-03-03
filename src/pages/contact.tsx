import Navbar from "@/components/common/layout/navigation/Navbar";
import Footer from "@/components/common/layout/footer/Footer";
import dynamic from "next/dynamic";

const ContactContent = dynamic(
  () => import("@/components/features/contact/ContactContent"),
  {
    loading: () => (
      <div className="flex justify-center mx-4">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    ),
  }
);

export default function Contact() {
  return (
    <div>
      <Navbar />
      <ContactContent />
      <Footer />
    </div>
  );
}
