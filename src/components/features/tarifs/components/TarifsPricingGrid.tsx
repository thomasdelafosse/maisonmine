import { tarifItems } from "@/components/features/tarifs/data/tarifsItems";
import TarifsPricingItem from "@/components/features/tarifs/components/TarifsPricingItem";

export default function TarifsPricingGrid() {
  return (
    <div className="mt-10 mx-4 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-10 md:mx-48">
      {tarifItems.map((item, index) => (
        <TarifsPricingItem key={index} item={item} />
      ))}
    </div>
  );
}
