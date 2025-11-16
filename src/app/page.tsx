import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/common/reusable-ui/buttons";
import { InfiniteSliderBasic } from "@/components/core/infinite-slider-basic";

export const metadata = {
  title: "Maison Mine - Restauration de sièges",
  description: "Maison Mine, restauration de sièges",
  openGraph: {
    title: "Maison Mine",
    description: "Maison Mine, restauration de sièges",
    images: ["/images/portfolio/moi2.jpg"],
  },
};

import ModelsSection from "./ModelsSectionClient";

export default async function Page() {
  "use cache";
  return (
    <>
      <InfiniteSliderBasic />
      <ModelsSection />

      <div className="flex flex-col items-center mt-10 mx-4 md:flex-row md:justify-center md:mt-20 md:mx-32">
        <div className="md:flex-1/3 md:flex-shrink-0">
          <Image
            src="/images/portfolio/moi2.jpg"
            alt="savoirfaire"
            width={450}
            height={450}
            className="rounded-lg object-cover w-full h-auto max-w-[500px] md:w-[250px] md:h-[333px]"
          />
        </div>
        <div className="flex flex-col text-base text-gray-500 font-light mr-4 md:ml-8 ">
          <div className="mt-4 border-l-2 border-gray-300 flex flex-col gap-2 pl-4 md:mt-0 ">
            <p>
              J'avais à coeur d'apprendre les techniques artisanales de ce
              métier pour restaurer différents style de sièges dans les règles
              de l'art.
            </p>
            <p>
              Aussi, modestement, je fais vivre ce métier d'art en reproduisant
              avec attention et minutie les gestes enseignés, application d'un
              savoir-faire à l'ancienne.
            </p>
            <p>
              Je privilégie une réfection traditionnelle en étant attentive aux
              choix des matériaux utilisés; matériaux naturels et de qualité,
              gage de durabilité.
            </p>
            <p>
              Mon leitmotiv c'est prendre le temps de la réflexion pour redonner
              son utilité à l'objet et l'adapter à son nouvel environnement,
              prendre le temps de la restauration et avoir la satisfaction d'un
              travail de qualité à partager et à transmettre.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-10 mx-4 md:flex-row-reverse md:justify-center md:mt-20 md:mx-32 ">
        <div className="md:flex-1/3 md:flex-shrink-0">
          <Image
            src="/images/portfolio/savoirfaire.jpeg"
            alt="test"
            width={450}
            height={450}
            className="rounded-lg object-contain md:w-[375px] md:h-[375px]"
          />
        </div>
        <div className="mt-4 border-l-2 border-gray-300 flex flex-col gap-4 pl-4 md:mr-8 md:border-r-2 md:border-l-0 md:pr-4">
          <Link href="/une-mine-d-echanges/un-savoir-faire">
            <h1 className="flex gap-2 text-base font-medium text-black hover:text-red-900 group p-2">
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
          <div className="flex flex-col gap-6 text-base text-gray-500">
            <p className="">
              Pour moi c'est une évidence : je délaisse les colles, agrafes et
              mousse au bénéfice de matériaux naturels et de qualité, gage de
              durabilité.
            </p>
            <p>
              + <span className="text-gray-800">Sangles et toiles en jute</span>{" "}
              : le jute est une plante qui nécessite peu de ressources pour
              pousser, c'est donc un matériau écologique;
            </p>
            <p>
              + <span className="text-gray-800">Élancrin</span> utilisé pour la
              garniture : fibres naturelles issues de la bourre de la noix de
              coco;
            </p>
            <p>
              + <span className="text-gray-800">Crin animal</span> (issu de la
              crinière et de la queue de cheval) qui apporte souplesse et
              confort à la garniture;
            </p>
            <p>
              + <span className="text-gray-800">Toiles blanche 100% coton</span>
            </p>
            <p>
              + <span className="text-gray-800">Ouate en coton</span> pour le
              rembourrage
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-10 mx-4 md:flex-row md:justify-center md:mt-20 md:mx-32  ">
        <div className="md:flex-1/3 ">
          <Image
            src="/images/portfolio/methodtradi.png"
            alt="methodtradi"
            width={600}
            height={600}
            className="rounded-lg object-contain"
          />
        </div>
        <div className="flex flex-col mt-4 text-base text-gray-500 font-light border-l-2 border-gray-300 pl-4 md:m-8">
          <h1 className="text-base font-medium text-black">
            QUELLES SONT LES ÉTAPES DE RESTAURATION D'UN SIÈGE ?
          </h1>
          <div className="flex flex-col gap-6 text-base text-gray-500">
            <p className="mt-6">
              Toute restauration comporte les mêmes étapes :
            </p>
            <p>
              + Le <span className="text-gray-800">dégarnissage</span> et la{" "}
              {""}
              <span className="text-gray-800">préparation</span> du bois de la
              carcasse, avec les réparations qui peuvent s'avérer nécessaires et
              une nouvelle
              <span className="text-gray-800">patine</span>;
            </p>
            <p>
              + Le <span className="text-gray-800">sanglage</span> avec des
              sangles de jute, qui forme le fond du siège;
            </p>
            <p>
              + Le <span className="text-gray-800">guindage</span> (la pose des
              ressorts cousus sur les sangles) et la pose de la toile forte;
            </p>
            <p>
              + La <span className="text-gray-800">mise en crin</span> et le
              piquage des points (pour donner la forme à la garniture);
            </p>
            <p>
              + La <span className="text-gray-800">mise en blanc</span>, étape
              qui permet d'apporter du confort puisqu'une fine couche de crin
              animal est ajoutée avant de la recouvrir par une toile blanche et
              une couche de ouate coton;
            </p>
            <p>
              + La <span className="text-gray-800">couverture</span> avec la
              pose du tissu;
            </p>
            <p>
              + Les <span className="text-gray-800">finitions</span>.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-evenly mt-6 gap-4 mx-4 md:mx-32 font-light mb-6">
        <Link href="/cotesiege">
          <Button variant="primary" size="lg">
            DÉCOUVRIR LE CÔTÉ SIÈGE
          </Button>
        </Link>
        <Link href="/cotemeuble">
          <Button variant="primary" size="lg">
            DÉCOUVRIR LE CÔTÉ MEUBLE
          </Button>
        </Link>
      </div>

      <div className="flex flex-col items-center mt-10 mx-4 md:flex-row md:mt-20 md:mx-32 rounded-lg md:p-6">
        <div className="order-2 md:order-1 md:w-2/3 flex flex-col mt-4 text-base text-gray-500 font-light">
          <div className="flex flex-col border-l-2 md:border-l-0 border-gray-300 pl-4 md:border-r-2 md:pr-8">
            <h1 className="text-base font-medium text-black">
              GERMINATION D'IDÉES : D'AUTRES SIÈGES SONT DISPONIBLES !
            </h1>
            <p className="mt-6">
              D'autres sièges attendent leur rénovation selon mes
              inspirations... ou les vôtres. Un projet vous tente ?
              Contactez-moi !
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row md:justify-evenly gap-4 font-light mt-10">
            <Link href="/uneminedidees">
              <Button variant="primary" size="lg">
                DÉCOUVRIR LES MINES D'IDÉES
              </Button>
            </Link>
            <Link href="/tarifs">
              <Button variant="primary" size="lg">
                LES TARIFS
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                DEMANDER UN DEVIS
              </Button>
            </Link>
          </div>
        </div>
        <div className="order-1 md:order-2 md:w-1/3 md:ml-8 w-full">
          <Image
            src="/images/portfolio/tamponmaisonmine.jpeg"
            alt="methodtradi"
            width={400}
            height={400}
            className="rounded-lg object-cover w-full h-[400px] md:w-[500px] md:h-[300px]"
          />
        </div>
      </div>
    </>
  );
}
