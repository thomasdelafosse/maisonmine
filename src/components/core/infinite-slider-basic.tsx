import { InfiniteSlider } from "@/components/core/infinite-slider";

export function InfiniteSliderBasic() {
  return (
    <InfiniteSlider gap={30} reverse className="w-full h-9 ">
      <div className="h-auto w-auto flex items-center justify-center py-3 px-6 text-xl font-medium whitespace-nowrap">
        Nouvelle création
      </div>
      <div className="h-auto w-auto flex items-center justify-center py-3 px-6 text-xl font-medium whitespace-nowrap">
        Nouvelle création
      </div>
      <div className="h-auto w-auto flex items-center justify-center py-3 px-6 text-xl font-medium whitespace-nowrap">
        Nouvelle création
      </div>
      <div className="h-auto w-auto flex items-center justify-center py-3 px-6 text-xl font-medium whitespace-nowrap">
        Nouvelle création
      </div>
      <div className="h-auto w-auto flex items-center justify-center py-3 px-6 text-xl font-medium whitespace-nowrap">
        Nouvelle création
      </div>
      <div className="h-auto w-auto flex items-center justify-center py-3 px-6 text-xl font-medium whitespace-nowrap">
        Nouvelle création
      </div>
      <div className="h-auto w-auto flex items-center justify-center py-3 px-6 text-xl font-medium whitespace-nowrap">
        Nouvelle création
      </div>
    </InfiniteSlider>
  );
}
