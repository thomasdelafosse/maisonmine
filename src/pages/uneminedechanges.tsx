import React from "react";
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
    <main className="flex-grow">
      <UneminedeChangesContent />
    </main>
  );
}
