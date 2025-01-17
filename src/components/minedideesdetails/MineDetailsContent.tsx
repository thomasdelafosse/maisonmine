import { useItem } from "@/hooks/use-item";
import DOMPurify from "dompurify";
import MinedideesCollection from "@/components/minedideescollection";
import Scene from "@/components/Scene";

type MineDetailsContentProps = {
  slug: string;
};

const modelMap: { [key: string]: string } = {
  "bergere-medaillon": "/3Dmodels/3Dcarcassemedaillon.glb",
};

function getModelPath(slug: string): string {
  return modelMap[slug];
}

export default function MineDetailsContent({ slug }: MineDetailsContentProps) {
  const item = useItem(
    process.env.NEXT_PUBLIC_MINE_DIDEES_COLLECTION_ID || "",
    slug
  );

  if (!item) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  const mainImage = item.fieldData["thumbnail-image"];
  const modelPath = getModelPath(slug);

  return (
    <>
      <div className="md:flex md:mx-44">
        <div className="w-full md:w-1/3">
          <h1>{item.name}</h1>
          {mainImage && (
            <div className="flex justify-center items-center relative rounded-lg h-[550px]">
              {modelMap[slug] ? (
                <Scene modelPath={modelPath} />
              ) : (
                <img
                  src={mainImage.url}
                  alt={mainImage.alt || item.name}
                  className="object-contain w-full h-full rounded-lg"
                />
              )}
            </div>
          )}
        </div>
        <div className="w-full md:w-2/3">
          <div className="flex flex-col mt-4 mx-4 md:ml-10 md:mr-36 md:mt-10">
            <div className="md:border-l-2 md:border-gray-300 md:pl-2">
              {/* BOX TEXTE */}
              <div
                className="text-xl font-semibold text-center md:text-left"
                /* BOX NOM CHAISE */
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(item.fieldData["name"]),
                }}
              />
              <div
                style={{ fontSize: "20px", lineHeight: "24px" }}
                className="text-base mt-4 text-gray-500"
                /* BOX BLOG CONTENT */
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    item.fieldData["description"] || ""
                  ),
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 border-t-2 border-gray-300 mx-20 md:my-20 md:mx-36" />
      <MinedideesCollection
        collectionId={process.env.NEXT_PUBLIC_MINE_DIDEES_COLLECTION_ID || ""}
        className="mt-16 grid grid-cols-3 gap-4 mx-4 md:grid-cols-6 md:mx-28"
        nameClassName="font-light text-sm text-center"
        imageClassName="w-full rounded-lg"
        innerDivClassName="hidden"
        showInnerText={false}
        priceClassName="hidden"
      />
    </>
  );
}
