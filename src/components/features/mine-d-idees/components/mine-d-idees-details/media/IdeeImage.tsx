"use client";

import Image from "next/image";
import { MinedideesData } from "@/components/features/mine-d-idees/types/mine-d-idees-type";

export default function IdeeImage({
  minedidee,
}: {
  minedidee: MinedideesData;
}) {
  if (!minedidee.image) return null;

  return (
    <div className="flex justify-center items-center relative rounded-lg h-[550px]">
      <Image
        src={minedidee.image.asset.url}
        alt={minedidee.image.alt || minedidee.title}
        fill
        className="object-contain rounded-lg"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
