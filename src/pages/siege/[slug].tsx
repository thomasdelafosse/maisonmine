import Navbar from "@/components/common/layout/navigation/Navbar";
import Footer from "@/components/common/layout/footer/Footer";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const SiegeDetailsContent = dynamic(
  () => import("@/components/features/details/siege/SiegeDetailsContent"),
  {
    loading: () => (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    ),
    ssr: false,
  }
);

export default function Page() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow ">
        {!router.isReady ? (
          <div className="flex justify-center items-center min-h-[50vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <SiegeDetailsContent slug={slug as string} />
        )}
      </main>
      <Footer />
    </div>
  );
}
