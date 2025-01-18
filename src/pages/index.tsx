import Link from "next/link";
import Navbar from "../components/navbar";
import Image from "next/image";
import Footer from "../components/footer";
import dynamic from "next/dynamic";

const ModelsSection = dynamic(() => import("@/components/ModelsSection"), {
  loading: () => <div className="h-[600px] md:h-[800px]"></div>,
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <Navbar />
      <ModelsSection />
      <div className="flex flex-col items-center mt-10 mx-4 md:flex-row md:justify-center md:mt-20 md:mx-32  ">
        <div className="md:flex-1/3 md:flex-shrink-0">
          <Image
            src="/images/moi.jpg"
            alt="savoirfaire"
            width={450}
            height={450}
            className="rounded-lg object-contain md:w-[200px] md:h-[250px] "
          />
        </div>
        <div className="flex flex-col text-1xl text-gray-500 font-light mr-4 md:ml-8 ">
          <div className="mt-4 border-l-2 border-gray-300 flex flex-col gap-2 pl-4 md:mt-0">
            <p>
              J'AVAIS À COEUR D'APPRENDRE LES TECHNIQUES ARTISANALES DE CE
              MÉTIER POUR RESTAURER DIFFÉRENTS STYLE DE SIÈGES DANS LES RÈGLES
              DE L'ART.
            </p>
            <p>
              AUSSI, MODESTEMENT, JE FAIS VIVRE CE MÉTIER D'ART EN REPRODUISANT
              AVEC ATTENTION ET MINUTIE LES GESTES ENSEIGNÉS, APPLICATION D'UN
              SAVOIR-FAIRE À L'ANCIENNE.
            </p>
            <p>
              JE PRIVILÉGIE UNE RÉFECTION TRADITIONNELLE EN ÉTANT ATTENTIVE AUX
              CHOIX DES MATÉRIAUX UTILISÉS; MATÉRIAUX NATURELS ET DE QUALITÉ,
              GAGE DE DURABILITÉ.
            </p>
            <p>
              MON LEITMOTIV C'EST PRENDRE LE TEMPS DE LA RÉFLEXION POUR REDONNER
              SON UTILITÉ À L'OBJET ET L'ADAPTER À SON NOUVEL ENVIRONNEMENT,
              PRENDRE LE TEMPS DE LA RESTAURATION ET AVOIR LA SATISFACTION D'UN
              TRAVAIL DE QUALITÉ À PARTAGER ET À TRANSMETTRE.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-10 mx-4 md:flex-row-reverse md:justify-center md:mt-20 md:mx-32 ">
        <div className="md:flex-1/3 md:flex-shrink-0">
          <Image
            src="/images/savoirfaire.jpeg"
            alt="test"
            width={450}
            height={450}
            className="rounded-lg object-contain md:w-[375px] md:h-[375px]"
          />
        </div>
        <div className="mt-4 border-l-2 border-gray-300 flex flex-col gap-4 pl-4 md:mr-8 md:border-r-2 md:border-l-0 md:pr-4">
          <Link href="/blogdetails/5db2fabea4e7efb593472b25">
            <h1 className=" flex gap-2 text-xl font-semibold text-black hover:text-red-900 group  p-2">
              METHODE TRADITIONNELLE OU MÉTHODE CONTEMPORAINE ?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 50 50"
                className="group-hover:text-red-900 mt-1 md:w-[20px] md:h-[20px] "
              >
                <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z"></path>
              </svg>
            </h1>
          </Link>
          <div className="flex flex-col gap-6 text-gray-500 ">
            <p className="mt-6">
              POUR MOI C'EST UNE ÉVIDENCE : JE DÉLAISSE LES COLLES, AGRAFES ET
              MOUSSE AU BÉNÉFICE DE MATÉRIAUX NATURELS ET DE QUALITÉ, GAGE DE
              DURABILITÉ. DURABILITÉ.
            </p>
            <p>
              + <u className="text-gray-800 ">SANGLES ET TOILES EN JUTE</u> : LE
              JUTE EST UNE PLANTE QUI NÉCESSITE PEU DE RESSOURCES POUR POUSSER,
              C'EST DONC UN MATÉRIAU ÉCOLOGIQUE;
            </p>
            <p>
              + <u className="text-gray-800">ÉLANCRIN</u> UTILISÉ POUR LA
              GARNITURE : FIBRES NATURELLES ISSUES DE LA BOURRE DE LA NOIX DE
              COCO;
            </p>
            <p>
              + <u className="text-gray-800">CRIN ANIMAL</u> (ISSU DE LA
              CRINIÈRE ET DE LA QUEUE DE CHEVAL) QUI APPORTE SOUPLESSE ET
              CONFORT À LA GARNITURE;
            </p>
            <p>
              + <u className="text-gray-800">TOILES BLANCHE 100% COTON</u>
            </p>
            <p>
              + <u className="text-gray-800">OUATE EN COTON</u> POUR LE
              REMBOURRAGE
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-10 mx-4 md:flex-row md:justify-center md:mt-20 md:mx-32  ">
        <div className="md:flex-1/3 ">
          <Image
            src="/images/methodtradi.png"
            alt="methodtradi"
            width={600}
            height={600}
            className="rounded-lg object-contain"
          />
        </div>
        <div className="flex flex-col mt-4 text-1xl text-gray-500 font-light border-l-2  border-gray-300 pl-4 md:m-8 ">
          <h1 className="text-xl font-semibold text-black">
            QUELLES SONT LES ÉTAPES DE RESTAURATION D'UN SIÈGE ?
          </h1>
          <div className="  flex flex-col gap-6 text-gray-500 ">
            <p className="mt-6">
              TOUTE RESTAURATION COMPORTE LES MÊMES ÉTAPES :
            </p>
            <p>
              + LE <u className="text-gray-800">DÉGARNISSAGE</u> ET LA{" "}
              <u className="text-gray-800">PRÉPARATION</u> DU BOIS DE LA
              CARCASSE, AVEC LES RÉPARATIONS QUI PEUVENT S'AVÉRER NÉCESSAIRES ET
              UNE NOUVELLE <u className="text-gray-800">PATINE</u>;
            </p>
            <p>
              + LE <u className="text-gray-800">SANGLAGE</u> AVEC DES SANGLES DE
              JUTE, QUI FORME LE FOND DU SIÈGE;
            </p>
            <p>
              + LE <u className="text-gray-800">GUINDAGE</u> (LA POSE DES
              RESSORTS COUSUS SUR LES SANGLES) ET LA POSE DE LA TOILE FORTE;
            </p>
            <p>
              + LA <u className="text-gray-800">MISE EN CRIN</u> ET LE PIQUAGE
              DES POINTS (POUR DONNER LA FORME À LA GARNITURE);
            </p>
            <p>
              + LA <u className="text-gray-800">MISE EN BLANC</u>, ÉTAPE QUI
              PERMET D'APPORTER DU CONFORT PUISQU'UNE FINE COUCHE DE CRIN ANIMAL
              EST AJOUTÉE AVANT DE LA RECOUVRIR PAR UNE TOILE BLANCHE ET UNE
              COUCHE DE OUATE COTON;
            </p>
            <p>
              + LA <u className="text-gray-800">COUVERTURE</u> AVEC LA POSE DU
              TISSU;
            </p>
            <p>
              + LES <u className="text-gray-800">FINITIONS</u>.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-evenly mt-6 gap-4 mx-4 md:mx-32 font-light mb-6">
        <Link href="/cotesiege">
          <button className="w-full px-2 py-2 bg-white text-gray-500 rounded-lg text-base md:text-lg hover:bg-gray-200 border-2 border-gray-400">
            DÉCOUVRIR LE CÔTÉ SIÈGE
          </button>
        </Link>
        <Link href="/cotemeuble">
          <button className="w-full px-2 py-2 bg-white text-gray-500 rounded-lg text-base md:text-lg hover:bg-gray-200 border-2 border-gray-400">
            DÉCOUVRIR LE CÔTÉ MEUBLE
          </button>
        </Link>
      </div>

      <div className="flex flex-col  mt-10 mx-4 md:flex-row-reverse md:justify-start md:mt-20 md:mx-32 ">
        <div className=" flex justify-center ">
          <Image
            src="/images/tamponmaisonmine.jpeg"
            alt="methodtradi"
            width={400}
            height={400}
            className="rounded-lg object-contain md:w-[300px] md:h-[300px]"
          />
        </div>
        <div className="flex flex-col mt-4 text-1xl text-gray-500 font-light">
          <div className="pl-4 border-l-2 md:border-l-0 md:border-r-2  md:border-gray-300 md:mx-8 md:px-8">
            <h1 className="text-xl font-semibold text-black">
              GERMINATION D'IDÉES : D'AUTRES SIÈGES SONT DISPONIBLES !
            </h1>
            <div className="flex flex-col gap-6 text-gray-500">
              <p className="mt-6">
                D'AUTRES SIÈGES ATTENDENT LEUR RÉNOVATION SELON MES
                INSPIRATIONS... OU LES VÔTRES. UN PROJET VOUS TENTE ?
                CONTACTEZ-MOI !
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center mt-10 gap-4 font-light mb-10">
            <Link href="/uneminedidees">
              <button className="h-fit px-2 py-2 bg-white text-gray-500 rounded-lg text-base md:text-lg hover:bg-gray-200 border-2 border-gray-400">
                DÉCOUVRIR LES MINES D'IDÉES
              </button>
            </Link>
            <Link href="/tarifs">
              <button className="h-fit px-2 py-2 bg-white text-gray-500 rounded-lg text-base md:text-lg hover:bg-gray-200 border-2 border-gray-400">
                LES TARIFS
              </button>
            </Link>
            <Link href="/contact">
              <button className="h-fit px-2 py-2 bg-white text-gray-500 rounded-lg text-base md:text-lg hover:bg-gray-200 border-2 border-gray-400">
                DEMANDER UN DEVIS
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
