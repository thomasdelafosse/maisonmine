import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

type ModelProps = {
  modelPath: string;
  onLoadingChange?: (loading: boolean) => void;
  position?: [number, number, number];
  isRotating?: boolean;
};

export default function Model({
  modelPath,
  onLoadingChange,
  position = [0, 0, 0],
  isRotating = true,
}: ModelProps) {
  const { scene } = useGLTF(modelPath);
  const groupRef = useRef<Group>(null);

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = -Math.PI / 2;
    }
  }, []);

  useFrame(() => {
    if (groupRef.current && isRotating) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  useEffect(() => {
    if (onLoadingChange) {
      onLoadingChange(false);
    }
  }, [onLoadingChange]);

  return (
    <group ref={groupRef} position={position}>
      <primitive object={scene} />
    </group>
  );
}
