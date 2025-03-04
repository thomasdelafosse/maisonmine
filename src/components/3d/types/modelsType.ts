export type Vector3 = [number, number, number];

export type CameraView = {
  position: Vector3;
  target: Vector3;
};

export type ViewPositions = {
  front: CameraView;
  top: CameraView;
  side: CameraView;
};

export type ModelId = "chaisechably" | "chaiseZebre" | "clubArtDeco";

export type LoadingStates = {
  [key in ModelId]: boolean;
};
