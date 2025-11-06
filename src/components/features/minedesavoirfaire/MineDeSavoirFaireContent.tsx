import Image from "next/image";
import DescriptionBlock from "@/components/common/reusable-ui/text/DescriptionBlock";
import { IMAGES_GALLERY } from "@/components/features/minedesavoirfaire/constants/images-gallery-constants";

export default function MineDeSavoirFaireContent() {
  return (
    <div className="flex-grow">
      <div className="flex flex-col gap-10 mx-4 md:mx-72">
        <div>
          <DescriptionBlock>
            Découvrez les résultats de notre savoir-faire artisanal à travers
            cette galerie d'images. De la restauration de fauteuils anciens à la
            création de pièces contemporaines, chaque projet reflète notre
            passion pour le respect des traditions. Nos réalisations témoignent
            d'un travail minutieux, où chaque détail est soigneusement pensé
            pour donner une seconde vie aux sièges tout en préservant leur
            caractère unique.
          </DescriptionBlock>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 auto-rows-[100px] xs:auto-rows-[120px] sm:auto-rows-[150px] md:auto-rows-[180px] lg:auto-rows-[200px]">
          {IMAGES_GALLERY.map((image) => (
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
      </div>
    </div>
  );
}
