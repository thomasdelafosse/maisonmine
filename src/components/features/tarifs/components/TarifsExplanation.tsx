import DescriptionBlock from "@/components/common/reusable-ui/text/DescriptionBlock";

export default function TarifsExplanation() {
  return (
    <div className="mx-4 md:mx-32 mt-2">
      <DescriptionBlock>
        Le prix de réfection d'un siège dépend de nombreux paramètres. Il dépend
        de son style, de son état, des matériaux utilisés et bien évidemment du
        temps nécessaire pour le réaliser. Le temps de travail peut varier
        sensiblement selon le type de fauteuil (de proportions différentes selon
        les époques et les styles) le travail se réalise avec un type
        particulier de garnitures ainsi qu'un nombre de points de couture
        spécifique : ces différents facteurs sont pris en compte lors de la
        préparation du devis.
      </DescriptionBlock>

      <DescriptionBlock className="mt-6">
        Pour proposer un service adapté, il est nécessaire d'évaluer le siège et
        d'échanger sur votre projet avant de formaliser un devis.
      </DescriptionBlock>

      <DescriptionBlock className="mt-6">
        <div className="flex flex-col">
          Ces tarifs incluent les fournitures et s'entendent :
          <span>
            - <span className="text-gray-800">hors tissu</span> et{" "}
            <span className="text-gray-800">finition</span> (clous ou
            passementeries)
          </span>
          <span>
            -{" "}
            <span className="text-gray-800">
              travaux nécessaires sur les bois
            </span>{" "}
            (tels que recollage, décapage, finitions etc…)
          </span>
        </div>
      </DescriptionBlock>

      <DescriptionBlock className="mt-6 italic">
        Note : TVA non applicable en vertu de l'article 293 B du CGI.
      </DescriptionBlock>

      <DescriptionBlock className="mt-6">
        L'atelier ne travaille qu'avec des tissus qu'il fournit. Si vous
        fournissez le tissu ces tarifs font l'objet d'une majoration de 20%.
        L'atelier ne sera pas tenu pour responsable de la tenue dans le temps du
        tissu suivant les conditions générales de vente.
      </DescriptionBlock>

      <DescriptionBlock className="mt-6 text-sm space-y-4">
        <p>
          <span className="text-gray-800">Couverture*:</span> Enlèvement de
          l'ancien tissu, pose du nouveau tissu en finition galonnée (finition
          cloutée sur devis).
        </p>
        <p>
          <span className="text-gray-800">
            Réfection complète traditionnelle**:
          </span>{" "}
          Réfection de l'ensemble du siège: assise, dossier et manchettes,
          remplacement des sangles, ressorts, garniture et pose du nouveau
          tissu.
        </p>
      </DescriptionBlock>
    </div>
  );
}
