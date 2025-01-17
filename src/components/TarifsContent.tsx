import Image from "next/image";

const items = [
  {
    src: "/images/chaiseTarif.png",
    alt: "chaise",
    title: "CHAISE",
    subtitle: "ASSISE SIMPLE",
    coverage: 190,
    refection: 350,
  },
  {
    src: "/images/fauteuilcabrioletTarif.png",
    alt: "fauteuil cabriolet",
    title: "FAUTEUIL CABRIOLET",
    subtitle: "SIÈGE AVEC DOSSIER ET ACCOTOIRS",
    coverage: 580,
    refection: 980,
  },
  {
    src: "/images/fauteuilcabrioletaveccoussinTarif.png",
    alt: "fauteuil cabriolet avec coussin",
    title: "FAUTEUIL CABRIOLET",
    subtitle: "AVEC COUSSIN",
    coverage: 750,
    refection: 1520,
  },
  {
    src: "/images/anglaisTarif.png",
    alt: "fauteuil anglais",
    title: "FAUTEUIL ANGLAIS",
    subtitle: "LARGE ASSISE CONFORTABLE",
    coverage: 920,
    refection: 1720,
  },
  {
    src: "/images/crapaudTarif.png",
    alt: "fauteuil crapaud",
    title: "FAUTEUIL CRAPAUD",
    subtitle: "FAUTEUIL À BOIS RECOUVERT",
    coverage: 920,
    refection: 1720,
  },
  {
    src: "/images/bergeremedailloncoussinTarif.png",
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
        <h2 className="font-semibold">ON PARLE DE VOTRE PROJET ?</h2>
        <div className="flex flex-col gap-6 text-gray-500 mt-2">
          <span>
            POUR VOUS PERMETTRE D'AVOIR UNE IDÉE DU BUDGET À Y CONSACRER VOICI,
            À TITRE INDICATIF, QUELQUES EXEMPLES DE TARIFS POUR UNE SIMPLE{" "}
            <u className="text-gray-800">COUVERTURE*</u> (CHANGEMENT DU TISSU)
            OU UNE RÉFECTION COMPLÈTE EN MÉTHODE{" "}
            <u className="text-gray-800">TRADITIONNELLE**</u> (EN CRIN VÉGÉTAL
            PIQUÉ SUR RESSORTS).
          </span>
          <p>
            <u className="text-gray-800">COUVERTURE:</u> ENLÈVEMENT DE L'ANCIEN
            TISSU, POSE DU NOUVEAU TISSU EN FINITION GALONNÉE (FINITION CLOUTÉE
            SUR DEVIS).
            <br />
            <u className="text-gray-800">
              RÉFECTION COMPLÈTE TRADITIONNELLE:
            </u>{" "}
            RÉFECTION DE L'ENSEMBLE DU SIÈGE: ASSISE, DOSSIER ET MANCHETTES,
            REMPLACEMENT DES SANGLES, RESSORTS, GARNITURE ET POSE DU NOUVEAU
            TISSU. NOTE : TVA NON APPLICABLE EN VERTU DE L'ARTICLE 293 B DU CGI.
          </p>
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
                className="mx-auto rounded-3xl "
              />
            </div>
            <h2 className="mt-4 font-bold">{item.title}</h2>
            <div className="text-gray-500">
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
        <div className="flex flex-col gap-6 text-gray-500">
          <p>
            LE PRIX DE RÉFECTION D'UN SIÈGE DÉPEND DE NOMBREUX PARAMÈTRES. IL
            DÉPEND DE SON STYLE, DE SON ÉTAT, DES MATÉRIAUX UTILISÉS ET BIEN
            ÉVIDEMMENT DU TEMPS NÉCESSAIRE POUR LE RÉALISER. LE TEMPS DE TRAVAIL
            PEUT VARIER SENSIBLEMENT SELON LE TYPE DE FAUTEUIL (DE PROPORTIONS
            DIFFÉRENTES SELON LES ÉPOQUES ET LES STYLES) LE TRAVAIL SE RÉALISE
            AVEC UN TYPE PARTICULIER DE GARNITURES AINSI QU'UN NOMBRE DE POINTS
            DE COUTURE SPÉCIFIQUE : CES DIFFÉRENTS FACTEURS SONT PRIS EN COMPTE
            LORS DE LA PRÉPARATION DU DEVIS.
          </p>
          <p>
            POUR PROPOSER UN SERVICE ADAPTÉ, IL EST NÉCESSAIRE D'ÉVALUER LE
            SIÈGE ET D'ÉCHANGER SUR VOTRE PROJET AVANT DE FORMALISER UN DEVIS.
          </p>
          <p>
            CES TARIFS INCLUENT LES FOURNITURES ET S'ENTENDENT : - HORS TISSU ET
            FINITION (CLOUS OU PASSEMENTERIES) - HORS TRAVAUX NÉCESSAIRES SUR
            LES BOIS (TELS QUE RECOLLAGE, DÉCAPAGE, FINITIONS ETC…)
          </p>
          <p>
            L'ATELIER NE TRAVAILLE QU'AVEC DES TISSUS QU'IL FOURNIT. SI VOUS
            FOURNISSEZ LE TISSU CES TARIFS FONT L'OBJET D'UNE MAJORATION DE 20%.
            L'ATELIER NE SERA PAS TENU POUR RESPONSABLE DE LA TENUE DANS LE
            TEMPS DU TISSU SUIVANT LES CONDITIONS GÉNÉRALES DE VENTE.
          </p>
        </div>
      </div>
    </>
  );
}
