import Image from "next/image";

const items = [
  {
    src: "/images/tarifs/chaiseTarif.png",
    alt: "chaise",
    title: "CHAISE",
    subtitle: "ASSISE SIMPLE",
    coverage: 190,
    refection: 350,
  },
  {
    src: "/images/tarifs/cabrioletTarif.png",
    alt: "fauteuil cabriolet",
    title: "FAUTEUIL CABRIOLET",
    subtitle: "SIÈGE AVEC DOSSIER ET ACCOTOIRS",
    coverage: 580,
    refection: 980,
  },
  {
    src: "/images/tarifs/fauteuilcabrioletaveccoussinTarif.png",
    alt: "fauteuil cabriolet avec coussin",
    title: "FAUTEUIL CABRIOLET",
    subtitle: "AVEC COUSSIN",
    coverage: 750,
    refection: 1520,
  },
  {
    src: "/images/tarifs/anglaisTarif.png",
    alt: "fauteuil anglais",
    title: "FAUTEUIL ANGLAIS",
    subtitle: "LARGE ASSISE CONFORTABLE",
    coverage: 920,
    refection: 1720,
  },
  {
    src: "/images/tarifs/crapaudTarif.png",
    alt: "fauteuil crapaud",
    title: "FAUTEUIL CRAPAUD",
    subtitle: "FAUTEUIL À BOIS RECOUVERT",
    coverage: 920,
    refection: 1720,
  },
  {
    src: "/images/tarifs/bergeremedailloncoussinTarif.png",
    alt: "bergere médaillon",
    title: "BERGERE MÉDAILLON",
    subtitle: "ASSISE AVEC COUSSIN",
    coverage: 1020,
    refection: 2150,
  },
];

export default function TarifsContent() {
  return (
    <>
      <div className="mx-4 md:mx-32 border-l-2 border-gray-300 pl-3">
        <h2 className="font-medium">ON PARLE DE VOTRE PROJET ?</h2>
        <div className="flex flex-col gap-6 text-gray-500 mt-2 leading-6">
          <span>
            Pour vous permettre d'avoir une idée du budget à y consacrer voici,
            à titre indicatif, quelques exemples de tarifs pour une simple{" "}
            <span className="text-gray-800">couverture*</span> (changement du
            tissu) ou une réfection complète en méthode{" "}
            <span className="text-gray-800">traditionnelle**</span> (en crin
            végétal piqué sur ressorts).
          </span>
        </div>
      </div>

      <div className="mt-10 mx-4 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-10 md:mx-48">
        {items.map((item, index) => (
          <div key={index} className="text-center">
            <div className="border-2 border-dashed rounded-full p-8 border-gray-500 md:w-64 md:h-64 mx-auto ">
              <Image
                src={item.src}
                alt={item.alt}
                width={500}
                height={500}
                className="mx-auto rounded-full"
              />
            </div>
            <h2 className="mt-4 font-medium">{item.title}</h2>
            <div className="text-gray-500 leading-6">
              <p className="italic">{item.subtitle}</p>
              <p>Couverture: {item.coverage} €</p>
              <p className="mb-6 ">
                Réfection Traditionnelle: {item.refection} €
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className=" mx-4 md:mx-32 mt-2 border-l-2 border-gray-300 pl-3">
        <div className="flex flex-col gap-6 text-gray-500 leading-6">
          <p>
            Le prix de réfection d'un siège dépend de nombreux paramètres. Il
            dépend de son style, de son état, des matériaux utilisés et bien
            évidemment du temps nécessaire pour le réaliser. Le temps de travail
            peut varier sensiblement selon le type de fauteuil (de proportions
            différentes selon les époques et les styles) le travail se réalise
            avec un type particulier de garnitures ainsi qu'un nombre de points
            de couture spécifique : ces différents facteurs sont pris en compte
            lors de la préparation du devis.
          </p>
          <p>
            Pour proposer un service adapté, il est nécessaire d'évaluer le
            siège et d'échanger sur votre projet avant de formaliser un devis.
          </p>
          <p className="flex flex-col">
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
          </p>
          <p className="text-base italic">
            Note : TVA non applicable en vertu de l'article 293 B du CGI.
          </p>
          <p>
            L'atelier ne travaille qu'avec des tissus qu'il fournit. Si vous
            fournissez le tissu ces tarifs font l'objet d'une majoration de 20%.
            L'atelier ne sera pas tenu pour responsable de la tenue dans le
            temps du tissu suivant les conditions générales de vente.
          </p>
          <div className="text-sm space-y-4">
            <p>
              <span className="text-gray-800">Couverture*:</span> Enlèvement de
              l'ancien tissu, pose du nouveau tissu en finition galonnée
              (finition cloutée sur devis).
            </p>
            <p>
              <span className="text-gray-800">
                Réfection complète traditionnelle**:
              </span>{" "}
              Réfection de l'ensemble du siège: assise, dossier et manchettes,
              remplacement des sangles, ressorts, garniture et pose du nouveau
              tissu.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
