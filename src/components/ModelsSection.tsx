import { useState, useEffect } from "react";
import Scene from "@/components/Scene";
import ModelLoader from "@/components/ModelLoader";

export default function ModelsSection() {
  const [loadingStates, setLoadingStates] = useState({
    chaisechably: true,
    chaiseZebre: true,
    clubArtDeco: true,
  });

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        const target = e.target as HTMLElement;
        if (target.closest("canvas")) {
          e.preventDefault();
          const touch = e.touches[0];
          const startY = touch.pageY;

          const handleTouchMove = (e: TouchEvent) => {
            const touch = e.touches[0];
            const deltaY = touch.pageY - startY;
            window.scrollBy(0, -deltaY);
          };

          document.addEventListener("touchmove", handleTouchMove, {
            passive: false,
          });
          document.addEventListener(
            "touchend",
            () => {
              document.removeEventListener("touchmove", handleTouchMove);
            },
            { once: true }
          );
        }
      }
    };

    document.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });
    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  const handleLoadingChange =
    (model: keyof typeof loadingStates) => (loading: boolean) => {
      setLoadingStates((prev) => ({ ...prev, [model]: loading }));
    };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="h-[600px] flex items-center justify-center">
        <ModelLoader loading={loadingStates.chaisechably} />
        <Scene
          modelPath="/3Dmodels/3Dchably.glb"
          onLoadingChange={handleLoadingChange("chaisechably")}
        />
      </div>
      <div className="h-[600px] flex items-center justify-center">
        <ModelLoader loading={loadingStates.chaiseZebre} />
        <Scene
          modelPath="/3Dmodels/3Dzebre.glb"
          onLoadingChange={handleLoadingChange("chaiseZebre")}
        />
      </div>
      <div className="h-[600px] flex items-center justify-center">
        <ModelLoader loading={loadingStates.clubArtDeco} />
        <Scene
          modelPath="/3Dmodels/clubartdeco3D.glb"
          onLoadingChange={handleLoadingChange("clubArtDeco")}
        />
      </div>
    </div>
  );
}
