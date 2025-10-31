"use client";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";

const SiegeDetailsContent = dynamic(
  () =>
    import("@/components/features/siege/components/SiegeDetails/siegeDetails"),
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
  const { slug } = useParams<{ slug: string }>();
  return (
    <main className="flex-grow">
      <SiegeDetailsContent slug={slug} />
    </main>
  );
}
