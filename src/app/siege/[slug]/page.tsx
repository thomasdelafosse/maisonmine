"use client";
import LoadingSpinner from "@/components/common/reusable-ui/loaders/LoadingSpinner";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";

const SiegeDetailsContent = dynamic(
  () =>
    import("@/components/features/siege/components/SiegeDetails/siegeDetails"),
  {
    loading: () => <LoadingSpinner />,
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
