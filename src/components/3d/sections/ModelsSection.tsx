import { useState, useEffect } from "react";
import ModelLoader from "@/components/common/reusable-ui/loaders/ModelLoader";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
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
    <div className="relative h-[550px] md:h-[700px] w-full">
      {isLoading && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-gray-100/80">
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
          <color attach="background" args={["#E5E5E5"]} />
          <ambientLight intensity={4} />
          <OrbitControls
            enableZoom={false}
            enablePan={true}
            panSpeed={0.3}
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2}
            enableDamping={!isMobile}
            dampingFactor={0.1}
            rotateSpeed={0.3}
            screenSpacePanning={true}
            enableRotate={false}
            autoRotate={false}
            target={cameraTarget}
            minAzimuthAngle={-Math.PI / 4}
            maxAzimuthAngle={Math.PI / 4}
            maxDistance={10}
            minDistance={2}
          />
          <directionalLight position={[0, 0, 5]} intensity={0.003} castShadow />
          <directionalLight
            position={[0, 0, -5]}
            intensity={0.003}
            castShadow
          />
          <directionalLight position={[0, 5, 0]} intensity={0.003} castShadow />
          <directionalLight
            position={[-5, 0, 0]}
            intensity={0.003}
            castShadow
          />
          <directionalLight position={[5, 0, 0]} intensity={0.003} castShadow />
          <Suspense fallback={null}>
            <group>
              <group position={[-1.5, 0, 0]}>
                <Model
                  modelPath="/3Dmodels/3Dzebre.glb"
                  onLoadingChange={handleLoadingChange("chaiseZebre")}
                  position={[0, 0, 0]}
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
                  modelPath="/3Dmodels/clubartdeco3D.glb"
                  onLoadingChange={handleLoadingChange("clubArtDeco")}
                  position={[0, 0, 0]}
                  isRotating={isRotating}
                />
              </group>
            </group>
          </Suspense>
          <Environment preset="sunset" background={false} />
          <ContactShadows
            position={[0, -0.6, 0]}
            opacity={0.4}
            scale={20}
            blur={2}
            far={4}
            resolution={512}
          />
        </Canvas>
      </div>
    </div>
  );
}
