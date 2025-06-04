import Image from "next/image";
import { SanityImage } from "@/components/features/meuble/types/meubleType";

type MeubleImageType = {
  image: SanityImage;
  title: string;
  className?: string;
};

const MeubleImage = ({ image, title, className }: MeubleImageType) => {
  return (
    <Image
      src={image.asset.url}
      alt={image.alt || title}
      width={500}
      height={500}
      className={className}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
};

export default MeubleImage;
