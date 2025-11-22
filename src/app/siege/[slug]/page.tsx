import SiegeDetailsContent from "@/components/features/siege/components/SiegeDetails/siegeDetails";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <main className="flex-grow">
      <SiegeDetailsContent slug={slug} />
    </main>
  );
}
