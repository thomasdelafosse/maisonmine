import Image from "next/image";
import { TARIFS_ITEMS } from "@/components/features/tarifs/constants/tarif-constants";
import { TarifsItem } from "@/components/features/tarifs/types/tarif-types";

export default function TarifsGridContent() {
  return (
    <div className="mt-10 mx-4 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-10 md:mx-48">
      {TARIFS_ITEMS.map((item) => (
        <TarifsGridItem key={item.src} item={item} />
      ))}
    </div>
  );
}

function TarifsGridItem({ item }: { item: TarifsItem }) {
  return (
    <div className="text-center">
      <div className="border-2 border-dashed rounded-full p-8 border-gray-500 md:w-64 md:h-64 mx-auto ">
        <Image
          src={item.src}
          alt={item.alt}
          width={500}
          height={500}
          className="mx-auto rounded-full"
        />
      </div>
      <h2 className="mt-4 font-medium">{item.title}</h2>
      <div className="text-gray-500 leading-6">
        <p className="italic">{item.subtitle}</p>
        <p>Couverture: {item.coverage} €</p>
        <p className="mb-6">Réfection Traditionnelle: {item.refection} €</p>
      </div>
    </div>
  );
}
