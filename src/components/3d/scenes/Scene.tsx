import { Canvas } from "@react-three/fiber";
import Model from "@/components/3d/models/Model";
import { Suspense, useEffect, useState } from "react";
import { OrbitControls } from "@react-three/drei";

type SceneType = {
  modelPath: string;
  onLoadingChange?: (loading: boolean) => void;
};

export default function Scene({ modelPath, onLoadingChange }: SceneType) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="cursor-pointer h-full w-full">
      <Canvas camera={{ position: [8, 2, 2.5], fov: 9 }}>
        <ambientLight intensity={4} />
        <OrbitControls
          enableZoom={false}
          enablePan={true}
          panSpeed={0.5}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 2.5}
          enableDamping={!isMobile}
          dampingFactor={0.1}
          rotateSpeed={0.5}
          minAzimuthAngle={-Math.PI / 0}
          maxAzimuthAngle={Math.PI / 0}
          screenSpacePanning={true}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={1}
        />
        <directionalLight position={[0, 5, 5]} intensity={4} />
        <Suspense fallback={null}>
          <Model modelPath={modelPath} onLoadingChange={onLoadingChange} />
        </Suspense>
      </Canvas>
    </div>
  );
}
