import DOMPurify from "dompurify";
import { PortableText } from "next-sanity";
import LoadingSpinner from "@/components/common/reusable-ui/loaders/LoadingSpinner";
import {
  SanityImage,
  ImageWithLegend,
} from "@/components/features/siege/types/siegeType";
import { useSiegeDetails } from "@/components/features/siege/hooks/useSiegeDetails";
import { ImageGallery } from "./components/ImageGallery";
import SiegeCollection from "@/components/features/siege/components/SiegeCollection/SiegeCollection";
import Scene from "@/components/3d/scenes/Scene";

type SiegeDetailsContentType = {
  slug: string;
};

export default function SiegeDetailsContent({ slug }: SiegeDetailsContentType) {
  const { siege, loading } = useSiegeDetails(slug);

  if (!slug) {
    return null;
  }

  if (loading || !siege) {
    return <LoadingSpinner />;
  }

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

  let modelPathToDisplay: string | null = null;
  const modelFileFromSanity = siege.modelFile;

  // Try to access as an object with asset.url (primary, preferred case)
  if (
    modelFileFromSanity &&
    typeof modelFileFromSanity === "object" &&
    modelFileFromSanity.asset &&
    typeof modelFileFromSanity.asset.url === "string" &&
    modelFileFromSanity.asset.url
  ) {
    modelPathToDisplay = modelFileFromSanity.asset.url;
  }
  // Fallback: Check if it's a direct string ending in .glb
  else if (typeof modelFileFromSanity === "string") {
    if (modelFileFromSanity.endsWith(".glb")) {
      // .endsWith() should now work due to 'any' type
      console.warn(
        `[Deprecation Notice] modelFile for slug '${slug}' is a string ('${modelFileFromSanity}'). ` +
          `It should be a Sanity File object. Attempting to use as a local path.`
      );
      modelPathToDisplay = `/3Dmodels/${modelFileFromSanity}`;
    }
  }

  return (
    <div>
      <div className="md:flex md:mx-44 mx-4">
        <ImageGallery images={filteredImages} title={siege.title} />
        <div className="w-full md:w-2/3">
          <div className="flex flex-col mt-4 mx-4 md:ml-10 md:mr-20 ">
            <div className="md:border-l-2 md:border-gray-300 md:pl-6">
              <div
                className="text-4xl font-base text-gray-800 mb-6 text-center md:text-left tracking-tight"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(siege.title),
                }}
              />
              {siege.body && (
                <div className="text-lg leading-relaxed text-gray-700 mt-4 [&>p]:mb-6 last:[&>p]:mb-0">
                  <PortableText value={siege.body} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 3D Model Scene */}
      {modelPathToDisplay && (
        <div className="my-10 mx-auto h-[400px] md:h-[500px] max-w-screen-lg">
          <Scene modelPath={modelPathToDisplay} />
        </div>
      )}

      <div className="my-10 border-t-2 border-gray-300 mx-20 md:my-20 md:mx-36" />
      <SiegeCollection variant="footer" />
    </div>
  );
}
