import { ModelId } from "@/components/3d/types/modelsType";
import { Button } from "@/components/common/reusable-ui/buttons";

type ModelControlsProps = {
  isRotating: boolean;
  setIsRotating: (rotating: boolean) => void;
  resetView: () => void;
  changeView: (view: "top" | "side") => void;
  focusOnModel: (modelId: ModelId) => void;
  navigateModel: (direction: "left" | "right") => void;
};

export default function ModelControls({
  isRotating,
  setIsRotating,
  navigateModel,
}: ModelControlsProps) {
  const LeftArrowIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );

  const RightArrowIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );

  const PauseIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="6" y="5" width="4" height="16" rx="1" />
      <rect x="14" y="5" width="4" height="16" rx="1" />
    </svg>
  );

  const PlayIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M16.6582 9.28638C18.098 10.1862 18.8178 10.6361 19.0647 11.2122C19.2803 11.7152 19.2803 12.2847 19.0647 12.7878C18.8178 13.3638 18.098 13.8137 16.6582 14.7136L9.896 18.94C8.29805 19.9387 7.49907 20.4381 6.83973 20.385C6.26501 20.3388 5.73818 20.0469 5.3944 19.584C5 19.053 5 18.1108 5 16.2264V7.77357C5 5.88919 5 4.94701 5.3944 4.41598C5.73818 3.9531 6.26501 3.66111 6.83973 3.6149C7.49907 3.5619 8.29805 4.06126 9.896 5.05998L16.6582 9.28638Z" />
    </svg>
  );

  const commonButtonClasses = "bg-white/80 hover:bg-white/90 shadow-md";

  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-4 justify-center">
      <Button
        variant="ghost"
        onClick={() => navigateModel("left")}
        leftIcon={LeftArrowIcon}
        className={`md:hidden ${commonButtonClasses}`}
        aria-label="Modèle précédent"
      />
      <Button
        variant="ghost"
        onClick={() => setIsRotating(!isRotating)}
        leftIcon={isRotating ? PauseIcon : PlayIcon}
        className={commonButtonClasses}
        aria-label={
          isRotating ? "Arrêter la rotation" : "Reprendre la rotation"
        }
      />
      <Button
        variant="ghost"
        onClick={() => navigateModel("right")}
        leftIcon={RightArrowIcon}
        className={`md:hidden ${commonButtonClasses}`}
        aria-label="Modèle suivant"
      />
    </div>
  );
}
