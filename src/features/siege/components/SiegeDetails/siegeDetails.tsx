import DOMPurify from "dompurify";
import { PortableText } from "next-sanity";
import LoadingSpinner from "@/components/common/reusable-ui/loaders/LoadingSpinner";
import { SanityImage, ImageWithLegend } from "../../types/siegeType";
import { useSiegeDetails } from "../../hooks/useSiegeDetails";
import { ImageGallery } from "./components/ImageGallery";
import SiegeCollection from "../SiegeCollection/SiegeCollection";

type SiegeDetailsContentProps = {
  slug: string;
};

export default function SiegeDetailsContent({
  slug,
}: SiegeDetailsContentProps) {
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

  return (
    <div>
      <div className="md:flex md:mx-44 mx-4">
        <ImageGallery images={filteredImages} title={siege.title} />
        <div className="w-full md:w-2/3">
          <div className="flex flex-col mt-4 mx-4 md:ml-10 md:mr-36 md:mt-8">
            <div className="md:border-l-2 md:border-gray-300 md:pl-2">
              <div
                className="text-xl font-medium text-center md:text-left"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(siege.title),
                }}
              />
              {siege.body && (
                <div
                  style={{ fontSize: "20px", lineHeight: "24px" }}
                  className="text-xs mt-4 text-gray-500 font-light [&>p]:mb-4 last:[&>p]:mb-0"
                >
                  <PortableText value={siege.body} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="my-10 border-t-2 border-gray-300 mx-20 md:my-20 md:mx-36" />
      <SiegeCollection variant="footer" />
    </div>
  );
}
