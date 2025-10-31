import SiegeDetailsContent from "@/components/features/siege/components/SiegeDetails/siegeDetails";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  "use cache";
  const { slug } = await params;
  return (
    <main className="flex-grow">
      <SiegeDetailsContent slug={slug} />
    </main>
  );
}
