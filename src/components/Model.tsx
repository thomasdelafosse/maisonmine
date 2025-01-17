import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { Group } from "three";

type ModelProps = {
  modelPath: string;
  onLoadingChange?: (loading: boolean) => void;
};

export default function Model({ modelPath, onLoadingChange }: ModelProps) {
  const group = useRef<Group>(null);
  const { nodes, materials, scene } = useGLTF(modelPath);

  useEffect(() => {
    if (scene && onLoadingChange) {
      onLoadingChange(false);
    }
  }, [scene, onLoadingChange]);

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}
