import { useState, useEffect } from "react";
import ModelLoader from "@/components/common/reusable-ui/loaders/ModelLoader";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Model from "@/components/3d/models/Model";
import { Suspense } from "react";
import { useCamera } from "@/hooks/useCamera";
import { useTouchScroll } from "@/hooks/useTouchScroll";
import ModelControls from "@/components/3d/controls/ModelControls";
import { LoadingStates } from "@/components/3d/types/modelsType";

export default function ModelsSection() {
  const [loadingStates, setLoadingStates] = useState<LoadingStates>({
    chaisechably: true,
    chaiseZebre: true,
    clubArtDeco: true,
  });
  const [currentModelIndex, setCurrentModelIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isRotating, setIsRotating] = useState(true);

  const {
    cameraTarget,
    cameraPosition,
    key,
    isResetting,
    focusOnModel,
    resetView,
    changeView,
  } = useCamera();

  const models = ["chaiseZebre", "chaisechably", "clubArtDeco"];

  const navigateModel = (direction: "left" | "right") => {
    const newIndex =
      direction === "left"
        ? (currentModelIndex - 1 + models.length) % models.length
        : (currentModelIndex + 1) % models.length;
    setCurrentModelIndex(newIndex);
    focusOnModel(models[newIndex] as keyof LoadingStates);
  };

  useTouchScroll();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleLoadingChange =
    (model: keyof LoadingStates) => (loading: boolean) => {
      setLoadingStates((prev) => ({ ...prev, [model]: loading }));
    };

  const isLoading =
    Object.values(loadingStates).some((state) => state) || isResetting;

  return (
    <div className="relative h-[550px] md:h-[650px] w-full">
      {isLoading && (
        <div className="absolute inset-0 z-20 flex items-center justify-center ">
          <ModelLoader loading={true} />
        </div>
      )}

      <ModelControls
        isRotating={isRotating}
        setIsRotating={setIsRotating}
        resetView={resetView}
        changeView={changeView}
        focusOnModel={focusOnModel}
        navigateModel={navigateModel}
      />

      <div className="h-full w-full">
        <Canvas
          key={key}
          camera={{ position: cameraPosition, fov: 10 }}
          shadows
        >
          <ambientLight intensity={4} />
          <OrbitControls
            enableZoom={false}
            enablePan={true}
            panSpeed={0.3}
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2}
            enableDamping={!isMobile}
            dampingFactor={0.1}
            rotateSpeed={0.1}
            screenSpacePanning={true}
            enableRotate={false}
            autoRotate={false}
            target={cameraTarget}
            minAzimuthAngle={-Math.PI / 4}
            maxAzimuthAngle={Math.PI / 4}
            maxDistance={10}
            minDistance={2}
          />
          <Suspense fallback={null}>
            <group>
              <group position={[-1.5, 0, 0]}>
                <Model
                  modelPath="/3Dmodels/zebre.glb"
                  onLoadingChange={handleLoadingChange("chaiseZebre")}
                  position={[0, 0, -1]}
                  isRotating={isRotating}
                />
              </group>

              <group position={[0, 0, 0]}>
                <Model
                  modelPath="/3Dmodels/3Dchably.glb"
                  onLoadingChange={handleLoadingChange("chaisechably")}
                  position={[0, 0, 0]}
                  isRotating={isRotating}
                />
              </group>

              <group position={[1.5, 0, 0]}>
                <Model
                  modelPath="/3Dmodels/clubartdeco.glb"
                  onLoadingChange={handleLoadingChange("clubArtDeco")}
                  position={[0, 0, -0.5]}
                  isRotating={isRotating}
                />
              </group>
            </group>
          </Suspense>
          <Environment
            preset="warehouse"
            background={false}
            environmentIntensity={0.6}
          />
        </Canvas>
      </div>
    </div>
  );
}
