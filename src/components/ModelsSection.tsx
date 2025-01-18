import { useState, useEffect, useRef } from "react";
import ModelLoader from "@/components/ModelLoader";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import Model from "./Model";
import { Suspense } from "react";
import { useCamera } from "@/hooks/useCamera";
import { useTouchScroll } from "@/hooks/useTouchScroll";
import ModelControls from "./ModelControls";
import { LoadingStates } from "@/types/modelsType";

export default function ModelsSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loadingStates, setLoadingStates] = useState<LoadingStates>({
    chaisechably: true,
    chaiseZebre: true,
    clubArtDeco: true,
  });
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
    <div className="relative h-[650px] md:h-[700px] w-full">
      {isLoading && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-gray-100/80">
          <ModelLoader loading={true} />
        </div>
      )}

      <ModelControls
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        isRotating={isRotating}
        setIsRotating={setIsRotating}
        resetView={resetView}
        changeView={changeView}
        focusOnModel={focusOnModel}
      />

      <div className="cursor-pointer h-full w-full">
        <Canvas
          key={key}
          camera={{ position: cameraPosition, fov: 10 }}
          shadows
        >
          <color attach="background" args={["#E5E5E5"]} />
          <ambientLight intensity={0.3} />
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
            enableRotate={true}
            autoRotate={false}
            target={cameraTarget}
            minAzimuthAngle={-Math.PI / 4}
            maxAzimuthAngle={Math.PI / 4}
            maxDistance={10}
            minDistance={2}
          />
          <directionalLight position={[0, 10, 0]} intensity={0.4} castShadow />
          <Suspense fallback={null}>
            <group>
              <Model
                modelPath="/3Dmodels/3Dzebre.glb"
                onLoadingChange={handleLoadingChange("chaiseZebre")}
                position={[-1.5, 0, 0]}
                isRotating={isRotating}
              />
              <Model
                modelPath="/3Dmodels/3Dchably.glb"
                onLoadingChange={handleLoadingChange("chaisechably")}
                position={[0, 0, 0]}
                isRotating={isRotating}
              />
              <Model
                modelPath="/3Dmodels/clubartdeco3D.glb"
                onLoadingChange={handleLoadingChange("clubArtDeco")}
                position={[1.5, 0, 0]}
                isRotating={isRotating}
              />
            </group>
          </Suspense>
          <Environment preset="studio" background={false} />
          <ContactShadows
            position={[0, -0.6, 0]}
            opacity={0.75}
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
