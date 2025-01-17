import { useState } from "react";
import Scene from "@/components/Scene";
import ModelLoader from "@/components/ModelLoader";

export default function ModelsSection() {
  const [loadingStates, setLoadingStates] = useState({
    chaisechably: true,
    chaiseZebre: true,
    clubArtDeco: true,
  });

  const handleLoadingChange =
    (model: keyof typeof loadingStates) => (loading: boolean) => {
      setLoadingStates((prev) => ({ ...prev, [model]: loading }));
    };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 md:mx-20">
        <div className="h-[600px] flex items-center justify-center relative">
          <ModelLoader loading={loadingStates.chaisechably} />
          <Scene
            modelPath="/3Dmodels/3Dchably.glb"
            onLoadingChange={handleLoadingChange("chaisechably")}
          />
        </div>
        <div className="h-[600px] flex items-center justify-center relative">
          <ModelLoader loading={loadingStates.chaiseZebre} />
          <Scene
            modelPath="/3Dmodels/3Dzebre.glb"
            onLoadingChange={handleLoadingChange("chaiseZebre")}
          />
        </div>
        <div className="h-[600px] flex items-center justify-center relative">
          <ModelLoader loading={loadingStates.clubArtDeco} />
          <Scene
            modelPath="/3Dmodels/clubartdeco3D.glb"
            onLoadingChange={handleLoadingChange("clubArtDeco")}
          />
        </div>
      </div>
    </div>
  );
}
