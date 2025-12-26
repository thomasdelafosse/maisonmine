"use client";

import {
  SanityImage,
  ImageWithLegend,
  SiegeData,
} from "@/components/features/siege/types/siegeType";
import { ImageGallery } from "./components/ImageGallery";
import { SiegeListClient } from "@/components/features/siege/components/SiegeCollection/SiegeListClient";
import SiegeInfo from "./components/SiegeInfo/SiegeInfo";
import SiegeModelViewer from "./components/SiegeModelViewer/SiegeModelViewer";

type SiegeDetailsContentType = {
  siege: SiegeData;
  allSieges: SiegeData[];
};

export default function SiegeDetailsContent({
  siege,
  allSieges,
}: SiegeDetailsContentType) {
  const allImages = siege.imagesWithLegends
    ? [
        siege.image,
        ...siege.imagesWithLegends.map((img: ImageWithLegend) => ({
          asset: img.image.asset,
          alt: img.image.alt,
          legend: img.legend,
        })),
      ]
    : [siege.image];

  const filteredImages = allImages.filter(
    (img): img is SanityImage => !!img?.asset?.url
  );

  return (
    <div>
      <div className="md:flex md:mx-44 mx-4">
        <ImageGallery images={filteredImages} title={siege.title} />
        <div className="w-full md:w-2/3">
          <SiegeInfo siege={siege} />
        </div>
      </div>

      <SiegeModelViewer siege={siege} />

      <div className="my-10 border-t-2 border-gray-300 mx-20 md:my-20 md:mx-36" />
      <SiegeListClient items={allSieges} variant="footer" />
    </div>
  );
}
