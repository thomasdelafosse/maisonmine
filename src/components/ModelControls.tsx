import { ModelId } from "@/types/modelsType";

interface ModelControlsProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  isRotating: boolean;
  setIsRotating: (rotating: boolean) => void;
  resetView: () => void;
  changeView: (view: "top" | "side") => void;
  focusOnModel: (modelId: ModelId) => void;
}

export default function ModelControls({
  menuOpen,
  setMenuOpen,
  isRotating,
  setIsRotating,
  resetView,
  changeView,
  focusOnModel,
}: ModelControlsProps) {
  return (
    <>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="absolute top-4 right-4 z-30 bg-white/80 p-2 rounded-md hover:bg-white/90 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
        >
          <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
        </svg>
      </button>

      <div
        className={`absolute top-0 right-0 h-full w-64 bg-white/95 shadow-lg z-20 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 space-y-4">
          <div className="bg-white/80 p-2 rounded-md">
            <h3 className="text-sm font-semibold mb-2">
              Controle de la caméra
            </h3>
            <div className="flex flex-col gap-2">
              <button
                onClick={resetView}
                className="bg-white hover:bg-gray-100 px-4 py-2 rounded-md shadow-sm transition-colors w-full text-left"
              >
                Revenir à la vue par défaut
              </button>
              <button
                onClick={() => changeView("top")}
                className="bg-white hover:bg-gray-100 px-4 py-2 rounded-md shadow-sm transition-colors w-full text-left"
              >
                Vue du haut
              </button>
              <button
                onClick={() => changeView("side")}
                className="bg-white hover:bg-gray-100 px-4 py-2 rounded-md shadow-sm transition-colors w-full text-left"
              >
                Vue de côté
              </button>
            </div>
          </div>

          <div className="bg-white/80 p-2 rounded-md">
            <h3 className="text-sm font-semibold mb-2">Animation</h3>
            <button
              onClick={() => setIsRotating(!isRotating)}
              className="bg-white hover:bg-gray-100 px-4 py-2 rounded-md shadow-sm transition-colors w-full text-left"
            >
              {isRotating ? "Arrêter la rotation" : "Reprendre la rotation"}
            </button>
          </div>

          <div className="bg-white/80 p-2 rounded-md">
            <h3 className="text-sm font-semibold mb-2">Mise au point</h3>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => focusOnModel("chaiseZebre")}
                className="bg-white hover:bg-gray-100 px-4 py-2 rounded-md shadow-sm transition-colors w-full text-left"
              >
                Bergère médaillon zèbre
              </button>
              <button
                onClick={() => focusOnModel("chaisechably")}
                className="bg-white hover:bg-gray-100 px-4 py-2 rounded-md shadow-sm transition-colors w-full text-left"
              >
                Bergère chably
              </button>
              <button
                onClick={() => focusOnModel("clubArtDeco")}
                className="bg-white hover:bg-gray-100 px-4 py-2 rounded-md shadow-sm transition-colors w-full text-left"
              >
                Fauteuil Club Art Deco
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
