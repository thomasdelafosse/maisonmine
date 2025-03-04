import {
  Vector3,
  ViewPositions,
  ModelId,
} from "@/components/3d/types/modelsType";

export const MODEL_POSITIONS: Record<ModelId, Vector3> = {
  chaisechably: [0, 0, 0],
  chaiseZebre: [-1.5, 0, 0],
  clubArtDeco: [1.5, 0, 0],
};

export const DEFAULT_CAMERA = {
  position: [0, 1, 10] as Vector3,
  target: [0, 0, 0] as Vector3,
};

export const VIEW_POSITIONS: ViewPositions = {
  front: {
    position: [0, 1, 6],
    target: [0, 0, 0],
  },
  top: {
    position: [0, 10, 0],
    target: [0, 0, 0],
  },
  side: {
    position: [10, 1, 0],
    target: [0, 0, 0],
  },
};
