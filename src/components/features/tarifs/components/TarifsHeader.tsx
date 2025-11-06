import DescriptionBlock from "@/components/common/reusable-ui/text/DescriptionBlock";

export default function TarifsHeader() {
  return (
    <div className="mx-4 md:mx-32">
      <h2 className="font-semibold text-center">ON PARLE DE VOTRE PROJET ?</h2>
      <DescriptionBlock className="mt-2">
        Pour vous permettre d'avoir une idée du budget à y consacrer voici, à
        titre indicatif, quelques exemples de tarifs pour une simple{" "}
        <span className="text-gray-800">couverture*</span> (changement du tissu)
        ou une réfection complète en méthode{" "}
        <span className="text-gray-800">traditionnelle**</span> (en crin végétal
        piqué sur ressorts).
      </DescriptionBlock>
    </div>
  );
}
