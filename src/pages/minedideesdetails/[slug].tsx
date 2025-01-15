import Navbar from "@/components/navbar";
import { useItem } from "@/hooks/use-item";
import { useRouter } from "next/router";
import DOMPurify from "dompurify";
import Footer from "@/components/footer";
import MinedideesCollection from "@/components/minedideescollection";
import Scene from "@/components/Scene";

export default function Page() {
  const router = useRouter();
  const { slug } = router.query;

  if (!router.isReady || !slug) return <div>Loading...</div>;

  return <MineDetails slug={slug as string} />;
}

function getModelPath(itemId: string): string {
  const modelMap: { [key: string]: string } = {
    "6771fc37bb8eac98d7adaf65": "/chaise3D.glb",
    "6771fc37bb8eac98d7adaf66": "/chaisezèbre3D.glb",
    "677d7a7d91f5ec1586cc24e2": "/clubartdéco3D.glb",
    "677d7ab23a04a483eb61cb59": "/carcassemédaillon.glb",
  };

  // Default to carcasse médaillon if no match is found
  return modelMap[itemId] || "/chaise3D.glb";
}

function MineDetails({ slug }: { slug: string }) {
  const item = useItem(
    process.env.NEXT_PUBLIC_MINE_DIDEES_COLLECTION_ID || "",
    slug
  );

  if (!item) return <div>Loading...</div>;

  const mainImage = item.fieldData["thumbnail-image"];
  const modelPath = getModelPath(item.id);

  return (
    <div>
      <Navbar />
      <div className="mt-48 md:mt-64 md:flex  md:mx-44">
        <div className="w-full md:w-1/3">
          <h1>{item.name}</h1>
          {mainImage && (
            <div className="flex justify-center items-center relative rounded-lg h-[550px]">
              <Scene modelPath={modelPath} />
            </div>
          )}
        </div>
        <div className="w-full md:w-2/3 ">
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
      <Footer />
    </div>
  );
}
