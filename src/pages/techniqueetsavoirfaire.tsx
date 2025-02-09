import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

export default function TechniqueEtSavoirFaire() {
  const images = [
    {
      src: "/images/portfolio/accotoir.jpg",
      span: "row-span-2 md:row-span-3",
    },
    {
      src: "/images/portfolio/accotoir1.jpg",
      span: "row-span-1 sm:row-span-2",
    },
    {
      src: "/images/portfolio/accotoirCote.jpg",
      span: "row-span-1 sm:row-span-2",
    },
    {
      src: "/images/portfolio/moi1.jpg",
      span: "row-span-1 sm:row-span-2",
    },
    {
      src: "/images/portfolio/assise.png",
      span: "row-span-2 md:row-span-3",
    },
    {
      src: "/images/portfolio/assiseShabbyRembourure.png",
      span: "row-span-2 md:row-span-3",
    },
    {
      src: "/images/portfolio/atelier1.png",
      span: "row-span-2 sm:row-span-3 md:row-span-4",
    },
    {
      src: "/images/portfolio/atelier.png",
      span: "row-span-2 sm:row-span-3 md:row-span-4",
    },
    {
      src: "/images/portfolio/atelier2.png",
      span: "row-span-2 md:row-span-3",
    },
    {
      src: "/images/portfolio/cadre.png",
      span: "row-span-2 sm:row-span-3 md:row-span-4",
    },
    {
      src: "/images/portfolio/chaiseChat.png",
      span: "row-span-2 md:row-span-3",
    },
    {
      src: "/images/portfolio/coussinClubArtDeco.png",
      span: "row-span-2 md:row-span-3",
    },
    {
      src: "/images/portfolio/dossierShabbyDessous.png",
      span: "row-span-2 md:row-span-3",
    },
    {
      src: "/images/portfolio/dossierShabbyFace.png",
      span: "row-span-2 md:row-span-3",
    },
    {
      src: "/images/portfolio/dossierShabbyHaut.png",
      span: "row-span-2 md:row-span-3",
    },
    {
      src: "/images/portfolio/lampe.png",
      span: "row-span-1",
    },
    {
      src: "/images/portfolio/accotoirToileForte.jpg",
      span: "row-span-1 sm:row-span-2",
    },
    {
      src: "/images/portfolio/moi2.jpg",
      span: "row-span-2 md:row-span-3",
    },
    {
      src: "/images/portfolio/popotte.jpeg",
      span: "row-span-1 sm:row-span-2",
    },
    {
      src: "/images/portfolio/rembourageAccotoir.jpg",
      span: "row-span-1",
    },
    {
      src: "/images/portfolio/ressort.png",
      span: "row-span-1 sm:row-span-2",
    },
    {
      src: "/images/portfolio/semence.jpg",
      span: "row-span-2 sm:row-span-3",
    },
    {
      src: "/images/portfolio/methodtradi.png",
      span: "row-span-2 sm:row-span-3",
    },
    {
      src: "/images/portfolio/savoirfaire.jpeg",
      span: "row-span-1 sm:row-span-2",
    },
    {
      src: "/images/portfolio/tamponmaisonmine.jpeg",
      span: "row-span-1 sm:row-span-2",
    },
    {
      src: "/images/portfolio/etiquette.jpg",
      span: "row-span-1 sm:row-span-2",
    },

    {
      src: "/images/portfolio/toileDeJouy.png",
      span: "row-span-1 sm:row-span-1",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-2 sm:px-4 lg:px-6 py-8 sm:py-12">
        <div className="mb-8 sm:mb-16">
          <p className="text-lg sm:text-lg text-gray-700  max-w-3xl mx-auto border-l-2 border-gray-300 pl-4">
            Découvrez les résultats de notre savoir-faire artisanal à travers
            cette galerie d'images. De la restauration de fauteuils anciens à la
            création de pièces contemporaines, chaque projet reflète notre
            passion pour le respect des traditions. Nos réalisations témoignent
            d'un travail minutieux, où chaque détail est soigneusement pensé
            pour donner une seconde vie aux sièges tout en préservant leur
            caractère unique.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 auto-rows-[100px] xs:auto-rows-[120px] sm:auto-rows-[150px] md:auto-rows-[180px] lg:auto-rows-[200px]">
          {images.map((image) => (
            <div
              key={image.src}
              className={`relative overflow-hidden rounded-lg shadow-lg ${image.span}`}
            >
              <Image
                src={image.src}
                alt={
                  image.src
                    .split("/")
                    .pop()
                    ?.replace(/\.[^/.]+$/, "")
                    .replace(/([A-Z])/g, " $1")
                    .trim() || ""
                }
                fill
                className="object-cover"
                sizes="(max-width: 640px) 33vw, (max-width: 768px) 33vw, (max-width: 1024px) 33vw, 33vw"
              />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
