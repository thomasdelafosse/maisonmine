import { client } from "@/sanity/client";
import { SANITY_QUERIES } from "../constants/meuble-constants";
import { MeubleData } from "../types/meuble-types";
import MeubleCollection from "./MeubleCollection/MeubleCollection";
import { cn } from "@/lib/utils";

const sortMeubles = (meubles: MeubleData[]) => {
  return [...meubles].sort((a, b) => {
    const positionA = Number(a.position) || Infinity;
    const positionB = Number(b.position) || Infinity;
    return positionB - positionA;
  });
};

async function getMeubles() {
  const result = await client.fetch<MeubleData[]>(
    SANITY_QUERIES.MEUBLE_COLLECTION,
    {},
    {
      next: {
        revalidate: 3600,
        tags: ["cote-meuble"],
      },
    }
  );
  return sortMeubles(result);
}

export default async function MeubleCollectionContent() {
  const meubles = await getMeubles();

  return (
    <div className="relative -z-50">
      <MeubleCollection
        meubles={meubles}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 md:mx-36 mb-12"
        imageClassName={cn(
          "rounded-lg shadow-lg object-cover w-full h-full",
          "transition-all duration-500 group-hover:scale-[1.02]"
        )}
        nameClassName="text-1xl font-light text-gray-500 text-center mt-2"
        showInnerText={true}
        innerDivClassName={cn(
          "absolute inset-0 bg-white/80 text-black text-1xl text-center font-medium",
          "flex flex-col justify-center items-center transition-all duration-500 rounded-lg"
        )}
        priceClassName="text-1xl font-light text-gray-500 text-center mt-2"
      />
    </div>
  );
}
