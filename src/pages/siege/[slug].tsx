import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const SiegeDetailsContent = dynamic(
  () => import("@/features/siege/components/SiegeDetails/siegeDetails"),
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
    <main className="flex-grow">
      {!router.isReady ? (
        <div className="flex justify-center items-center min-h-[50vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <SiegeDetailsContent slug={slug as string} />
      )}
    </main>
  );
}
