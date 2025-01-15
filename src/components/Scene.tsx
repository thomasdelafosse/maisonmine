import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Suspense } from "react";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";

type SceneProps = {
  modelPath: string;
};

export default function Scene({ modelPath }: SceneProps) {
  return (
    <Canvas camera={{ position: [8, 2, 2.5], fov: 8 }}>
      <ambientLight intensity={1} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 2.5}
      />
      <directionalLight position={[0, 5, 5]} intensity={4} />
      <Suspense fallback={null}>
        <Model modelPath={modelPath} />
      </Suspense>
      <Environment preset="sunset" />
      <ContactShadows
        position={[0, -0.8, 0]}
        opacity={1}
        scale={12}
        blur={30}
        resolution={512}
      />
    </Canvas>
  );
}
