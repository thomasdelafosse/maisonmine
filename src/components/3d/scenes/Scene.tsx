import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Model from "@/components/3d/models/Model";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Group } from "three";
import { PointOfInterest } from "@/components/features/siege/types/siegeType";

type SceneType = {
  modelPath: string;
  onLoadingChange?: (loading: boolean) => void;
  isRotating?: boolean;
  points?: PointOfInterest[];
};

interface Point {
  position: THREE.Vector3;
  element: HTMLElement | null;
}

type PointsOfInterestHandlerType = {
  modelRef: React.RefObject<Group | null>;
  points?: PointOfInterest[];
};

function PointsOfInterestHandler({
  modelRef,
  points = [],
}: PointsOfInterestHandlerType) {
  const { camera, size } = useThree();
  const raycaster = useMemo(() => new THREE.Raycaster(), []);

  const pointsRef = useRef<Point[]>([]);
  const raycastIndex = useRef(0);
  const lastRaycastTime = useRef(0);

  useEffect(() => {
    const newPoints: Point[] = points.map((p) => ({
      position: new THREE.Vector3(p.position.x, p.position.y, p.position.z),
      element: null,
    }));

    newPoints.forEach((point, index) => {
      const pointElement = document.querySelector(`.point-${index}`);
      if (pointElement instanceof HTMLElement) {
        point.element = pointElement;
      }
    });

    pointsRef.current = newPoints;
    raycastIndex.current = 0;
  }, [points]);

  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();

    if (
      pointsRef.current.length > 0 &&
      elapsedTime - lastRaycastTime.current > 0.1
    ) {
      const point = pointsRef.current[raycastIndex.current];

      if (modelRef.current && point.element) {
        const direction = point.position
          .clone()
          .sub(camera.position)
          .normalize();
        raycaster.set(camera.position, direction);

        const intersects = raycaster.intersectObject(modelRef.current, true);
        const isVisible =
          intersects.length === 0 ||
          intersects[0].distance > point.position.distanceTo(camera.position);

        point.element.style.display = isVisible ? "block" : "none";
      }

      raycastIndex.current =
        (raycastIndex.current + 1) % pointsRef.current.length;
      lastRaycastTime.current = elapsedTime;
    }

    for (const point of pointsRef.current) {
      if (point.element) {
        const screenPosition = point.position.clone().project(camera);
        const translateX = screenPosition.x * size.width * 0.5;
        const translateY = -screenPosition.y * size.height * 0.5;
        point.element.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`;
      }
    }
  });

  return null;
}

export default function Scene({
  modelPath,
  onLoadingChange,
  isRotating = false,
  points = [],
}: SceneType) {
  const [isMobile, setIsMobile] = useState(false);
  const modelRef = useRef<Group>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
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
          autoRotate={false}
          autoRotateSpeed={1}
        />
        <directionalLight position={[0, 5, 5]} intensity={4} />
        <Suspense fallback={null}>
          <Model
            ref={modelRef}
            modelPath={modelPath}
            onLoadingChange={onLoadingChange}
            isRotating={isRotating}
          />
        </Suspense>
        <PointsOfInterestHandler modelRef={modelRef} points={points} />
      </Canvas>
    </div>
  );
}
