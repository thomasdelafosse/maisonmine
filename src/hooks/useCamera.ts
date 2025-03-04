import { useState } from "react";
import { Vector3, ModelId } from "@/components/3d/types/modelsType";
import {
  MODEL_POSITIONS,
  DEFAULT_CAMERA,
  VIEW_POSITIONS,
} from "@/constants/models";

export const useCamera = () => {
  const [cameraTarget, setCameraTarget] = useState<Vector3>(
    DEFAULT_CAMERA.target
  );
  const [cameraPosition, setCameraPosition] = useState<Vector3>(
    DEFAULT_CAMERA.position
  );
  const [key, setKey] = useState(0);
  const [isResetting, setIsResetting] = useState(false);

  const focusOnModel = (modelId: ModelId) => {
    const [x, y, z] = MODEL_POSITIONS[modelId];
    setCameraTarget([x, y, z]);
    setCameraPosition([x, 1, 6]);
  };

  const resetView = () => {
    setIsResetting(true);
    setTimeout(() => {
      setCameraTarget(DEFAULT_CAMERA.target);
      setCameraPosition(DEFAULT_CAMERA.position);
      setKey((prev) => prev + 1);
      setTimeout(() => {
        setIsResetting(false);
      }, 100);
    }, 100);
  };

  const changeView = (view: keyof typeof VIEW_POSITIONS) => {
    setIsResetting(true);
    setTimeout(() => {
      setCameraTarget(VIEW_POSITIONS[view].target);
      setCameraPosition(VIEW_POSITIONS[view].position);
      setKey((prev) => prev + 1);
      setTimeout(() => {
        setIsResetting(false);
      }, 100);
    }, 100);
  };

  return {
    cameraTarget,
    cameraPosition,
    key,
    isResetting,
    focusOnModel,
    resetView,
    changeView,
  };
};
