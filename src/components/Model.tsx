import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three";

useGLTF.preload("/chaise3D.glb");

type ModelProps = {
  modelPath: string;
};

export default function Model({ modelPath }: ModelProps) {
  const group = useRef<Group>(null);
  const { nodes, materials, scene } = useGLTF(modelPath);
  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}
