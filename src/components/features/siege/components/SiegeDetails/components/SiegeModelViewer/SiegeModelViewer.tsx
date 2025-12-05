import { SiegeData } from "@/components/features/siege/types/siegeType";
import Scene from "@/components/3d/scenes/Scene";

export default function SiegeModelViewer({ siege }: { siege: SiegeData }) {
  let modelPathToDisplay: string | null = null;
  const modelFileFromSanity = siege.modelFile;

  if (
    modelFileFromSanity &&
    typeof modelFileFromSanity === "object" &&
    modelFileFromSanity.asset &&
    typeof modelFileFromSanity.asset.url === "string" &&
    modelFileFromSanity.asset.url
  ) {
    modelPathToDisplay = modelFileFromSanity.asset.url;
  } else if (typeof modelFileFromSanity === "string") {
    if (modelFileFromSanity.endsWith(".glb")) {
      console.warn(
        `[Deprecation Notice] modelFile for slug '${siege.slug.current}' is a string ('${modelFileFromSanity}'). ` +
          `It should be a Sanity File object. Attempting to use as a local path.`
      );
      modelPathToDisplay = `/3Dmodels/${modelFileFromSanity}`;
    }
  }

  if (!modelPathToDisplay) return null;

  return (
    <div className="my-10 mx-auto h-[400px] md:h-[500px] max-w-screen-lg relative">
      {siege.pointsOfInterest &&
        siege.pointsOfInterest.map((point, index) => (
          <div
            key={index}
            className={`point point-${index} group absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col items-center transition-opacity duration-300 ease-in-out`}
            style={{ opacity: 1, visibility: "visible" }}
          >
            <div className="cursor-help w-8 h-8 flex items-center justify-center bg-slate-600 text-white rounded-full text-lg font-medium border-2 border-white shadow-lg transition-all duration-300 ease-in-out">
              {index + 1}
            </div>
            <div
              className="text absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max max-w-xs p-3 rounded-md bg-gray-600 bg-opacity-80 text-white text-center text-sm shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none"
              style={{ backdropFilter: "blur(2px)" }}
            >
              {point.text}
            </div>
          </div>
        ))}
      <Scene
        modelPath={modelPathToDisplay}
        points={siege.pointsOfInterest || []}
      />
    </div>
  );
}
