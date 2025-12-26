import { SiegeHeader } from "@/components/features/siege/components/SiegeHeader";

export default function CoteSiegeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow relative z-0">
        <SiegeHeader />
        <div className="relative -z-50 mt-8">{children}</div>
      </main>
    </div>
  );
}
